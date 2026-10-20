---
brief_id: "laporan-laba-rugi-c01"
researcher_run_date: "2026-07-17"
batch: "conditional-2026-08 (style_addendum.md — 800–1000 kata, target ~900; FAQ 3; internal link 2; TANPA image placeholder)"
sources_cited: 6
verified_claims: 12
flags: 8
---

# Research Dossier: Laporan Laba Rugi: Komponen, Jenis, dan Cara Membacanya

> **Dossier ini sengaja RINGKAS** (artikel target ~900 kata, 4 H2 ramping). Isinya hanya 12 klaim terkuat yang melayani skeleton brief. Semua yang tidak ada di sini = jangan ditulis.

## TL;DR for the writer

1. **Fakta pembeda utama TERKONFIRMASI**: PSAK 1 memang sudah dinomori ulang jadi **PSAK 201**, **disahkan 12 Desember 2022**, **efektif 1 Januari 2024** — verbatim dari IAI. Seluruh SERP masih menulis "PSAK 1". Pakai ini.
2. **⚠️ KOREKSI PENTING atas brief**: brief menyuruh menulis **"5 komponen laporan keuangan lengkap"**. **Halaman IAI TIDAK menyebut angka apa pun** — lead-in-nya hanya "Komponen laporan keuangan lengkap terdiri dari:" lalu daftar berhuruf, yang di dalamnya ada **satu item bersyarat** dan **satu item informasi komparatif**. **JANGAN menulis angka "5"** (atau 6). Tulis: *"salah satu komponen laporan keuangan lengkap menurut PSAK 201"*. Berlaku juga di FAQ #1. Detail di Flags F1.
3. **FSV TERKONFIRMASI** dari SAP Learning, kutipan kuat & aman: *"as many financial statement versions as you need… for tax authorities, for internal users, and for external users"*, dan laba/rugi dihitung otomatis oleh report yang sama.
4. **Rantai ilustrasi lolos audit aritmetika** (dihitung ulang run ini): 40,0000% / 14,1176% / 9,6471% → dibulatkan **40,0% / 14,1% / 9,6%**. Aman dipakai apa adanya. Jangan ubah satu angka pun.
5. **Tarif pajak: JANGAN ditulis.** 22% terverifikasi sebagai tarif PPh badan umum, **tapi** pajak Rp 23.000.000 pada ilustrasi = **21,90%** dari laba sebelum pajak, bukan 22% — dan PPh dihitung atas *penghasilan kena pajak* (fiskal), bukan laba akuntansi. Tampilkan nominalnya saja. Detail di Flags F2.
6. **Benchmark margin: NIHIL sumber kredibel** — sesuai dugaan brief. Ada angka yang *terlihat* otoritatif (BI Business Survey via CEIC) tapi mengukur hal lain. **Jangan pakai.** Detail di Flags F4.

---

## Core facts (verified)

### A. Standar akuntansi (IAI)

> **Claim 1**: PSAK 1 telah dinomori ulang menjadi PSAK 201.
> **Number/specific**: verbatim IAI — *"Perubahan penomoran dari PSAK 1 menjadi PSAK 201 disahkan pada 12 Desember 2022 dan berlaku efektif pada 1 Januari 2024."*
> **Source**: Ikatan Akuntan Indonesia (IAI), "PSAK 201 Penyajian Laporan Keuangan" — https://web.iaiglobal.or.id/PSAK-Umum/7 — diakses 2026-07-17 (200 OK)
> **Confidence**: high — otoritas penyusun SAK, kutipan langsung.

> **Claim 2**: Judul resmi standarnya = **"PSAK 201 Penyajian Laporan Keuangan"**; komponen laba ruginya dinamai **"laporan laba rugi dan penghasilan komprehensif lain selama periode"**.
> **Source**: IAI, ibid. — diakses 2026-07-17
> **Confidence**: high — frasa verbatim.
> **Catatan pemakaian**: sebut frasa panjang ini **maksimal 1 frasa** saat mengutip judul resmi. OCI/penghasilan komprehensif lain **bukan** topik artikel ini (lihat "Notes for future strategist runs" di brief).

> **Claim 3**: Komponen laporan keuangan lengkap per PSAK 201 mencakup — verbatim, urut: *"laporan posisi keuangan pada akhir periode"*; *"laporan laba rugi dan penghasilan komprehensif lain selama periode"*; *"laporan perubahan ekuitas selama periode"*; *"laporan arus kas selama periode"*; *"catatan atas laporan keuangan, berisi ringkasan kebijakan akuntansi yang signifikan dan informasi penjelasan lain"*; *"informasi komparatif mengenai periode terdekat sebelumnya sebagaimana ditentukan dalam paragraf 38 dan 38A"*; dan *"laporan posisi keuangan pada awal periode terdekat sebelumnya **ketika entitas menerapkan suatu kebijakan akuntansi secara retrospektif atau membuat penyajian kembali pos-pos laporan keuangan, atau ketika entitas mereklasifikasi pos-pos dalam laporan keuangannya**"*.
> **Number/specific**: **TIDAK ADA ANGKA yang dinyatakan halaman itu.** Lead-in verbatim: *"Komponen laporan keuangan lengkap terdiri dari:"* — tanpa "lima"/"enam".
> **Source**: IAI, ibid. — diakses 2026-07-17
> **Confidence**: high untuk daftarnya; **angka "5" = TIDAK TERVERIFIKASI** → lihat Flag F1.
> **Yang boleh ditulis**: laporan laba rugi adalah **salah satu komponen** laporan keuangan lengkap menurut PSAK 201 — bersama neraca (laporan posisi keuangan), laporan perubahan ekuitas, laporan arus kas, dan catatan atas laporan keuangan. **Tanpa angka.**

### B. Lensa sistem — Financial Statement Version (SAP Learning)

> **Claim 4**: Satu perusahaan dapat mendefinisikan banyak versi laporan keuangan untuk audiens berbeda.
> **Number/specific**: verbatim SAP — *"You can define as many financial statement versions as you need to make reports for various purposes, such as for tax authorities, for internal users, and for external users."*
> **Source**: SAP Learning, "Managing Financial Statements" (Configuring the Financial Closing in SAP S/4HANA) — https://learning.sap.com/courses/configuring-the-financial-closing-in-sap-s-4hana/managing-financial-statements — diakses 2026-07-17 (200 OK, body lengkap)
> **Confidence**: high — SAP official.

> **Claim 5**: FSV menentukan struktur laporannya — verbatim: *"The items to be included, and the sequence and hierarchy of these items"*; *"The text describing the items"*; *"The charts of accounts and the individual accounts relevant to the report"*; *"The totals to be displayed"*.
> **Source**: SAP Learning, ibid. — diakses 2026-07-17
> **Confidence**: high.

> **Claim 6**: Hasil laba/rugi dihitung otomatis, bukan disusun manual.
> **Number/specific**: verbatim — *"The net profit or net loss, as well as the profit and loss results, are calculated using the same report that you use to create the financial statement."*
> **Source**: SAP Learning, ibid. — diakses 2026-07-17
> **Confidence**: high.
> **Catatan pemakaian**: cukup **1–2 kalimat** di H2 #4. **DILARANG**: Universal Journal/ACDOCA (sudah dipakai 3 artikel), kode transaksi, nama app, nomor versi, modul FI/CO, closing, konsolidasi.

### C. Pajak (DJP) — verifikasi untuk MEMAGARI, bukan untuk ditulis

> **Claim 7**: Tarif PPh badan umum Indonesia = **22%**, dasar hukum **Pasal 17 ayat (1) b UU No. 7 Tahun 2021 (HPP)**, berlaku **mulai tahun pajak 2022**, dikenakan atas **penghasilan kena pajak**.
> **Number/specific**: verbatim DJP — *"tarif pajak yang diterapkan atas Penghasilan Kena Pajak bagi Wajib Pajak Badan dalam negeri…sebesar 22% mulai berlaku pada tahun pajak 2022"*. Fasilitas lain yang ada di halaman itu: 19% untuk perseroan terbuka (min. 40% saham diperdagangkan), pengurangan 50% Pasal 31E untuk peredaran bruto ≤ Rp4,8 miliar, PPh final 0,5% per PP 55/2022.
> **Source**: Direktorat Jenderal Pajak, "Lima Jenis Tarif PPh Badan yang Wajib Diperhatikan" — https://www.pajak.go.id/en/node/94054 — diakses 2026-07-17
> **Confidence**: high untuk tarifnya.
> **REKOMENDASI: JANGAN tulis persentase tarif di artikel.** Alasan di Flag F2. Nominal Rp 23.000.000 berdiri sendiri sebagai bagian ilustrasi.

### D. Ilustrasi — audit aritmetika (dihitung ulang run ini)

> **Claim 8**: Rantai ilustrasi brief **konsisten**. Diverifikasi: 850.000.000 − 510.000.000 = **340.000.000**; 340 − 220 = **120.000.000**; 120 − 15 = **105.000.000**; 105 − 23 = **82.000.000**.
> **Source**: perhitungan internal researcher, 2026-07-17
> **Confidence**: high.

> **Claim 9**: Ketiga margin **konsisten** pada pembulatan satu desimal. Hasil presisi: margin kotor **40,0000%**; margin operasi **14,1176%** → **14,1%**; margin bersih **9,6471%** → **9,6%**.
> **Source**: perhitungan internal researcher, 2026-07-17
> **Confidence**: high.
> **Aturan keras**: bila writer mengubah **satu** angka, seluruh rantai + ketiga margin wajib dihitung ulang. Rekomendasi: **jangan ubah apa pun**. Wajib dilabeli **ilustrasi**; dilarang memakai nama perusahaan nyata.

### E. Tautan internal (dicek ulang run ini)

> **Claim 10**: Hub **200 OK**, judul: *"Mengupas Tuntas Mengenai Macam-Macam Laporan Keuangan dan Pengertiannya"* — https://www.soltius.co.id/id/blog/macam-macam-laporan-keuangan-dan-pengertiannya. Memuat laporan laba rugi + menyinggung single step ("sederhana dan mudah dimengerti") vs multiple step secara **dangkal**; membahas **4 macam** laporan (laba rugi, neraca, arus kas, CALK) — **tanpa laporan perubahan ekuitas**.
> **Confidence**: high (WebFetch 2026-07-17).
> **Implikasi**: (a) H2 #2 **wajib lebih dalam** dari hub (tabel + implikasi ke keterbacaan margin); (b) **jangan** menulis "4 macam laporan keuangan" mengikuti hub — bertabrakan dengan daftar PSAK 201. Hindari angka, lihat Flag F1.

> **Claim 11**: Cousin **200 OK**, judul: *"Apa itu Siklus Akuntansi dan Manfaatnya?"* — https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya. **Tidak** menyebut laporan laba rugi sebagai output akhir; berhenti di "menyusun laporan keuangan".
> **Confidence**: high (WebFetch 2026-07-17).
> **Implikasi**: tautkan sebagai **konteks tahapan** ("muara dari siklus akuntansi") — **jangan** mengklaim halaman itu membahas laporan laba rugi.

### F. Soltius (knowledge_base — verified by default)

> **Claim 12**: Soltius — **SAP Platinum Partner melalui United VARs**, berpengalaman **sejak 1998**, bagian dari **Metrodata Group**; solusi inti **ERP SAP S/4HANA & ERP for Large Enterprises**.
> **Source**: `knowledge_base/company_profile.md`
> **Confidence**: high.
> **Framing**: **implements / migrates / supports — NEVER builds/owns**. Pilih **SATU** kredensial, jangan menumpuk. Maks **2** mention total.

---

## Solution focus + Soltius anchor

| What to teach | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| Laporan laba rugi (*income statement*) — vendor-neutral | Salah satu komponen laporan keuangan lengkap per PSAK 201 (tanpa angka); berbasis akrual | snippet + H2 #1 | — (tanpa Soltius di body) |
| Struktur bertingkat + margin + analisis vertikal (*common size*) | 3 lapis laba; rumus margin; angka ilustrasi | H2 #1, H2 #3 | — |
| **Financial Statement Version (FSV)** di **SAP S/4HANA Finance** | Multi-versi (pajak/internal/eksternal); item-urutan-hierarki dikonfigurasi; laba/rugi dihitung otomatis | H2 #4 (1–2 kalimat) | — (tanpa nama Soltius) |
| Positioning | SAP Platinum Partner via United VARs, sejak 1998; mengimplementasikan & mendampingi SAP S/4HANA Finance | Kesimpulan (1 line) | 1 dari 2 mention |
| Funnel | soft CTA soltius.co.id, anchor **SAP S/4HANA Finance** | baris terakhir | 2 dari 2 mention |

---

## Authoritative external sources (sitasi final 1–2 inline)

1. **Ikatan Akuntan Indonesia (IAI) — "PSAK 201 Penyajian Laporan Keuangan"** — https://web.iaiglobal.or.id/PSAK-Umum/7 — *backs*: penomoran ulang PSAK 1 → PSAK 201, disahkan 12 Desember 2022, efektif 1 Januari 2024; laporan laba rugi sebagai salah satu komponen laporan keuangan lengkap. **Pakai di H2 #1. Ini sitasi paling bernilai di artikel.**
2. **SAP Learning — "Managing Financial Statements"** — https://learning.sap.com/courses/configuring-the-financial-closing-in-sap-s-4hana/managing-financial-statements — *backs*: FSV multi-versi untuk otoritas pajak/internal/eksternal; item-urutan-hierarki; laba/rugi dihitung otomatis. **Pakai di H2 #4.**

> Cadangan (hanya bila perlu, **jangan** dijadikan sitasi ke-3 — batas 1–2): DJP https://www.pajak.go.id/en/node/94054 (tarif PPh badan). `help.sap.com` FSV tetap JS-rendered — **tidak dipakai**, `learning.sap.com` sudah cukup.

---

## Definition snippet draft (50 kata — pakai versi ini)

> **Ringkasnya:** laporan laba rugi (*income statement*) adalah laporan keuangan yang merangkum pendapatan dan beban perusahaan selama satu periode tertentu (sebulan, satu kuartal, atau setahun) untuk menunjukkan apakah operasinya menghasilkan laba atau rugi bersih. Berbeda dari neraca yang memotret posisi keuangan pada satu tanggal, laporan ini mengukur kinerja sepanjang rentang waktu.

- **Hitungan: 50 kata** (band 40–60 ✓).
- Versi ini sengaja memakai **kurung**, bukan em-dash — agar jatah em-dash artikel (**maks 2**) tidak habis di snippet.
- **INI SATU-SATUNYA DEFINISI.** Body/H2/jawaban langsung **dilarang** menyatakannya ulang dengan kata lain.
- Entity sudah jelas di kalimat pertama (*laporan laba rugi* + padanan Inggris) → extractable untuk AI Overview.

---

## Structured element — "Template + interpretasi" (data akurat untuk writer)

### (1) Tabel komponen bertingkat — H2 #1 ("template" yang diminta sheet)

| Komponen | Isi singkat | Hasil setelah dikurangkan |
|---|---|---|
| Pendapatan (*revenue*) | Nilai penjualan barang/jasa sepanjang periode | Titik awal |
| Harga Pokok Penjualan (HPP/*Cost of Goods Sold*) | Biaya langsung barang/jasa yang terjual | → **Laba Kotor** (*gross profit*) |
| Beban Operasional | Gaji, sewa, pemasaran, penyusutan | → **Laba Operasi** (*operating profit*) |
| Pendapatan/Beban Lain | Mis. beban bunga pinjaman | → **Laba Sebelum Pajak** |
| Pajak Penghasilan | Kewajiban pajak badan atas laba | → **Laba Bersih** (*net profit*) |

> **HPP = SATU BARIS.** Jangan menghitungnya, jangan sebut bahan baku/BTKL/BOP/WIP/COGM/PSAK 14 (milik `cara-menghitung-hpp-c01`). Boleh sekali menyebut bahwa perhitungannya dibahas terpisah.

### (2) Tabel komparasi single vs multiple step — H2 #2

| Dimensi | Single Step | Multiple Step |
|---|---|---|
| Cara hitung | Seluruh pendapatan dijumlahkan, seluruh beban dikurangkan sekaligus | Beban dikurangkan bertahap, per lapisan |
| Lapisan laba yang muncul | **1** (laba bersih saja) | **3** (kotor, operasi, bersih) |
| Pemisahan operasional / non-operasional | Tidak | Ya |
| Cocok untuk | Usaha kecil, struktur biaya sederhana | Usaha dagang/manufaktur, pembaca eksternal |
| Keterbacaan margin | Margin kotor **tidak pernah muncul** → analisis per lapisan mustahil | Ketiga margin bisa dihitung langsung |

> Poin quotable + jembatan ke H2 #3: **bedanya bukan isi, melainkan berapa kali laba dihitung.**

### (3) Rantai ilustrasi + rumus margin — H2 #3 (CORE)

**Rantai (wajib dilabeli *ilustrasi*):**

Pendapatan **Rp 850.000.000** − HPP **Rp 510.000.000** = Laba Kotor **Rp 340.000.000** − Beban Operasional **Rp 220.000.000** = Laba Operasi **Rp 120.000.000** − Beban Bunga **Rp 15.000.000** = Laba Sebelum Pajak **Rp 105.000.000** − Pajak Penghasilan **Rp 23.000.000** = Laba Bersih **Rp 82.000.000**.

**Tiga rumus + pertanyaan diagnostiknya** (list ber-lead-in bold):

- **Margin laba kotor** = Laba Kotor ÷ Pendapatan × 100% = 340 ÷ 850 = **40,0%** → menguji harga jual dan efisiensi produksi.
- **Margin laba operasi** = Laba Operasi ÷ Pendapatan × 100% = 120 ÷ 850 ≈ **14,1%** → menguji disiplin beban operasional, di luar pengaruh pendanaan dan pajak.
- **Margin laba bersih** = Laba Bersih ÷ Pendapatan × 100% = 82 ÷ 850 ≈ **9,6%** → menguji hasil akhir setelah bunga dan pajak.

> Nama tekniknya: **analisis vertikal** (*common size*) — mengubah tiap lapisan laba menjadi persentase terhadap pendapatan. **Namai entitasnya** (bahan bakar GEO); tidak satu pun pesaing melakukannya.

### (4) Aturan membaca — pembeda utama dari SERP (poin orisinal, bukan klaim eksternal)

| Yang terlihat | Diagnosis yang ditunjuk |
|---|---|
| Margin kotor **turun**, margin operasi stabil | Masalah di harga jual atau biaya produksi |
| Margin kotor stabil, margin operasi **turun** | Beban operasional yang menggerus |
| Margin kotor & operasi stabil, margin bersih **turun** | Biasanya beban bunga atau pajak — bukan operasi |

> Aturan penutup: **satu periode tidak bercerita apa-apa.** Angka margin baru bermakna saat dibandingkan antarperiode atau antarperusahaan sejenis. (Ini sekaligus pengganti jujur dari benchmark yang tidak bisa kita sebut — lihat Flag F4.)

### (5) Honest hedging (1–2 kalimat di H2 #3, pengganti H2 honest per addendum §2)

Laba bersih besar tidak berarti kas ikut bertambah: laporan laba rugi disusun **berbasis akrual**, sehingga penjualan kredit yang belum tertagih tetap tercatat sebagai pendapatan, dan penyusutan mengurangi laba tanpa mengeluarkan kas. Karena itu laporan ini dibaca berdampingan dengan **laporan arus kas**, bukan sendirian.

> Arus kas: **maks 1–2 kalimat** — topik itu disisakan untuk artikel lain.

---

## FAQ Q&As (3 — sesuai batch override; ambil dari PAA brief)

### Apa perbedaan laporan laba rugi dan neraca?

Keduanya berbeda sumbu waktu dan saling tersambung. Neraca memotret aset, liabilitas, dan ekuitas pada satu tanggal; laporan laba rugi merekam pendapatan dan beban sepanjang periode. Sambungannya: laba bersih mengalir ke ekuitas sebagai saldo laba. PSAK 201 menempatkan keduanya sebagai komponen laporan keuangan lengkap.

*(43 kata ✓ · fakta: PSAK 201 · **tanpa angka "5"** — lihat Flag F1 · dibuka dari sudut "tersambung" agar tidak memparafrase snippet)*

### Apa bedanya laba kotor dan laba bersih?

Laba kotor hanya dikurangi harga pokok penjualan, sehingga menguji harga jual dan efisiensi produksi. Laba bersih adalah sisa setelah beban operasional, bunga, dan pajak; ia menguji hasil akhir. Jaraknya bisa jauh: pada ilustrasi artikel ini, margin kotor 40,0% menyusut menjadi margin bersih 9,6%.

*(43 kata ✓ · angka: 40,0% / 9,6% · fokus pada kontras diagnostik, tidak mendaftar ulang komponen milik H2 #1)*

### Apakah laba bersih berarti kas perusahaan bertambah?

Tidak selalu. Laporan laba rugi disusun berbasis akrual: pendapatan diakui saat transaksi terjadi, bukan saat uang diterima. Penjualan kredit yang belum tertagih tetap menambah laba, sementara penyusutan mengurangi laba tanpa mengeluarkan kas. Karena itu laba bersih dibaca berdampingan dengan laporan arus kas — komponen laporan keuangan lengkap yang lain per PSAK 201.

*(51 kata ✓ · fakta: laporan arus kas terverifikasi sebagai komponen per PSAK 201 · em-dash 1× → hitung terhadap jatah maks 2)*

---

## Edge cases & nuance

- **Hub vs PSAK bertabrakan soal jumlah.** Hub Soltius menyebut **4 macam** laporan keuangan (tanpa laporan perubahan ekuitas); PSAK 201 mendaftar lebih banyak. Solusi: **jangan menyebut angka apa pun**; tautkan hub dengan anchor "macam-macam laporan keuangan" tanpa mengutip hitungannya.
- **Single/multiple step bukan urusan PSAK.** Ini konvensi penyajian (textbook), bukan format yang diatur/diwajibkan PSAK 201 — lihat Flag F3.
- **Pajak akuntansi ≠ pajak fiskal.** Beban pajak di laporan laba rugi tidak sama dengan PPh terutang hasil koreksi fiskal. Ilustrasi kita menyederhanakan; itu wajar untuk artikel awareness, asal **tarifnya tidak diklaim**.
- **Margin operasi mengecualikan bunga & pajak** — itu justru gunanya: ia menguji operasi tanpa gangguan struktur pendanaan. Ini alasan konseptual kenapa aturan diagnostik lapisan-3 bekerja.
- **Sentuhan praktisi tanpa nama Soltius** (diizinkan brief): "di lapangan, tim keuangan sering menghabiskan rapat menyepakati angka mana yang benar, bukan membahas apa arti angkanya."

---

## Flags (open factual risk — writer WAJIB patuh)

- **F1 ⚠️ "5 komponen laporan keuangan lengkap" — TIDAK TERVERIFIKASI. JANGAN DITULIS.** Brief (H2 #1, E-E-A-T, FAQ #1) menyuruh menulis angka **5**. Halaman IAI **tidak menyebut angka apa pun**: lead-in verbatim *"Komponen laporan keuangan lengkap terdiri dari:"*, lalu daftar berhuruf yang memuat **item bersyarat** (laporan posisi keuangan awal periode — hanya "ketika entitas menerapkan suatu kebijakan akuntansi secara retrospektif…") **dan** item *"informasi komparatif"*. Menghitungnya jadi 5, 6, atau 7 semuanya interpretatif. Dua kali fetch bahkan menghasilkan hitungan berbeda. → **Rekomendasi: tulis "salah satu komponen laporan keuangan lengkap menurut PSAK 201", tanpa angka.** Ganti "5 komponen" di FAQ #1 dengan rumusan di dossier ini. Kompensasi angka: rantai ilustrasi + 3 margin + 2 tanggal PSAK sudah jauh melampaui syarat ≥4 angka inline.
- **F2 ⚠️ Tarif pajak 22% — terverifikasi tapi JANGAN dipakai pada ilustrasi.** Dua alasan: (a) **aritmetika** — Rp 23.000.000 ÷ Rp 105.000.000 = **21,90%**, bukan 22%; 22% × 105jt = **Rp 23.100.000**, tidak cocok dengan rantai terkunci; (b) **konseptual** — PPh badan dihitung atas *penghasilan kena pajak* hasil koreksi fiskal, bukan atas laba sebelum pajak akuntansi, jadi "22% × laba sebelum pajak" salah kaprah sekalipun angkanya dibulatkan. → **Rekomendasi: tampilkan nominal Rp 23.000.000 saja, tanpa persentase, tanpa menyebut tarif.** (Jangan pula "sekitar 22%".)
- **F3 ⚠️ JANGAN mengaitkan single step / multiple step ke PSAK 201.** PSAK 201 mengatur hal yang *terdengar* mirip tapi berbeda: penyajian laba rugi + OCI dalam **satu atau dua laporan**, serta analisis beban berdasarkan **sifat atau fungsi**. Itu **bukan** single-step vs multiple-step. Mengklaim "PSAK 201 mengatur/mengizinkan dua format ini" = kesalahan faktual. → Tulis single/multiple step sebagai **konvensi penyajian**, tanpa menempelkan standar.
- **F4 ⚠️ Benchmark margin per industri — NIHIL sumber kredibel. JANGAN mengarang, dan JANGAN memakai angka yang terlihat resmi.** Pencarian run ini hanya menemukan: (a) **CEIC / Bank Indonesia Business Survey "expected margin"** (mis. manufaktur 13,628%, Des 2022) — ini **indikator ekspektasi survei bisnis**, *bukan* benchmark margin laba industri; memakainya sebagai "margin sehat" = salah baca data yang menyesatkan; (b) Vena/CalcMastery — content farm, US-centric, ditolak per SOP sumber; (c) Damodaran (NYU Stern) — kredibel tapi data sektor AS/global, tidak relevan sebagai patokan Indonesia. → **Rekomendasi: nol angka patokan.** Ajarkan perbandingan antarperiode/antarperusahaan sejenis (lihat tabel aturan membaca). Kejujuran ini justru pembeda dari SERP.
- **F5 ⚠️ Klaim akrual — JANGAN diatribusikan ke pasal/paragraf PSAK.** Teks penuh PSAK 201 ada di balik login SAK Online; halaman publik IAI **tidak** memuat kalimat "dasar akrual" yang bisa dikutip. → Tulis akrual sebagai **prinsip akuntansi standar** (tanpa sitasi, tanpa nomor paragraf, tanpa statistik). **Jangan menulis nomor paragraf PSAK apa pun** — satu-satunya nomor paragraf yang muncul di halaman IAI (38 dan 38A) menyangkut informasi komparatif dan tidak relevan untuk artikel ini.
- **F6 ⚠️ FSV — jangan melampaui yang dikutip.** Boleh: multi-versi untuk pajak/internal/eksternal, item-urutan-hierarki, laba/rugi otomatis. **Dilarang**: nama transaksi/kode app, nomor versi/rilis, klaim kecepatan/efisiensi, **Universal Journal/ACDOCA** (sudah dipakai `jurnal-umum-c01`, `neraca-saldo-c01`, `sap-s4hana-c01`), modul FI/CO, closing, konsolidasi.
- **F7 ⚠️ Cousin link — jangan overclaim.** Halaman siklus akuntansi **tidak** menyebut laporan laba rugi sebagai output akhir. Tautkan sebagai konteks tahapan ("muara dari siklus akuntansi"), bukan sebagai rujukan yang membahasnya.
- **F8 ⚠️ Ilustrasi — label wajib.** Tandai eksplisit sebagai **ilustrasi**; dilarang nama perusahaan nyata atau laporan keuangan emiten. Bila satu angka diubah, hitung ulang seluruh rantai + 3 margin (presisi: 40,0000% / 14,1176% / 9,6471%).

### Dedup boundary — material yang SENGAJA TIDAK disediakan dossier ini

Jurnal umum, debit-kredit, saldo normal, posting buku besar, jurnal khusus (`jurnal-umum-c01`) · neraca saldo & 3 jenisnya, langkah penyusunan, penelusuran selisih (`neraca-saldo-c01`; neraca saldo boleh disebut **maks 1 frasa**) · cara menghitung HPP, BOP/WIP/COGM/PSAK 14 (`cara-menghitung-hpp-c01`; HPP = **1 baris**) · AP/AR & otomasinya (`ap-ar-c01`) · Universal Journal/ACDOCA (3 artikel) · ROA/ROE/EBITDA/BEP, analisis horizontal, OCI, laporan arus kas sebagai topik, laba rugi per industri (disisakan untuk artikel lain).

---

## Checklist serah terima ke writer

- [x] Definition snippet 50 kata, tanpa em-dash, entity-clear
- [x] 3 FAQ (43/43/51 kata), tiap jawaban ≥1 fakta/angka
- [x] Structured element: tabel komponen + tabel single/multiple + rantai & 3 rumus margin + tabel aturan diagnostik
- [x] 2 sitasi otoritatif (IAI + SAP Learning), keduanya 200 OK run ini
- [x] 2 internal link diverifikasi 200 OK run ini
- [x] 8 flag terdaftar — **F1 (angka "5") dan F2 (tarif pajak) mengoreksi instruksi brief; patuhi dossier**
