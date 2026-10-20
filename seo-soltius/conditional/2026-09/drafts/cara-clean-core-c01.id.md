---
title: "Cara Menerapkan SAP Clean Core: Langkah Praktis untuk Migrasi"
meta_title: "Cara Menerapkan SAP Clean Core: Langkah Praktis Migrasi"
meta_description: "Cara menerapkan SAP Clean Core saat migrasi S/4HANA: audit custom code, pilih extensibility in-app vs side-by-side BTP, tetapkan target, jaga lewat tata kelola."
slug: "cara-menerapkan-sap-clean-core-langkah-praktis-migrasi"
language: "id"
primary_keyword: "cara menerapkan clean core"
secondary_keywords: ["implementasi sap clean core", "remediasi custom code", "ABAP Cloud", "SAP BTP", "side-by-side extensibility", "in-app extensibility", "SAP Readiness Check", "SAP Custom Code Migration app", "ABAP Test Cockpit (ATC)", "fit-to-standard", "clean core extensibility levels A-D", "released API", "SAP S/4HANA Cloud"]
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "panduan lengkap SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "SAP News Center (Agustus 2025): model clean core extensibility empat tingkat A-D menggantikan model tiga-tier lama; Level A/B direkomendasikan, D risiko tertinggi"
  - url: "https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf"
    context: "SAP Custom Code Migration Guide: SAP Readiness Check dan Custom Code Migration app men-scope custom code, mengidentifikasi objek tak terpakai dari data pemakaian"
brief_id: "cara-clean-core-c01"
target_word_count: 900
publish_month: "2026-09"
word_count: 984
---

# Cara Menerapkan SAP Clean Core: Langkah Praktis untuk Migrasi

Banyak tim IT sudah paham konsep clean core, tetapi tersandung di pertanyaan berikutnya: mulai dari mana, dan dalam urutan apa? Menjelang tenggat SAP ECC, puluhan objek Z menumpuk tanpa peta langkah yang jelas. Artikel ini menjabarkan cara menerapkan clean core saat migrasi S/4HANA sebagai urutan langkah praktis, pelengkap operasional dari [panduan lengkap SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), beserta nama tool audit resminya.

> **Ringkasnya:** SAP Clean Core adalah prinsip menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi keluar dari inti, umumnya ke SAP Business Technology Platform (BTP) atau ABAP Cloud. Menerapkannya saat migrasi berarti mengaudit kode kustom, menetapkan target per dimensi, memilih model ekstensi yang aman-upgrade, lalu menjaganya lewat tata kelola.

## Apa Saja Langkah Menerapkan SAP Clean Core Saat Migrasi?

Menerapkannya berarti menjalankan lima langkah berurutan, bersamaan dengan proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud): adopsi proses standar (*fit-to-standard*), audit dan klasifikasi *custom code*, tetapkan target per dimensi, pilih model ekstensi yang aman-*upgrade*, lalu jaga lewat tata kelola. Audit berjalan sebelum *cutover*; tata kelola berlanjut setelah *go-live*.

| Langkah | Fokus | Tool / Output SAP |
|---|---|---|
| 1. Fit-to-standard | Adopsi proses standar SAP dulu; kustomisasi hanya untuk gap nyata | Workshop fit-to-standard / SAP Best Practices |
| 2. Audit custom code | Inventaris objek Z; pisahkan yang terpakai dari yang tak terpakai | SAP Readiness Check, SAP Custom Code Migration app, ABAP Test Cockpit (ATC) |
| 3. Tetapkan target | Sasaran per dimensi clean core: proses, ekstensi, integrasi, data, operasi | Target level per dimensi (baseline terukur) |
| 4. Pilih model ekstensi | In-app (key-user) vs side-by-side (SAP BTP) vs on-stack ABAP Cloud | Ekstensi via released API, utamakan level A/B |
| 5. Tata kelola | Cegah kustomisasi kotor baru setelah go-live | ATC + extensibility guideline |

## Langkah 1-2: Audit Custom Code dan Tetapkan Target

Sebelum menyentuh ekstensi, jalankan fit-to-standard lalu audit custom code dengan tiga tool resmi SAP: **SAP Readiness Check** memetakan dampak simplifikasi dan objek terpengaruh, **SAP Custom Code Migration app** memisahkan objek terpakai dari yang tak terpakai berdasarkan data pemakaian, dan **ABAP Test Cockpit (ATC)** memeriksa kepatuhan clean core objek per objek.

Audit semacam ini kerap menemukan sebagian besar kode lama sudah mati. Temuan industri menyebut umumnya 40-60% custom code legacy tak lagi terpakai dan bisa didekomisi saat migrasi, sehingga langkah pertama sering bukan memindahkan kode, melainkan menghentikan yang mati. Menurut [SAP Custom Code Migration Guide](https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf), objek tak terpakai diidentifikasi dari data pemakaian dan dapat dihapus lewat *deletion transport* saat konversi.

Objek yang tersisa masuk ke empat kategori keputusan praktis: dihentikan, ditulis ulang di SAP BTP, dimigrasikan ke ABAP Cloud, atau dipertahankan sementara. Output langkah ini adalah daftar prioritas plus target clean core per dimensi sebagai baseline terukur. Di lapangan, proyek yang tersendat hampir selalu tersendat di audit yang ditunda, bukan di teknologi ekstensinya.

## Bagaimana Memilih antara In-App dan Side-by-Side Extensibility?

Pilih *in-app* (*key-user*) *extensibility* untuk penyesuaian kecil yang tetap di dalam stack, seperti custom field atau adaptasi UI Fiori. Pilih *side-by-side extensibility* di SAP BTP untuk logika kompleks, UI kustom, atau integrasi yang harus terpisah dari inti. Keduanya memakai *released API* agar aman saat upgrade.

Sejak Agustus 2025, SAP menilai kebersihan ekstensi dengan model empat tingkat A-D yang menggantikan model tiga-tier lama. Menurut [SAP News Center](https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/), tingkatannya berjenjang:

- **Level A:** paling bersih, hanya released API SAP, lewat on-stack ABAP Cloud atau side-by-side di SAP BTP.
- **Level B:** ABAP klasik dengan API dan framework resmi SAP yang terdokumentasi dan umumnya upgrade-stable.
- **Level C:** mengakses objek internal SAP; sebagian patuh, fleksibel untuk skenario legacy.
- **Level D:** bukan clean core, yaitu modifikasi atau objek non-recommended dengan risiko dan utang teknis tertinggi.

Aturan praktis dalam implementasi SAP Clean Core sederhana: utamakan Level A dan B, pakai Level C hanya bila perlu, dan blok pola Level D lewat ATC.

## Apakah Semua Custom Code Harus Bersih Sebelum Migrasi?

Tidak. Clean core adalah pendekatan bertahap, bukan syarat 100% sebelum cutover. Prioritaskan berdasarkan kekritisan bisnis, pindahkan kustomisasi yang sah ke ekstensi upgrade-safe, dan biarkan sebagian dipertahankan sementara. Targetnya adalah Level A atau B yang terukur, bukan kesempurnaan instan.

Tingkat kewajibannya bergantung pada edisi. SAP S/4HANA Cloud Public Edition bersifat clean core *by design*: modifikasi inti tidak tersedia, sehingga praktis wajib. Private Edition dan on-premise lebih fleksibel, meski SAP tetap menganjurkan jalur bersih lewat ABAP Cloud dan SAP BTP.

Runway-nya menua. Mainstream maintenance SAP ECC berakhir 31 Desember 2027, dengan extended maintenance opsional bertarif tambahan 2 poin persen sampai 2030. Menunda hanya menaikkan biayanya. Tata kelola pun menjadi langkah yang tak pernah selesai: menjaga inti tetap bersih setelah go-live sama pentingnya dengan membersihkannya saat migrasi.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah semua kustomisasi harus dihapus untuk menerapkan clean core?

Tidak. Audit sering menemukan umumnya 40-60% custom code legacy tak terpakai dan bisa didekomisi. Sisanya diklasifikasikan ke empat kategori keputusan: dihentikan, ditulis ulang di SAP BTP, dimigrasikan ke ABAP Cloud, atau dipertahankan sementara. Kustomisasi yang sah dipindahkan ke ekstensi aman-upgrade, bukan dibuang.

### Tool apa yang dipakai untuk menilai custom code sebelum migrasi?

SAP menyediakan tiga alat berurutan: SAP Readiness Check memetakan dampak simplifikasi dan objek terpengaruh, SAP Custom Code Migration app men-scope objek terpakai versus tak terpakai dari data pemakaian, dan ABAP Test Cockpit (ATC) memeriksa kepatuhan clean core objek per objek sebelum dan selama transisi.

### Apakah clean core wajib untuk semua deployment SAP?

Untuk SAP S/4HANA Cloud Public Edition, praktis wajib: update otomatis dan modifikasi inti tidak tersedia, sehingga edisi ini clean core by design. Untuk Private Edition dan on-premise lebih fleksibel; classic extensibility masih ada, tetapi SAP menganjurkan clean core lewat ABAP Cloud dan SAP BTP.

## Kesimpulan

Cara menerapkan clean core bukan satu proyek besar, melainkan urutan langkah: fit-to-standard, audit, tetapkan target, pilih ekstensi aman-upgrade, lalu tata kelola yang berjalan bersama migrasi S/4HANA dan berlanjut sesudahnya. Sebagai SAP Platinum Partner melalui United VARs dan berpengalaman sejak 1998, Soltius mengeksekusi migrasi S/4HANA dan menerapkan prinsip clean core, dari audit custom code hingga penempatan ekstensi di SAP BTP, didukung Application Management Services (AMS).

Untuk mendiskusikan cara menerapkan clean core di lanskap SAP Anda, kunjungi soltius.co.id.
