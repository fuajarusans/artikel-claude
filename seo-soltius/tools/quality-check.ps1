<#
.SYNOPSIS
  Heuristic plagiarism + AI-detector quality check for STP articles.

.DESCRIPTION
  Scans a polished markdown article for:
    1. AI-tell patterns (from knowledge_base/style_guide.md §5)
    2. Burstiness + paragraph-length uniformity (AI-likelihood)
    3. Distinctive 8-12 word phrases worth checking for plagiarism
       (the seo-quality-validator agent then runs WebSearch on these)

  Plug-in slots for paid APIs:
    - If $env:PLAGIARISM_API_KEY is set, this script will POST candidate
      passages to the Copyscape-compatible endpoint (not implemented in v2.0;
      stub is present for future hook).
    - If $env:AI_DETECTOR_API_KEY is set, this script will POST the article
      to the Originality.ai / GPTZero endpoint (stub for future hook).

  Outputs a JSON report to <article-dir>/<basename>.quality-input.json,
  which the validator agent reads and enriches with WebSearch + final verdict.

.PARAMETER ArticlePath
  Absolute path to a polished article markdown file
  (e.g. monthly_runs/2026-05/final/pakan-ikan-lele-01.id.md).

.PARAMETER OutputPath
  Optional override for the JSON output. Defaults to
  <article-dir>/<basename>.quality-input.json.

.PARAMETER Language
  "id" or "en" — selects the right pattern matrix. If omitted, inferred
  from filename (.id.md / .en.md).

.EXAMPLE
  pwsh tools/quality-check.ps1 -ArticlePath monthly_runs/2026-05/final/pakan-ikan-lele-01.id.md
#>

param(
    [Parameter(Mandatory=$true)][string]$ArticlePath,
    [string]$OutputPath,
    [ValidateSet("id","en","")][string]$Language = ""
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $ArticlePath)) {
    throw "Article not found: $ArticlePath"
}

$resolved = (Resolve-Path $ArticlePath).Path
$fileName = Split-Path $resolved -Leaf
$dir = Split-Path $resolved -Parent
$baseName = [System.IO.Path]::GetFileNameWithoutExtension($fileName)

if ([string]::IsNullOrEmpty($Language)) {
    if ($fileName -match '\.id\.md$') { $Language = "id" }
    elseif ($fileName -match '\.en\.md$') { $Language = "en" }
    else { $Language = "id" }  # default
}

if ([string]::IsNullOrEmpty($OutputPath)) {
    $OutputPath = Join-Path $dir "$baseName.quality-input.json"
}

$raw = Get-Content $resolved -Raw -Encoding UTF8

# Strip frontmatter (YAML block at top)
$body = $raw
if ($body -match "(?ms)^---\s*\r?\n.*?\r?\n---\s*\r?\n") {
    $body = $body -replace "(?ms)^---\s*\r?\n.*?\r?\n---\s*\r?\n", ""
}

# Normalize line endings
$body = $body -replace "`r`n", "`n"
$lines = $body -split "`n"

# Strip code fences, image markers, frontmatter-style lines from analysis
$proseLines = @()
$inFence = $false
foreach ($line in $lines) {
    if ($line -match '^\s*```') { $inFence = -not $inFence; continue }
    if ($inFence) { continue }
    if ($line -match '^\s*\{IMAGE_\d+:') { continue }
    $proseLines += $line
}
$proseText = ($proseLines -join "`n").Trim()

# Split into paragraphs (blank-line separated)
$paragraphs = @()
$current = @()
foreach ($line in $proseLines) {
    if ($line.Trim() -eq "") {
        if ($current.Count -gt 0) {
            $paragraphs += ($current -join " ").Trim()
            $current = @()
        }
    } else {
        $current += $line.Trim()
    }
}
if ($current.Count -gt 0) {
    $paragraphs += ($current -join " ").Trim()
}

# Filter out heading-only paragraphs from rhythm analysis
$proseOnly = $paragraphs | Where-Object {
    $_ -and ($_ -notmatch '^#{1,6}\s') -and ($_ -notmatch '^\s*[-*]\s') -and ($_ -notmatch '^\s*\|') -and ($_ -notmatch '^\s*\d+\.\s')
}

# ============================================================================
# AI DETECTOR — pattern matching
# ============================================================================

$aiFlags = @()
$aiScore = 0.0

function Add-Flag {
    param(
        [string]$Pattern,
        [string]$Severity,
        [string]$Snippet,
        [int]$LineNumber = -1
    )
    $script:aiFlags += [pscustomobject]@{
        pattern = $Pattern
        severity = $Severity
        snippet = $Snippet
        line = $LineNumber
    }
}

# --- Indonesian patterns ---
if ($Language -eq "id") {
    # "Selain itu," at start of consecutive paragraphs
    $selainItuParas = @()
    for ($i = 0; $i -lt $paragraphs.Count; $i++) {
        if ($paragraphs[$i] -match '^Selain itu[,\s]') { $selainItuParas += $i }
    }
    $consecutive = 0
    $maxConsec = 0
    for ($i = 1; $i -lt $selainItuParas.Count; $i++) {
        if (($selainItuParas[$i] - $selainItuParas[$i-1]) -le 2) { $consecutive++ } else { $consecutive = 0 }
        if ($consecutive -gt $maxConsec) { $maxConsec = $consecutive }
    }
    if ($maxConsec -ge 1) {
        Add-Flag -Pattern "selain-itu-consecutive" -Severity "medium" -Snippet "Selain itu, ... (repeats across paragraphs)" -LineNumber -1
        $aiScore += 0.08
    }
    if ($selainItuParas.Count -ge 4) {
        Add-Flag -Pattern "selain-itu-overuse" -Severity "high" -Snippet "Selain itu appears as paragraph opener $($selainItuParas.Count) times" -LineNumber -1
        $aiScore += 0.10
    }

    # "Penting untuk dicatat/diingat/dipahami bahwa..."
    $pdMatches = [regex]::Matches($proseText, "(?i)penting untuk (dicatat|diingat|dipahami)( bahwa)?")
    if ($pdMatches.Count -gt 0) {
        Add-Flag -Pattern "penting-untuk-dicatat" -Severity "high" -Snippet "Found $($pdMatches.Count) instance(s)" -LineNumber -1
        $aiScore += 0.12 * [Math]::Min($pdMatches.Count, 3)
    }

    # "Dalam era modern", "Di zaman sekarang", "Saat ini"
    $eraMatches = [regex]::Matches($proseText, "(?i)(dalam era modern|di zaman (sekarang|modern|kini)|di era (digital|modern|sekarang)|seiring (perkembangan|berjalannya waktu)|di tengah (perkembangan|kemajuan))")
    if ($eraMatches.Count -gt 0) {
        Add-Flag -Pattern "filler-era-phrases" -Severity "medium" -Snippet "Found $($eraMatches.Count) generic era-filler phrase(s)" -LineNumber -1
        $aiScore += 0.06 * [Math]::Min($eraMatches.Count, 3)
    }

    # "Dengan demikian," overuse
    $denganDemMatches = [regex]::Matches($proseText, "(?i)dengan demikian[,\s]")
    if ($denganDemMatches.Count -ge 3) {
        Add-Flag -Pattern "dengan-demikian-overuse" -Severity "medium" -Snippet "Found $($denganDemMatches.Count) uses (>=3 triggers)" -LineNumber -1
        $aiScore += 0.06
    }

    # "Sebagai kesimpulan,"
    if ($proseText -match "(?i)sebagai kesimpulan,") {
        Add-Flag -Pattern "sebagai-kesimpulan" -Severity "low" -Snippet "Lazy closing phrase 'Sebagai kesimpulan,' present" -LineNumber -1
        $aiScore += 0.04
    }

    # "Menariknya," overuse (style guide allows max 1)
    $menarMatches = [regex]::Matches($proseText, "(?i)menariknya[,\s]")
    if ($menarMatches.Count -ge 2) {
        Add-Flag -Pattern "menariknya-overuse" -Severity "low" -Snippet "Used $($menarMatches.Count) times (style guide: max 1)" -LineNumber -1
        $aiScore += 0.03
    }

    # Em-dash overuse (style guide: max 2)
    $emDash = [char]0x2014
    $emDashCount = ([regex]::Matches($proseText, [regex]::Escape($emDash))).Count
    if ($emDashCount -gt 2) {
        Add-Flag -Pattern "em-dash-overuse" -Severity "medium" -Snippet "Em-dashes count: $emDashCount (max 2)" -LineNumber -1
        $aiScore += 0.05 * [Math]::Min($emDashCount - 2, 4)
    }
}

# --- English patterns ---
if ($Language -eq "en") {
    if ($proseText -match "(?i)it'?s important to note that") {
        Add-Flag -Pattern "important-to-note" -Severity "high" -Snippet "'It's important to note that' present" -LineNumber -1
        $aiScore += 0.10
    }
    if ($proseText -match "(?i)in today'?s (fast-paced |modern |digital )?world") {
        Add-Flag -Pattern "todays-world" -Severity "high" -Snippet "'In today's world' filler" -LineNumber -1
        $aiScore += 0.10
    }
    $furtherMatches = [regex]::Matches($proseText, "(?m)^(furthermore|moreover|additionally)[,\s]")
    if ($furtherMatches.Count -ge 2) {
        Add-Flag -Pattern "furthermore-overuse" -Severity "medium" -Snippet "$($furtherMatches.Count) paragraph(s) start with furthermore/moreover/additionally" -LineNumber -1
        $aiScore += 0.06
    }
    $crucialMatches = [regex]::Matches($proseText, "(?i)\b(crucial|essential|vital|paramount)\b")
    if ($crucialMatches.Count -ge 4) {
        Add-Flag -Pattern "vague-emphasizers" -Severity "medium" -Snippet "Found $($crucialMatches.Count) crucial/essential/vital usages" -LineNumber -1
        $aiScore += 0.04
    }
    if ($proseText -match "(?i)this article will (discuss|explore|examine|cover)") {
        Add-Flag -Pattern "article-will-discuss" -Severity "medium" -Snippet "Meta self-reference in body" -LineNumber -1
        $aiScore += 0.06
    }
    if ($proseText -match "(?im)^in conclusion[,\s]") {
        Add-Flag -Pattern "in-conclusion" -Severity "low" -Snippet "'In conclusion,' opens closing section" -LineNumber -1
        $aiScore += 0.03
    }
    if ($proseText -match "(?i)as we (know|all know|are aware)") {
        Add-Flag -Pattern "as-we-know" -Severity "medium" -Snippet "'As we know' filler" -LineNumber -1
        $aiScore += 0.06
    }
    $emDash = [char]0x2014
    $emDashCount = ([regex]::Matches($proseText, [regex]::Escape($emDash))).Count
    if ($emDashCount -gt 2) {
        Add-Flag -Pattern "em-dash-overuse" -Severity "medium" -Snippet "Em-dashes count: $emDashCount (max 2)" -LineNumber -1
        $aiScore += 0.05 * [Math]::Min($emDashCount - 2, 4)
    }
}

# ============================================================================
# BURSTINESS + paragraph-length uniformity
# ============================================================================

$paraLengths = @()
foreach ($p in $proseOnly) {
    $wc = ($p -split '\s+' | Where-Object { $_ -ne "" }).Count
    if ($wc -ge 5) { $paraLengths += $wc }
}

$burstiness = 0.0
$uniformityFlag = $false
if ($paraLengths.Count -ge 4) {
    $mean = ($paraLengths | Measure-Object -Average).Average
    $variance = 0.0
    foreach ($l in $paraLengths) { $variance += [Math]::Pow($l - $mean, 2) }
    $variance = $variance / $paraLengths.Count
    $stdev = [Math]::Sqrt($variance)
    $cv = if ($mean -gt 0) { $stdev / $mean } else { 0 }  # coefficient of variation
    $burstiness = [Math]::Round($cv, 3)

    # Human writers typically have CV > 0.45 in paragraph word counts.
    # CV < 0.30 = highly uniform = AI tell
    if ($cv -lt 0.30) {
        Add-Flag -Pattern "paragraph-uniformity" -Severity "high" -Snippet "Paragraph word-count CV=$burstiness (target >=0.45; <0.30 is strong AI tell)" -LineNumber -1
        $aiScore += 0.15
        $uniformityFlag = $true
    } elseif ($cv -lt 0.45) {
        Add-Flag -Pattern "paragraph-low-variance" -Severity "low" -Snippet "Paragraph word-count CV=$burstiness (target >=0.45)" -LineNumber -1
        $aiScore += 0.04
    }
}

# Sentence-length uniformity (simpler heuristic)
$sentences = [regex]::Split($proseText, '(?<=[\.!\?])\s+') | Where-Object { $_.Trim().Length -gt 0 }
$sentenceLengths = @()
foreach ($s in $sentences) {
    $wc = ($s -split '\s+' | Where-Object { $_ -ne "" }).Count
    if ($wc -ge 3) { $sentenceLengths += $wc }
}

$sentenceBurstiness = 0.0
if ($sentenceLengths.Count -ge 10) {
    $smean = ($sentenceLengths | Measure-Object -Average).Average
    $svar = 0.0
    foreach ($l in $sentenceLengths) { $svar += [Math]::Pow($l - $smean, 2) }
    $svar = $svar / $sentenceLengths.Count
    $sstdev = [Math]::Sqrt($svar)
    $scv = if ($smean -gt 0) { $sstdev / $smean } else { 0 }
    $sentenceBurstiness = [Math]::Round($scv, 3)
    if ($scv -lt 0.35) {
        Add-Flag -Pattern "sentence-uniformity" -Severity "medium" -Snippet "Sentence-length CV=$sentenceBurstiness (target >=0.45)" -LineNumber -1
        $aiScore += 0.06
    }
}

# Vocabulary repetitiveness (top 20 content words frequency)
$words = ($proseText.ToLower() -split '\s+' | ForEach-Object { $_ -replace '[^\p{L}\p{N}]', '' } | Where-Object { $_.Length -ge 4 })
$totalWords = $words.Count
$wordFreq = $words | Group-Object | Sort-Object Count -Descending | Select-Object -First 30
$topFreq = 0
foreach ($wf in $wordFreq) { $topFreq += $wf.Count }
$topShare = if ($totalWords -gt 0) { [Math]::Round($topFreq / $totalWords, 3) } else { 0 }
# High top-30 share = repetitive vocabulary
if ($topShare -gt 0.35) {
    Add-Flag -Pattern "vocab-repetition" -Severity "low" -Snippet "Top 30 words = $($topShare*100)% of body (target <30%)" -LineNumber -1
    $aiScore += 0.04
}

# Cap aiScore at 1.0
if ($aiScore -gt 1.0) { $aiScore = 1.0 }
$aiScore = [Math]::Round($aiScore, 3)

# Verdict
$aiVerdict = "pass"
if ($aiScore -ge 0.50) { $aiVerdict = "reject" }
elseif ($aiScore -ge 0.30) { $aiVerdict = "revise" }

# ============================================================================
# PLAGIARISM — extract candidate phrases for web lookup
# ============================================================================

# Strategy: pick 6-8 distinctive sentences from the article. Distinctive =
# 12-25 words long, contains specific numbers OR named entities, low common-word
# share. The validator agent will WebSearch each.

$candidates = @()
$commonStop = @("the","is","of","and","a","to","in","that","it","for","with","as","on","by","this","or","be","an","are","at","from","not","but","yang","dan","di","ke","untuk","dengan","pada","dari","sebagai","atau","ini","itu","adalah","akan","juga","dapat","tidak","oleh","dalam","secara","lebih","ada","menjadi","saat","setelah","sebelum","banyak","setiap","beberapa","mereka","kita","kami","saya","anda")

$rng = New-Object System.Random
$candidateSentences = @()
foreach ($s in $sentences) {
    $cleaned = ($s -replace '[\r\n]+', ' ').Trim()
    $wc = ($cleaned -split '\s+').Count
    if ($wc -ge 12 -and $wc -le 28) {
        # Score: more numbers + named entities (capitalized words mid-sentence) = better candidate
        $numMatches = ([regex]::Matches($cleaned, '\b\d+([\.,]\d+)?%?\b')).Count
        $tokens = $cleaned -split '\s+'
        $capCount = 0
        for ($i = 1; $i -lt $tokens.Count; $i++) {
            if ($tokens[$i] -cmatch '^[A-Z][a-zA-Z]{2,}') { $capCount++ }
        }
        $stopShare = 0
        $lowerTokens = $tokens | ForEach-Object { $_.ToLower() -replace '[^\p{L}\p{N}]', '' }
        foreach ($t in $lowerTokens) { if ($commonStop -contains $t) { $stopShare++ } }
        $stopPct = $stopShare / $tokens.Count
        $score = $numMatches * 3 + $capCount * 2 + ([Math]::Max(0, 0.6 - $stopPct) * 10)
        if ($score -ge 3) {
            $candidateSentences += [pscustomobject]@{ sentence = $cleaned; score = $score }
        }
    }
}

$top = $candidateSentences | Sort-Object score -Descending | Select-Object -First 8
foreach ($c in $top) {
    $candidates += [pscustomobject]@{
        passage = $c.sentence
        candidate_score = [Math]::Round($c.score, 2)
        web_search_query = "`"" + ($c.sentence -replace '[\r\n"]+', ' ').Substring(0, [Math]::Min(120, $c.sentence.Length)) + "`""
    }
}

# Plagiarism API stub
$plagiarismApiUsed = $false
if ($env:PLAGIARISM_API_KEY) {
    # TODO: POST candidates to Copyscape / paid endpoint
    $plagiarismApiUsed = $true
}

# AI detector API stub
$aiApiUsed = $false
if ($env:AI_DETECTOR_API_KEY) {
    # TODO: POST article body to Originality.ai / GPTZero
    $aiApiUsed = $true
}

# ============================================================================
# Word counts + meta
# ============================================================================

$wordCount = ($proseText -split '\s+' | Where-Object { $_ -ne "" }).Count

$report = [pscustomobject]@{
    article_path = $resolved
    language = $Language
    generated_at = (Get-Date).ToString("yyyy-MM-ddTHH:mm:sszzz")
    word_count = $wordCount
    paragraph_count = $proseOnly.Count
    sentence_count = $sentences.Count
    ai_detector = [pscustomobject]@{
        score = $aiScore
        verdict = $aiVerdict
        threshold_revise = 0.30
        threshold_reject = 0.50
        paragraph_burstiness = $burstiness
        sentence_burstiness = $sentenceBurstiness
        top30_vocab_share = $topShare
        flags = $aiFlags
        external_api_used = $aiApiUsed
    }
    plagiarism_candidates = $candidates
    plagiarism = [pscustomobject]@{
        verdict_pending = $true
        note = "Agent must run WebSearch on each candidate.web_search_query and aggregate verdict (pass/revise/reject)."
        external_api_used = $plagiarismApiUsed
        threshold_revise_sentence = 0.15
        threshold_revise_paragraph = 0.08
    }
}

$json = $report | ConvertTo-Json -Depth 8
Set-Content -Path $OutputPath -Value $json -Encoding UTF8

Write-Output "Quality-check input written to: $OutputPath"
Write-Output ""
Write-Output "Article: $fileName"
Write-Output "Language: $Language"
Write-Output "Word count: $wordCount"
Write-Output ""
Write-Output "AI detector:"
Write-Output "  Score: $aiScore (revise>=0.30, reject>=0.50)"
Write-Output "  Verdict: $aiVerdict"
Write-Output "  Flags: $($aiFlags.Count)"
foreach ($f in $aiFlags) {
    Write-Output "    - [$($f.severity)] $($f.pattern): $($f.snippet)"
}
Write-Output ""
Write-Output "Plagiarism: $($candidates.Count) candidate passages extracted for web lookup"
