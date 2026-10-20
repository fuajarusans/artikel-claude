---
brief_id: "kpbu-03"
researcher_run_date: "2026-09-17"
sources_cited: 11
flags: 9
---

# Research Dossier: Pengembalian Investasi KPBU: Availability Payment atau Tarif

## TL;DR for the writer

- **The spine holds exactly as the strategist found it.** Perpres 38/2015 **Pasal 11 ayat (2)** lists **three** sources of pengembalian investasi joined by **"dan/atau"** — tarif, Availability Payment, dan bentuk lainnya. This is now triple-verified against the primary text (not just inherited from last month's cache), so the article's central correction is solid: the AP-vs-tarif binary that dominates Indonesian search results is incomplete, not wrong in what it includes, but wrong in what it omits.
- **AP is paid by the PJPK, never PT PII.** The official definition confirms the payer is "Menteri/Kepala Lembaga" (i.e., the PJPK for that project) via the K/L or Pemda budget — write this precisely; do not let "pemerintah membayar AP" slide into anything that could be read as PT PII or Kemenkeu-as-treasury paying it.
- **The E-E-A-T angle is real and independently confirmed this run**: Kemenkeu's own Availability Payment page still cites PMK 260/PMK.08/2016 and Permendagri 96/2016 as governing law, even though PMK 260/PMK.08/2016 was revoked by PMK 68/2024. An article citing PMK 68/2024 correctly is more accurate than the government's own portal — state this factually, not gloatingly.
- **The third source ("bentuk lainnya") is confirmed to be undocumented** — the official page is a single sentence with zero elaboration and zero example. Say so plainly; do not invent what it might cover.
- **Demand risk is the one risk fact this article owns**: under AP, the PJPK/pemerintah effectively carries usage-volume risk (BUP is paid for availability, not patronage); under tarif, the BUP carries it. Keep this at the mechanism level — do not rebuild a risk matrix (that's August's `kpbu-03`).
- A concrete, dated AP example exists outside PT PII's own portfolio and is safe to use: **KPBU PJU Kabupaten Dharmasraya**, PKS signed **19 September 2023**.

---

## Core facts (verified)

> **Claim**: Perpres 38/2015 tetap menjadi payung hukum utama KPBU dan berstatus berlaku.
> **Number/specific**: Peraturan Presiden No. 38 Tahun 2015 tentang Kerja Sama Pemerintah dengan Badan Usaha dalam Penyediaan Infrastruktur — status metadata **"Berlaku"** (dicek ulang 2026-09-17; tidak ada perubahan sejak verifikasi Agustus 2026 di `company_profile.md`).
> **Source**: peraturan.go.id/id/perpres-no-38-tahun-2015, diakses 2026-09-17.
> **Confidence**: high

> **Claim**: Pasal 11 ayat (1) mewajibkan PJPK menetapkan bentuk pengembalian investasi yang mencakup biaya modal, biaya operasional, dan keuntungan BUP.
> **Number/specific**: Kutipan verbatim: *"PJPK menetapkan bentuk pengembalian investasi yang meliputi penutupan biaya modal, biaya operasional, dan keuntungan Badan Usaha Pelaksana."*
> **Source**: Perpres 38/2015 Pasal 11 ayat (1) — dikonfirmasi silang via pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-11 (diakses 2026-09-17) dan ekstraksi teks primer peraturan.go.id yang sudah tercatat di `research/kpbu.research.json` (2026-09-17).
> **Confidence**: high

> **Claim**: Pasal 11 ayat (2) menyebut **TIGA** sumber pengembalian investasi, dihubungkan **"dan/atau"** — inilah dasar yang membuat framing biner (AP vs tarif) tidak lengkap.
> **Number/specific**: Kutipan verbatim: *"Pengembalian investasi Badan Usaha Pelaksana atas Penyediaan Infrastruktur bersumber dari: a. pembayaran oleh pengguna dalam bentuk tarif; b. Pembayaran Ketersediaan Layanan (Availability Payment); dan/atau c. bentuk lainnya sepanjang tidak bertentangan dengan peraturan perundang-undangan."*
> **Source**: Perpres 38/2015 Pasal 11 ayat (2) — **diverifikasi rangkap tiga secara independen**: (i) ekstraksi PDF primer peraturan.go.id oleh strategist, dicatat di `research/kpbu.research.json`; (ii) WebSearch yang menampilkan sitasi identik bersumber jdih.kemenkeu.go.id/api/download/fullText/2015/38TAHUN2015PERPRES.pdf; (iii) WebFetch langsung ke pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-11, diakses 2026-09-17.
> **Confidence**: high — ini tulang punggung artikel; kata "dan/atau" dan ketiga poin identik di tiga sumber independen. **Tidak ada koreksi nomor pasal — Pasal 11 ayat (2) sudah benar.**

> **Claim**: Pasal 12 mengatur mekanisme tarif secara berjenjang: PJPK menetapkan tarif awal → tarif harus menutup biaya modal+operasional+keuntungan dalam kurun waktu tertentu → bila tak cukup, tarif dapat mengikuti kemampuan bayar pengguna → PJPK memberi Dukungan Kelayakan.
> **Number/specific**: Pasal 12 ayat (1)-(5) verbatim (lihat tabel data di bawah untuk kutipan lengkap tiap ayat).
> **Source**: pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-12, diakses 2026-09-17; selaras dengan parafrase `kpbu.research.json`.
> **Confidence**: high

> **Claim**: Dukungan Kelayakan (VGF) hanya berlaku untuk KPBU dengan kepentingan dan kemanfaatan sosial, dan hanya setelah kajian lengkap dan menyeluruh.
> **Number/specific**: Pasal 12 ayat (5) verbatim: *"Pemberian Dukungan Kelayakan sebagaimana dimaksud pada ayat (4), hanya diberikan bagi KPBU yang mempunyai kepentingan dan kemanfaatan sosial, setelah Menteri/Kepala Lembaga/Kepala Daerah melakukan kajian yang lengkap dan menyeluruh atas kemanfaatan sosial."*
> **Source**: pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-12, diakses 2026-09-17.
> **Confidence**: high — **boundary reminder**: ini batas keterlibatan VGF di artikel ini; jangan bangun taksonomi VGF lebih jauh (domain klaster "Jaminan Pemerintah").

> **Claim**: Pasal 13 mewajibkan PJPK menganggarkan dana Availability Payment untuk seluruh masa operasi sesuai jangka waktu Perjanjian Kerja Sama, dan pencairan baru terjadi setelah dua syarat konkret terpenuhi.
> **Number/specific**: Pasal 13 ayat (4) verbatim: **(a)** *"Infrastruktur yang dikerjasamakan telah dibangun dan dinyatakan siap beroperasi"*; **(b)** *"Menteri/Kepala Lembaga/Kepala Daerah menyatakan bahwa infrastruktur telah memenuhi indikator layanan infrastruktur sebagaimana diatur dalam Perjanjian Kerja Sama."*
> **Source**: pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-13, diakses 2026-09-17 — ini mengisi kekosongan yang ditandai brief ("Pasal 13(4) hanya terverifikasi sebagian").
> **Confidence**: high untuk ayat (4); medium untuk redaksi lengkap ayat (1)-(3) — lihat Flags.

> **Claim**: Availability Payment dibayarkan oleh PJPK (Menteri/Kepala Lembaga/Kepala Daerah pemilik proyek), **bukan** oleh PT PII dan bukan generik "Kementerian Keuangan".
> **Number/specific**: Definisi resmi: *"Pembayaran secara berkala oleh Menteri/Kepala Lembaga kepada Badan Usaha Pelaksana atas tersedianya layanan infrastruktur yang sesuai dengan kualitas dan/atau kriteria"* sesuai Perjanjian Kerja Sama.
> **Source**: kpbu.kemenkeu.go.id, halaman Pembayaran Ketersediaan Layanan, diakses 2026-09-17.
> **Confidence**: high — ini fakta pencegah kesalahan yang paling kritikal di brief; tegaskan eksplisit di artikel.

> **Claim**: Aturan pelaksana yang berlaku sekarang untuk penjaminan infrastruktur, Dukungan Kelayakan, Availability Payment, dan fasilitas penyiapan proyek adalah **PMK No. 68 Tahun 2024**.
> **Number/specific**: Judul lengkap *"Dukungan Pemerintah untuk Pembiayaan Infrastruktur melalui Skema Kerja Sama Pemerintah dan Badan Usaha dan/atau Skema Pembiayaan Lainnya"* — **ditetapkan 24 September 2024**, **diundangkan/berlaku 18 Oktober 2024**.
> **Source**: jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024, diakses 2026-09-17; selaras dengan `company_profile.md`.
> **Confidence**: high

> **Claim**: PMK 68/2024 mencabut rantai PMK lama yang mengatur Availability Payment dan penjaminan infrastruktur, termasuk PMK 260/PMK.011/2010, PMK 260/PMK.08/2016, dan PMK 180/PMK.08/2020.
> **Number/specific**: Riwayat pencabutan pada dokumen JDIH mencantumkan ketujuh PMK lama tersebut (rinciannya selaras dengan tabel legal basis `company_profile.md`).
> **Source**: jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024, diakses 2026-09-17.
> **Confidence**: high

> **Claim**: [Temuan E-E-A-T] Halaman resmi Availability Payment di portal KPBU Kemenkeu **masih** mengutip PMK 260/PMK.08/2016 dan Permendagri 96 Tahun 2016 sebagai dasar hukum yang berlaku, padahal PMK 260/PMK.08/2016 sudah dicabut PMK 68/2024.
> **Number/specific**: Kutipan langsung dari halaman: *"1. PMK Nomor 260/PMK.08/2016 tentang Tata Cara Pembayaran Ketersediaan Layanan pada Proyek KPBU; 2. Permendagri Nomor 96 Tahun 2016 tentang Pembayaran Ketersediaan Layanan dalam rangka Kerja Sama Pemerintah Daerah dengan Badan Usaha dalam Penyediaan Infrastruktur di Daerah."*
> **Source**: kpbu.kemenkeu.go.id, halaman Pembayaran Ketersediaan Layanan, diakses 2026-09-17.
> **Confidence**: high — **ini diverifikasi langsung sesi ini** (bukan sekadar diwariskan dari cache bulan lalu). Tulis ini sebagai fakta netral ("portal belum diperbarui"), bukan sebagai sindiran.

> **Claim**: Sumber ketiga pengembalian investasi ("bentuk lainnya") tidak memiliki elaborasi atau contoh resmi di portal KPBU Kemenkeu.
> **Number/specific**: Seluruh isi halaman resminya hanya satu kalimat: *"Pengembalian investasi Badan Usaha Pelaksana atas Penyediaan Infrastruktur dapat bersumber dari bentuk lainnya sepanjang tidak bertentangan dengan peraturan perundang-undangan."*
> **Source**: kpbu.kemenkeu.go.id, halaman Pengembalian Investasi dalam Bentuk Lainnya, diakses 2026-09-17.
> **Confidence**: high — temuan langsung; ini adalah "honest finding" yang diantisipasi brief. Jangan mengarang bentuk konkretnya.

> **Claim**: Secara prinsip, Availability Payment memindahkan risiko volume pemakaian/permintaan ke sisi pemerintah; skema tarif meninggalkan risiko itu di sisi Badan Usaha Pelaksana.
> **Number/specific**: World Bank PPP Reference Guide: skema AP *"allows the government to bear demand risk while ensuring service availability"*; halaman user-charge Kemenkeu menggambarkan skema tarif sebagai kendala sisi permintaan/keterjangkauan yang dipikul BUP ("operator risk: revenue collection"), berbeda dari AP di mana "government bears revenue risk".
> **Source**: ppp.worldbank.org (PPP Reference Guide / PPP Knowledge Lab, via WebSearch 2026-09-17) + kpbu.kemenkeu.go.id halaman Pembayaran Pengguna Layanan, diakses 2026-09-17.
> **Confidence**: high untuk prinsip umum (konvergen di sumber domestik & internasional) — **catatan**: ini berlaku untuk skema "murni"; kombinasi sesuai "dan/atau" dapat membagi risiko secara berbeda (lihat Edge cases).

> **Claim**: Sektor jalan tol mengenal dua varian KPBU menurut sumber pengembalian investasinya.
> **Number/specific**: **KPBU berbasis tarif** (BUJT memperoleh pengembalian dari pendapatan tol) dan **KPBU Availability Payment** (pemerintah membayar berkala) — keduanya istilah yang dipakai di ekosistem BPJT/Kemenkeu.
> **Source**: WebSearch hasil kpbu.kemenkeu.go.id/BPJT, 2026-09-17.
> **Confidence**: medium — klasifikasi dua varian terkonfirmasi, tetapi **tidak ada proyek tol spesifik yang berhasil diverifikasi run ini** ke salah satu varian. Jangan menyebut nama proyek tol sebagai contoh AP/tarif tanpa verifikasi lanjutan.

> **Claim**: Contoh konkret proyek dengan skema Availability Payment murni yang terdokumentasi resmi: KPBU Penerangan Jalan Umum (PJU) Kabupaten Dharmasraya.
> **Number/specific**: Perjanjian Kerja Sama (PKS) ditandatangani **19 September 2023**; BUP: PT Dharmasraya Kilau Abadi; cakupan **4.520 titik lampu** selama **5 tahun**; Pemkab Dharmasraya wajib menyediakan jaminan pembayaran Availability Payment tahunan.
> **Source**: kpbu.kemenkeu.go.id/berita/read/1605/penandatanganan-perjanjian-kerjasama-pks-proyek-peningkatan-infrastruktur-ketersediaan-layanan-pju-di-kab-dharmasraya (siaran resmi portal KPBU Kemenkeu), diakses 2026-09-17; dikuatkan ahlikpbuindonesia.or.id dan pemberitaan media Sumatera Barat.
> **Confidence**: high untuk tanggal PKS dan skema AP (sumber resmi Kemenkeu); medium untuk klaim "pelopor unsolicited pertama" (sumber sekunder). **Proyek ini BUKAN bagian portofolio penjaminan PT PII** — jangan dicampur dengan APJ Madiun/Lombok Barat yang memang dijamin PT PII.

> **Claim**: Portofolio kumulatif proyek yang dijamin PT PII.
> **Number/specific**: **61 proyek (38 KPBU + 23 non-KPBU)** · total nilai proyek **> Rp 732 triliun** · total nilai penjaminan **Rp 113 triliun** — **per Juni 2026**.
> **Source**: `knowledge_base/company_profile.md` (bersumber publikasi resmi ptpii.co.id 2026); dikonfirmasi ulang tanpa perubahan oleh strategist 17 September 2026 di `research/kpbu.research.json` ("CONFIRMED UNCHANGED"). ptpii.co.id sendiri tidak dapat diakses langsung sesi ini (TLS error, sesuai catatan brief).
> **Confidence**: high — **angka kumulatif dan bertumbuh; WAJIB mencantumkan "per Juni 2026" setiap disebut, dan jangan menukar nilai proyek dengan nilai penjaminan** (dua angka berbeda, Rp 732 T vs Rp 113 T).

> **Claim**: PT PII adalah satu-satunya BUMN dengan mandat menyediakan penjaminan pemerintah untuk proyek infrastruktur skema KPBU, berkedudukan sebagai Badan Usaha Penjaminan Infrastruktur (BUPI) / Special Mission Vehicle Kementerian Keuangan, dan **tidak** berada di bawah Danantara.
> **Number/specific**: (kualitatif — fakta struktural, bukan angka)
> **Source**: `knowledge_base/company_profile.md`.
> **Confidence**: high (fakta pra-terverifikasi knowledge base, hard rule)

> **Claim**: Penjaminan Pemerintah yang diterbitkan PT PII menjamin risiko yang menjadi tanggung jawab PJPK dalam kontrak KPBU — bukan risiko komersial badan usaha, dan bukan penentu skema pengembalian investasi mana (tarif/AP/lainnya) yang dipakai proyek.
> **Number/specific**: (kualitatif)
> **Source**: `knowledge_base/company_profile.md` — bagian "Positioning" dan "Nuance writers must preserve".
> **Confidence**: high

> **Claim**: Permendagri No. 96 Tahun 2016 (dasar pelaksanaan AP untuk kerja sama Pemda dengan badan usaha di daerah) berstatus "Berlaku" pada level metadata portal resmi.
> **Number/specific**: Status metadata peraturan.go.id: **"Berlaku"**.
> **Source**: peraturan.go.id/id/permendagri-no-96-tahun-2016, diakses 2026-09-17.
> **Confidence**: medium — status "Berlaku" terkonfirmasi pada level metadata, tetapi riwayat perubahan parsial oleh regulasi Kemendagri yang lebih baru belum ditelusuri secara mendalam run ini. Aman dipakai untuk konteks daerah dengan hedge tipis; lihat Flags.

---

## Topic focus + PT PII anchor (from product_matrix.md)

| What to teach (KPBU / penjaminan / project finance) | Facts to state accurately | Where in article | PT PII product to anchor the CTA |
|---|---|---|---|
| Definisi pengembalian investasi & tiga sumbernya | Pasal 11(1): PJPK menetapkan bentuk pengembalian investasi (capex+opex+profit); Pasal 11(2): tiga sumber dihubungkan "dan/atau" — tarif, AP, bentuk lainnya | H2 #1 (definitional) + snippet definisi | — (belum CTA) |
| Perbandingan tarif vs Availability Payment | Sumber dana · siapa memikul risiko permintaan · siapa menetapkan tarif · konsekuensi anggaran PJPK · sektor lazim — tiap sel dirujuk ke Pasal 12/13 | H2 #2 (tabel) | — |
| Mekanisme penetapan tarif & pemicu Dukungan Kelayakan | Pasal 12(1)-(5): tarif awal → penyesuaian harus menutup capex+opex+profit → jika tak cukup → tarif ikut kemampuan bayar → Dukungan Kelayakan (khusus KPBU bermanfaat sosial, setelah kajian lengkap) | H2 #3 (question-format) | — |
| Kewajiban anggaran multi-tahun yang lahir dari AP | Pasal 13: PJPK menganggarkan dana AP selama masa operasi sesuai PKS; pencairan baru terjadi setelah infrastruktur selesai dibangun DAN memenuhi indikator layanan (Pasal 13(4)) | H2 #4 (practical) | **Penjaminan Pemerintah** — 1 baris aside: kewajiban anggaran ini adalah salah satu bentuk kewajiban di sisi pemerintah dalam kontrak KPBU |
| Bukan biner, bukan sumber dana baru + jebakan sitasi PMK basi | "dan/atau" membuka kombinasi; sumber ketiga nyaris tanpa preseden publik; kedua mekanisme memindahkan beban, bukan menciptakan dana baru; portal resmi AP Kemenkeu sendiri masih mengutip PMK 260/PMK.08/2016 yang telah dicabut PMK 68/2024 | H2 #5 (honest/counter-conventional) | — |
| Penutup | Apa pun skema pengembalian investasi yang dipilih, kewajiban yang tersisa di sisi pemerintah dalam kontrak KPBU adalah domain penjaminan pemerintah | Kesimpulan / closing | **Penjaminan Pemerintah** (primary placement) |

Total self-mentions across the two rows above = 2, within the brief's "max 2-3" ceiling.

Reminder: PT PII **menjamin · menerbitkan penjaminan pemerintah · menstrukturkan penjaminan · mendampingi penyiapan transaksi**. It is NOT a lender, NOT an equity investor, NOT the project contractor or operator, and NOT a regulator. It does not pay Availability Payments and does not set tariffs — that is the PJPK's job. It is a BUMN Persero and Special Mission Vehicle under the Ministry of Finance acting as BUPI — and, unlike most BUMN, it does not sit under the Danantara holding. Max 2–3 PT PII self-mentions (this brief specifies exactly 2 placements).

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Peraturan.go.id — Perpres No. 38 Tahun 2015** (JDIH nasional) — https://peraturan.go.id/id/perpres-no-38-tahun-2015 — *what it backs*: status berlaku + landasan hukum Pasal 11–13, tulang punggung artikel.
2. **JDIH Kementerian Keuangan — PMK No. 68 Tahun 2024** — https://jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024 — *what it backs*: aturan pelaksana AP/VGF/penjaminan yang berlaku sekarang, tanggal ditetapkan/berlaku, daftar PMK lama yang dicabut.
3. **Kantor Bersama KPBU Kemenkeu — halaman Pembayaran Ketersediaan Layanan** — https://kpbu.kemenkeu.go.id/read/1095-1258/pjpk/pembayaran-kepada-badan-usaha/pembayaran-ketersediaan-layanan — *what it backs*: definisi AP, identitas pembayar (PJPK), sekaligus bukti langsung sitasi PMK yang sudah basi (temuan E-E-A-T artikel ini).
4. **World Bank — PPP Reference Guide / PPP Knowledge Lab** — https://ppp.worldbank.org/ppp-knowledge-lab (dan https://ppp.worldbank.org/public-private-partnership/applicable-all-sectors/payment-mechanism) — *what it backs*: prinsip internasional bahwa skema availability payment memindahkan risiko permintaan ke sisi pemerintah, menempatkan aturan Indonesia dalam kerangka PPP global yang lebih luas.
5. **Peraturan.go.id — Permendagri No. 96 Tahun 2016** — https://peraturan.go.id/id/permendagri-no-96-tahun-2016 — *what it backs*: status berlaku dasar AP untuk kerja sama Pemda-badan usaha di daerah (opsional, pakai dengan hedge — lihat Flags).

Priority used: Kemenkeu/DJPPR & regulasi primer (sources 1–3, 5) > World Bank/PPP Knowledge Lab (source 4) — sesuai urutan prioritas dossier ini.

---

## FAQ Q&As (Bahasa Indonesia)

### Apa itu Availability Payment dalam proyek KPBU?
Availability Payment (Pembayaran Ketersediaan Layanan) adalah pembayaran berkala dari Menteri/Kepala Lembaga atau Kepala Daerah selaku PJPK kepada Badan Usaha Pelaksana, sebagai salah satu dari tiga sumber pengembalian investasi yang diatur Perpres 38/2015 Pasal 11 ayat (2). Pembayaran diberikan atas ketersediaan layanan infrastruktur sesuai kualitas yang disepakati dalam Perjanjian Kerja Sama — bukan berdasarkan jumlah pengguna, dan bukan dibayar oleh PT PII.

### Apa bedanya Availability Payment dan pembayaran tarif pengguna?
Keduanya sama-sama sumber pengembalian investasi menurut Pasal 11 ayat (2), tetapi berbeda di siapa yang membayar dan siapa menanggung risiko permintaan. Pada skema tarif, pengguna membayar langsung dan Badan Usaha Pelaksana menanggung risiko jika jumlah pengguna meleset dari proyeksi. Pada Availability Payment, PJPK yang membayar secara berkala dari anggaran K/L atau Pemerintah Daerah, sehingga risiko volume pemakaian berpindah ke sisi pemerintah.

### Siapa yang menetapkan tarif dalam proyek KPBU?
PJPK (Penanggung Jawab Proyek Kerja Sama) yang menetapkan tarif awal penyediaan infrastruktur beserta mekanisme penyesuaiannya, sebagaimana diatur Pasal 12 ayat (1)-(2) Perpres 38/2015. Tarif dan penyesuaiannya harus dirancang agar mampu mengembalikan biaya modal, biaya operasional, dan keuntungan Badan Usaha Pelaksana dalam kurun waktu tertentu. Jika tarif itu ternyata tidak cukup, PJPK dapat menetapkan tarif berdasarkan kemampuan bayar pengguna dan memberikan Dukungan Kelayakan sebagai kompensasinya.

### Apakah proyek KPBU bisa menggabungkan dua skema pengembalian investasi sekaligus?
Bisa. Pasal 11 ayat (2) Perpres 38/2015 merangkai tiga sumber pengembalian investasi — tarif pengguna, Availability Payment, dan bentuk lainnya — dengan kata penghubung "dan/atau", bukan "atau" semata. Konstruksi ini secara eksplisit membuka ruang kombinasi, misalnya pendapatan tarif yang tidak mencukupi ditopang komponen pembayaran ketersediaan layanan. Pilihan akhir tetap ditetapkan PJPK sesuai karakteristik proyek dan disepakati dalam Perjanjian Kerja Sama.

### Apa itu Dukungan Kelayakan dan kapan pemerintah memberikannya?
Dukungan Kelayakan (Viability Gap Fund) adalah kontribusi PJPK yang diberikan ketika tarif pengguna — meski sudah disesuaikan dengan kemampuan bayar masyarakat — tetap tidak cukup mengembalikan seluruh investasi Badan Usaha Pelaksana, sesuai Pasal 12 ayat (3)-(5) Perpres 38/2015. Dukungan ini hanya berlaku untuk KPBU yang memiliki kepentingan dan kemanfaatan sosial, dan baru diberikan setelah PJPK melakukan kajian lengkap dan menyeluruh atas kemanfaatan sosial proyek tersebut.

### Siapa yang membayar Availability Payment — apakah PT PII atau Kementerian Keuangan?
Bukan keduanya. Availability Payment dibayarkan oleh PJPK — Menteri/Kepala Lembaga atau Kepala Daerah pemilik proyek — melalui anggaran kementerian/lembaga atau APBD, sesuai Pasal 13 Perpres 38/2015. PT PII adalah Badan Usaha Penjaminan Infrastruktur (BUPI) di bawah Kementerian Keuangan yang menerbitkan penjaminan atas risiko sisi pemerintah dalam kontrak KPBU; PT PII tidak membayar Availability Payment maupun menetapkan tarif proyek.

### Apa itu pengembalian investasi "bentuk lainnya" dalam KPBU?
Pasal 11 ayat (2) huruf c Perpres 38/2015 membuka opsi ketiga: pengembalian investasi dalam "bentuk lainnya sepanjang tidak bertentangan dengan peraturan perundang-undangan". Sayangnya, hingga September 2026 halaman resmi portal KPBU Kementerian Keuangan hanya memuat satu kalimat itu tanpa elaborasi atau contoh penerapan. Opsi ini secara hukum tersedia, tetapi praktik dan preseden publiknya masih sangat tipis dibanding tarif dan Availability Payment.

### Regulasi apa yang mengatur Availability Payment saat ini?
Aturan pelaksana yang berlaku saat ini adalah PMK No. 68 Tahun 2024 tentang Dukungan Pemerintah untuk Pembiayaan Infrastruktur melalui Skema KPBU dan/atau Skema Pembiayaan Lainnya, ditetapkan 24 September 2024 dan berlaku 18 Oktober 2024. Beleid ini mencabut PMK 260/PMK.08/2016 beserta rantai PMK lama lainnya. Perlu dicatat, halaman Availability Payment di portal KPBU Kemenkeu saat ini masih mencantumkan PMK 260/PMK.08/2016 — kutipan yang sudah tidak berlaku.

---

## Data tables for the writer

### Tiga sumber pengembalian investasi menurut Pasal 11 ayat (2)

| Sumber (Pasal 11 ayat 2) | Bunyi pasal (kutipan) | Diatur lebih lanjut di | Preseden publik |
|---|---|---|---|
| (a) Pembayaran oleh pengguna dalam bentuk tarif | "pembayaran oleh pengguna dalam bentuk tarif" | Pasal 12 | Luas — sektor tarif jalan tol, SPAM, dll. |
| (b) Pembayaran Ketersediaan Layanan (Availability Payment) | "Pembayaran Ketersediaan Layanan (Availability Payment)" | Pasal 13 | Terdokumentasi — mis. KPBU PJU Dharmasraya (PKS 19 Sept 2023) |
| (c) Bentuk lainnya | "bentuk lainnya sepanjang tidak bertentangan dengan peraturan perundang-undangan" | Tidak ada pasal turunan khusus | **Tidak ada** — halaman resmi Kemenkeu hanya satu kalimat, tanpa contoh (dikonfirmasi 2026-09-17) |

Penghubung ketiga poin di atas adalah **"dan/atau"** — secara hukum membuka kombinasi, bukan pilihan tunggal eksklusif.

### Tarif pengguna vs Availability Payment: perbandingan mekanisme

| Aspek | Tarif Pengguna (User Charge) | Availability Payment |
|---|---|---|
| Sumber dana pengembalian investasi | Pembayaran langsung oleh pengguna infrastruktur (Pasal 11 ayat 2 huruf a) | Anggaran K/L atau Pemerintah Daerah selaku PJPK, dibayar berkala (Pasal 11 ayat 2 huruf b; Pasal 13) |
| Siapa memikul risiko permintaan (demand risk) | Badan Usaha Pelaksana — pendapatan bergantung pada volume pemakai aktual | PJPK/pemerintah — BUP dibayar berdasarkan ketersediaan layanan sesuai standar kualitas, bukan volume pemakai |
| Siapa menetapkan tarif | PJPK menetapkan tarif awal dan penyesuaiannya (Pasal 12 ayat 1-2) | Tidak relevan langsung — tidak ada tarif pengguna; pembayaran berbasis indikator layanan dalam Perjanjian Kerja Sama (Pasal 13 ayat 4) |
| Konsekuensi bagi anggaran PJPK | Umumnya tidak membebani APBN/APBD secara langsung, kecuali saat tarif tak mampu menutup investasi — maka PJPK memberi Dukungan Kelayakan (Pasal 12 ayat 4-5) | PJPK wajib menganggarkan dana AP untuk seluruh masa operasi sesuai jangka waktu Perjanjian Kerja Sama — komitmen anggaran multi-tahun (Pasal 13) |
| Kapan pembayaran/pendapatan mulai mengalir | Sejak infrastruktur beroperasi dan pengguna membayar | Setelah infrastruktur selesai dibangun DAN dinyatakan memenuhi indikator layanan (Pasal 13 ayat 4 huruf a-b) |
| Sektor yang lazim memakainya | Jalan tol berbasis tarif, SPAM/air minum dengan tarif air | Infrastruktur di mana volume pemakaian bukan tujuan utama — mis. penerangan jalan umum (KPBU PJU Dharmasraya) |

### Syarat pencairan Availability Payment (Pasal 13 ayat 4)

| No. | Syarat (kutipan verbatim) |
|---|---|
| a | "Infrastruktur yang dikerjasamakan telah dibangun dan dinyatakan siap beroperasi" |
| b | "Menteri/Kepala Lembaga/Kepala Daerah menyatakan bahwa infrastruktur telah memenuhi indikator layanan infrastruktur sebagaimana diatur dalam Perjanjian Kerja Sama" |

Poin praktis: AP tidak mengurangi risiko konstruksi BUP — pembayaran baru cair setelah bangunan selesai **dan** performanya terverifikasi, bukan sejak kontrak diteken.

---

## Edge cases & nuance

- **"Dan/atau" berarti hibrida dimungkinkan secara hukum** — misalnya pendapatan tarif yang tidak mencukupi dapat ditopang komponen pembayaran ketersediaan layanan. Namun tidak ada contoh proyek hibrida yang terverifikasi run ini; jangan mengarang contoh kombinasi spesifik.
- **Prinsip "AP = pemerintah menanggung risiko permintaan" berlaku untuk skema murni.** Pada praktiknya, kontrak dapat menambahkan bonus/penalti kinerja yang membuat sebagian eksposur tetap ada di BUP (mis. penalti bila indikator layanan Pasal 13 ayat 4 huruf b tidak terpenuhi). Jangan menyederhanakan menjadi "AP = pemerintah menanggung semua risiko".
- **Penjaminan pemerintah PT PII adalah lapisan yang berbeda dari mekanisme pengembalian investasi.** Sebuah proyek bisa memakai skema tarif ATAU AP dan tetap memperoleh penjaminan pemerintah — penjaminan menyasar risiko sisi pemerintah dalam kontrak (mis. keterlambatan izin, perubahan regulasi diskriminatif), bukan menentukan dari mana BUP memperoleh pendapatan. Jangan mencampur dua konsep ini.
- **AP bukan "uang gratis" bagi BUP.** Pasal 13 ayat (4) mensyaratkan infrastruktur selesai dibangun DAN memenuhi indikator layanan sebelum pembayaran cair — risiko konstruksi dan kinerja operasional tetap di BUP.
- **Sitasi PMK basi di portal resmi adalah fakta netral, bukan tuduhan** — kemungkinan besar ini keterlambatan pemutakhiran konten, bukan indikasi PMK 260/PMK.08/2016 masih berlaku secara hukum. Framing yang aman: "portal masih menampilkan rujukan lama; peraturan yang berlaku saat ini adalah PMK 68/2024."
- **Sumber ketiga ("bentuk lainnya") ada secara hukum tapi nyaris tanpa jejak praktik publik** — ini kekuatan diferensiasi artikel, bukan kelemahan riset. Jangan mengisi kekosongan itu dengan spekulasi (mis. jangan mengklaim itu mencakup "shadow toll" atau "minimum revenue guarantee" tanpa sumber Indonesia yang eksplisit).

---

## Flags (open factual risk)

- ⚠️ **Contoh proyek tol untuk varian tarif vs AP**: klasifikasi dua varian (KPBU berbasis tarif vs KPBU Availability Payment) terkonfirmasi secara umum, tetapi tidak ada proyek tol spesifik yang berhasil diverifikasi ke salah satu varian run ini → rekomendasi: jangan menyebut nama proyek tol sebagai contoh AP/tarif, atau serahkan ke riset lanjutan.
- ⚠️ **KPBU PJU Dharmasraya bukan proyek yang dijamin PT PII** — ini contoh sektor AP yang berdiri sendiri (sumber: portal resmi Kemenkeu). Jangan mencampurnya dengan APJ Kabupaten Madiun/Lombok Barat yang memang bagian portofolio penjaminan PT PII (per `company_profile.md`) → rekomendasi: jika dipakai, jelaskan eksplisit bahwa ini contoh sektor, bukan portofolio PT PII.
- ⚠️ **Pasal 12 ayat (4)**: hasil fetch terpotong pada frasa "...sebagaimana dimaksud pada ayat" tanpa angka ayat rujukan. Secara kontekstual kemungkinan besar merujuk ayat (2) (definisi pengembalian investasi capex+opex+profit), tetapi digit itu sendiri tidak terverifikasi verbatim run ini → rekomendasi: parafrasekan ayat ini secara fungsional, jangan mengutip nomor ayat rujukan dalam tanda kutip langsung tanpa verifikasi ulang.
- ⚠️ **Pasal 13 ayat (1)-(3)**: hanya terverifikasi lewat parafrase `kpbu.research.json`, bukan kutipan verbatim baru run ini (hanya ayat 4 huruf a-b yang verbatim segar) → rekomendasi: kutip ayat (4) verbatim dengan percaya diri; untuk ayat (1)-(3), parafrasekan, jangan memberi tanda kutip langsung.
- ⚠️ **Permendagri No. 96 Tahun 2016**: status "Berlaku" terkonfirmasi di level metadata peraturan.go.id, tetapi riwayat perubahan parsial oleh regulasi Kemendagri yang lebih baru belum ditelusuri mendalam → rekomendasi: boleh disebut sebagai dasar AP tingkat daerah dengan hedge ringan ("Permendagri 96/2016, yang mengatur AP di tingkat kerja sama Pemda"), tetapi jangan menegaskan "belum pernah diubah".
- ⚠️ **Portofolio PT PII (61 proyek / Rp 732 T / Rp 113 T)**: angka kumulatif yang berubah tiap publikasi; ptpii.co.id tidak dapat diakses langsung sesi ini (TLS error) → rekomendasi: cantumkan "per Juni 2026" setiap kali disebut, dan verifikasi ulang ke laporan/situs resmi PT PII terbaru sebelum publikasi jika memungkinkan.
- ⚠️ **Permen PPN/Bappenas No. 9 Tahun 2025**: eksis dan berlaku, tetapi isi pasal-per-pasalnya belum terverifikasi (dan di luar cakupan brief ini — bukan bagian dari tulang punggung Pasal 11-13) → rekomendasi: jangan disinggung sama sekali di artikel ini; tidak relevan dengan pengembalian investasi.
- ⚠️ **World Bank PPP Reference Guide**: dikutip lewat sintesis hasil WebSearch, bukan pengambilan langsung satu halaman utuh → rekomendasi: perlakukan sebagai penguat prinsip umum yang sudah dikonfirmasi sumber domestik (kpbu.kemenkeu.go.id), bukan sebagai kutipan verbatim World Bank.
- ⚠️ **Setiap sudut kepemimpinan/personel** → **omit** sepenuhnya (blacklist `company_profile.md`). Tidak ada nama pejabat yang disebut di dossier ini.
- ⚠️ **Nilai proyek vs nilai penjaminan PT PII**: dua angka berbeda (Rp 732 triliun nilai proyek vs Rp 113 triliun nilai penjaminan) — riset bulan lalu mencatat kesalahan penggabungan angka ini oleh sintesis WebSearch; jangan pernah menyamakan atau menggabungkan keduanya di draf.

---

## Definition snippet draft

> Pengembalian investasi dalam KPBU adalah mekanisme yang ditetapkan PJPK agar Badan Usaha Pelaksana memperoleh kembali biaya modal, biaya operasional, dan keuntungannya. Perpres 38/2015 Pasal 11 ayat (2) menyebut tiga sumber yang dapat dipakai sendiri-sendiri atau digabung ("dan/atau"): tarif dari pengguna, Pembayaran Ketersediaan Layanan (Availability Payment), atau bentuk lain yang tidak bertentangan dengan peraturan perundang-undangan.

(54 kata)
