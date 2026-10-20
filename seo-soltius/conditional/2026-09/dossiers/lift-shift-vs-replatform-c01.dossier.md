---
brief_id: "lift-shift-vs-replatform-c01"
researcher_run_date: "2026-09-01"
sources_cited: 4
flags: 4
batch: "conditional-2026-09"
---

# Research Dossier: Lift & Shift vs Re-Platform — Strategi Migrasi SAP ke IaaS

## TL;DR for the writer
- **Definisi resmi terverifikasi (AWS Prescriptive Guidance, 7 Rs):** *rehost* = "lift and shift" — pindah aplikasi **tanpa mengubah apa pun**; *replatform* = "lift, tinker, and shift" (juga "lift and reshape") — pindah sambil **optimasi terbatas** (mis. DB ke layanan terkelola, upgrade OS). Kutip ini, jangan parafrase liar.
- **Original insight aman ditulis:** lift & shift (sumbu infrastruktur) ≠ brownfield (sumbu konversi aplikasi ke S/4HANA). Dua sumbu independen; satu proyek memilih di keduanya. Terkonfirmasi lewat mekanisme teknis SAP SUM DMO (di bawah).
- **SUM DMO terverifikasi:** *DMOVE2S4* = pendekatan satu langkah (migrasi DB + update sistem + konversi ke S/4HANA); *DMO with System Move* memindahkan sistem ke host/hyperscaler baru dalam satu prosedur. Ini "cara teknis re-platform + konversi digabung".
- **Tenggat terkonfirmasi:** mainstream maintenance SAP ECC 6.0 (EHP 6–8) berakhir **31 Desember 2027**, extended maintenance s.d. **31 Desember 2030**. Sebut singkat sebagai driver, jangan mendalami (ada `sap-ecc-2027-c01`).
- **Re-platform ke HANA butuh instance tersertifikasi SAP HANA** di tiap hyperscaler — terkonfirmasi; jembatan alami ke cousin `sap-hyperscaler`.
- **HATI-HATI:** semua angka **durasi & biaya** (rehost hari–minggu; re-platform 4–12 minggu; "3x lebih cepat") **tidak punya sumber otoritatif** — vendor blog. Hedge/atribusi/omit. Lihat Flags.

## Core facts (verified)

> **Claim**: AWS mendefinisikan 7 strategi migrasi ("7 Rs"): Retire, Retain, Rehost, Relocate, Repurchase, Replatform, Refactor/Re-architect.
> **Number/specific**: Tujuh strategi. Untuk migrasi besar, yang lazim: rehost, replatform, relocate, retire.
> **Source**: AWS Prescriptive Guidance, "About the migration strategies", https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: Rehost = "lift and shift" — memindahkan aplikasi dari sumber ke cloud **tanpa membuat perubahan apa pun** pada aplikasi.
> **Number/specific**: Verbatim AWS: strategi ini "also known as *lift and shift*... you move your applications... **without making any changes to the application**." AWS mencatat rehost menskalakan aplikasi "**without implementing any cloud optimizations**".
> **Source**: AWS Prescriptive Guidance (URL di atas)
> **Confidence**: high

> **Claim**: Replatform = "lift, tinker, and shift" — memindahkan aplikasi sambil memperkenalkan **optimasi tingkat tertentu**.
> **Number/specific**: Verbatim AWS: "also known as *lift, tinker, and shift* or *lift and reshape*... you move the application to the cloud, and you introduce **some level of optimization**." Contoh AWS: replatform database SQL Server ke Amazon RDS; upgrade OS ke versi terbaru.
> **Source**: AWS Prescriptive Guidance (URL di atas)
> **Confidence**: high

> **Claim**: Mainstream maintenance SAP ECC 6.0 (EHP 6–8) berakhir 31 Desember 2027; extended maintenance tersedia s.d. 31 Desember 2030.
> **Number/specific**: 31-12-2027 (mainstream) → 31-12-2030 (extended, berbayar). Versi EHP 0–5 berakhir lebih awal (2025).
> **Source**: Kebijakan maintenance SAP (dikonfirmasi lintas sumber industri; selaras dengan `product_matrix.md` §5 pre-approved). Untuk tautan publik: SAP maintenance strategy / SAP support notes.
> **Confidence**: high (untuk tanggal 2027/2030); *biaya* extended = medium (lihat Flags)

> **Claim**: SAP SUM (Software Update Manager) menyediakan DMO (Database Migration Option); *DMOVE2S4* adalah pendekatan satu langkah ke cloud yang mengintegrasikan transisi ke S/4HANA dengan maintenance sistem.
> **Number/specific**: DMOVE2S4 menggabungkan migrasi DB + update/konversi sistem ke S/4HANA dalam satu prosedur SUM. Diperkenalkan seiring SUM 2.0 (mis. SP 17).
> **Source**: SAP Community (blog resmi SAP) — "DMOVE2S4 – your one-step approach into the cloud", https://community.sap.com/t5/technology-blog-posts-by-sap/dmove2s4-your-one-step-approach-into-the-cloud/ba-p/13872751 (diakses 2026-09-01)
> **Confidence**: high (konsep & penamaan); detail per-SP dapat berubah antar-rilis SUM

> **Claim**: *DMO with System Move* menjalankan prosedur DMO yang dimulai di sistem sumber dan dilanjutkan di sistem target, memungkinkan pindah ke host/hyperscaler baru sekaligus konversi dalam satu proses.
> **Number/specific**: Mendukung skenario gabungan: konversi "SAP ERP on HANA" → S/4HANA + transisi ke S/4HANA Cloud private edition / hyperscaler (mis. Azure) dalam satu langkah.
> **Source**: SAP Help Portal — "Database Migration Option: Target Database SAP HANA" (help.sap.com, dok DMO of SUM 2.0) + SAP Community post di atas.
> **Confidence**: high (konsep); nama fitur stabil, cakupan detail per-versi berubah

> **Claim**: Menjalankan SAP HANA di IaaS hyperscaler menuntut **instance/konfigurasi tersertifikasi SAP HANA**; tanpa itu, dukungan SAP untuk isu performa bisa terbatas.
> **Number/specific**: SAP memelihara direktori "Certified and Supported SAP HANA Hardware / IaaS Platforms" untuk AWS, Microsoft Azure, Google Cloud (berbasis SAP HANA Tailored Data Center Integration / TDI). Tiap hyperscaler punya tipe instance tersertifikasi (mis. AWS high-memory, Azure, GCP memory-optimized).
> **Source**: SAP — "SAP and Hyperscalers", https://support.sap.com/en/offerings-programs/ccoe/sap-hyperscalers.html + SAP Certified & Supported SAP HANA Hardware Directory.
> **Confidence**: high (prinsip sertifikasi); daftar tipe instance spesifik berubah — jangan sebut SKU tunggal sebagai permanen

> **Claim**: Rehost umumnya dijalankan via *homogeneous system copy* (DB & OS sama di sumber & target), sementara re-platform ke HANA melibatkan *heterogeneous migration* (ganti DB → HANA).
> **Number/specific**: Homogeneous = tanpa ganti platform DB/OS; heterogeneous (mis. AnyDB → HANA) = DMO teritori.
> **Source**: Konsep SAP standar (SUM/DMO dokumentasi help.sap.com). Selaras dengan definisi AWS rehost vs replatform.
> **Confidence**: high (konsep); tidak ada angka yang diklaim

## Solution focus + Soltius anchor (from product_matrix.md §5 — "ERP migration to the cloud")

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| Rehost (lift & shift) | Pindah as-is, tanpa ubah aplikasi/OS/DB; via homogeneous system copy; tanpa cloud optimization (AWS) | H2 #1 tabel + snippet | — |
| Re-platform (lift, tinker, shift) | Optimasi terarah: DB→SAP HANA, upgrade OS, sizing instance (AWS) | H2 #1 tabel | — |
| 7 Rs framework | Kerangka umum AWS; artikel fokus 2 R teratas untuk SAP | H2 #1 lead-in | — |
| SUM DMO / DMOVE2S4 / DMO with System Move | Cara teknis re-platform + konversi S/4HANA digabung dalam satu prosedur | H2 #3 | — |
| Instance tersertifikasi SAP HANA | Re-platform ke HANA butuh konfigurasi tersertifikasi per hyperscaler | H2 #3 (jembatan cousin) | — |
| **Migration service + Cloud solution** | Best Cloud / Best RISE Partner; SAP Platinum Partner via United VARs (sejak 1998, Metrodata Group) | **Kesimpulan (1 positioning line) + soft CTA** | ✅ |

Reminder framing: Soltius **mengimplementasikan/mendampingi** migrasi SAP ke AWS/Azure/GCP — **bukan pembuat** infrastruktur. **Maks 2 sebutan Soltius** (batch override §6): 1 positioning line di Kesimpulan + 1 soft CTA baris terakhir. JANGAN posisikan AWS/Azure/GCP sebagai milik Soltius; tanpa superlatif.

## Authoritative external sources (≥2 — for the writer to link out)
1. **AWS Prescriptive Guidance — "About the migration strategies" (7 Rs)** — https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html — *backs*: definisi otoritatif rehost ("lift and shift", tanpa perubahan) & replatform ("lift, tinker, and shift", optimasi terbatas). **Sitasi utama (H2 #1).**
2. **SAP Community (blog resmi SAP) — "DMOVE2S4 – your one-step approach into the cloud"** — https://community.sap.com/t5/technology-blog-posts-by-sap/dmove2s4-your-one-step-approach-into-the-cloud/ba-p/13872751 — *backs*: SUM DMO / DMOVE2S4 sebagai cara re-platform + konversi S/4HANA satu langkah. **Sitasi teknis (H2 #3).**
3. *(Opsional driver tenggat)* **SAP maintenance strategy** — mainstream maintenance ECC 6.0 berakhir 31-12-2027, extended s.d. 2030. Cukup 1 kalimat driver di H2 #2 (jangan mendalami).

> Gunakan **1–2** sitasi inline (batch override). Rekomendasi: AWS (H2 #1) wajib; SAP DMOVE2S4 (H2 #3) sangat dianjurkan sebagai bukti klaim "dua sumbu bisa digabung". Cukup dua ini.

## FAQ Q&As (draft — 2–3, dari PAA terkuat; 30–60 kata; 1 fakta tiap jawaban; TIDAK mengulang definisi snippet)

### Apakah lift and shift sama dengan brownfield?
Tidak. Keduanya sumbu keputusan berbeda: lift & shift (rehost) adalah strategi **infrastruktur** — memindahkan sistem apa adanya ke IaaS — sedangkan brownfield adalah pendekatan **konversi aplikasi** ke SAP S/4HANA lewat SUM DMO. Satu proyek memilih di kedua sumbu secara terpisah. (≈45 kata)

### Apakah SAP bisa langsung ke S/4HANA lewat lift and shift?
Tidak. Rehost mempertahankan versi dan database yang ada, jadi sistem tetap ECC setelah pindah. Menuju S/4HANA memerlukan konversi (brownfield) atau implementasi baru (greenfield). Pendekatan dua langkah lazim: rehost dulu ke cloud, konversi S/4HANA menyusul sebelum tenggat ECC 31 Desember 2027. (≈50 kata)

### Berapa lama migrasi lift and shift dibanding re-platform?
Rehost lebih cepat karena tanpa perubahan aplikasi; re-platform lebih lama karena menambah optimasi seperti migrasi database ke SAP HANA. Estimasi durasi bergantung pada ukuran dan kompleksitas beban kerja — angka pasti sebaiknya diverifikasi per proyek, bukan digeneralisasi. (≈42 kata)

> **Catatan writer:** FAQ #3 sengaja TIDAK menyebut angka "hari–minggu" / "4–12 minggu" sebagai fakta keras (tak ada sumber otoritatif — lihat Flags). Jika ingin menyertakan rentang untuk memenuhi "1 angka", gunakan tenggat **31 Desember 2027** (terverifikasi) sebagaimana sudah dipakai di FAQ #2, atau atribusikan rentang durasi ke "estimasi vendor" dengan hedge.

## Data table for the writer (elemen terstruktur wajib — H2 #1)

**Lift & Shift (Rehost) vs Re-Platform untuk beban kerja SAP di IaaS**

| Dimensi | Lift & Shift (Rehost) | Re-Platform (Lift, Tinker, Shift) |
|---|---|---|
| Perubahan pada sistem | Tidak ada — aplikasi, OS, dan database dipindah apa adanya | Optimasi terarah — mis. migrasi DB ke SAP HANA, upgrade OS, penyesuaian sizing |
| Teknik migrasi | Homogeneous system copy (DB/OS sama) | Heterogeneous migration (mis. AnyDB → HANA), sering via SUM DMO |
| Optimasi cloud-native | Tidak dilakukan saat pindah (AWS: "without cloud optimizations") | Sebagian dimanfaatkan (layanan terkelola, HA, sizing) |
| Kecepatan relatif | Lebih cepat (perubahan minimal) | Lebih lama (menambah langkah optimasi) |
| Risiko cutover | Lebih rendah — cakupan perubahan sempit | Lebih tinggi — lebih banyak variabel diubah sekaligus |
| Biaya operasional lanjutan | Berpotensi belum optimal (sistem lama di infrastruktur baru) | Berpotensi lebih efisien setelah optimasi |
| Cocok untuk | Tenggat ketat, keluar data center cepat, kapasitas tim terbatas, pendekatan dua langkah | Ingin sekaligus ke HANA, menekan OpEx lanjutan, menghindari migrasi ganda |

> **Kolom "kecepatan" & "biaya" bersifat kualitatif-relatif, BUKAN angka.** Tabel ini aman karena hanya menyatakan arah (lebih cepat/lebih lambat) yang mengikuti langsung dari definisi AWS — bukan mengklaim durasi/biaya numerik. Jangan tambahkan kolom "hari–minggu / 4–12 minggu" ke tabel tanpa atribusi (lihat Flags).

## Edge cases & nuance (untuk H2 #3 — original insight)
- **Dua sumbu independen.** Sumbu 1 = infrastruktur (rehost vs re-platform: *ke mana & bagaimana* sistem dipindah). Sumbu 2 = konversi aplikasi (brownfield/greenfield/selective "bluefield": *apakah & bagaimana* jadi S/4HANA). Rehost + tetap ECC itu valid; re-platform + brownfield juga valid; keduanya kombinasi berbeda. Ini pembeda inti artikel — jangan campur.
- **DMO with System Move = titik temu dua sumbu.** Secara teknis, re-platform (pindah host/DB→HANA) dan konversi (→S/4HANA) BISA dijalankan satu prosedur SUM. Itu sebabnya orang keliru menyamakannya — padahal secara keputusan tetap dua pilihan terpisah.
- **RISE with SAP** (singgung 1 kalimat saja): keputusan strategi tetap ada, tetapi mekanismenya berpindah ke kontrak terkelola SAP. Jangan mendalami.
- **Pendekatan dua langkah** (rehost dulu → konversi menyusul) sering dipilih saat tenggat ECC mepet: keluar data center cepat via rehost, konversi S/4HANA dilakukan setelah stabil di cloud. Trade-off: risiko "migrasi ganda".

## Flags (open factual risk — writer WAJIB hindari/hedge)
- ⚠️ **Durasi "rehost hari–minggu" & "re-platform ~4–12 minggu per beban kerja":** TIDAK ditemukan sumber otoritatif (SAP/AWS/analis) yang mengangkakan ini; berasal dari blog vendor/SI. → **Rekomendasi:** JANGAN sajikan sebagai fakta. Gunakan bahasa relatif ("lebih cepat/lebih lama") seperti di tabel & FAQ, ATAU atribusikan eksplisit ("menurut estimasi sejumlah penyedia layanan migrasi...") + hedge. Jangan mengarang.
- ⚠️ **Klaim "3x lebih cepat" / "biaya operasional X% lebih tinggi":** tidak terverifikasi. → **Rekomendasi:** OMIT. Tak ada sumber kuat.
- ⚠️ **Biaya extended maintenance ECC (mis. "+2 poin persentase / ~9%"):** muncul di blog pihak ketiga, bukan konfirmasi SAP resmi dalam run ini. → **Rekomendasi:** cukup sebut tanggal (2027/2030, terverifikasi); JANGAN mengangkakan biaya extended tanpa sumber SAP resmi.
- ⚠️ **Nama/cakupan fitur SUM (DMOVE2S4, DMO with System Move, downtime-optimized):** benar sebagai konsep, tetapi detail per-SP berubah antar-rilis SUM 2.0. → **Rekomendasi:** framing level-konsep ("pendekatan satu langkah untuk menggabungkan re-platform dan konversi"), jangan klaim langkah-teknis spesifik atau nomor SP sebagai permanen.
- ℹ️ **Slug cousin live:** URL cousin `sap-hyperscaler-c01` (`https://www.soltius.co.id/id/blog/read/sap-di-aws-azure-gcp-perbandingan-indonesia`) BELUM tentu live (artikel conditional 2026-08). **Editor wajib verifikasi slug sebelum publish**; jika belum terbit, tautkan ke hub `migrasi-erp-ke-cloud` atau tunda link cousin.

## Definition snippet draft (40–60 kata — SATU-SATUNYA tempat definisi)
> **Ringkasnya:** Lift & shift (rehost) dan re-platform adalah dua strategi memindahkan sistem SAP ke infrastruktur cloud (IaaS). Lift & shift memindahkan sistem apa adanya — tanpa mengubah aplikasi, sistem operasi, atau database — sehingga cepat dan berisiko rendah. Re-platform memindahkannya sambil melakukan optimasi terarah, misalnya migrasi database ke SAP HANA, sehingga lebih lama tetapi lebih optimal. (≈54 kata)

*(Selaras dengan definisi AWS Prescriptive Guidance; aman dikutip AI Overview. Body/H2/FAQ DILARANG mengulang ini dengan kata lain.)*
