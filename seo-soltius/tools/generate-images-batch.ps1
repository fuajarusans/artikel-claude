<#
.SYNOPSIS
    Generate multiple images in parallel via OpenAI's gpt-image-1, using Start-Job for concurrency.

.DESCRIPTION
    Reads a JSON manifest describing N images (prompt, output path, size, quality, etc.),
    spawns a Start-Job per image (each job invokes tools/generate-image.ps1),
    waits for all to complete, and writes a JSON summary file with per-image status.

    Designed to be called by the aquaculture-image-generator agent for 3-image articles
    (~1.5-2 min total vs ~3-5 min sequential).

.PARAMETER ManifestPath
    Path to a JSON file with shape:
    [
      { "prompt": "...", "output_path": "...", "size": "1536x1024", "quality": "medium", "format": "png", "background": "auto" },
      ...
    ]
    All fields except "prompt" and "output_path" are optional and inherit defaults from generate-image.ps1.

.PARAMETER ResultsPath
    Path to write the JSON results file (one entry per image with status/bytes/error).
    If omitted, writes alongside the manifest as <manifest_basename>.results.json.

.PARAMETER MaxConcurrency
    Maximum number of jobs in flight at once. Default 3 (matches typical article image count).
    Increase carefully — image APIs have per-minute rate limits.

.PARAMETER Generator
    Which single-image helper to invoke per job. One of: flux (default, BFL FLUX, ~$0.025/img) or openai (gpt-image-1, ~$0.06–0.25/img).

.EXAMPLE
    .\tools\generate-images-batch.ps1 -ManifestPath "monthly_runs\2026-05\final\pakan-ikan-nila-01.manifest.json"

.EXAMPLE
    .\tools\generate-images-batch.ps1 -ManifestPath "...manifest.json" -Generator openai

.NOTES
    Each child job invokes the chosen helper script, which reads its API key from .env.
    Job processes are isolated; failure of one image does NOT stop the others.
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$ManifestPath,

    [Parameter(Position = 1)]
    [string]$ResultsPath,

    [int]$MaxConcurrency = 3,

    [ValidateSet("flux", "openai")]
    [string]$Generator = "flux"
)

$ErrorActionPreference = "Stop"

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectRoot = Split-Path -Parent $scriptRoot
$generateScript = if ($Generator -eq "flux") {
    Join-Path $scriptRoot "generate-image-flux.ps1"
} else {
    Join-Path $scriptRoot "generate-image.ps1"
}
if (-not (Test-Path $generateScript)) { throw "$Generator generator not found at $generateScript" }
Write-Host "Generator: $Generator ($generateScript)"

# Resolve manifest path
if (-not (Test-Path $ManifestPath)) {
    $candidate = Join-Path $projectRoot $ManifestPath
    if (Test-Path $candidate) { $ManifestPath = $candidate } else { throw "Manifest not found: $ManifestPath" }
}
$ManifestPath = (Resolve-Path $ManifestPath).Path

if (-not $ResultsPath) {
    $manifestDir = Split-Path -Parent $ManifestPath
    $manifestBase = [System.IO.Path]::GetFileNameWithoutExtension($ManifestPath)
    $ResultsPath = Join-Path $manifestDir "$manifestBase.results.json"
}

# Read manifest
$manifest = Get-Content $ManifestPath -Raw | ConvertFrom-Json
if ($manifest -isnot [array]) { $manifest = @($manifest) }
$totalImages = $manifest.Count

Write-Host "Manifest:       $ManifestPath"
Write-Host "Images:         $totalImages"
Write-Host "Max concurrency: $MaxConcurrency"
Write-Host "Results path:   $ResultsPath"
Write-Host ""

# Spawn jobs respecting MaxConcurrency
$startTime = Get-Date
$jobs = @()
$queueIndex = 0

# Initial batch: launch up to MaxConcurrency
while ($queueIndex -lt $totalImages -and $jobs.Count -lt $MaxConcurrency) {
    $img = $manifest[$queueIndex]
    $jobName = "imggen-$queueIndex"

    $argList = @($generateScript, $img.prompt, $img.output_path)
    if ($img.size) { $argList += $img.size } else { $argList += "1536x1024" }
    if ($img.quality) { $argList += $img.quality } else { $argList += "medium" }
    if ($img.format) { $argList += $img.format } else { $argList += "png" }
    if ($img.background) { $argList += $img.background } else { $argList += "auto" }

    $job = Start-Job -Name $jobName -ScriptBlock {
        param($script, $prompt, $output, $size, $quality, $format, $background)
        $output_capture = & powershell.exe -ExecutionPolicy Bypass -File $script `
            -Prompt $prompt -OutputPath $output `
            -Size $size -Quality $quality -Format $format -Background $background 2>&1
        # Return everything for parsing
        @{
            output_path = $output
            stdout = $output_capture -join "`n"
            exit_code = $LASTEXITCODE
        }
    } -ArgumentList $argList

    $jobs += @{ Job = $job; Index = $queueIndex; ImagePath = $img.output_path }
    Write-Host "[start] job $($job.Id) -> $($img.output_path)"
    $queueIndex++
}

# Wait/refill loop
$results = @()
while ($jobs.Count -gt 0) {
    $completed = $jobs | Where-Object { $_.Job.State -in @("Completed", "Failed", "Stopped") }
    foreach ($jobEntry in $completed) {
        $job = $jobEntry.Job
        $imgIndex = $jobEntry.Index
        $imgPath = $jobEntry.ImagePath
        $outputData = Receive-Job -Job $job

        $status = "unknown"; $bytes = 0; $errorMsg = $null
        if ($outputData -is [hashtable] -or $outputData.PSObject.Properties.Match('stdout').Count -gt 0) {
            $stdout = $outputData.stdout
            $exitCode = $outputData.exit_code

            if ($stdout -match 'STATUS=ok\s+PATH=\S+\s+BYTES=(\d+)') {
                $status = "ok"
                $bytes = [int]$Matches[1]
            } elseif ($exitCode -ne 0) {
                $status = "failed"
                $errorMsg = ($stdout -split "`n" | Select-Object -Last 5) -join " | "
            } else {
                $status = "unknown"
                $errorMsg = "no STATUS line parsed"
            }
        } else {
            $status = "failed"
            $errorMsg = "no structured output from job"
        }

        $results += [PSCustomObject]@{
            index = $imgIndex
            output_path = $imgPath
            status = $status
            bytes = $bytes
            error = $errorMsg
            job_state = $job.State.ToString()
        }

        Write-Host "[done]  job $($job.Id) -> $status ($bytes bytes) $imgPath"
        Remove-Job -Job $job -Force
        $jobs = $jobs | Where-Object { $_.Job.Id -ne $job.Id }

        # Refill if more in the queue
        if ($queueIndex -lt $totalImages) {
            $img = $manifest[$queueIndex]
            $jobName = "imggen-$queueIndex"
            $argList = @($generateScript, $img.prompt, $img.output_path)
            if ($img.size) { $argList += $img.size } else { $argList += "1536x1024" }
            if ($img.quality) { $argList += $img.quality } else { $argList += "medium" }
            if ($img.format) { $argList += $img.format } else { $argList += "png" }
            if ($img.background) { $argList += $img.background } else { $argList += "auto" }

            $newJob = Start-Job -Name $jobName -ScriptBlock {
                param($script, $prompt, $output, $size, $quality, $format, $background)
                $output_capture = & powershell.exe -ExecutionPolicy Bypass -File $script `
                    -Prompt $prompt -OutputPath $output `
                    -Size $size -Quality $quality -Format $format -Background $background 2>&1
                @{
                    output_path = $output
                    stdout = $output_capture -join "`n"
                    exit_code = $LASTEXITCODE
                }
            } -ArgumentList $argList

            $jobs += @{ Job = $newJob; Index = $queueIndex; ImagePath = $img.output_path }
            Write-Host "[start] job $($newJob.Id) -> $($img.output_path)"
            $queueIndex++
        }
    }
    if ($jobs.Count -gt 0) { Start-Sleep -Seconds 2 }
}

# Sort by index, write results JSON
$results = $results | Sort-Object index
$resultsObj = @{
    manifest_path = $ManifestPath
    total_images = $totalImages
    succeeded = ($results | Where-Object { $_.status -eq "ok" }).Count
    failed = ($results | Where-Object { $_.status -ne "ok" }).Count
    elapsed_seconds = [Math]::Round(((Get-Date) - $startTime).TotalSeconds, 1)
    images = $results
}

# UTF-8 no BOM
$json = $resultsObj | ConvertTo-Json -Depth 5
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($ResultsPath, $json, $utf8NoBom)

Write-Host ""
Write-Host "=== Summary ==="
Write-Host "Total:    $totalImages"
Write-Host "Success:  $($resultsObj.succeeded)"
Write-Host "Failed:   $($resultsObj.failed)"
Write-Host "Elapsed:  $($resultsObj.elapsed_seconds) sec"
Write-Host "Results:  $ResultsPath"

"STATUS=ok TOTAL=$totalImages SUCCESS=$($resultsObj.succeeded) FAILED=$($resultsObj.failed) ELAPSED_SEC=$($resultsObj.elapsed_seconds) RESULTS=$ResultsPath"
