<#
.SYNOPSIS
    Generate a single image via Black Forest Labs (BFL) FLUX API.
    Drop-in replacement for tools/generate-image.ps1 (same param signature, same STATUS output).

.DESCRIPTION
    Reads BFL_API_KEY from .env (project root), submits a generation task to api.bfl.ai,
    polls until the image is ready, then downloads the resulting PNG/JPEG locally.

    Default model: flux-dev (~$0.025/image). For hero shots prefer flux-pro-1.1 (~$0.04).

    BFL pricing as of 2025 (per image):
      - flux-dev              ~ $0.025  (best quality/cost)
      - flux-pro              ~ $0.05   (original pro)
      - flux-pro-1.1          ~ $0.04   (newer pro, recommended for heroes)
      - flux-pro-1.1-ultra    ~ $0.06   (high-resolution variant)

.PARAMETER Prompt
    The full generation prompt.

.PARAMETER OutputPath
    Absolute or project-relative path where the file should be written.

.PARAMETER Size
    Image dimensions as WxH. Both must be multiples of 32 (script enforces). 1536x1024 ≈ 1.5MP fits FLUX dev's 2MP cap.

.PARAMETER Model
    BFL model name (without "flux-" prefix). One of: dev, pro, pro-1.1, pro-1.1-ultra. Default: dev.

.PARAMETER Format
    Output format: png | jpeg. Default png.

.PARAMETER SafetyTolerance
    0 (strict) to 6 (lenient). Default 2.

.PARAMETER MaxPollSeconds
    Polling timeout for the async task. Default 120.

.PARAMETER Quality / Background
    Accepted but ignored — these exist only so the batch helper can pass OpenAI-shaped params
    without modification. FLUX uses model selection and prompt text instead.

.EXAMPLE
    .\tools\generate-image-flux.ps1 -Prompt "Macro photo of vannamei shrimp" -OutputPath "test.png"

.EXAMPLE
    .\tools\generate-image-flux.ps1 -Prompt "Hero shot" -OutputPath "hero.png" -Model pro-1.1 -Size 1536x1024
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Prompt,

    [Parameter(Mandatory = $true, Position = 1)]
    [string]$OutputPath,

    [ValidateSet("1024x1024", "1024x1536", "1536x1024", "1024x768", "1216x832", "1408x960", "1440x960", "auto")]
    [string]$Size = "1536x1024",

    [ValidateSet("dev", "pro", "pro-1.1", "pro-1.1-ultra", "auto")]
    [string]$Model = "auto",

    [ValidateSet("png", "jpeg")]
    [string]$Format = "png",

    [ValidateRange(0, 6)]
    [int]$SafetyTolerance = 2,

    [int]$MaxPollSeconds = 120,

    # OpenAI-style "quality" hint — used to auto-pick a FLUX model when -Model is "auto"
    #   low | medium  → flux-dev      (~$0.025/image)
    #   high          → flux-pro-1.1  (~$0.04/image)
    [string]$Quality = "medium",

    # Ignored (kept so the batch helper can pass OpenAI-style args without modification)
    [string]$Background = "auto"
)

$ErrorActionPreference = "Stop"

# --- Resolve paths ---
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectRoot = Split-Path -Parent $scriptRoot
$envFile = Join-Path $projectRoot ".env"

if (-not (Test-Path $envFile)) {
    throw ".env file not found at $envFile. Add BFL_API_KEY=bfl_... per .env.example."
}

# --- Load API key from .env ---
$apiKey = $null
foreach ($line in Get-Content $envFile) {
    if ($line -match '^\s*#') { continue }
    if ($line -match '^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$') {
        $k = $Matches[1]
        $v = $Matches[2].Trim('"', "'")
        if ($k -ieq "BFL_API_KEY") {
            $apiKey = $v
            break
        }
    }
}
if (-not $apiKey) { throw "BFL_API_KEY not found in $envFile" }

# --- Resolve output path ---
if (-not [System.IO.Path]::IsPathRooted($OutputPath)) {
    $OutputPath = Join-Path $projectRoot $OutputPath
}
$outDir = Split-Path -Parent $OutputPath
if ($outDir -and -not (Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

# --- Dimensions (enforce multiples of 32 per FLUX requirement) ---
if ($Size -eq "auto") { $Size = "1536x1024" }
$dims = $Size -split 'x'
$width = [int]$dims[0]
$height = [int]$dims[1]
$width = [Math]::Floor($width / 32) * 32
$height = [Math]::Floor($height / 32) * 32

# --- Resolve model (auto-pick from quality when not explicitly set) ---
if ($Model -eq "auto") {
    switch ($Quality.ToLower()) {
        "high"   { $Model = "pro-1.1" }
        default  { $Model = "dev" }   # low / medium / auto / anything else
    }
}

# --- Endpoint ---
$endpoint = "https://api.bfl.ai/v1/flux-$Model"

Write-Host "Provider: Black Forest Labs (BFL)"
Write-Host "Model:    flux-$Model"
Write-Host "Size:     ${width}x${height}"
Write-Host "Format:   $Format"
Write-Host "Output:   $OutputPath"
$promptPreview = if ($Prompt.Length -gt 120) { $Prompt.Substring(0, 120) + "..." } else { $Prompt }
Write-Host "Prompt:   $promptPreview"

# --- Submit task ---
$payload = @{
    prompt = $Prompt
    width = $width
    height = $height
    prompt_upsampling = $false
    safety_tolerance = $SafetyTolerance
    output_format = $Format
} | ConvertTo-Json -Compress

$headers = @{
    "x-key" = $apiKey
    "Content-Type" = "application/json"
}

try {
    $submit = Invoke-RestMethod -Uri $endpoint -Method Post -Headers $headers -Body $payload -TimeoutSec 30
} catch {
    $errBody = $null
    try {
        if ($_.ErrorDetails -and $_.ErrorDetails.Message) { $errBody = $_.ErrorDetails.Message }
        elseif ($_.Exception.Response) {
            $stream = $_.Exception.Response.GetResponseStream()
            $reader = New-Object System.IO.StreamReader($stream)
            $errBody = $reader.ReadToEnd()
        }
    } catch {}
    Write-Host "BFL submit error body:"
    Write-Host $errBody
    throw "BFL submit failed: $($_.Exception.Message)"
}

$pollUrl = $submit.polling_url
$taskId = $submit.id
if (-not $pollUrl) { throw "BFL did not return a polling_url. Response: $($submit | ConvertTo-Json -Depth 5)" }
Write-Host "Task ID:  $taskId"

# --- Poll until Ready ---
$start = Get-Date
$lastStatus = "Pending"
$result = $null

while (((Get-Date) - $start).TotalSeconds -lt $MaxPollSeconds) {
    Start-Sleep -Seconds 2
    try {
        $check = Invoke-RestMethod -Uri $pollUrl -Method Get -Headers $headers -TimeoutSec 15
    } catch {
        Write-Warning "Poll error: $($_.Exception.Message); retrying..."
        continue
    }
    $lastStatus = $check.status
    if ($lastStatus -eq "Ready") {
        $result = $check.result
        break
    } elseif ($lastStatus -in @("Error", "Content Moderated", "Request Moderated", "Task not found")) {
        throw "BFL task failed with status: $lastStatus. Details: $($check | ConvertTo-Json -Depth 5 -Compress)"
    }
    # Pending → keep polling
}

if (-not $result) {
    throw "BFL task timed out after $MaxPollSeconds seconds (last status: $lastStatus)"
}

# --- Download the image ---
$imageUrl = $result.sample
if (-not $imageUrl) { throw "BFL Ready response missing result.sample URL. Details: $($result | ConvertTo-Json -Depth 5)" }

$savedProgress = $ProgressPreference
$ProgressPreference = "SilentlyContinue"
try {
    Invoke-WebRequest -Uri $imageUrl -OutFile $OutputPath -TimeoutSec 60 -UseBasicParsing
} finally {
    $ProgressPreference = $savedProgress
}

$outFile = Get-Item $OutputPath
$kb = [Math]::Round($outFile.Length / 1KB, 1)
$elapsed = [Math]::Round(((Get-Date) - $start).TotalSeconds, 1)
Write-Host "Wrote $kb KB to $($outFile.FullName) (BFL elapsed: $elapsed sec)"

# Machine-readable status line (matches generate-image.ps1 for batch-helper compatibility)
"STATUS=ok PATH=$($outFile.FullName) BYTES=$($outFile.Length)"
