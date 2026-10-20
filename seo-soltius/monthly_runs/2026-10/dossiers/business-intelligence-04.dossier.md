---
brief_id: "business-intelligence-04"
researcher_run_date: "2026-10-07"
sources_cited: 12
flags: 6
---

# Research Dossier: Business Intelligence untuk SDM: People Analytics dari Turnover ke Retensi

## TL;DR for the writer

- **People analytics = penerapan BI pada data tenaga kerja.** Menyatukan data HRIS/talent/performance/payroll menjadi satu tampilan untuk menjawab *mengapa* karyawan resign dan divisi mana yang berisiko — bukan sekadar rekap jumlah karyawan. SAP memosisikan **operational reporting** (pertanyaan "siapa yang resign minggu ini?") dan **analytics** (pertanyaan "bagaimana engagement berkorelasi dengan revenue?") sebagai dua hal berbeda — pakai pembedaan ini, bukan menyamakan laporan dengan analitik (lihat tabel People Analytics vs Workforce Analytics).
- **Biaya turnover itu nyata dan besar — pakai Gallup sebagai angka utama (primer, confidence high).** Mengganti satu karyawan = **½ sampai 2 kali gaji tahunannya** (estimasi konservatif, Gallup); voluntary turnover merugikan bisnis AS ~**US$1 triliun/tahun**; **52%** karyawan yang resign sukarela berkata manajer/organisasi bisa mencegah kepergian mereka. Ini jangkar "pain" paling kuat untuk lead.
- **Rumus baku yang aman ditulis:** Turnover rate = (jumlah separasi ÷ rata-rata headcount) × 100; rata-rata headcount = (awal + akhir) ÷ 2. Segmentasi WAJIB dijelaskan: **voluntary vs involuntary**, lalu di dalam voluntary ada **regretted vs non-regretted** (high-performer pindah ke kompetitor = regretted). **Definisi turnover vs attrition BERVARIASI antar sumber** — tulis dengan atribusi, jangan dogmatis (Flag #3).
- **Metrik SDM inti + rumusnya:** time-to-hire, cost-per-hire, retention rate, absenteeism, span of control, biaya tenaga kerja per unit. Rujuk ke tabel "metrik → rumus → keputusan" di bawah. **Angka benchmark (cost-per-hire ~US$4.700; replacement 50–60% gaji) bersumber sekunder yang mengutip SHRM** — tulis sebagai rentang ber-atribusi, JANGAN sebagai angka Indonesia (Flag #4).
- **Bagian jujur (trust-builder):** korelasi ≠ kausalitas pada data manusia (jangan menghukum orang berdasarkan skor), privasi data karyawan tunduk pada **UU No. 27/2022 (UU PDP)** — ringkas saja, tunjuk artikel keamanan/privasi (`2026-08-2-02`), JANGAN deep-dive RLS/masking. Soltius **mengimplementasikan** HCM/analitik di atas SAP SuccessFactors & SAP Analytics Cloud, **bukan membuat** SuccessFactors.

## Core facts (verified)

> **Claim**: People analytics (HR analytics) adalah penerapan Business Intelligence pada data tenaga kerja untuk keputusan talenta.
> **Number/specific**: Menggabungkan data dari berbagai sistem SDM (inti HR, talent, performance, rekrutmen, payroll) menjadi satu tampilan; menjawab "mengapa" (akar sebab attrition, divisi berisiko, pay gap), bukan hanya "berapa" (headcount). Istilah "people analytics", "HR analytics", dan "workforce analytics" sering dipakai bergantian; "workforce analytics" kadang bermakna lebih luas (termasuk tenaga kerja kontingen/outsourced).
> **Source**: SAP ("What is people analytics?", sap.com/resources) + SAP Learning (learning.sap.com, Workforce Analytics learning journey); diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP membedakan *operational reporting* dari *analytics* — keduanya menjawab jenis pertanyaan berbeda, dengan frekuensi refresh berbeda.
> **Number/specific**: Reporting menjawab "siapa yang terminasi minggu ini?" (real-time, operasional); Analytics menjawab "bagaimana engagement berkorelasi dengan revenue?" (tren mingguan/bulanan/tahunan). ROI reporting = berkurangnya usaha menyajikan data; ROI analytics = naiknya nilai bisnis dari keputusan talenta berbasis data.
> **Source**: SAP Learning / SAP Community ("People Analytics — the true approach for operational reporting", community.sap.com); diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP SuccessFactors Workforce Analytics menyediakan tren lintas waktu, drill-to-detail hingga level karyawan, dan benchmarking terhadap peer.
> **Number/specific**: Kapabilitas inti: melacak tren lintas periode, drill-to-detail ke data karyawan, actionable analytics (quick links), **benchmarking untuk membandingkan data dengan peer**, dan query workspace untuk menganalisis tren lintas metrik/dimensi.
> **Source**: SAP Learning (learning.sap.com — "Introducing Workforce Analytics"); diakses 2026-10-07
> **Confidence**: high

> **Claim**: Benchmark SuccessFactors dibangun dari data transaksi level HRIS dengan rumus terstandardisasi.
> **Number/specific**: Benchmark set dikumpulkan di level transaksi dari sistem HRIS organisasi (mis. hire date, pay-increase date, transfer date); menawarkan rumus/definisi standar dan dapat dipotong per dimensi analisis (mis. gender/etnis); tim benchmark meninjau hasil secara kuartalan untuk membuang outlier.
> **Source**: SAP Learning / SAP Community (learning.sap.com, community.sap.com); diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP sedang mengembangkan generasi analitik SDM berikutnya bernama People Intelligence di atas SAP Business Data Cloud.
> **Number/specific**: People Intelligence dideskripsikan sebagai solusi analitik generasi baru di atas SAP Business Data Cloud — menyatukan data people & skills yang terharmonisasi, insight berbasis AI, analitik prediktif, dan dashboard self-service; dimaksudkan menggantikan/menambah Workforce Analytics tradisional.
> **Source**: SAP Community ("How SAP SuccessFactors People Intelligence is Transforming HR Analytics", community.sap.com, blog members); diakses 2026-10-07
> **Confidence**: medium (penamaan/positioning produk SAP cepat berubah dan sebagian materi adalah blog komunitas, bukan dokumen produk resmi — lihat Flag #1)

> **Claim**: Rumus baku turnover rate adalah jumlah separasi dibagi rata-rata headcount, dikali 100.
> **Number/specific**: Turnover rate = (total separasi dalam periode ÷ rata-rata headcount) × 100. Rata-rata headcount = (headcount awal + headcount akhir) ÷ 2.
> **Source**: SHRM (shrm.org, attrition & turnover guidance) + praktik standar HR; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Turnover disegmentasi menjadi voluntary vs involuntary; di dalam voluntary dibedakan regretted vs non-regretted.
> **Number/specific**: Voluntary = karyawan memilih keluar (resign). Involuntary = perusahaan yang mengakhiri (PHK/terminasi kinerja/RIF). Regretted = kehilangan yang disesali, mis. high-performer pindah ke kompetitor; non-regretted = underperformer yang keluar. Segmentasi inilah yang membuat angka turnover berguna untuk keputusan, bukan angka tunggal.
> **Source**: SHRM (shrm.org — "What Is Attrition? Definition, Types, Causes") + praktik HR; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Istilah "turnover" dan "attrition" dibedakan dalam banyak sumber, tetapi definisinya tidak seragam.
> **Number/specific**: Satu pemakaian umum: *turnover* = karyawan keluar lalu posisinya DIISI kembali; *attrition* = karyawan keluar dan posisinya DIBIARKAN kosong/dihapus (pengurangan natural). Pemakaian lain memperlakukan keduanya nyaris sinonim. Karena tak seragam, tulis dengan definisi yang Anda pakai secara eksplisit.
> **Source**: SHRM (shrm.org) + sumber HR; diakses 2026-10-07
> **Confidence**: medium (definisi bervariasi antar sumber — lihat Flag #3)

> **Claim**: Biaya mengganti satu karyawan berkisar setengah hingga dua kali gaji tahunannya (estimasi konservatif).
> **Number/specific**: "The cost of replacing an individual employee can range from one-half to two times the employee's annual salary — and that's a conservative estimate." Contoh Gallup: organisasi 100 orang dengan gaji rata-rata US$50.000 bisa menanggung biaya turnover US$660.000–US$2,6 juta/tahun.
> **Source**: Gallup ("This Fixable Problem Costs U.S. Businesses $1 Trillion", gallup.com/workplace/247391); diakses 2026-10-07
> **Confidence**: high

> **Claim**: Voluntary turnover merugikan bisnis AS sekitar US$1 triliun per tahun.
> **Number/specific**: Gallup memperkirakan kerugian voluntary turnover bagi bisnis AS ~US$1 triliun/tahun (agregat lintas bisnis). Ini angka AS — gunakan sebagai ilustrasi skala masalah, bukan angka Indonesia.
> **Source**: Gallup (gallup.com/workplace/247391); diakses 2026-10-07
> **Confidence**: high

> **Claim**: Mayoritas karyawan yang resign sukarela menilai kepergiannya dapat dicegah oleh manajer/organisasi.
> **Number/specific**: 52% karyawan yang keluar sukarela mengatakan manajer atau organisasi bisa melakukan sesuatu untuk mencegah mereka pergi; 51% mengatakan dalam tiga bulan sebelum keluar, tidak ada manajer/pemimpin yang berbicara dengan mereka soal kepuasan kerja atau masa depan di organisasi. Inilah titik tempat deteksi dini berbasis data bernilai.
> **Source**: Gallup (gallup.com/workplace/247391); diakses 2026-10-07
> **Confidence**: high

> **Claim**: Adopsi people analytics tertinggal dari pengakuannya sebagai prioritas; sebagian besar organisasi masih bertumpu pada pelaporan statis.
> **Number/specific**: Riset menunjukkan ~72% perusahaan menilai HR analytics sebagai prioritas, tetapi hanya ~35% punya orang yang didedikasikan untuk itu; hanya ~22% yakin organisasinya efektif memanfaatkan people analytics (sementara 48% merasa sudah baik dalam mengumpulkan data). Deloitte (survei India): 43% organisasi berada di tingkat kematangan lanjut, tetapi 70%+ masih bergantung pada pelaporan statis.
> **Source**: Deloitte Human Capital / People Analytics Maturity (dikutip via peoplematters.in) + SHRM ("Use of People Analytics in HR", shrm.org/research); diakses 2026-10-07
> **Confidence**: medium (angka adopsi dari sumber sekunder yang mengutip Deloitte/SHRM, sebagian konteks India/global — label sebagai tren, bukan angka Indonesia; lihat Flag #5)

> **Claim**: Benchmark biaya rekrutmen/penggantian karyawan tersedia dari SHRM, tetapi bervariasi tajam menurut level jabatan.
> **Number/specific**: Biaya mengganti karyawan dikutip ~50–60% gaji tahunan secara rata-rata (SHRM), dengan rentang ~33% untuk entry-level hingga ~200%+ untuk posisi eksekutif; average cost-per-hire langsung dikutip ~US$4.700 (SHRM Human Capital Benchmarking). Angka AS; perlakukan sebagai rentang ber-atribusi.
> **Source**: SHRM Human Capital Benchmarking (dikutip via staffingindustry.com & ringkasan industri); diakses 2026-10-07
> **Confidence**: medium (sumber sekunder mengutip SHRM; angka AS — lihat Flag #4)

> **Claim**: Analisis data karyawan di Indonesia tunduk pada UU Pelindungan Data Pribadi.
> **Number/specific**: UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) mengatur pemrosesan data pribadi, termasuk data karyawan; prinsip minimalisasi data, tujuan yang sah, dan hak subjek data berlaku. (Ringkas saja — detail RLS/masking sudah dibahas di artikel `2026-08-2-02`.)
> **Source**: UU No. 27 Tahun 2022 (peraturan.go.id); diakses 2026-10-07
> **Confidence**: high (keberadaan & nomor UU; JANGAN deep-dive teknis — lihat Flag #6)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP SuccessFactors** (HCM cloud) dengan **People Analytics / Workforce Analytics** | Mengagregasi data talent/performance/HR/payroll jadi satu tampilan; mengotomasi metrik turnover/attrition; menyingkap akar sebab attrition & pay gap; WFA punya benchmarking peer + drill-to-detail. SAP membedakan reporting operasional vs analytics. | H2 #1 (definisi), H2 #4 (sumber data), closing | **Human Capital Management System (HCM)** solution (company_profile) |
| **SAP Analytics Cloud (SAC)** | Lapisan dashboard lintas-domain: menggabungkan data SDM dengan finansial/operasional untuk analisis biaya tenaga kerja (workforce cost); live vs import. | H2 #4 / closing | **Data and AI Consulting** service |
| (next-gen, hati-hati) **SAP Business Data Cloud / People Intelligence** | Arah pengembangan SAP untuk analitik SDM berbasis AI; sebut sebagai arah/roadmap, bukan fitur mapan — penamaan cepat berubah. | opsional, 1 kalimat | — |

**Soltius anchor** (closing, maks 2–3 self-mention): "Melalui solusi **Human Capital Management** dan layanan **Data and AI Consulting**, Soltius mengimplementasikan analitik SDM di atas SAP SuccessFactors dan SAP Analytics Cloud agar keputusan talenta berbasis data." Kredensial yang cocok: **SAP Platinum Partner melalui United VARs**; bagian **Metrodata Group sejak 1998**. Opsional 1 aside mid-artikel di bagian etika: pendampingan menekankan tata kelola & privasi data karyawan sejak awal — maksimal satu, hemat.

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** SuccessFactors & SAC — **tidak membuatnya**. Jangan mengarang angka turnover "benchmark" Indonesia tanpa sumber.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Gallup — "This Fixable Problem Costs U.S. Businesses $1 Trillion" (gallup.com/workplace/247391)** — *what it backs*: biaya mengganti karyawan ½–2× gaji tahunan; ~US$1 triliun/tahun; 52% kepergian dapat dicegah. **Sumber utama untuk lead/pain.**
2. **SAP — "What is people analytics?" (sap.com/resources) + SAP Learning "Workforce Analytics" (learning.sap.com)** — *what it backs*: definisi people analytics; pembedaan reporting vs analytics; kapabilitas WFA (benchmarking, drill-to-detail, query workspace).
3. **SHRM — attrition & turnover guidance + "Use of People Analytics in HR" (shrm.org)** — *what it backs*: rumus turnover; segmentasi voluntary/involuntary/regretted; definisi attrition; benchmark biaya (label sebagai AS).
4. **Deloitte — People Analytics / Human Capital maturity** — *what it backs*: kesenjangan adopsi vs kematangan (pelaporan statis dominan). (Akses via ringkasan peoplematters.in; jika writer ingin link primer, cari halaman Deloitte Human Capital resmi.)

Priority: SAP official > Gallup/Deloitte/SHRM > Kemenaker/BPS (opsional konteks ID).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu people analytics?
People analytics (analitik SDM) adalah penerapan Business Intelligence pada data tenaga kerja: menyatukan data dari sistem HR, rekrutmen, performance, dan payroll menjadi wawasan untuk keputusan talenta. Berbeda dari laporan HR biasa yang menghitung jumlah karyawan, people analytics menjawab mengapa karyawan resign, divisi mana yang berisiko kehilangan talenta, dan tindakan apa yang menaikkan retensi.

### Bagaimana cara menghitung turnover karyawan?
Turnover rate dihitung dengan membagi jumlah karyawan yang keluar selama satu periode dengan rata-rata jumlah karyawan pada periode itu, lalu dikali 100. Rata-rata headcount = (jumlah awal + jumlah akhir) ÷ 2. Agar berguna, angka ini disegmentasi: sukarela vs tidak sukarela, per divisi, per manajer, dan per masa kerja — bukan satu angka tunggal untuk seluruh perusahaan.

### Apa bedanya turnover dan attrition?
Keduanya sering dipakai bergantian, tetapi banyak praktisi membedakannya: *turnover* adalah karyawan keluar dan posisinya diisi kembali, sedangkan *attrition* adalah karyawan keluar dan posisinya dibiarkan kosong (pengurangan natural). Karena definisi tak seragam antar sumber, yang penting adalah menyatakan definisi yang Anda pakai secara eksplisit saat melaporkan angka.

### Metrik SDM apa saja yang paling penting?
Tidak ada daftar tunggal, tetapi inti yang memicu tindakan: turnover (disegmentasi sukarela/regretted), retention rate, time-to-hire, cost-per-hire, absensi (absenteeism), span of control, dan biaya tenaga kerja per unit output. Pilih metrik yang terhubung ke keputusan nyata — berhenti pada metrik yang tidak mengubah tindakan apa pun hanya menambah dashboard tanpa nilai.

### Bagaimana BI membantu menurunkan turnover?
BI mengubah data SDM yang terserak menjadi deteksi dini. Dengan menganalisis akar sebab attrition per divisi, manajer, dan masa kerja, organisasi menemukan pola risiko — misalnya resign menumpuk pada bulan-bulan awal atau pada high-performer tertentu. Gallup mencatat 52% karyawan yang resign menilai kepergiannya bisa dicegah; analitik membantu intervensi sebelum, bukan sesudah, orang mengundurkan diri.

### Apa itu time-to-hire dan cost-per-hire?
Time-to-hire adalah lama waktu dari kandidat masuk pipeline rekrutmen sampai menerima tawaran (mengukur kecepatan proses). Cost-per-hire adalah total biaya rekrutmen (iklan, agensi, waktu perekrut, onboarding) dibagi jumlah posisi terisi. SHRM mengutip cost-per-hire rata-rata sekitar US$4.700 di AS — gunakan sebagai gambaran, bukan patokan biaya Indonesia yang harus dihitung dari data sendiri.

### Apakah data karyawan aman dan etis untuk dianalisis?
Bisa, bila diatur dengan benar. Di Indonesia, pemrosesan data karyawan tunduk pada UU No. 27 Tahun 2022 (UU PDP): data diproses untuk tujuan yang sah, seminimal yang diperlukan, dan dengan tata kelola akses. Secara etis, hindari mereduksi manusia ke skor: korelasi bukan kausalitas, dan keputusan personel tidak boleh dijatuhkan semata-mata oleh angka prediktif tanpa konteks manusia.

## Data tables for the writer

### Metrik SDM → rumus → keputusan
| Metrik | Rumus / definisi | Keputusan yang dipicu |
|---|---|---|
| Turnover rate | (separasi ÷ rata-rata headcount) × 100 | Di mana & siapa yang hilang; perlu intervensi retensi? |
| Voluntary vs involuntary | Pisahkan resign (sukarela) dari PHK/terminasi | Masalah engagement vs masalah kinerja/restrukturisasi |
| Regretted turnover | Bagian voluntary dari karyawan yang ingin dipertahankan (mis. high-performer) | Prioritas retensi talenta kunci; investigasi akar sebab |
| Retention rate | (karyawan bertahan sepanjang periode ÷ headcount awal) × 100 | Efektivitas program retensi dari waktu ke waktu |
| Time-to-hire | Hari dari kandidat masuk pipeline → terima tawaran | Kecepatan & bottleneck proses rekrutmen |
| Cost-per-hire | Total biaya rekrutmen ÷ jumlah posisi terisi | Efisiensi anggaran rekrutmen; build vs buy talent |
| Absenteeism rate | (hari absen tak terjadwal ÷ total hari kerja terjadwal) × 100 | Sinyal beban kerja/engagement/kesehatan |
| Span of control | Jumlah bawahan langsung per manajer | Struktur organisasi; risiko manajer kelebihan beban |
| Biaya tenaga kerja / unit | Total biaya SDM ÷ unit output (atau revenue) | Produktivitas & efisiensi workforce cost |

### People Analytics / Reporting vs Workforce Analytics (SuccessFactors)
| Aspek | Operational Reporting | Workforce Analytics |
|---|---|---|
| Pertanyaan khas | "Siapa yang terminasi minggu ini?" | "Bagaimana engagement berkorelasi dengan revenue?" |
| Horizon waktu | Real-time / operasional | Tren lintas periode (mingguan–tahunan) |
| Nilai (ROI) | Berkurangnya usaha menyajikan data | Naiknya nilai keputusan talenta |
| Benchmarking peer | Umumnya tidak | Ya (vs peer, dari data transaksi HRIS terstandardisasi) |
| Drill-to-detail | Terbatas | Hingga level karyawan |
> Sumber: SAP Learning / SAP Community (diakses 2026-10-07). Catatan: SAP mengarahkan generasi berikutnya ke **People Intelligence** di atas SAP Business Data Cloud — sebut sebagai arah, bukan fitur mapan.

## Edge cases & nuance

- **Korelasi ≠ kausalitas.** Data manusia penuh variabel pengganggu. "Karyawan yang sering lembur lebih sering resign" tidak berarti lembur menyebabkan resign — bisa jadi keduanya efek dari understaffing. Keputusan personel yang menghukum individu berdasarkan skor prediktif berisiko salah dan tidak etis.
- **Angka tunggal menyesatkan.** Turnover perusahaan 12% bisa menyembunyikan satu divisi di 40%. Nilai people analytics ada pada segmentasi (divisi, manajer, masa kerja, performa), bukan angka agregat.
- **Benchmark AS ≠ Indonesia.** Angka Gallup/SHRM (½–2× gaji, ~US$4.700/hire, 30% turnover AS) adalah konteks AS. Pakai untuk skala masalah, jangan sajikan sebagai patokan pasar kerja Indonesia. Jika perlu angka lokal, hitung dari data organisasi sendiri.
- **Metrik vanity.** "Jumlah jam pelatihan" atau "jumlah pelatihan diselenggarakan" tanpa menghubungkan ke retensi/kinerja adalah metrik sibuk, bukan metrik keputusan.
- **Garbage in, garbage out.** People analytics hanya sebaik data HRIS-nya: master data karyawan, kode organisasi, dan tanggal yang konsisten. Data payroll/rekrutmen yang tak tersambung membuat angka turnover/cost-per-hire keliru.
- **Definisi "attrition" tidak universal** — lihat Flag #3; jangan berdebat definisi, nyatakan yang Anda pakai.

## Flags (open factual risk)

- ⚠️ **Flag #1 — Penamaan produk SAP ("People Intelligence", "SAP Business Data Cloud").** SAP sering mengganti/merombak nama & positioning produk analitik SDM; sebagian materi People Intelligence adalah blog komunitas, bukan dokumen produk resmi. → Rekomendasi: sebut People Analytics/Workforce Analytics sebagai yang mapan; sebut People Intelligence/Business Data Cloud hanya sebagai **arah pengembangan** ("SAP mengarahkan…"), tanpa klaim fitur spesifik yang pasti.
- ⚠️ **Flag #2 — Beda People Analytics vs Workforce Analytics tidak kaku.** Istilah dipakai bergantian; "Workforce Analytics" adalah nama modul SuccessFactors yang spesifik, sedangkan "people analytics" adalah istilah praktik umum. → Rekomendasi: jelaskan sebagai praktik (people/HR analytics) + modul SAP (Workforce Analytics), bukan dua produk yang dipertentangkan.
- ⚠️ **Flag #3 — Definisi "turnover" vs "attrition" bervariasi antar sumber.** → Rekomendasi: nyatakan definisi yang dipakai secara eksplisit; jangan menyajikan satu definisi sebagai satu-satunya yang benar.
- ⚠️ **Flag #4 — Angka biaya (cost-per-hire ~US$4.700; replacement 50–60% gaji; 33%–213% per level).** Bersumber sekunder yang mengutip SHRM, konteks AS. → Rekomendasi: atribusikan ke SHRM + tahun, tulis sebagai rentang, labeli "di AS"; jangan jadikan angka Indonesia. **Angka Gallup (½–2× gaji, ~US$1 triliun, 52%) aman dipakai sebagai primer.**
- ⚠️ **Flag #5 — Angka adopsi people analytics (72%/35%/22%; Deloitte 43%/70%).** Sumber sekunder/konteks global-India. → Rekomendasi: label sebagai tren global ber-atribusi; jangan klaim angka Indonesia. JANGAN mengarang benchmark turnover/retensi Indonesia.
- ⚠️ **Flag #6 — UU PDP hanya caveat singkat.** Brief meminta privasi ringkas; detail RLS/masking/enkripsi sudah ada di `2026-08-2-02`. → Rekomendasi: satu paragraf singkat (nomor UU + prinsip minimalisasi/akses), lalu arahkan pembaca ke artikel keamanan; JANGAN deep-dive teknis.

## Definition snippet draft (40–60 words)

> **People analytics** (analitik SDM) adalah penerapan *Business Intelligence* pada data tenaga kerja: menyatukan data dari sistem HR, rekrutmen, dan payroll menjadi wawasan untuk keputusan talenta. Berbeda dari laporan HR biasa yang sekadar menghitung jumlah karyawan, people analytics menjawab mengapa karyawan resign, divisi mana yang berisiko kehilangan talenta, dan tindakan apa yang menaikkan retensi.
