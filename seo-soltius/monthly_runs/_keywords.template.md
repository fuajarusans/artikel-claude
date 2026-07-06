# Daftar Keyword Bulanan — SOLTIUS  (TEMPLATE — tinggal isi)

**Cara pakai:** salin file ini ke `monthly_runs/<YYYY-MM>/keywords.md`, isi, lalu jalankan `/run-month <YYYY-MM>`.
Daftar ini **mengganti penuh** keyword bulan-bulan sebelumnya (tidak ada default). Boleh berapa pun jumlah keyword-nya.

**Wajib** per keyword: `keyword` + `articles`. `landing_page` sangat disarankan. Sisanya opsional — saya turunkan otomatis (slug, rank/SERP, cousin link, mapping SAP, angle).

```yaml
month: ""                  # contoh: "2026-08"
seo_report: "none"         # path laporan SEO baru bila ada, atau "none" (pakai SERP live)

keywords:
  - keyword: ""            # WAJIB  — frasa target, mis. "SAP S/4HANA"
    landing_page: ""       # disarankan — URL hub di soltius.co.id, atau "belum ada"
    articles: 5            # WAJIB  — jumlah artikel untuk keyword ini
    priority: ""           # opsional — rescue | defend | whitespace | grow | new
    sap_focus: ""          # opsional — produk/teknologi SAP yang diajarkan
    soltius_anchor: ""     # opsional — layanan Soltius untuk CTA
    notes: ""              # opsional — audiens / angle khusus / hindari X

  - keyword: ""
    landing_page: ""
    articles: 5
    priority: ""
    sap_focus: ""
    soltius_anchor: ""
    notes: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    priority: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    priority: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    priority: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    priority: ""
  # tambah / hapus blok di atas sesuai kebutuhan
```

---

### Legenda singkat
- **keyword** *(wajib)* — frasa pencarian target, persis.
- **landing_page** *(disarankan)* — halaman hub di soltius.co.id yang ditautkan artikel; tulis `belum ada` kalau belum punya.
- **articles** *(wajib)* — berapa artikel (default 5).
- **priority** *(opsional)* — arah angle: `rescue` (rank anjlok), `defend` (sudah bagus), `whitespace` (belum ranking), `grow` (naikkan), `new`.
- **sap_focus / soltius_anchor / notes** *(opsional)* — kalau kosong, researcher/strategist yang menentukan.

### Yang otomatis (tidak perlu Anda isi)
- Slug (kebab-case dari keyword), rank/SERP, People-Also-Ask, cousin internal-link (dipilih dari keyword lain di daftar ini), mapping SAP & angle tiap artikel.
- Aturan kualitas universal tetap berlaku: voice human/anti-AI, framing Soltius (implements, ≤3 mention), panjang 1.500–1.800, GEO §2a, section `## Kesimpulan`, internal link inline natural, soft CTA.
