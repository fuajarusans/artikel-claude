#!/usr/bin/env powershell
# Generate .docx files for all 15 articles in 2026-08 batch

$articles = @(
    'monthly_runs/2026-08/final/kpbu-01.id.md',
    'monthly_runs/2026-08/final/kpbu-02.id.md',
    'monthly_runs/2026-08/final/kpbu-03.id.md',
    'monthly_runs/2026-08/final/public-private-partnership-01.en.md',
    'monthly_runs/2026-08/final/public-private-partnership-02.en.md',
    'monthly_runs/2026-08/final/public-private-partnership-03.en.md',
    'monthly_runs/2026-08/final/jaminan-pemerintah-01.id.md',
    'monthly_runs/2026-08/final/jaminan-pemerintah-02.id.md',
    'monthly_runs/2026-08/final/jaminan-pemerintah-03.id.md',
    'monthly_runs/2026-08/final/pembiayaan-kreatif-01.id.md',
    'monthly_runs/2026-08/final/pembiayaan-kreatif-02.id.md',
    'monthly_runs/2026-08/final/pembiayaan-kreatif-03.id.md',
    'monthly_runs/2026-08/final/pembiayaan-infrastruktur-01.id.md',
    'monthly_runs/2026-08/final/pembiayaan-infrastruktur-02.id.md',
    'monthly_runs/2026-08/final/pembiayaan-infrastruktur-03.id.md'
)

$successCount = 0
$failureCount = 0
$failures = @()

foreach ($article in $articles) {
    Write-Host "Converting: $article"
    try {
        & '.\tools\md-to-docx.ps1' -InputPath $article -ErrorAction Stop
        $successCount++
        Write-Host "Done`n"
    }
    catch {
        $failureCount++
        $failures += @{ Article = $article; Error = $_.Exception.Message }
        Write-Host "Failed: $($_.Exception.Message)`n"
    }
}

Write-Host "`n=== SUMMARY ==="
Write-Host "Generated: $successCount"
Write-Host "Failed: $failureCount"

if ($failures.Count -gt 0) {
    Write-Host "`nFailed articles:"
    foreach ($f in $failures) {
        Write-Host "  - $($f.Article)"
    }
}

exit $failureCount
