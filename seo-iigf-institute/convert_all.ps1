$base = "D:/Users/seo/Documents/fajar-artikel/artikel-claude/seo-iigf-institute"
$articles = @(
    "capacity-building-pembiayaan-kreatif-01",
    "capacity-building-pembiayaan-kreatif-02",
    "capacity-building-pembiayaan-kreatif-03",
    "capacity-building-pembiayaan-kreatif-04",
    "sertifikasi-kpbu-01",
    "sertifikasi-kpbu-02",
    "sertifikasi-kpbu-03",
    "sertifikasi-kpbu-04",
    "studi-kasus-proyek-infrastruktur-di-indonesia-01",
    "studi-kasus-proyek-infrastruktur-di-indonesia-02",
    "studi-kasus-proyek-infrastruktur-di-indonesia-03",
    "studi-kasus-proyek-infrastruktur-di-indonesia-04"
)

$converted = 0
$failed = 0
$errors = @()

foreach ($article in $articles) {
    $mdPath = "$base/monthly_runs/2026-08/final/${article}.id.md"
    $docxPath = "$base/monthly_runs/2026-08/final/${article}.id.docx"

    Write-Host "Converting $article..." -ForegroundColor Cyan
    try {
        if (-not (Test-Path $mdPath)) {
            throw "Input file not found: $mdPath"
        }

        & "$base/tools/md-to-docx.ps1" -InputPath $mdPath 2>&1 | Out-Null

        Start-Sleep -Milliseconds 500

        if (Test-Path $docxPath) {
            $size = (Get-Item $docxPath).Length
            Write-Host "  OK: $article ($size bytes)" -ForegroundColor Green
            $converted++
        } else {
            Write-Host "  ERROR: Output file not created" -ForegroundColor Red
            $failed++
            $errors += $article
        }
    } catch {
        Write-Host "  ERROR: $_" -ForegroundColor Red
        $failed++
        $errors += "$article : $_"
    }
}

Write-Host ""
Write-Host "==============================" -ForegroundColor Cyan
Write-Host "Conversion Summary" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host "Converted: $converted / 12"
Write-Host "Failed: $failed / 12"

if ($failed -gt 0) {
    Write-Host ""
    Write-Host "Failed articles:" -ForegroundColor Red
    foreach ($err in $errors) {
        Write-Host "  - $err" -ForegroundColor Red
    }
}
