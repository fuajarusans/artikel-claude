---
title: "Business Intelligence untuk SDM: People Analytics dari Turnover ke Retensi"
meta_title: "Business Intelligence untuk SDM: People Analytics"
meta_description: "Business Intelligence untuk SDM mengubah data turnover jadi keputusan retensi: rumus metrik HR, cara menekan attrition, sumber data HRIS, plus batas etikanya."
slug: "business-intelligence-sdm-people-analytics-retensi"
language: "id"
primary_keyword: "Business Intelligence"
secondary_keywords:
  - "people analytics"
  - "HR analytics"
  - "turnover karyawan"
  - "attrition rate"
  - "retensi karyawan"
  - "time to hire"
  - "cost per hire"
  - "SAP SuccessFactors"
  - "workforce analytics"
  - "SAP Analytics Cloud"
  - "privasi data karyawan"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
external_citations:
  - url: "https://www.gallup.com/workplace/247391/fixable-problem-costs-businesses-trillion.aspx"
    context: "Biaya mengganti karyawan ½–2× gaji tahunan; voluntary turnover ~US$1 triliun/tahun bagi bisnis AS; 52% karyawan menilai kepergiannya dapat dicegah"
  - url: "https://www.sap.com/products/hcm/people-analytics.html"
    context: "Definisi people analytics dan pembedaan operational reporting vs analytics; kapabilitas Workforce Analytics (benchmarking, drill-to-detail)"
brief_id: "business-intelligence-04"
target_word_count: 1650
publish_month: "2026-10"
word_count: 1904
---

# Business Intelligence untuk SDM: People Analytics dari Turnover ke Retensi

Direktur HR biasanya bisa menyebut angka turnover tahun lalu dengan cepat. Pertanyaan yang sulit datang sesudahnya: divisi mana yang justru kehilangan talenta terbaiknya, pada bulan ke berapa karyawan baru paling sering resign, dan berapa biaya sebenarnya setiap kali satu posisi kunci kosong. Datanya sudah ada, tetapi terserak di sistem HR, payroll, dan spreadsheet rekrutmen, sehingga laporan SDM berhenti sebagai rekap administratif. Artikel ini membahas penerapan [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) pada fungsi SDM, yang lazim disebut *people analytics*: cara mengubah data tenaga kerja yang tercecer menjadi keputusan retensi dan rekrutmen yang bisa dipertanggungjawabkan, lengkap dengan rumus metrik intinya dan batas etikanya.

> **Ringkas:** *People analytics* (analitik SDM) adalah penerapan *Business Intelligence* pada data tenaga kerja: menyatukan data dari sistem HR, rekrutmen, dan payroll menjadi wawasan untuk keputusan talenta. Berbeda dari laporan HR biasa yang sekadar menghitung jumlah karyawan, people analytics menjawab mengapa karyawan resign, divisi mana yang berisiko kehilangan talenta, dan tindakan apa yang menaikkan retensi.

Yang dibahas di sini sengaja praktis: definisi yang bisa dipakai, metrik SDM beserta rumusnya, cara analitik menekan turnover, dari mana datanya diambil, dan pada titik mana analitik orang justru berisiko disalahgunakan.

## Apa Itu People Analytics dalam Business Intelligence?

People analytics adalah disiplin yang memperlakukan data tenaga kerja seperti data bisnis lain yang layak dianalisis: dikumpulkan dari banyak sistem, dibersihkan, lalu diubah menjadi jawaban atas pertanyaan "mengapa" dan "apa berikutnya", bukan sekadar "berapa". Inti perbedaannya terletak pada tujuan. Laporan menghitung; analitik menjelaskan pola dan memandu tindakan.

SAP membedakan dua hal yang sering dikira sama: *operational reporting* dan *analytics* (SAP). Pelaporan operasional menjawab pertanyaan berfrekuensi tinggi seperti "siapa yang resign minggu ini?" dan nilainya adalah berkurangnya usaha menyajikan data. Analitik menjawab pertanyaan bertingkat seperti "bagaimana tingkat keterlibatan (*engagement*) berkorelasi dengan pendapatan?" dan nilainya adalah naiknya kualitas keputusan talenta. Keduanya perlu, tetapi hanya yang kedua yang mengubah cara perusahaan mengelola orang.

Dalam praktiknya, kematangan people analytics bergerak bertahap:

1. **Deskriptif.** Apa yang terjadi? Turnover kuartal lalu 9%, waktu rekrut rata-rata 38 hari.
2. **Diagnostik.** Mengapa terjadi? Resign menumpuk pada karyawan dengan masa kerja di bawah satu tahun di dua cabang tertentu.
3. **Prediktif.** Apa yang mungkin terjadi? Pola masa lalu menandai kelompok karyawan dengan risiko keluar lebih tinggi.
4. **Preskriptif.** Apa yang sebaiknya dilakukan? Intervensi retensi diarahkan ke kelompok berisiko, lalu dampaknya diukur.

Sebagian besar organisasi masih berhenti di tingkat deskriptif. Riset yang dikutip dari Deloitte dan SHRM menunjukkan sekitar 72% perusahaan menilai HR analytics sebagai prioritas, tetapi hanya sekitar 22% yang yakin organisasinya efektif memanfaatkannya; survei Deloitte di India bahkan mencatat 70% lebih masih bergantung pada pelaporan statis. Angka-angka ini adalah tren global ber-atribusi, bukan patokan pasar Indonesia, tetapi arahnya konsisten: niat jauh mendahului kemampuan.

Di ekosistem SAP, praktik ini ditopang modul **Workforce Analytics** pada **SAP SuccessFactors** (platform *Human Capital Management* berbasis cloud). Kapabilitas intinya: melacak tren lintas periode, *drill-to-detail* hingga level karyawan, dan *benchmarking* terhadap peer yang dibangun dari data transaksi HRIS terstandardisasi (SAP). Berikut gambaran bedanya dengan pelaporan operasional:

| Aspek | Operational Reporting | Workforce Analytics |
|---|---|---|
| Pertanyaan khas | "Siapa yang resign minggu ini?" | "Bagaimana engagement berkorelasi dengan pendapatan?" |
| Horizon waktu | Real-time / operasional | Tren lintas periode (mingguan–tahunan) |
| Nilai (ROI) | Usaha menyajikan data berkurang | Kualitas keputusan talenta naik |
| Benchmarking peer | Umumnya tidak | Ya, dari data transaksi HRIS |
| Drill-to-detail | Terbatas | Hingga level karyawan |

Perlu dicatat, SAP sedang mengarahkan generasi berikutnya ke *People Intelligence* di atas *SAP Business Data Cloud*. Perlakukan itu sebagai arah pengembangan, bukan fitur mapan, karena penamaan produk analitik SDM SAP cepat berubah.

## Metrik SDM Apa Saja yang Wajib Dipantau (dan Cara Menghitungnya)?

Metrik SDM yang berguna adalah yang memicu tindakan. Intinya tidak banyak: turnover yang disegmentasi, retensi, kecepatan dan biaya rekrutmen, absensi, rentang kendali, serta biaya tenaga kerja per unit keluaran. Rumusnya sederhana; nilainya muncul dari cara angka itu dipotong per divisi, manajer, dan masa kerja, bukan dari satu angka tunggal perusahaan.

Turnover rate dihitung dengan membagi jumlah separasi dalam satu periode dengan rata-rata headcount, lalu dikali 100; rata-rata headcount adalah (headcount awal + akhir) dibagi dua (SHRM). Angka tunggal mudah menyesatkan. Turnover 12% di tingkat perusahaan bisa menyembunyikan satu divisi di angka 40%. Karena itu segmentasi wajib: pisahkan **voluntary** (karyawan memilih keluar) dari **involuntary** (perusahaan mengakhiri), lalu di dalam voluntary bedakan **regretted** (high-performer yang ingin dipertahankan) dari **non-regretted** (underperformer yang keluar).

Istilah "turnover" dan "attrition" sering dipertukarkan, dan definisinya tidak seragam antar sumber. Satu pemakaian umum: turnover adalah karyawan keluar lalu posisinya diisi kembali, sedangkan attrition adalah posisi yang dibiarkan kosong (pengurangan natural). Karena tak ada definisi tunggal yang benar, yang penting adalah menyatakan definisi yang Anda pakai secara eksplisit saat melaporkan angka.

| Metrik | Rumus / definisi | Keputusan yang dipicu |
|---|---|---|
| Turnover rate | (separasi ÷ rata-rata headcount) × 100 | Di mana dan siapa yang hilang; perlukah intervensi retensi? |
| Voluntary vs involuntary | Pisahkan resign dari PHK/terminasi | Masalah engagement vs masalah kinerja/restrukturisasi |
| Regretted turnover | Bagian voluntary dari talenta yang ingin dipertahankan | Prioritas retensi talenta kunci; investigasi akar sebab |
| Retention rate | (karyawan bertahan ÷ headcount awal) × 100 | Efektivitas program retensi dari waktu ke waktu |
| Time-to-hire | Hari dari kandidat masuk pipeline hingga terima tawaran | Kecepatan dan bottleneck proses rekrutmen |
| Cost-per-hire | Total biaya rekrutmen ÷ jumlah posisi terisi | Efisiensi anggaran rekrutmen |
| Absenteeism rate | (hari absen tak terjadwal ÷ total hari kerja) × 100 | Sinyal beban kerja, engagement, atau kesehatan |
| Span of control | Jumlah bawahan langsung per manajer | Struktur organisasi; risiko manajer kelebihan beban |
| Biaya tenaga kerja/unit | Total biaya SDM ÷ unit keluaran (atau pendapatan) | Produktivitas dan efisiensi *workforce cost* |

Soal *time-to-hire* dan *cost-per-hire*: yang pertama mengukur kecepatan proses, yang kedua mengukur efisiensi biayanya. SHRM mengutip rata-rata cost-per-hire sekitar US$4.700 dan biaya mengganti karyawan sekitar 50–60% gaji tahunan, dengan rentang dari sekitar 33% untuk posisi entry-level hingga 200% lebih untuk eksekutif. Semua itu angka konteks AS; perlakukan sebagai gambaran skala, lalu hitung angka Anda sendiri dari data organisasi.

## Bagaimana BI Membantu Menurunkan Turnover dan Menjaga Talenta?

Business Intelligence menekan turnover dengan mengubah data SDM yang terserak menjadi deteksi dini. Dengan menganalisis akar sebab attrition per divisi, manajer, dan masa kerja, organisasi menemukan pola risiko sebelum karyawan mengundurkan diri, lalu mengarahkan intervensi ke titik yang tepat, bukan ke seluruh perusahaan secara merata.

Timing adalah keunggulan terbesarnya. Gallup mencatat bahwa 52% karyawan yang resign sukarela menilai manajer atau organisasi sebenarnya bisa mencegah kepergian mereka, dan 51% mengatakan tidak ada atasan yang berbicara soal kepuasan kerja dalam tiga bulan sebelum mereka keluar (Gallup). Di sinilah analitik bernilai: ia menandai kelompok berisiko ketika percakapan retensi masih relevan, bukan setelah surat resign masuk.

Analitik juga menyingkap hal yang tidak muncul di laporan agregat. Konsentrasi resign pada bulan-bulan awal menunjukkan masalah onboarding atau ekspektasi rekrutmen yang keliru. Kesenjangan bayar atau representasi antarkelompok bisa dipetakan terhadap data performa. Hubungan antara skor engagement dan retensi di tiap unit membantu manajemen memilih di mana anggaran retensi memberi hasil terbesar. Yang penting, temuan ini mengarahkan percakapan manusia, bukan menggantikannya.

## Dari Mana Datanya? Menyatukan HRIS, Rekrutmen, dan Payroll

Datanya datang dari sistem yang selama ini berdiri sendiri-sendiri, lalu disatukan di satu lapisan analitik agar menjadi satu tampilan tepercaya. Tanpa penyatuan ini, angka turnover dan cost-per-hire mudah keliru karena bersumber dari definisi dan tanggal yang tidak konsisten antar sistem.

Sumber utamanya biasanya mencakup:

- **HRIS / core HR (mis. SAP SuccessFactors):** data inti karyawan, performa, dan talent; master data dan tanggal yang menjadi fondasi semua metrik.
- **Sistem rekrutmen (*applicant tracking system*/ATS):** data pipeline kandidat untuk time-to-hire dan cost-per-hire.
- **Payroll:** komponen biaya tenaga kerja dan dasar analisis kesenjangan bayar.
- **Survei engagement:** sinyal kepuasan dan risiko keluar yang dihubungkan ke data retensi.

Untuk analisis lintas domain, dashboard SDM kerap diangkat ke **SAP Analytics Cloud** (SAC), lapisan yang menggabungkan data tenaga kerja dengan data finansial dan operasional sehingga biaya tenaga kerja dapat dibaca berdampingan dengan pendapatan atau keluaran produksi. Aplikasi pendukung seperti formulir onboarding atau survei internal sering dibangun cepat di atas [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) SAP Build pada SAP BTP. Agar ekstensi semacam itu tidak mengotori sistem inti, kustomisasi dijaga di sisi BTP mengikuti prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), sehingga SuccessFactors tetap mudah di-upgrade.

Prinsip lama tetap berlaku: *garbage in, garbage out*. People analytics hanya sebaik data HRIS-nya. Kode organisasi yang kacau, tanggal yang tidak konsisten, atau payroll yang tidak tersambung akan menghasilkan angka yang terlihat rapi tetapi salah.

## Batas People Analytics: Etika, Privasi, dan Bahaya Mereduksi Manusia ke Angka

Bagian ini jarang ditulis vendor, padahal justru di sinilah kepercayaan dibangun. People analytics punya batas yang serius, dan mengabaikannya tidak hanya berisiko etis, tetapi juga menghasilkan keputusan yang buruk.

Masalah pertama adalah korelasi yang dikira kausalitas. "Karyawan yang sering lembur lebih sering resign" tidak berarti lembur menyebabkan resign; keduanya bisa sama-sama akibat dari *understaffing*. Menjatuhkan keputusan personel kepada individu berdasarkan skor prediktif, tanpa konteks manusia, adalah cara cepat menuju keputusan yang salah sekaligus tidak adil. Angka menandai ke mana harus bertanya, bukan memberi vonis.

Masalah kedua adalah privasi. Di Indonesia, pemrosesan data karyawan tunduk pada UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP): data diproses untuk tujuan yang sah, seminimal yang diperlukan, dan dengan tata kelola akses yang jelas. Artikel ini sengaja meringkasnya; aspek teknis seperti pembatasan akses baris dan penyamaran data dibahas tersendiri di materi keamanan data kami. Di sinilah pendampingan implementasi yang menekankan tata kelola dan privasi data karyawan sejak awal menjadi penting, dan hal itu bagian dari cara Soltius menangani analitik SDM.

Masalah ketiga lebih halus: metrik *vanity*. "Jumlah jam pelatihan" atau "jumlah pelatihan diselenggarakan" terdengar produktif, tetapi tanpa dikaitkan ke retensi atau kinerja, ia hanya menambah dashboard tanpa mengubah tindakan apa pun. Metrik yang baik selalu terhubung ke keputusan nyata; jika sebuah angka tidak pernah mengubah apa yang dilakukan organisasi, hentikan memantaunya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu people analytics?
People analytics (analitik SDM) adalah penerapan Business Intelligence pada data tenaga kerja: menyatukan data dari sistem HR, rekrutmen, performa, dan payroll menjadi wawasan untuk keputusan talenta. Berbeda dari laporan HR biasa yang menghitung jumlah karyawan, people analytics menjawab mengapa karyawan resign, divisi mana yang berisiko kehilangan talenta, dan tindakan apa yang menaikkan retensi.

### Bagaimana cara menghitung turnover karyawan?
Turnover rate dihitung dengan membagi jumlah karyawan yang keluar selama satu periode dengan rata-rata jumlah karyawan pada periode itu, lalu dikali 100. Rata-rata headcount adalah (jumlah awal + jumlah akhir) dibagi dua. Agar berguna, angka ini disegmentasi: sukarela vs tidak sukarela, per divisi, per manajer, dan per masa kerja, bukan satu angka tunggal untuk seluruh perusahaan.

### Apa bedanya turnover dan attrition?
Keduanya sering dipakai bergantian, tetapi banyak praktisi membedakannya: turnover adalah karyawan keluar dan posisinya diisi kembali, sedangkan attrition adalah karyawan keluar dan posisinya dibiarkan kosong (pengurangan natural). Karena definisi tidak seragam antar sumber, yang penting adalah menyatakan definisi yang Anda pakai secara eksplisit saat melaporkan angka.

### Metrik SDM apa saja yang paling penting?
Tidak ada daftar tunggal, tetapi inti yang memicu tindakan: turnover (disegmentasi sukarela/regretted), retention rate, time-to-hire, cost-per-hire, absenteeism, span of control, dan biaya tenaga kerja per unit keluaran. Pilih metrik yang terhubung ke keputusan nyata; berhenti pada metrik yang tidak mengubah tindakan apa pun hanya menambah dashboard tanpa nilai.

### Bagaimana BI membantu menurunkan turnover?
BI mengubah data SDM yang terserak menjadi deteksi dini. Dengan menganalisis akar sebab attrition per divisi, manajer, dan masa kerja, organisasi menemukan pola risiko, misalnya resign menumpuk pada bulan-bulan awal atau pada high-performer tertentu. Gallup mencatat 52% karyawan yang resign menilai kepergiannya bisa dicegah; analitik membantu intervensi sebelum, bukan sesudah, orang mengundurkan diri.

### Apa itu time-to-hire dan cost-per-hire?
Time-to-hire adalah lama waktu dari kandidat masuk pipeline rekrutmen sampai menerima tawaran, mengukur kecepatan proses. Cost-per-hire adalah total biaya rekrutmen (iklan, agensi, waktu perekrut, onboarding) dibagi jumlah posisi terisi. SHRM mengutip cost-per-hire rata-rata sekitar US$4.700 di AS; gunakan sebagai gambaran, bukan patokan biaya Indonesia yang harus dihitung dari data sendiri.

### Apakah data karyawan aman dan etis untuk dianalisis?
Bisa, bila diatur dengan benar. Di Indonesia, pemrosesan data karyawan tunduk pada UU No. 27 Tahun 2022 (UU PDP): data diproses untuk tujuan yang sah, seminimal yang diperlukan, dan dengan tata kelola akses. Secara etis, hindari mereduksi manusia ke skor: korelasi bukan kausalitas, dan keputusan personel tidak boleh dijatuhkan semata-mata oleh angka prediktif tanpa konteks manusia.

## Kesimpulan

Fungsi SDM punya lebih banyak data daripada fungsi mana pun di perusahaan, tetapi paling jarang mengubahnya menjadi keputusan. People analytics menutup jarak itu: dari turnover agregat yang hanya mencatat kehilangan, menuju segmentasi yang menunjukkan di mana talenta pergi dan intervensi apa yang masih sempat dilakukan. Kuncinya bukan dashboard yang lebih banyak, melainkan metrik yang terhubung ke tindakan, data yang bersih dan tersatukan, serta kejujuran soal batas etika dan privasinya. Melalui solusi Human Capital Management dan layanan Data and AI Consulting, Soltius mengimplementasikan analitik SDM di atas SAP SuccessFactors dan SAP Analytics Cloud agar keputusan talenta berpijak pada data, bukan firasat.

Untuk mendiskusikan kesiapan people analytics di perusahaan Anda, jelajahi solusi terkait di soltius.co.id.
