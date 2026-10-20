# Daftar Keyword Bulanan — PT PII · September 2026

**Sumber brief:** Google Sheet klien — https://docs.google.com/spreadsheets/d/1z7lNq63HFo-kUZqES-SdpSGCkkhnbBSAd5ObtOqEHaY/edit
Diambil 2026-09-17. Baris "September 2026" **identik** dengan baris "Agustus 2026": keyword, landing page, jumlah artikel, dan bahasa sama persis.

**Total: 5 keyword × 3 artikel = 15 artikel** (12 Bahasa Indonesia + 3 Inggris).

> ⚠️ **Tantangan utama bulan ini adalah dedup, bukan riset dasar.** `articles_history/` sudah berisi **15 artikel Agustus 2026** pada kelima keyword yang sama. Sudut-sudut paling jelas (definisi, tahapan, matriks risiko, taksonomi instrumen, checklist kesiapan, peta sumber dana, pilihan struktur pembiayaan, uji komite kredit) **sudah terpakai**. Setiap catatan `topic_focus` di bawah diambil dari bagian *"Angles still uncovered"* pada rekaman `articles_history/by_keyword/<slug>/*.md` — itulah lahan yang sengaja disisakan strategist Agustus.

```yaml
month: "2026-09"
seo_report: "none"

keywords:
  - keyword: "KPBU"
    landing_page: "https://www.ptpii.co.id/kpbu"
    articles: 3
    language: "id"
    length: ""
    priority: "defend"
    topic_focus: "Lahan tersisa dari Agustus: lima kajian dalam prastudi kelayakan; Availability Payment vs User Charge sebagai skema pengembalian investasi; KPBU skala kecil sebagai jalur proses tersendiri; KPBU per sektor (air minum, jalan tol, ketenagalistrikan, persampahan, kereta); studi tahap transaksi prakualifikasi sampai financial close"
    client_anchor: "Penjaminan Pemerintah"
    notes: "HINDARI sudut Agustus: tahapan enam langkah, kerangka Value for Money KPBU-vs-APBN, dan matriks alokasi risiko. Ketiganya sudah terbit."

  - keyword: "public private partnership"
    landing_page: "https://www.ptpii.co.id/public-private-partnership"
    articles: 3
    language: "en"
    length: ""
    priority: "grow"
    topic_focus: "Lahan tersisa dari Agustus: ECA dan pembiayaan bersama lembaga multilateral; selera lender domestik vs internasional; prosedur step-in dan take-over dalam praktik; kerangka PPP Indonesia dibanding negara ASEAN lain; guarantee bertema transisi energi/iklim; sektor-spesifik risk allocation template"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Audiens internasional (investor, sponsor, lender lintas batas, staf DFI); register institusional-internasional. HINDARI sudut Agustus: matriks alokasi risiko + batas jaminan, bankability menuju financial close, dan perbandingan dengan MIGA/MDB/ECA sebagai instrumen. Perbandingan ECA boleh, tetapi dari sisi PEMBIAYAAN BERSAMA, bukan sebagai pembanding produk penjaminan."

  - keyword: "Jaminan Pemerintah"
    landing_page: "https://www.ptpii.co.id/kpbu"
    articles: 3
    language: "id"
    length: ""
    priority: "whitespace"
    topic_focus: "Lahan tersisa dari Agustus: akuntansi kewajiban kontinjensi dan uji tekanan fiskal; instrumen gabungan (VGF + penjaminan + Availability Payment) dan urutan pemakaiannya; penjaminan untuk proyek daerah / sub-sovereign; kapasitas penjaminan, gearing, dan batasnya; penjaminan di sektor tertentu"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Sel landing_page di sheet berisi JUDUL halaman ('KPBU Indonesia: Definisi & Tantangan Infrastruktur'), bukan URL — judul itu milik https://www.ptpii.co.id/kpbu. HINDARI sudut Agustus: peta dijamin-vs-tidak-dijamin per tahap, taksonomi empat instrumen fiskal, dan alur klaim + hak regres."

  - keyword: "Pembiayaan Kreatif"
    landing_page: "https://www.ptpii.co.id/pembiayaan-kreatif"
    articles: 3
    language: "id"
    length: ""
    priority: "defend"
    topic_focus: "Lahan tersisa dari Agustus: land value capture dan hasil yang benar-benar terealisasi; kesinambungan utang daerah dan batas pinjaman daerah; pemilihan instrumen per sektor (air minum vs jalan vs energi vs persampahan); desain program capacity building; proses persetujuan DPRD dan ekonomi politiknya; studi kasus daerah yang berhasil"
    client_anchor: "Pembiayaan Kreatif"
    notes: "Audiens pemda/OPD/Bappeda. HINDARI sudut Agustus: peta enam instrumen di luar APBD, checklist delapan prasyarat kesiapan pemda, dan tujuh penyebab proyek mandek."

  - keyword: "Pembiayaan Infrastruktur"
    landing_page: "https://www.ptpii.co.id/pembiayaan-kreatif"
    articles: 3
    language: "id"
    length: ""
    priority: "grow"
    topic_focus: "Lahan tersisa dari Agustus: model pembiayaan per sektor (air minum vs jalan tol vs ketenagalistrikan vs EBT); pembiayaan bersama lembaga multilateral; ketimpangan pendanaan antarwilayah; dinamika refinancing dan perpanjangan tenor; biaya modal dan negosiasi tenor"
    client_anchor: "Penjaminan Pemerintah"
    notes: "Berbagi landing page dengan 'Pembiayaan Kreatif' — WAJIB anti-kanibalisasi: keyword ini bersudut nasional/makro dan sisi pembiaya, sedangkan 'Pembiayaan Kreatif' bersudut daerah/APBD. HINDARI sudut Agustus: peta sumber dana nasional + perdebatan cakupan angka, corporate vs project finance, dan uji komite kredit."
```

---

### Catatan penerjemahan brief → file ini

| Kolom sheet | Nilai | Penanganan |
|---|---|---|
| `article` | 3 di semua baris | → `articles: 3` |
| `Bulan` | "September 2026" | → `month: "2026-09"` |
| `Bahasa` | "Indonesia" / "Inggris" | → `language: "id"` / `"en"` |
| `Gagas_anchor` | `https://www.ptpii.co.id/` di semua baris | Sisa header dari template `seo-gagas`; nilainya homepage klien, yang memang sudah jadi target soft CTA baris terakhir sesuai `CLAUDE.md` §5. Tidak menambah aturan baru. |
| `landing_page` (baris "Jaminan Pemerintah") | Judul artikel, bukan URL | Diselesaikan ke `https://www.ptpii.co.id/kpbu` (terverifikasi Agustus 2026). |

Panjang tidak disebut di brief → memakai default **1.500–1.800 kata (target ~1.650)**.

### Hanya ada 3 hub URL berbeda di set bulan ini

`/kpbu` · `/public-private-partnership` · `/pembiayaan-kreatif`. Karena itu setiap artikel menautkan ketiganya (hub sendiri di lead, dua sisanya sebagai cousin kontekstual), dengan **anchor text yang bervariasi antarartikel** agar jejak tautan internal tidak terlihat seragam — termasuk berbeda dari anchor yang sudah dipakai artikel Agustus.

### Fakta Agustus yang perlu diperiksa ulang karena sudah lewat lima minggu

- **Obligasi daerah DKI Jakarta** — per 27 Juli 2026 baru disetujui DPRD (rencana Rp 3,5 triliun untuk TA 2027), belum diterbitkan dan belum terdaftar di OJK. Klaim "belum ada daerah yang pernah menerbitkan" ditulis terikat waktu di artikel Agustus. **Cek status per September 2026** sebelum mengulanginya.
- **Peringkat Fitch** — BBB / F2 / AAA(idn), Outlook Stabil, afirmasi 12 Februari 2026. Cek belum ada aksi pemeringkatan baru.
- **Portofolio** — 61 proyek (38 KPBU + 23 non-KPBU), > Rp 732 triliun, per Juni 2026. Cek apakah ada publikasi lebih baru.
