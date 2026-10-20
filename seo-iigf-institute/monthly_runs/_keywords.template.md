# Daftar Keyword Bulanan — IIGF Institute  (TEMPLATE — tinggal isi)

**Cara pakai:** salin file ini ke `monthly_runs/<YYYY-MM>/keywords.md`, isi, lalu jalankan `/run-month <YYYY-MM>`.
Daftar ini **mengganti penuh** keyword bulan-bulan sebelumnya (tidak ada default). Boleh berapa pun jumlah keyword-nya.

**Wajib** per keyword: `keyword` + `articles`. `landing_page` sangat disarankan. Sisanya opsional — saya turunkan otomatis (slug, rank/SERP, cousin link, mapping topik KPBU/PPP, angle).

```yaml
month: ""                  # contoh: "2026-09"
seo_report: "none"         # path laporan SEO bila ada, atau "none" (pakai SERP live)

keywords:
  - keyword: ""            # WAJIB  — frasa target, mis. "sertifikasi CP3P"
    landing_page: ""       # disarankan — URL hub di institute.iigf.co.id, atau "belum ada"
    articles: 5            # WAJIB  — jumlah artikel untuk keyword ini
    length: ""             # opsional — mis. "1200-1600"; kosong = default 1.200–1.600
    priority: ""           # opsional — rescue | defend | whitespace | grow | new
    topic_focus: ""        # opsional — topik KPBU/PPP atau program yang diajarkan
    client_anchor: ""      # opsional — Sertifikasi CP3P | PPP capacity building |
                           #            E-Learning Center | Riset & jurnal JIPM | Jejaring UNIID/JPII
    notes: ""              # opsional — audiens / angle khusus / hindari X

  - keyword: ""
    landing_page: ""
    articles: 5
    length: ""
    priority: ""
    topic_focus: ""
    client_anchor: ""
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
  # tambah / hapus blok di atas sesuai kebutuhan
```

---

### Legenda singkat

- **keyword** *(wajib)* — frasa pencarian target, persis.
- **landing_page** *(disarankan)* — halaman hub di `institute.iigf.co.id` yang ditautkan artikel; tulis `belum ada` kalau belum punya.
- **articles** *(wajib)* — berapa artikel (umumnya 5).
- **length** *(opsional)* — rentang kata untuk keyword ini, mis. `1200-1600`. Kosongkan untuk memakai default **1.200–1.600** (target ~1.400). Orchestrator menghitung ulang tiap draft dengan `tools/count_words.py` dan memangkas yang di luar rentang.
- **priority** *(opsional)* — arah angle: `rescue` (rank anjlok), `defend` (sudah bagus), `whitespace` (belum ranking), `grow` (naikkan), `new`.
- **topic_focus / client_anchor / notes** *(opsional)* — kalau kosong, strategist/researcher yang menentukan dari `knowledge_base/product_matrix.md`.

### Yang otomatis (tidak perlu Anda isi)

- Slug (kebab-case dari keyword), rank/SERP, People-Also-Ask, cousin internal-link (dipilih dari keyword lain di daftar ini), mapping topik & angle tiap artikel.
- Aturan kualitas universal tetap berlaku: **edukasi dulu, CTA program di penutup**; voice human/anti-AI (dan **bukan register brosur pelatihan**); framing IIGF Institute sebagai unit pengetahuan PT PII + ATO APMG (≤3 mention, **bukan pemilik/pemberi kredensial CP3P**, bukan universitas); **cakupan CP3P wajib bersumber APMG**; **setiap biaya/angka wajib "indikatif" + tahun rujukan**; **tanpa nama individu**; GEO §2a; section `## Kesimpulan`; internal link inline natural (hanya ke `institute.iigf.co.id`, `jipm.iigf.co.id`, `uniid.or.id`); soft CTA di baris terakhir.
