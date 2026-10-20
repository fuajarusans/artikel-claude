---
title: "Siapa yang Harus Mengelola BI? Membangun BI Center of Excellence"
meta_title: "Business Intelligence: Siapa yang Mengelola BI?"
meta_description: "Siapa yang harus mengelola Business Intelligence? Panduan model operasi BI (sentralisasi, hub-and-spoke, desentralisasi), peran tim, dan kapan CoE belum perlu."
slug: "bi-center-of-excellence-siapa-mengelola-bi"
language: "id"
primary_keyword: "Business Intelligence"
secondary_keywords:
  - "BI Center of Excellence"
  - "BICC"
  - "tata kelola BI"
  - "struktur tim data"
  - "model operasi analitik"
  - "data steward"
  - "self-service governance"
  - "centralized vs federated"
  - "hub-and-spoke analytics"
  - "peran tim BI"
  - "backlog permintaan laporan"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-center-of-excellence"
    context: "Definisi CoE, empat struktur (centralized/unified/federated/decentralized), rekomendasi model tengah, model pendanaan, daftar peran"
  - url: "https://www.gartner.com/en/newsroom/press-releases/2024-04-29-gartner-finds-61-percent-of-organizations-are-evolving-their-data-and-analytics-operating-model-because-of-ai-technologies"
    context: "61% organisasi mengubah model operasi data & analitik karena teknologi AI (konteks urgensi keputusan operating model)"
brief_id: "business-intelligence-04"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 1880
---

# Siapa yang Harus Mengelola BI? Membangun BI Center of Excellence

Banyak inisiatif BI mandek bukan karena tool-nya kurang canggih, melainkan karena tidak jelas siapa yang memiliki apa. Tim IT membangun dashboard yang tak pernah dipakai bisnis, tiap divisi membuat versi angkanya sendiri, dan tidak ada yang benar-benar bertanggung jawab atas definisi metrik maupun antrean permintaan laporan. Tulisan ini menjawab pertanyaan yang lebih mendasar daripada "platform mana yang terbaik": siapa yang seharusnya mengelola [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence), dan bagaimana strukturnya. Kita akan membahas model operasinya, peran yang dibutuhkan, cara menata backlog permintaan, dan kapan sebuah Center of Excellence formal justru terlalu dini untuk dibentuk.

> **Ringkas:** BI Center of Excellence (BICC) adalah tim atau fungsi lintas-departemen yang menetapkan standar, praktik terbaik, dan tata kelola untuk Business Intelligence, memastikan definisi metrik konsisten, akses data terkelola, dan pengguna bisnis diberdayakan, sehingga inisiatif analitik tidak berjalan sendiri-sendiri di tiap divisi. CoE tidak wajib menjadi unit formal; yang penting perannya jelas ditugaskan.

## Apa itu BI Center of Excellence, dan masalah apa yang dipecahkannya?

BI Center of Excellence (CoE) adalah tim internal berisi ahli teknis dan bisnis yang membantu seluruh organisasi bekerja dengan data. Fungsinya menetapkan standar, praktik terbaik, dan tata kelola, bukan mengerjakan setiap laporan. Menurut Microsoft, tim ini tidak wajib menjadi kotak formal di bagan organisasi; yang penting peran dan tanggung jawabnya teridentifikasi, diprioritaskan, dan ditugaskan.

Gejalanya khas dan mudah dikenali. Ketika tidak ada yang memiliki BI secara jelas, sebuah organisasi biasanya mengalami beberapa hal sekaligus:

- **Angka yang berbeda-beda.** Dua divisi menyajikan "penjualan bulan lalu" dengan angka berlainan karena definisi metriknya tidak pernah disepakati.
- **Dashboard terbengkalai.** IT membangun laporan yang tidak menjawab pertanyaan bisnis, lalu perlahan ditinggalkan.
- **Backlog IT menumpuk.** Setiap permintaan laporan mengantre di satu tim pusat yang kelebihan beban, dan waktu tunggunya makin panjang.
- **Shadow reporting.** Tiap orang menarik data sendiri ke Excel, memperbanyak versi kebenaran yang saling bertentangan.

Center of Excellence, kadang disebut juga *competency center* atau *capability center*, hadir untuk menutup celah ini. Panduan adopsi yang banyak dirujuk, Microsoft Fabric adoption roadmap (diperbarui 28 April 2026), mendefinisikannya sebagai tim internal berisi ahli teknis dan bisnis yang secara aktif membantu pihak lain di organisasi yang bekerja dengan data. Dua tujuan intinya konkret: memaksimalkan manfaat *self-service* BI sekaligus menurunkan risikonya, dan mengurangi *technical debt* dengan mendorong konsistensi.

Yang sering disalahpahami: CoE bukan menara gading yang mengambil alih semua pekerjaan analitik. Justru sebaliknya. Tugasnya adalah memberdayakan orang lain agar bisa bekerja dengan data secara mandiri, tetapi di atas fondasi yang sama. Itu sebabnya keputusan "siapa mengelola BI" pada akhirnya adalah keputusan desain organisasi, bukan keputusan pembelian lisensi.

## Sentralisasi, hub-and-spoke, atau desentralisasi: model kepemilikan BI

Tidak ada taksonomi baku "tiga model". Istilahnya bervariasi antar sumber: Microsoft memerinci empat struktur (centralized, unified, federated, decentralized), sementara Gartner memakai istilah hub-and-spoke. Lebih berguna melihatnya sebagai spektrum, dari sentralisasi penuh, lewat model tengah federasi/hub-and-spoke, hingga desentralisasi penuh, dengan model tengah yang umumnya paling efektif.

Di ujung pertama, **sentralisasi**: satu tim *shared-services* memiliki dan mengerjakan seluruh BI. Kontrolnya kuat dan akuntabilitasnya jelas, tetapi tim ini rawan menjadi antrean tunggal (*bottleneck*) dan kurang memahami kebutuhan tiap unit. Di ujung lain, **desentralisasi**: tiap unit bisnis mengelola BI-nya sendiri. Cepat dan dekat dengan domain, tetapi menurut Microsoft model ini sulit diskalakan dan cenderung melahirkan kebijakan yang tidak konsisten antar unit, lengkap dengan pekerjaan ulang untuk menyelaraskannya kembali.

Di tengahnya ada **hub-and-spoke** (padanan federasi/unified): sebuah inti pusat menetapkan standar dan menyediakan data tepercaya, sementara analis "satelit" di tiap unit bisnis mengeksekusi di domainnya. Gartner menggambarkannya sebagai "franchise" data dan analitik di tiap departemen dengan sebuah center of excellence di pusat. Prinsip operasinya lazim diringkas: kelola dan berdayakan di pusat, eksekusi di tepi.

| Aspek | Sentralisasi | Hub-and-Spoke / Federasi (tengah) | Desentralisasi |
|---|---|---|---|
| Struktur | Satu tim pusat memiliki semua BI | Inti pusat + satelit di unit bisnis, terkoordinasi | Tiap unit kelola BI sendiri, independen |
| Kontrol & konsistensi | Kuat, satu titik akuntabilitas | Seimbang: standar di pusat, eksekusi di domain | Lemah lintas-org; kebijakan tak konsisten |
| Kecepatan di domain | Lambat; kurang paham tiap unit | Cepat, tetap terstandardisasi | Paling cepat & dekat domain |
| Risiko utama | Bottleneck; cenderung otoriter | Butuh kepemimpinan & komunikasi kuat | Silo; sulit diskalakan; rework |
| Cocok untuk | Organisasi kecil/awal | Mayoritas organisasi menengah–besar | Unit bisnis sangat otonom |

Rekomendasi yang konsisten lintas sumber: untuk sebagian besar organisasi, model tengah paling efektif karena menjembatani batas antar-departemen. CoE yang sangat terpusat cenderung otoriter; yang sangat terdesentralisasi cenderung *siloed*. Praktik lazimnya adalah mulai dari sentralisasi lalu berkembang ke federasi seiring skala. Menariknya, model tengah ini lebih sering berjalan informal ketimbang formal: jajak pendapat Gartner Peer Community mencatat sekitar 21% organisasi menjalankan hub-and-spoke dengan tim yang terkoordinasi formal, sementara 52% berjalan federasi dengan koordinasi informal.

Kenapa keputusan ini mendesak sekarang? Karena beban analitik sedang melonjak. Survei Gartner (29 April 2024) menemukan 61% organisasi sedang mengubah model operasi data dan analitiknya justru karena teknologi AI. Menambah beban baru di atas kepemilikan yang kabur hanya memperbesar kekacauan.

## Peran apa saja yang dibutuhkan tim BI, dan siapa yang memiliki apa?

Sebuah tim BI membutuhkan campuran peran teknis dan bisnis, bukan sekadar "orang IT yang bikin laporan". Kerangka Microsoft menyebut peran generik CoE: pemimpin, *coach*, *trainer*, *data analyst*, *data modeler*, *report creator*, *data engineer*, dan *user support*. Di tahap awal, satu orang lazim merangkap beberapa peran sekaligus.

Yang penting bukan jumlah kepala, melainkan kejelasan siapa memiliki apa. *Data engineer* merancang arsitektur dan menerbitkan aset data yang dipakai luas, seperti *warehouse* dan *semantic model*. *Report creator* membuat dan memublikasikan dashboard. *Data analyst* menjadi ahli domain sekaligus penghubung antara CoE dan unit bisnis. Satu peran yang paling sering hilang justru yang paling menentukan konsistensi: *data steward*.

Menurut kerangka DAMA-DMBOK, *data steward* memastikan konten data dan metadata konsisten dengan kebijakan, standar, dan aturan bisnis organisasi, sehingga kualitas datanya layak dipakai. Poin krusialnya: steward **tidak memiliki** data itu. Ia membantu pemilik data (*data owner*) menerapkan tata kelola. Dalam praktik BI, steward adalah orang yang menjawab "definisi resmi 'pelanggan aktif' itu apa" dan menjaga agar definisi tersebut dipakai konsisten di semua laporan.

| Peran | Fokus utama | Kepemilikan (RACI ringkas) |
|---|---|---|
| BI/Analytics lead | Strategi, standar, operasi CoE | *Accountable* atas standar & prioritas |
| Data engineer | Arsitektur, pipeline, aset data luas | *Responsible* atas ketersediaan & kualitas teknis |
| Report developer | Membuat & memublikasikan dashboard | *Responsible* atas pembuatan laporan |
| Data analyst | Ahli domain; penghubung CoE–bisnis | *Consulted* untuk kebutuhan & interpretasi |
| Data steward | Definisi metrik, kualitas, kepatuhan | *Responsible* atas konsistensi definisi |
| Product/business owner | Prioritas & keputusan di domain | *Accountable* atas nilai bisnis; approve akses |

Pemisahan yang sehat biasanya begini: tim pusat (sering di IT atau CoE) bertanggung jawab atas platform, data tepercaya, dan standar, sedangkan unit bisnis memiliki prioritas dan keputusan di domainnya. RACI di atas kerangka ilustratif, bukan cetakan wajib.

## Menyeimbangkan self-service dan kontrol lewat CoE

Kunci CoE yang berhasil adalah menggeser posisinya dari "penjaga gerbang" menjadi "pemberdaya". Modelnya disebut *managed self-service*: tim pusat mengelola data tepercaya, sedangkan pengguna bisnis membuat laporan dan dashboard sendiri di atasnya. Ini memadukan disiplin pusat dengan fleksibilitas domain, dan menjadi jawaban langsung atas "angka yang beda-beda".

Fondasinya adalah dataset tepercaya yang biasanya berakar pada lapisan [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions). Tanpa satu sumber data yang disepakati, kebebasan *self-service* justru melahirkan lebih banyak versi kebenaran, bukan lebih sedikit. Karena itu urutannya penting: sediakan data tepercaya lebih dulu, baru buka kran *self-service*.

Platform analitik modern menyediakan mekanisme untuk mendukung pembagian ini. SAP Analytics Cloud, misalnya, memakai konsep *Users*, *Teams*, dan *Roles* untuk mengatur otorisasi, dengan area folder *Public* yang tergovernansi berdampingan dengan *My Files* yang bersifat pribadi untuk eksperimen. Mekanisme peran dan berbagi dataset tepercaya semacam ini mendukung model hub-and-spoke, meski ia tetap tidak menggantikan keputusan desain organisasi soal siapa memiliki apa. Di titik inilah pendampingan partner implementasi berpengalaman, seperti Soltius, membantu merancang model *intake* dan tata kelola peran sejak awal, bukan setelah backlog terlanjur menumpuk.

Soal backlog, kelola permintaan sebagai *intake* terstruktur, bukan tiket ad hoc. Dengan *managed self-service*, sebagian besar permintaan sederhana bisa dikerjakan sendiri oleh unit bisnis, dan pusat berfokus pada yang benar-benar kompleks. Model pendanaan ikut menentukan prioritas. CoE bisa berjalan sebagai *cost center* dengan anggaran pusat (model *push*), sebagai *profit center* yang menerima proyek berdana dari unit bisnis (model *pull*), atau lewat *chargeback* berdasarkan pemakaian. Cara CoE didanai bukan detail administratif; ia menentukan permintaan mana yang naik antrean dan di mana otoritas sebenarnya berada.

## Kapan Anda BELUM perlu CoE formal, dan kenapa memaksakannya berbahaya

Untuk organisasi kecil atau yang baru memulai perjalanan datanya, membentuk struktur CoE besar sejak awal adalah birokrasi prematur. Ingat, Microsoft sendiri menyebut CoE sebagai kotak organisasi yang "disarankan, tetapi tidak wajib". Yang dibutuhkan di tahap awal bukan bagan, melainkan kejelasan peran minimum dan disiplin standar.

Model kematangan membantu menempatkan diri. Tingkatannya membentang dari level 100 (Initial), ketika aktivitas data dijalankan tim IT tanpa kejelasan tata kelola, hingga level 500 yang matang. Memaksakan struktur besar di level 100 hampir selalu gagal, karena Anda akan mengodekan kekacauan ke dalam proses formal. Jauh lebih aman berkembang bertahap:

1. **Tunjuk satu pemilik.** Satu orang bertanggung jawab atas definisi metrik inti dan platform. Ini titik awal akuntabilitas.
2. **Tetapkan standar minimum.** Sepakati definisi beberapa metrik terpenting dan satu sumber data tepercaya untuk masing-masing.
3. **Terapkan managed self-service.** Beri unit bisnis dataset dan template, bukan pintu tertutup.
4. **Berkembang ke federasi.** Saat skala menuntut, tambahkan satelit analis di unit bisnis dan formalkan koordinasinya.

Perlu kejujuran juga soal model tengah yang direkomendasikan itu: hub-and-spoke bukan jalan gratis. Kontra federasi menurut Microsoft adalah kebutuhan akan kepemimpinan kuat, komunikasi sangat baik, manajemen proyek yang rapi, dan ekspektasi yang jelas, plus risiko prioritas antar-unit yang bentrok. Membangun CoE sebelum ada budaya data dan data yang cukup matang sama saja memindahkan masalah ke struktur yang lebih mahal untuk dibongkar.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu BI Center of Excellence (BICC)?
BI Center of Excellence adalah tim atau fungsi lintas-departemen berisi ahli teknis dan bisnis yang menetapkan standar, praktik terbaik, dan tata kelola untuk Business Intelligence. Tugasnya bukan membuat semua laporan, melainkan memastikan definisi metrik konsisten, akses data terkelola, dan pengguna bisnis diberdayakan. Menurut Microsoft, CoE tidak wajib menjadi kotak formal di bagan organisasi; yang penting perannya jelas ditugaskan.

### Apakah BI sebaiknya dikelola IT atau bisnis?
Keduanya, dengan pembagian peran yang jelas. Model yang umumnya paling efektif menurut Microsoft adalah model tengah (federasi/hub-and-spoke): tim pusat menjaga data tepercaya, standar, dan platform, sementara unit bisnis memiliki laporan dan keputusan di domainnya. IT murni cenderung menjadi bottleneck; bisnis murni menimbulkan silo dan angka tak konsisten. Prinsipnya: kelola di pusat, eksekusi di tepi.

### Apa beda model sentralisasi, federasi, dan hub-and-spoke?
Sentralisasi berarti satu tim memiliki dan mengerjakan semua BI: kontrol kuat, tetapi rawan jadi antrean tunggal. Federasi/hub-and-spoke menempatkan inti pusat yang menetapkan standar dan menyediakan data tepercaya, plus analis satelit di tiap unit yang mengeksekusi di domainnya. Desentralisasi berarti tiap unit mengelola BI sendiri: cepat, tetapi rawan silo dan sulit diskalakan. Hub-and-spoke pada dasarnya versi federasi yang menyeimbangkan kedua ekstrem.

### Peran apa yang minimal dibutuhkan untuk memulai?
Tidak perlu langsung membentuk tim besar. Minimal ada satu pemilik yang bertanggung jawab atas definisi metrik dan platform, ditambah kemampuan mengelola data (data engineer/modeler) dan menerjemahkan kebutuhan bisnis (data analyst). Dalam kerangka Microsoft, peran generik CoE mencakup pemimpin, coach, trainer, data analyst, data modeler, report creator, data engineer, dan user support, tetapi satu orang lazim merangkap beberapa peran di tahap awal. Mulai dari peran, bukan dari struktur.

### Apa itu data steward dan apa tugasnya?
Data steward adalah peran yang memastikan konten data dan metadata konsisten dengan kebijakan, standar, dan aturan bisnis, sehingga kualitas datanya layak dipakai. Menurut kerangka DAMA-DMBOK, steward tidak memiliki data itu; ia membantu pemilik data menerapkan tata kelola dan menjaga kualitas. Dalam BI, steward adalah orang yang menetapkan dan menjaga definisi resmi sebuah metrik agar dipakai konsisten lintas laporan.

### Bagaimana mengatur antrean permintaan laporan agar tidak menumpuk?
Kelola permintaan sebagai intake terstruktur, bukan tiket ad hoc. Prinsipnya menggeser CoE dari gatekeeper menjadi enabler: sediakan dataset tepercaya, template, dan pelatihan (managed self-service) agar sebagian besar permintaan sederhana bisa dikerjakan sendiri oleh unit bisnis, dan pusat fokus pada yang kompleks. Model pendanaan membantu memprioritaskan, entah lewat anggaran pusat maupun chargeback, sehingga permintaan yang benar-benar bernilai yang naik antrean.

## Kesimpulan

Kembali ke pangkal soal: dashboard yang terbengkalai dan angka yang beda-beda hampir selalu bermuara pada kepemilikan yang kabur, bukan tool yang kurang. Menata siapa memiliki apa, memilih model operasi yang pas dengan skala, dan menugaskan peran seperti data steward jauh lebih menentukan ketimbang memilih platform termahal. Kebutuhan ini kerap muncul bersamaan saat perusahaan menata ulang fondasi datanya, misalnya ketika melakukan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud). Melalui layanan Data and AI Consulting, Soltius membantu merancang model operasi dan tata kelola BI, bukan hanya mengimplementasikan platform seperti SAP Analytics Cloud, tetapi juga menjaga kepemilikannya lewat Application Management Services (AMS) setelah go-live.

Untuk mendiskusikan model operasi dan tata kelola BI yang tepat bagi perusahaan Anda, kunjungi soltius.co.id.
