# Daftar Keyword Bulanan — PT PII · Agustus 2026

**Sumber brief:** Google Sheet klien — https://docs.google.com/spreadsheets/d/1z7lNq63HFo-kUZqES-SdpSGCkkhnbBSAd5ObtOqEHaY/edit
Diambil 2026-08-12. Kolom sheet: `keyword`, `landing_page`, `article`, `Gagas_anchor`, `Bulan`, `Bahasa`.

**Total: 5 keyword × 3 artikel = 15 artikel** (12 Bahasa Indonesia + 3 Inggris).

```yaml
month: "2026-08"
seo_report: "none"

keywords:
  - keyword: "KPBU"
    landing_page: "https://www.ptpii.co.id/kpbu"
    articles: 3
    language: "id"
    length: ""
    priority: "defend"
    topic_focus: "Definisi KPBU, tahapan proyek (perencanaan → penyiapan → transaksi → konstruksi → operasi → berakhirnya perjanjian), pembagian risiko, peran PJPK, funding gap RPJMN"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Hub utama klien. Audiens: pejabat PJPK & tim penyiapan proyek, konsultan transaksi. Ajarkan skema secara vendor-neutral dulu."

  - keyword: "public private partnership"
    landing_page: "https://www.ptpii.co.id/public-private-partnership"
    articles: 3
    language: "en"
    length: ""
    priority: "grow"
    topic_focus: "Indonesia's PPP framework under Perpres 38/2015, PPP vs KPBU terminology, project lifecycle, risk allocation, bankability, government guarantee as credit enhancement"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Landing page klien berbahasa Inggris (PUBLIC PRIVATE PARTNERSHIP GUARANTEE). Audiens: investor & sponsor internasional, lender, analis kredit, lembaga multilateral. Register institusional-internasional; jelaskan KPBU sebagai padanan Indonesia untuk PPP."

  - keyword: "Jaminan Pemerintah"
    landing_page: "https://www.ptpii.co.id/kpbu"
    articles: 3
    language: "id"
    length: ""
    priority: "whitespace"
    topic_focus: "Apa yang dijamin dan apa yang tidak; tiga tahap penjaminan (pra-konstruksi, konstruksi, operasi); hak regress; jaminan ≠ subsidi dan tidak menutup risiko komersial badan usaha; ring-fence kewajiban kontinjensi APBN"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Sel landing_page di sheet berisi JUDUL halaman ('KPBU Indonesia: Definisi & Tantangan Infrastruktur'), bukan URL — judul itu milik https://www.ptpii.co.id/kpbu, jadi hub-nya halaman tersebut. Hindari tumpang tindih dengan klaster KPBU: fokus ke mekanika instrumen penjaminannya, bukan ke skema KPBU-nya."

  - keyword: "Pembiayaan Kreatif"
    landing_page: "https://www.ptpii.co.id/pembiayaan-kreatif"
    articles: 3
    language: "id"
    length: ""
    priority: "defend"
    topic_focus: "Opsi pendanaan di luar APBD murni; UU No. 1 Tahun 2022 (HKPD); KPBU skala kecil/daerah; VGF & fasilitas penyiapan proyek; prasyarat kesiapan pemda"
    client_anchor: "Pembiayaan Kreatif"
    notes: "Audiens: pemda / OPD dan tim perencanaan daerah. Sudut: keterbatasan APBD dan jalan keluarnya. Jangan menjanjikan kepastian pendanaan."

  - keyword: "Pembiayaan Infrastruktur"
    landing_page: "https://www.ptpii.co.id/pembiayaan-kreatif"
    articles: 3
    language: "id"
    length: ""
    priority: "grow"
    topic_focus: "Lanskap pembiayaan infrastruktur nasional; funding gap RPJMN dan komposisi sumber dana; peran lender, obligasi, dan pembiayaan proyek; bagaimana penjaminan menurunkan cost of fund menuju financial close"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Berbagi landing page dengan 'Pembiayaan Kreatif' — WAJIB anti-kanibalisasi: keyword ini bersudut nasional/makro & sisi lender, sedangkan 'Pembiayaan Kreatif' bersudut daerah/APBD. Editor harus mengecek tumpang tindih antarklaster."
```

---

### Catatan penerjemahan brief → file ini

| Kolom sheet | Nilai | Penanganan |
|---|---|---|
| `article` | 3 di semua baris | → `articles: 3` |
| `Bulan` | "Agustus 2026" | → `month: "2026-08"` |
| `Bahasa` | "Indonesia" / "Inggris" | → `language: "id"` / `"en"` |
| `Gagas_anchor` | `https://www.ptpii.co.id/` di semua baris | Sisa header dari template `seo-gagas`. Nilainya = homepage klien, yang memang sudah menjadi target soft CTA baris terakhir sesuai `CLAUDE.md` §5. Tidak menambah aturan baru. |
| `landing_page` (baris "Jaminan Pemerintah") | Judul artikel, bukan URL | Diselesaikan ke `https://www.ptpii.co.id/kpbu` (halaman berjudul sama, terverifikasi 2026-08-12). |

Panjang tidak disebut di brief → memakai default **1.500–1.800 kata (target ~1.650)**.
