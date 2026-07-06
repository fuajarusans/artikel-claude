<#
.SYNOPSIS
    Convert a pipeline-produced article .md to a styled .docx using pandoc.

.DESCRIPTION
    Reads a markdown file (optionally with YAML frontmatter, as produced by the writer/editor agents),
    renders the frontmatter as a metadata section at the top of the docx,
    embeds matching image files for each {IMAGE_NN: caption} placeholder,
    then runs pandoc with the project's reference docx for styling.

    Image embedding rule:
      For input file <brief-id>.<lang>.md, the script looks in the same folder for
      <brief-id>-NN.png|jpg|jpeg|webp matching each {IMAGE_NN: ...} placeholder.
      Found → embed via markdown image syntax (pandoc copies binary into docx).
      Not found → italic caption fallback [Image NN: caption].

.PARAMETER InputPath
    Absolute or project-relative path to the .md file.

.PARAMETER OutputPath
    Absolute or project-relative path to the .docx file to create.
    If omitted, replaces the .md extension with .docx in the same folder.

.PARAMETER ReferenceDoc
    Path to the pandoc reference docx. Defaults to tools\reference.docx.

.EXAMPLE
    .\tools\md-to-docx.ps1 -InputPath "monthly_runs\2026-05\final\pakan-ikan-nila-01.id.md"
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$InputPath,

    [Parameter(Position = 1)]
    [string]$OutputPath,

    [string]$ReferenceDoc
)

$ErrorActionPreference = "Stop"

# --- Resolve paths ---
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectRoot = Split-Path -Parent $scriptRoot

$pandocExe = Join-Path $scriptRoot "pandoc\pandoc-3.9.0.2\pandoc.exe"
if (-not (Test-Path $pandocExe)) {
    $found = Get-ChildItem -Path (Join-Path $scriptRoot "pandoc") -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($found) { $pandocExe = $found.FullName }
    else { throw "pandoc.exe not found under $scriptRoot\pandoc\. Re-run the pandoc install step." }
}

if (-not $ReferenceDoc) { $ReferenceDoc = Join-Path $scriptRoot "reference.docx" }
if (-not (Test-Path $ReferenceDoc)) {
    Write-Warning "Reference docx not found at $ReferenceDoc - proceeding without it."
    $ReferenceDoc = $null
}

if (-not (Test-Path $InputPath)) {
    $candidate = Join-Path $projectRoot $InputPath
    if (Test-Path $candidate) { $InputPath = $candidate } else { throw "Input file not found: $InputPath" }
}
$InputPath = (Resolve-Path $InputPath).Path

if (-not $OutputPath) { $OutputPath = [System.IO.Path]::ChangeExtension($InputPath, ".docx") }
if (-not [System.IO.Path]::IsPathRooted($OutputPath)) { $OutputPath = Join-Path $projectRoot $OutputPath }

# --- Derive brief_id from filename (strips .id.md, .en.md, or .md) ---
$mdFile = Get-Item $InputPath
$sourceDir = $mdFile.DirectoryName
$baseName = $mdFile.BaseName  # e.g. "pakan-ikan-nila-01.id"
$briefId = $baseName -replace '\.(id|en)$', ''  # "pakan-ikan-nila-01"

Write-Host "Input:     $InputPath"
Write-Host "Output:    $OutputPath"
Write-Host "Reference: $(if ($ReferenceDoc) { $ReferenceDoc } else { '(default)' })"
Write-Host "Brief ID:  $briefId"

# --- Read file ---
$raw = Get-Content -Path $InputPath -Raw -Encoding UTF8

# --- Split frontmatter and body ---
$frontmatterText = ""
$body = $raw
$fmMatch = [regex]::Match($raw, '^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n([\s\S]*)$')
if ($fmMatch.Success) {
    $frontmatterText = $fmMatch.Groups[1].Value
    $body = $fmMatch.Groups[2].Value
}

# --- Embed images: replace {IMAGE_NN: caption} with markdown image OR italic caption ---
$imagesEmbedded = 0
$imagesMissing = 0
$body = [regex]::Replace($body, '\{IMAGE_(\d+):\s*([^}]+)\}', {
    param($m)
    $num = $m.Groups[1].Value
    $caption = $m.Groups[2].Value.Trim()

    # Look for matching image file in sourceDir
    $extensions = @("png", "jpg", "jpeg", "webp")
    $found = $null
    foreach ($ext in $extensions) {
        $candidate = Join-Path $sourceDir "$briefId-$num.$ext"
        if (Test-Path $candidate) { $found = $candidate; break }
    }

    if ($found) {
        $script:imagesEmbedded++
        # Use markdown image syntax; pandoc embeds binary into docx
        # Forward slashes work cross-platform in pandoc; escape any spaces (unlikely but safe)
        $absPath = $found -replace '\\', '/'
        return "`n![${caption}]($absPath)`n"
    } else {
        $script:imagesMissing++
        return "`n*[Image ${num}: $caption]*`n"
    }
})

# --- Render frontmatter as a metadata section ---
$metaLines = New-Object System.Collections.Generic.List[string]
if ($frontmatterText.Trim().Length -gt 0) {
    $metaLines.Add("# Article Metadata")
    $metaLines.Add("")
    $metaLines.Add('```yaml')
    foreach ($line in ($frontmatterText -split "`r?`n")) {
        $metaLines.Add($line)
    }
    $metaLines.Add('```')
    $metaLines.Add("")
    $metaLines.Add("***")
    $metaLines.Add("")
}

$finalMarkdown = ($metaLines -join "`n") + $body

# --- Write to temp file (UTF-8 no BOM) ---
$tempMd = [System.IO.Path]::GetTempFileName()
$tempMd = [System.IO.Path]::ChangeExtension($tempMd, ".md")
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($tempMd, $finalMarkdown, $utf8NoBom)

# --- Ensure output directory exists ---
$outDir = Split-Path -Parent $OutputPath
if ($outDir -and -not (Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

# --- Run pandoc ---
$pandocArgs = @(
    $tempMd,
    "--from=markdown+pipe_tables+grid_tables-yaml_metadata_block",
    "--to=docx",
    "--output=$OutputPath",
    "--standalone",
    "--resource-path=$sourceDir"
)
if ($ReferenceDoc) { $pandocArgs += "--reference-doc=$ReferenceDoc" }

& $pandocExe @pandocArgs
$exit = $LASTEXITCODE

Remove-Item $tempMd -Force -ErrorAction SilentlyContinue

if ($exit -ne 0) { throw "pandoc failed with exit code $exit" }

# --- Post-process: ensure a visible Hyperlink character style (blue + underline) ---
# pandoc tags links with the character style "Hyperlink"; if styles.xml doesn't define it,
# Word renders inline links as plain black text (invisible as links). Inject the style.
try {
    Add-Type -AssemblyName System.IO.Compression.FileSystem -ErrorAction SilentlyContinue
    $zipUpd = [System.IO.Compression.ZipFile]::Open($OutputPath, 'Update')
    $stylesEntry = $zipUpd.Entries | Where-Object { $_.FullName -eq 'word/styles.xml' } | Select-Object -First 1
    if ($stylesEntry) {
        $rdr = New-Object System.IO.StreamReader($stylesEntry.Open())
        $stylesXml = $rdr.ReadToEnd(); $rdr.Close()
        if ($stylesXml -notmatch 'w:styleId="Hyperlink"') {
            $hStyle = '<w:style w:type="character" w:styleId="Hyperlink"><w:name w:val="Hyperlink"/><w:rPr><w:color w:val="0563C1"/><w:u w:val="single"/></w:rPr></w:style>'
            $stylesXml = $stylesXml -replace '</w:styles>', ($hStyle + '</w:styles>')
            $wstream = $stylesEntry.Open()
            $wstream.SetLength(0)
            $wr = New-Object System.IO.StreamWriter($wstream, (New-Object System.Text.UTF8Encoding($false)))
            $wr.Write($stylesXml); $wr.Flush(); $wr.Close()
            Write-Host "Hyperlink style injected (inline links rendered blue + underlined)."
        }
    }
    $zipUpd.Dispose()
} catch {
    Write-Warning "Could not inject Hyperlink style: $($_.Exception.Message)"
}

$outFile = Get-Item $OutputPath
$kb = [Math]::Round($outFile.Length / 1KB, 1)
Write-Host "Wrote $kb KB to $($outFile.FullName)"
Write-Host "Images: $imagesEmbedded embedded, $imagesMissing missing (rendered as captions)"

# Machine-readable status line for callers
"STATUS=ok PATH=$($outFile.FullName) BYTES=$($outFile.Length) IMAGES_EMBEDDED=$imagesEmbedded IMAGES_MISSING=$imagesMissing"
