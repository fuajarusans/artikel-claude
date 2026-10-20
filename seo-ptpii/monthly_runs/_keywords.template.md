# Daftar Keyword Bulanan — PT PII  (TEMPLATE — tinggal isi)

**Cara pakai:** salin file ini ke `monthly_runs/<YYYY-MM>/keywords.md`, isi, lalu jalankan `/run-month <YYYY-MM>`.
Daftar ini **mengganti penuh** keyword bulan-bulan sebelumnya (tidak ada default). Boleh berapa pun jumlah keyword-nya.

**Wajib** per keyword: `keyword` + `articles`. `landing_page` sangat disarankan. Sisanya opsional — saya turunkan otomatis (slug, rank/SERP, cousin link, mapping topik KPBU, angle).

```yaml
month: ""                  # contoh: "2026-09"
seo_report: "none"         # path laporan SEO bila ada, atau "none" (pakai SERP live)

keywords:
  - keyword: ""            # WAJIB  — frasa target, mis. "KPBU"
    landing_page: ""       # disarankan — URL hub di ptpii.co.id, atau "belum ada"
    articles: 5            # WAJIB  — jumlah artikel untuk keyword ini
    language: "id"         # opsional — "id" (default) atau "en"
    length: ""             # opsional — mis. "1500-1800"; kosong = default 1.500–1.800
    priority: ""           # opsional — rescue | defend | whitespace | grow | new
    topic_focus: ""        # opsional — topik KPBU/penjaminan yang diajarkan
    client_anchor: ""      # opsional — Penjaminan Pemerintah | Pembiayaan Kreatif |
                           #            Penjaminan Pinjaman Langsung | Persiapan & Pendampingan Proyek
    notes: ""              # opsional — audiens / angle khusus / hindari X

  - keyword: ""
    landing_page: ""
    articles: 5
    language: "id"
    length: ""
    priority: ""
    topic_focus: ""
    client_anchor: ""
    notes: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    language: "id"
    priority: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    language: "id"
    priority: ""

  - keyword: ""
    landing_page: ""
    articles: 5
    language: "id"
    priority: ""
  # tambah / hapus blok di atas sesuai kebutuhan
```

---

### Legenda singkat

- **keyword** *(wajib)* — frasa pencarian target, persis.
- **landing_page** *(disarankan)* — halaman hub di `ptpii.co.id` yang ditautkan artikel; tulis `belum ada` kalau belum punya.
- **articles** *(wajib)* — berapa artikel (umumnya 5).
- **language** *(opsional)* — `id` (default) atau `en`. `en` mengarahkan keyword ini ke `seo-article-writer-en`; strukturnya sama, registernya institusional-internasional.
- **length** *(opsional)* — rentang kata untuk keyword ini, mis. `1500-1800`. Kosongkan untuk memakai default **1.500–1.800** (target ~1.650). Orchestrator menghitung ulang tiap draft dengan `tools/count_words.py` dan memangkas yang di luar rentang.
- **priority** *(opsional)* — arah angle: `rescue` (rank anjlok), `defend` (sudah bagus), `whitespace` (belum ranking), `grow` (naikkan), `new`.
- **topic_focus / client_anchor / notes** *(opsional)* — kalau kosong, strategist/researcher yang menentukan dari `knowledge_base/product_matrix.md`.

### Yang otomatis (tidak perlu Anda isi)

- Slug (kebab-case dari keyword), rank/SERP, People-Also-Ask, cousin internal-link (dipilih dari keyword lain di daftar ini), mapping topik & angle tiap artikel.
- Aturan kualitas universal tetap berlaku: voice human/anti-AI (dan **bukan register siaran pers**), framing PT PII sebagai penjamin/BUPI (≤3 mention, bukan pemberi pinjaman/investor/pelaksana/regulator), **setiap angka wajib bertahun rujukan**, **tanpa nama direksi/komisaris**, GEO §2a, section `## Kesimpulan`, internal link inline natural (hanya ke `ptpii.co.id`), soft CTA di baris terakhir.
