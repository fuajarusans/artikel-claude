---
title: "Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya"
meta_title: "OEE Adalah: Rumus 3 Faktor dan Cara Menghitungnya"
meta_description: "OEE adalah metrik efektivitas mesin dari tiga faktor: availability, performance, quality. Pelajari rumus OEE, contoh perhitungan satu shift, dan arti nilai 85%."
slug: "oee-adalah-rumus-cara-menghitung"
language: "id"
primary_keyword: "oee adalah"
secondary_keywords: ["cara menghitung OEE", "rumus OEE", "Overall Equipment Effectiveness", "availability performance quality", "Planned Production Time", "Ideal Cycle Time", "TPM (Total Productive Maintenance)", "six big losses", "TEEP", "SAP Digital Manufacturing"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/digital-manufaktur-sistem"
    anchor: "manufaktur digital"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://learning.sap.com/courses/analyzing-manufacturing-data-in-sap-digital-manufacturing/oee-calculation-in-dm"
    context: "SAP Digital Manufacturing menghitung OEE sebagai rasio waktu berjenjang (Loading Time → Net Production Time → Net Operating Time → Value Operating Time) di level resource dan work center, rentang shift atau hari; Loading Time sudah mengecualikan maintenance stops dan shift breaks"
  - url: "https://www.iso.org/standard/54497.html"
    context: "ISO 22400-2:2014 membakukan definisi KPI manufaktur sehingga angka antarpabrik sebanding"
brief_id: "oee-c01"
target_word_count: 900
publish_month: "2026-08"
word_count: 985
---

# Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya

Dua lini di pabrik yang sama melaporkan OEE 70%, dan tidak seorang pun bisa menjelaskan angka itu datang dari mana. Ini lazim di lantai produksi, termasuk yang sudah berjalan di atas sistem [manufaktur digital](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem). Artikel ini membedah rumus OEE faktor demi faktor, dengan contoh perhitungan satu shift dan asal-usul angka 85% yang telanjur disebut standar dunia.

> **Ringkasnya:** OEE (*Overall Equipment Effectiveness*) adalah ukuran seberapa besar bagian dari waktu produksi terencana yang benar-benar dipakai menghasilkan barang bagus pada kecepatan penuh. Nilainya adalah hasil perkalian tiga faktor: availability, performance, dan quality. Karena itu satu angka OEE tidak hanya menilai mesin, tetapi juga menunjukkan kelompok kerugian mana yang menekannya.

## Apa Saja Tiga Faktor dalam Rumus OEE?

Availability, performance, dan quality bukan sekadar nama komponen. Masing-masing punya rumus turunannya sendiri, dengan variabel yang harus diambil dari data shift: Run Time, Planned Production Time, Ideal Cycle Time, Total Count, dan Good Count. Tanpa kelima variabel itu, perkalian tiga faktor tidak bisa dihitung dari data pabrik Anda sendiri.

| Faktor | Rumus | Kerugian yang diisolasi |
|---|---|---|
| **Availability** | Run Time ÷ Planned Production Time | Downtime tak terencana: breakdown, setup tak terjadwal |
| **Performance** | (Ideal Cycle Time × Total Count) ÷ Run Time | Kerugian kecepatan: micro-stop, mesin berjalan di bawah kecepatan desain |
| **Quality** | Good Count ÷ Total Count | Kerugian mutu: scrap dan rework |

Satu variabel paling sering salah diisi: Planned Production Time bukan panjang shift. Planned stop yang memang dijadwalkan, seperti istirahat, changeover terencana, dan pembersihan, dikeluarkan lebih dulu.

Dokumentasi SAP mengeluarkan *maintenance stops* dan *shift breaks* dari Loading Time sebelum availability dihitung; kerangka KPI ISO 22400 memisahkan *planned down time* dari *planned busy time* yang menjadi penyebut availability.

## Cara Menghitung OEE: Contoh Perhitungan Satu Shift

Perhitungan OEE selalu bergerak dari waktu ke unit, lalu kembali ke waktu. Mulai dari panjang shift, keluarkan planned stop, kurangi downtime tak terencana untuk mendapat Run Time, baru masuk ke hitungan unit yang diproduksi dan yang lolos mutu. Ilustrasi berikut memakai satu lini pengemasan, shift 8 jam.

**Ilustrasi (angka rekaan, bukan data pabrik):**

1. **Planned Production Time** = 480 menit shift − 30 menit planned stop = **450 menit**
2. **Run Time** = 450 − 90 menit downtime tak terencana = **360 menit**
3. **Availability** = 360 ÷ 450 = **80%**
4. **Performance** = (0,45 menit/unit × 720 unit) ÷ 360 = 324 ÷ 360 = **90%**. Dalam 360 menit, lini idealnya sanggup 800 unit; realisasinya 720.
5. **Quality** = 684 ÷ 720 = **95%**, dengan 36 unit reject
6. **OEE** = 80% × 90% × 95% = **68,4%**

Ada jalan pintas yang sekaligus jadi cek silang: OEE = (Good Count × Ideal Cycle Time) ÷ Planned Production Time. Pada ilustrasi yang sama, (684 × 0,45) ÷ 450 = 307,8 ÷ 450 = 68,4%, identik dengan hasil perkalian tiga faktor. Kalau kedua cara tidak bertemu, yang salah datanya, bukan rumusnya.

Angka 68,4% berarti hampir sepertiga waktu produksi terencana tidak menghasilkan barang bagus pada kecepatan penuh. Ketiga faktor menunjukkan ke mana perginya: 90 menit ke downtime, 80 unit ke kerugian kecepatan, 36 unit ke reject.

Satu peringatan lapangan: OEE hanya sejujur pencatatan di baliknya. Micro-stop dua menit yang tak pernah dicatat muncul sebagai Performance rendah yang misterius, bukan downtime.

## Mengapa 85% Disebut Standar World-Class?

Angka itu tidak turun dari langit. 85% adalah hasil perkalian tiga minimum komponen dalam kerangka TPM (*Total Productive Maintenance*) yang diperkenalkan Seiichi Nakajima: availability 90%, performance 95%, dan quality 99%. Hasilnya sekitar 84,6%, yang lazim dibulatkan menjadi 85%. Jadi ia target turunan, bukan patokan tunggal yang berdiri sendiri.

Nakajima memperkenalkan TPM dan OEE lewat Japan Institute of Plant Maintenance (JIPM). Minimum-minimum itu lahir dari pabrik bervolume tinggi dengan variasi produk minimal, khususnya otomotif Jepang.

Karena itu 85% tidak otomatis berlaku di mana-mana. Pada pabrik *high-mix/low-volume*, changeover yang sering dan ukuran lot yang kecil menekan Performance secara struktural. Target yang berguna adalah garis dasar pabrik Anda sendiri yang bergerak naik, bukan angka impor.

## Ketika OEE Tidak Lagi Dihitung dari Catatan Shift

Begitu OEE dihitung lintas lini, shift, dan pabrik, hambatannya berpindah dari rumus ke konsistensi definisi. Dua lini yang mengategorikan changeover secara berbeda menghasilkan dua angka yang tidak bisa dibandingkan, meski rumusnya sama persis. Standar dan sistem mengambil alih di titik ini.

Keduanya mengunci definisi waktu. [ISO 22400-2:2014](https://www.iso.org/standard/54497.html) membakukan definisi KPI manufaktur sehingga angka antarpabrik sebanding. Menurut [SAP Learning](https://learning.sap.com/courses/analyzing-manufacturing-data-in-sap-digital-manufacturing/oee-calculation-in-dm), SAP Digital Manufacturing menghitung OEE bukan dari hitungan unit, melainkan sebagai rasio waktu berjenjang: Loading Time, Net Production Time, Net Operating Time, hingga Value Operating Time, di level *resource* dan *work center* dengan rentang shift atau hari. Konsepnya identik dengan rumus manual; representasinya yang berbeda, karena semua kerugian dikonversi ke satuan waktu agar bisa dijumlahkan.

Satu angka OEE per shift hanyalah titik. Nilainya muncul saat tren lintas lini dan periode masuk ke lapisan [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence).

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah waktu istirahat dihitung sebagai downtime dalam OEE?

Tidak. Planned stop seperti istirahat dan changeover terjadwal dikeluarkan dari Planned Production Time sebelum Availability dihitung. Pada ilustrasi artikel ini, 30 dari 480 menit shift dikeluarkan lebih dulu sehingga penyebutnya 450 menit, bukan 480. Memasukkannya membuat OEE terlihat lebih buruk daripada kenyataan.

### Apa bedanya OEE dan TEEP?

OEE mengukur terhadap waktu produksi terencana; TEEP (*Total Effective Equipment Performance*) mengukur terhadap waktu kalender penuh. Pabrik dua shift yang beroperasi 16 dari 24 jam dengan OEE 68,4% memiliki TEEP sekitar 45,6%. OEE menilai eksekusi; TEEP mengungkap kapasitas yang menganggur.

### Apa penyebab nilai OEE rendah?

Kerangka TPM Nakajima memetakannya ke six big losses: kerusakan alat, setup dan penyetelan, idling dan micro-stop, penurunan kecepatan, cacat proses, serta kerugian hasil saat start-up. Dua pertama menekan Availability, dua berikutnya Performance, dua terakhir Quality. Faktor terendah menunjukkan kelompok mana yang harus diperiksa lebih dulu.

## Kesimpulan

OEE berguna bukan karena angkanya, melainkan karena ia memaksa tiga jenis kerugian berhenti bersembunyi di balik satu kata: efisiensi. Yang menentukan bukan rumusnya, melainkan konsistensi definisi waktu di baliknya. Berpengalaman sejak 1998 dan bagian dari Metrodata Group, Soltius mengimplementasikan dan mendampingi SAP Digital Manufacturing untuk menghubungkan lantai produksi dengan sistem ERP di industri manufaktur.

Untuk mendiskusikan cara mengukur OEE lini produksi Anda lewat SAP Digital Manufacturing, kunjungi soltius.co.id.
