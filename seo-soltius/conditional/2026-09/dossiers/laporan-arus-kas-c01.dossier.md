---
brief_id: "laporan-arus-kas-c01"
researcher_run_date: "2026-09-01"
sources_cited: 2
flags: 4
batch: "conditional-2026-09 (RINGKAS — target artikel ~900 kata, 4 H2, FAQ 3, 2 internal link, definisi hanya sekali di snippet)"
---

# Research Dossier: Laporan Arus Kas — Pengertian, Metode Langsung & Tidak Langsung

## TL;DR for the writer

- **Dua fakta pembeda utama TERVERIFIKASI run ini** dan wajib akurat: (1) standar **mendorong metode langsung** (IAS 7 par. 19, yang menjadi acuan PSAK 207) meski praktik mayoritas memakai tidak langsung; (2) **setara kas** = investasi likuid jatuh tempo **umumnya ≤3 bulan** sejak tanggal perolehan (IAS 7 par. 7).
- **PSAK 207** = penomoran ulang **PSAK 2**, **disahkan 12 Desember 2022**, **efektif 1 Januari 2024** — dikonfirmasi langsung dari halaman IAI resmi. Seluruh SERP masih menulis "PSAK 2"; inilah sitasi paling bernilai.
- **Rantai angka ilustrasi SUDAH dicek konsisten** (lihat tabel di bawah): kedua metode berujung **Arus Kas Operasi Rp65.000.000**. JANGAN mengubah satu angka pun tanpa menghitung ulang seluruh rantai.
- **Semantic tag di SAP S/4HANA Finance** (H2 #4) terkonfirmasi run strategist via `learning.sap.com`; researcher meng-endorse framing 1–2 kalimat, **tanpa** nama app/CDS view, **tanpa** Universal Journal/ACDOCA.
- Hormati boundary dedup: laba rugi hanya sebagai titik-awal metode tidak langsung + kontras akrual-vs-kas; jangan bahas struktur/margin laba rugi, neraca saldo, pengelolaan AP/AR, atau forecasting AI.

## Core facts (verified)

> **Claim**: PSAK 207 Laporan Arus Kas adalah penomoran ulang dari PSAK 2.
> **Number/specific**: penomoran ulang **disahkan 12 Desember 2022**, **efektif 1 Januari 2024**. Penomoran diselaraskan dengan IFRS (PSAK yang merujuk IFRS diberi nomor seri 20x).
> **Source**: IAI — web.iaiglobal.or.id/PSAK-Umum/8 (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: PSAK 207 mengklasifikasikan arus kas ke dalam tiga aktivitas.
> **Number/specific**: **operasi, investasi, dan pendanaan** — teks standar: "arus kas ... diklasifikasikan menurut aktivitas operasi, investasi, dan pendanaan".
> **Source**: IAI — web.iaiglobal.or.id/PSAK-Umum/8 (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: Standar mengizinkan dua metode penyajian arus kas operasi, dan mendorong metode langsung.
> **Number/specific**: metode **langsung** (menyajikan kelompok utama penerimaan/pembayaran kas bruto) & **tidak langsung** (menyesuaikan laba/rugi dengan pos nonkas dan perubahan modal kerja). IAS 7 par. 19 — acuan PSAK 207 — **menganjurkan (encourages)** metode langsung; praktik mayoritas tetap memakai tidak langsung karena datanya sudah tersedia dari laba rugi & neraca.
> **Source**: IAI — web.iaiglobal.or.id/PSAK-Umum/8; IFRS/IAS 7 (deloitte iasplus, learnsignal) (diakses 2026-09-01)
> **Confidence**: high untuk "dua metode diizinkan"; medium-high untuk "mendorong metode langsung" (anjuran berasal dari IAS 7 par. 19; PSAK 207 selaras-IFRS — tulis sebagai anjuran standar, bukan pasal PSAK yang dikutip nomornya)

> **Claim**: Definisi kas dan setara kas.
> **Number/specific**: **setara kas** (*cash equivalents*) = investasi jangka sangat pendek yang sangat likuid, mudah dikonversi menjadi kas, dengan risiko perubahan nilai kecil; jatuh tempo **umumnya ≤3 bulan** sejak tanggal perolehan.
> **Source**: IAS 7 (iasplus/IFRS, learnsignal) — selaras PSAK 207 (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: Laporan arus kas adalah salah satu komponen laporan keuangan lengkap.
> **Number/specific**: salah satu dari **lima komponen** laporan keuangan lengkap (bersama laporan posisi keuangan, laba rugi & penghasilan komprehensif lain, perubahan ekuitas, catatan atas laporan keuangan) per kerangka SAK/PSAK.
> **Source**: IAI (PSAK 201 Penyajian Laporan Keuangan, konfirmasi run strategist) (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: Di SAP S/4HANA Finance, laporan arus kas dihasilkan dari data buku besar via semantic tag.
> **Number/specific**: laporan memakai **semantic tag** yang dialokasikan ke akun buku besar (*G/L account*) sebagai sumber data; mendukung metode langsung & tidak langsung; rumus dasar **arus kas = operasi + investasi + pendanaan**.
> **Source**: SAP Learning — learning.sap.com, Financial Statement Reporting (terverifikasi run strategist)
> **Confidence**: high (jangan sebut nama app/transaksi/CDS view — terlalu teknis; JANGAN pakai Universal Journal/ACDOCA)

> **Claim**: Rantai angka ilustrasi konsisten — dua metode, satu hasil.
> **Number/specific**: tidak langsung 82+30−40−25+18 = **65**; langsung 810−517−190−15−23 = **65**; total 65−100+40 = **5**; kas 50+5 = **55**. (Sub-komponen langsung: kas pelanggan 850−40=810; kas pemasok 510+25−18=517; kas beban opex 220−30=190.) **Semua cocok.**
> **Source**: aritmetika diperiksa manual researcher run ini (contoh buatan, wajib dilabeli ilustrasi)
> **Confidence**: high (aritmetika); N/A untuk realisme (angka fiktif — bukan emiten nyata)

## Solution focus + Soltius anchor (from company_profile.md; keyword tidak ada di product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Laporan arus kas di **SAP S/4HANA Finance** | dihasilkan dari data buku besar via **semantic tag**; dukung metode langsung & tidak langsung; rumus = operasi + investasi + pendanaan | H2 #4 (1–2 kalimat, tanpa nama Soltius) | Positioning line Kesimpulan: **SAP Platinum Partner via United VARs, sejak 1998** — mengimplementasikan & mendampingi SAP S/4HANA Finance |

Reminder: Soltius **mengimplementasikan/migrasi/mendampingi** — **bukan** membuat. Maks **2** self-mention (1 positioning line Kesimpulan + 1 soft CTA baris terakhir). CTA anchor funnel: **SAP S/4HANA Finance**.

## Authoritative external sources (2 — untuk ditautkan writer)

1. **Ikatan Akuntan Indonesia (IAI) — "PSAK 207 Laporan Arus Kas"** — https://web.iaiglobal.or.id/PSAK-Umum/8 — *what it backs*: PSAK 207 = penomoran ulang PSAK 2 (disahkan 12 Des 2022, efektif 1 Jan 2024); klasifikasi 3 aktivitas; dua metode (langsung/tidak langsung). **Sitasi utama — pakai di H2 #1 dan/atau H2 #2.**
2. **SAP Learning — Financial Statement Reporting (Creating the Cash Flow Statement)** — https://learning.sap.com/courses/financial-statement-reporting/creating-the-cash-flow-statement-indirect-method_bf92692d-7d4d-47d4-93a0-47641afc4485 — *what it backs*: semantic tag pada akun buku besar sebagai sumber data; rumus operasi + investasi + pendanaan. **Pakai di H2 #4.**

## Internal links (TEPAT 2 — konfirmasi status saat menulis)

- **Hub**: https://www.soltius.co.id/id/blog/macam-macam-laporan-keuangan-dan-pengertiannya — anchor "macam-macam laporan keuangan" — tempatkan di lead atau H2 #1 (saat menyebut 5 komponen laporan keuangan). Hub-spoke sehat: hub memuat arus kas sebagai salah satu jenis, TIDAK membahas metode.
- **Cousin**: https://www.soltius.co.id/id/blog/laporan-laba-rugi-komponen-jenis-cara-membaca — anchor "laporan laba rugi" — tempatkan di H2 #3 saat menyebut laba bersih sebagai titik awal metode tidak langsung. **Fallback bila belum live**: https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya (anchor "siklus akuntansi"). Pasang HANYA salah satu — tetap tepat 2 tautan total.

## Structured element for the writer — Metode Langsung vs Tidak Langsung + contoh (dua metode, satu hasil)

**Tabel A — Komparasi dua metode (untuk H2 #2):**

| Dimensi | Metode Langsung (*direct method*) | Metode Tidak Langsung (*indirect method*) |
|---|---|---|
| Titik awal | Arus kas bruto: penerimaan & pembayaran kas | **Laba bersih** dari laporan laba rugi |
| Yang ditampilkan | Kas dari pelanggan, kas ke pemasok, gaji, bunga, pajak | Laba bersih + koreksi pos nonkas & perubahan modal kerja |
| Sumber data | Data penerimaan/pembayaran kas bruto | Laporan laba rugi + perubahan pos neraca |
| Kelebihan | Lebih transparan; sumber & guna kas terlihat jelas | Lebih hemat kerja; data sudah tersedia |
| Kekurangan | Menuntut data kas bruto yang tidak selalu terekam rapi | Kaitan ke kas nyata kurang kentara |

> **Catatan kunci (poin ajar):** perbedaan kedua metode **HANYA pada bagian aktivitas operasi**. Aktivitas investasi & pendanaan disusun **sama persis** di kedua metode. Apa pun metodenya, **arus kas operasi yang dihasilkan sama** — pada ilustrasi ini **Rp65.000.000**. Standar (IAS 7/PSAK 207) **mendorong metode langsung**, namun praktik mayoritas memakai tidak langsung.

**Data awal ilustrasi (dari laba rugi & perubahan neraca perusahaan ilustrasi — WAJIB dilabeli ilustrasi):**
Laba Bersih **Rp82.000.000**; Penyusutan (nonkas) **Rp30.000.000**; kenaikan Piutang Usaha **Rp40.000.000**; kenaikan Persediaan **Rp25.000.000**; kenaikan Utang Usaha **Rp18.000.000**.

**Tabel B1 — Metode tidak langsung (aktivitas operasi):**

| Komponen | Nilai (Rp) |
|---|---|
| Laba bersih | 82.000.000 |
| + Penyusutan (nonkas) | 30.000.000 |
| − Kenaikan piutang usaha | (40.000.000) |
| − Kenaikan persediaan | (25.000.000) |
| + Kenaikan utang usaha | 18.000.000 |
| **= Arus kas operasi** | **65.000.000** |

**Tabel B2 — Metode langsung (aktivitas operasi):**

| Komponen | Nilai (Rp) | Cara hitung |
|---|---|---|
| Kas dari pelanggan | 810.000.000 | Pendapatan 850 − kenaikan piutang 40 |
| − Kas ke pemasok | (517.000.000) | HPP 510 + kenaikan persediaan 25 − kenaikan utang 18 |
| − Kas beban operasional | (190.000.000) | Beban opex 220 − penyusutan 30 |
| − Kas bunga | (15.000.000) | — |
| − Kas pajak | (23.000.000) | — |
| **= Arus kas operasi** | **65.000.000** | **dua jalan, satu hasil** |

**Tabel C — Laporan lengkap (3 aktivitas):**

| Aktivitas | Nilai (Rp) |
|---|---|
| Arus kas operasi | 65.000.000 |
| Arus kas investasi (pembelian peralatan) | (100.000.000) |
| Arus kas pendanaan (tarik pinjaman 60 − dividen 20) | 40.000.000 |
| **Kenaikan bersih kas** | **5.000.000** |
| Kas awal periode | 50.000.000 |
| **Kas akhir periode** | **55.000.000** |

> **Honest hedging (1–2 kalimat, pengganti H2 honest):** laba **Rp82 juta** hanya menyisakan tambahan kas **Rp5 juta** setelah investasi & pendanaan. Perusahaan bisa untung di atas kertas namun kehabisan kas bila piutang menumpuk atau kas terpakai membeli aset — sebab itu laporan arus kas dibaca berdampingan dengan laba rugi.

## FAQ Q&As (3 — Bahasa Indonesia, 30–60 kata, tiap jawaban 1 fakta)

### Metode mana yang lebih sering dipakai, langsung atau tidak langsung?
Metode **tidak langsung** paling umum karena bertolak dari laba bersih yang sudah tersedia di laporan laba rugi, sehingga lebih hemat kerja. Metode langsung lebih transparan tetapi menuntut data kas bruto. Menariknya, standar (IAS 7/PSAK 207) justru **mendorong metode langsung**, meski praktik mayoritas memilih tidak langsung.

### Apa perbedaan laporan arus kas dan laporan laba rugi?
Laporan laba rugi berbasis **akrual** — mencatat pendapatan dan beban saat transaksi terjadi. Laporan arus kas mencatat **kas nyata** masuk-keluar. Perusahaan bisa mencatat laba tetapi arus kas operasinya negatif; pada ilustrasi, laba bersih **Rp82 juta** menjadi arus kas operasi **Rp65 juta**.

### Apa itu kas dan setara kas?
Kas mencakup uang tunai dan saldo rekening bank. **Setara kas** (*cash equivalents*) adalah investasi sangat likuid berjangka sangat pendek — lazimnya jatuh tempo **tiga bulan atau kurang** sejak perolehan — yang mudah dikonversi menjadi kas dengan risiko perubahan nilai kecil. Itulah yang dilacak laporan arus kas.

## Definition snippet draft (40–60 kata) — SATU-SATUNYA definisi; body dilarang mengulang

> Ringkasnya: laporan arus kas (*cash flow statement*) adalah laporan keuangan yang merangkum seluruh kas masuk dan kas keluar perusahaan selama satu periode, dikelompokkan ke dalam tiga aktivitas: operasi, investasi, dan pendanaan. Berbeda dari laporan laba rugi yang berbasis akrual, laporan ini hanya mencatat pergerakan kas nyata, sehingga menunjukkan dari mana uang datang dan ke mana perginya.

*(56 kata — dalam band 40–60.)*

## Edge cases & nuance

- "Mendorong metode langsung" adalah **anjuran** standar, bukan kewajiban — kedua metode sama-sama diperbolehkan. Tulis sebagai anjuran; **jangan** mengklaim ada pasal/paragraf PSAK yang mewajibkan.
- "≤3 bulan" adalah pedoman lazim ("generally less than three months from date of acquisition"), bukan garis mati mutlak — gunakan kata "umumnya/lazimnya".
- Arus kas operasi bisa berbeda tanda dari laba — inti paradoks "untung tapi kas seret"; jangan samakan laba dengan kas.

## Flags (open factual risk)

- ⚠️ **"PSAK 207 mendorong metode langsung"**: anjuran metode langsung berasal dari **IAS 7 par. 19** (acuan PSAK 207), bukan kutipan pasal PSAK 207 bernomor. Aman ditulis sebagai "standar mendorong/menganjurkan metode langsung"; **JANGAN** mengarang nomor paragraf PSAK. Bila ragu, longgarkan jadi "kedua metode diperbolehkan".
- ⚠️ **Angka ilustrasi (Rp82jt→65jt, dst.)**: **contoh buatan** — WAJIB dilabeli "ilustrasi". Bukan data emiten nyata; jangan pakai nama perusahaan nyata. Bila writer mengubah satu angka, seluruh rantai kedua metode wajib dihitung ulang.
- ⚠️ **Tarif pajak / benchmark likuiditas**: **JANGAN** mengarang tarif pajak atau persentase patokan. Nominal pajak Rp23 juta berdiri sebagai bagian ilustrasi tanpa menyebut tarif.
- ⚠️ **SAP S/4HANA (H2 #4)**: cukup 1–2 kalimat konseptual (semantic tag + rumus). **JANGAN** menyebut nama transaksi/app/CDS view (mis. `C_CashFlowIndirectIFRS`); **JANGAN** memakai Universal Journal/ACDOCA (sudah dipakai artikel lain di cluster).

## Boundary reminders (dedup — jangan sediakan material di luar batas)

Jangan bahas: jurnal umum/debit-kredit/posting; neraca saldo & jenisnya; struktur/komponen/margin/single-multiple step laba rugi (laba rugi HANYA titik awal metode tidak langsung + kontras akrual-kas); pengelolaan AP/AR (piutang/utang hanya delta modal kerja); forecasting arus kas AI/Joule/Cash Management Agent; Universal Journal/ACDOCA.
