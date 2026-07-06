<#
.SYNOPSIS
    Generate a single image via OpenAI's gpt-image-1 (ChatGPT Images) API and save it locally.

.DESCRIPTION
    Reads OpenAI_API_Key from .env (project root), calls https://api.openai.com/v1/images/generations
    with the gpt-image-1 model, decodes the base64 image response, and writes it to OutputPath.

    Use one call per image; the calling agent (aquaculture-image-generator) iterates over the
    image plan JSON to generate all images for an article.

.PARAMETER Prompt
    The full generation prompt (composition + style + lighting + technical cues + negative cues).

.PARAMETER OutputPath
    Absolute or project-relative path where the PNG/JPEG file should be written.

.PARAMETER Size
    Image dimensions. One of: 1024x1024, 1024x1536, 1536x1024, auto.
    Defaults to 1536x1024 (landscape, ~16:9 — ideal for hero shots).

.PARAMETER Quality
    Generation quality. One of: low, medium, high, auto.
    Defaults to medium. Use 'high' for hero/cover images; 'medium' for in-body; 'low' for thumbnails/tests.

.PARAMETER Format
    Output file format. One of: png, jpeg, webp. Defaults to png.

.PARAMETER Background
    Background handling. One of: opaque, transparent, auto. Defaults to auto.

.EXAMPLE
    .\tools\generate-image.ps1 -Prompt "Macro photo of vannamei shrimp post-larvae in a clear hatchery tank, professional aquaculture trade publication style" -OutputPath "monthly_runs\2026-05\images\benur-udang-vaname-hero-01.png"

.EXAMPLE
    .\tools\generate-image.ps1 -Prompt "Clean modern infographic timeline of 4 tilapia growth phases" -OutputPath "out.png" -Size 1024x1024 -Quality high
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Prompt,

    [Parameter(Mandatory = $true, Position = 1)]
    [string]$OutputPath,

    [ValidateSet("1024x1024", "1024x1536", "1536x1024", "auto")]
    [string]$Size = "1536x1024",

    [ValidateSet("low", "medium", "high", "auto")]
    [string]$Quality = "medium",

    [ValidateSet("png", "jpeg", "webp")]
    [string]$Format = "png",

    [ValidateSet("opaque", "transparent", "auto")]
    [string]$Background = "auto"
)

$ErrorActionPreference = "Stop"

# --- Resolve paths ---
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectRoot = Split-Path -Parent $scriptRoot
$envFile = Join-Path $projectRoot ".env"

if (-not (Test-Path $envFile)) {
    throw ".env file not found at $envFile. Create it from .env.example and set OpenAI_API_Key."
}

# --- Load .env ---
$apiKey = $null
foreach ($line in Get-Content $envFile) {
    if ($line -match '^\s*#') { continue }
    if ($line -match '^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$') {
        $k = $Matches[1]
        $v = $Matches[2].Trim('"', "'")
        if ($k -ieq "OpenAI_API_Key" -or $k -ieq "OPENAI_API_KEY") {
            $apiKey = $v
            break
        }
    }
}
if (-not $apiKey) { throw "OpenAI_API_Key not found in $envFile" }

# --- Resolve output path ---
if (-not [System.IO.Path]::IsPathRooted($OutputPath)) {
    $OutputPath = Join-Path $projectRoot $OutputPath
}
$outDir = Split-Path -Parent $OutputPath
if ($outDir -and -not (Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

Write-Host "Model:    gpt-image-1"
Write-Host "Size:     $Size"
Write-Host "Quality:  $Quality"
Write-Host "Format:   $Format"
Write-Host "Output:   $OutputPath"
Write-Host "Prompt:   $($Prompt.Substring(0, [Math]::Min(120, $Prompt.Length)))$(if ($Prompt.Length -gt 120) { '...' })"

# --- Build payload ---
$payload = @{
    model              = "gpt-image-1"
    prompt             = $Prompt
    n                  = 1
    size               = $Size
    quality            = $Quality
    output_format      = $Format
    background         = $Background
} | ConvertTo-Json -Depth 5 -Compress

$headers = @{
    "Authorization" = "Bearer $apiKey"
    "Content-Type"  = "application/json"
}

# --- Call API ---
try {
    $response = Invoke-RestMethod -Uri "https://api.openai.com/v1/images/generations" `
                                  -Method Post `
                                  -Headers $headers `
                                  -Body $payload `
                                  -TimeoutSec 180
} catch {
    $errBody = $null
    try {
        if ($_.ErrorDetails -and $_.ErrorDetails.Message) {
            $errBody = $_.ErrorDetails.Message
        } elseif ($_.Exception.Response) {
            $stream = $_.Exception.Response.GetResponseStream()
            $reader = New-Object System.IO.StreamReader($stream)
            $errBody = $reader.ReadToEnd()
        }
    } catch {}
    Write-Host "API error body:"
    Write-Host $errBody
    throw "OpenAI API call failed: $($_.Exception.Message)"
}

if (-not $response.data -or $response.data.Count -eq 0) {
    throw "OpenAI returned no image data. Response: $($response | ConvertTo-Json -Depth 5)"
}

$b64 = $response.data[0].b64_json
if (-not $b64) {
    throw "Response did not include b64_json. Got: $($response.data[0] | ConvertTo-Json -Depth 5)"
}

# --- Decode and save ---
$bytes = [Convert]::FromBase64String($b64)
[System.IO.File]::WriteAllBytes($OutputPath, $bytes)

$outFile = Get-Item $OutputPath
$kb = [Math]::Round($outFile.Length / 1KB, 1)
Write-Host "Wrote $kb KB to $($outFile.FullName)"

# Echo a small machine-readable status line at the end for callers to parse
"STATUS=ok PATH=$($outFile.FullName) BYTES=$($outFile.Length)"
