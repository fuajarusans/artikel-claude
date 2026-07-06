# Daftar Keyword Bulanan — PGN Gagas  (TEMPLATE — tinggal isi)

**Cara pakai:** salin file ini ke `monthly_runs/<YYYY-MM>/keywords.md`, isi, lalu jalankan `/run-month <YYYY-MM>`.
Daftar ini **mengganti penuh** keyword bulan-bulan sebelumnya (tidak ada default). Boleh berapa pun jumlah keyword-nya.

**Wajib** per keyword: `keyword` + `articles`. `landing_page` sangat disarankan. Sisanya opsional — saya turunkan otomatis (slug, rank/SERP, cousin link, mapping topik, angle).

```yaml
month: ""                  # contoh: "2026-08"
seo_report: "none"         # path laporan SEO baru bila ada, atau "none" (pakai SERP live)

keywords:
  - keyword: ""            # WAJIB  — frasa target, mis. "CNG untuk industri"
    landing_page: ""       # disarankan — URL hub di gagas.co.id, atau "belum ada"
    articles: 5            # WAJIB  — jumlah artikel untuk keyword ini
    priority: ""           # opsional — rescue | defend | whitespace | grow | new
    topic_focus: ""        # opsional — produk/topik energi yang diajarkan
    gagas_anchor: ""       # opsional — layanan PGN Gagas untuk CTA
    notes: ""              # opsional — audiens / angle khusus / hindari X

  - keyword: ""
    landing_page: ""
    articles: 5
    priority: ""
    topic_focus: ""
    gagas_anchor: ""
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
- **landing_page** *(disarankan)* — halaman hub di gagas.co.id yang ditautkan artikel; tulis `belum ada` kalau belum punya.
- **articles** *(wajib)* — berapa artikel (default 5).
- **priority** *(opsional)* — arah angle: `rescue` (rank anjlok), `defend` (sudah bagus), `whitespace` (belum ranking), `grow` (naikkan), `new`.
- **topic_focus / gagas_anchor / notes** *(opsional)* — kalau kosong, researcher/strategist yang menentukan.

### Yang otomatis (tidak perlu Anda isi)
- Slug (kebab-case dari keyword), rank/SERP, People-Also-Ask, cousin internal-link (dipilih dari keyword lain di daftar ini), mapping topik & angle tiap artikel.
- Aturan kualitas universal tetap berlaku: voice human/anti-AI, framing PGN Gagas (penyedia/distributor CNG, ≤3 mention), panjang 1.200–1.600, GEO §2a, section `## Kesimpulan`, internal link inline natural, soft CTA.
