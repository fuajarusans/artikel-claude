---
brief_id: "perusahaan-lng-indonesia-01"
researcher_run_date: "2026-09-28"
sources_cited: 17
flags: 8
---

# Research Dossier: Manajemen Boil-Off Gas (BOG) LNG: Menekan Gas yang Menguap dan Rugi Biaya

## TL;DR for the writer

- **BOG adalah fisika normal, bukan kebocoran.** LNG disimpan pada suhu kriogenik ~-160 s.d. -163°C; berapa pun bagusnya insulasi, sejumlah kecil panas selalu merembes masuk (heat ingress) dan menguapkan sebagian LNG. Yang bisa dikendalikan hanya lajunya (boil-off rate/BOR), bukan keberadaannya.
- **Jangan pukul-rata angka kapal ke tangki pelanggan.** Tangki/kapal besar dirancang pada kisaran BOR ~0,10–0,15%/hari (kapal modern mendekati/di bawah ~0,1%/hari). ISO tank/tangki kecil yang relevan untuk distribusi beyond-pipeline punya BOR **lebih tinggi**, ~0,1–0,3%/hari, karena rasio permukaan-terhadap-volume yang lebih besar. Kedua rentang ini dari literatur teknis kriogenik internasional, bukan data terukur Indonesia — sajikan sebagai ilustrasi, bukan janji kinerja produk tertentu.
- **Hierarki pengelolaan BOG**: minimalkan heat ingress → kelola inventori/jadwal (holding time pendek) → manfaatkan sebagai bahan bakar (energy recovery) → reliquefaction (secara komersial paling umum di kapal & terminal besar, jarang sepadan di titik pelanggan skala kecil) → venting (opsi terakhir, rugi ganda: volume gas + emisi metana langsung). GWP metana per IPCC AR6: ~27–30× CO2 pada basis 100 tahun (EPA), ~82,5× CO2 pada basis 20 tahun (IEA Global Methane Tracker 2025) — selalu sebutkan basis waktunya.
- **Framing Gagas WAJIB ketat**: Gagas mengoperasikan **LNG Hub** dan berperan sebagai **penyalur hilir** (menjadwalkan pengiriman ISO tank + regasifikasi satelit ke titik pelanggan) — **BUKAN** produsen, bukan operator likuifaksi/FSRU, bukan eksportir. **JANGAN** pakai "pionir" atau "pemimpin pasar" (frasa ini ada di landing page klien tapi tidak didukung `company_profile.md`). Maks 2–3 self-mention. **PT PGN LNG Indonesia (likuifaksi/FSRU/regasifikasi/trading) adalah entitas SIBLING yang berbeda dari PT Gagas Energi Indonesia** — jangan pernah dikonflasikan.
- **"Boil-off allowance/warranty" terverifikasi kuat sebagai klausul kontrak LNG internasional** (SPA & charterparty) tapi **TIDAK ada sumber yang mengonfirmasi ini lazim di kontrak pasokan domestik/beyond-pipeline Indonesia** — frasekan sebagai pertanyaan yang perlu ditanyakan pembeli ke penyedia, bukan fakta yang sudah pasti berlaku di Indonesia.

## Core facts (verified)

> **Claim**: Boil-off gas (BOG) adalah penguapan alami sebagian LNG akibat panas dari luar yang tetap merembes masuk meski tangki sudah diinsulasi.
> **Number/specific**: "Despite tank insulation designed to limit the admission of external heat, even a small amount of it will cause slight evaporation of the cargo... This evaporation is unavoidable and has to be removed from the tanks in order to maintain the cargo tank pressure." BOG "primarily composed of methane (CH₄)".
> **Source**: Wärtsilä Encyclopedia, "Boil-off gas (BOG)", https://www.wartsila.com/encyclopedia/term/boil-off-gas-(bog) ; dikonfirmasi PGN LNG, "Smart Strategies for Managing Boil-Off Gas: From Losses to Opportunities", 13 Nov 2025, https://pgnlng.co.id/en/berita/learn/managing-boil-off-gas/ (diakses 28 Sep 2026)
> **Confidence**: high

> **Claim**: LNG disimpan pada suhu kriogenik ekstrem, mendekati titik didihnya pada tekanan atmosfer.
> **Number/specific**: LNG tankers menjaga kargo pada suhu sekitar **-163°C**; sumber lain dalam literatur teknis umum menyebut rentang **-160 s.d. -162°C**.
> **Source**: Wärtsilä Encyclopedia, "Boil-off gas (BOG)", https://www.wartsila.com/encyclopedia/term/boil-off-gas-(bog) (diakses 28 Sep 2026)
> **Confidence**: high

> **Claim**: Boil-off rate (BOR) adalah laju penguapan LNG, dinyatakan sebagai persentase volume per hari; tangki/kapal besar dirancang pada kisaran tertentu.
> **Number/specific**: Standar desain umum **0,15%/hari dan di bawahnya**; kapal-kapal LNG modern diproyeksikan mendekati **~0,1%/hari**. Satu sumber teknis pihak ketiga (dokumen paten/kalkulator industri, bukan teks resmi IMO/IGC Code) menyebut angka desain **0,12%/hari** untuk kapal membran 125.000 m³ — variasi ini menunjukkan angka acuan berbeda-beda per sumber/desain, bukan satu nilai baku tunggal.
> **Source**: Wärtsilä Encyclopedia, "Boil-off rate (BOR)", https://www.wartsila.com/encyclopedia/term/boil-off-rate-(bor) (diakses 28 Sep 2026); dikonfirmasi ICCT, "Options for Reducing Methane Emissions from New and Existing LNG-Fueled Ships" (2023), https://theicct.org/wp-content/uploads/2023/10/Options-for-Reducing-Methane-Emissions-from-New-and-Existing-LNG-Fueled-Ships-FINAL-926.pdf
> **Confidence**: high untuk rentang umum (0,10–0,15%/hari, modern ~0,1%/hari); **medium** untuk angka tunggal 0,12%/hari (sumber turunan, bukan teks IMO primer)

> **Claim**: ISO tank/tangki kriogenik kecil yang relevan untuk distribusi beyond-pipeline memiliki BOR lebih tinggi dibanding kapal/tangki besar.
> **Number/specific**: **~0,1–0,3%/hari** untuk ISO container dan sistem transportasi kriogenik kecil — lebih tinggi karena rasio permukaan-terhadap-volume yang lebih besar dibanding tangki besar.
> **Source**: ScienceDirect, "Experimental evidence of enhanced boil-off in isobaric mobile cryogenic vessels", https://www.sciencedirect.com/science/article/abs/pii/S0140700723000531 (abstrak, diakses via pencarian 28 Sep 2026)
> **Confidence**: medium (dari ringkasan abstrak jurnal peer-review yang dipaywall, bukan teks lengkap yang di-fetch langsung; sejalan dengan sumber teknis sekunder lain)

> **Claim**: "Holding time" — lama tangki bisa menyimpan LNG tanpa perlu venting/tindakan tekanan — bervariasi tajam menurut desain tangki.
> **Number/specific**: Tangki atmosferik sederhana bisa berorde "hari"; tangki double-shell tervakum bisa berorde "bulan". Situs media dagang menyebut ISO tank Type C tervakum modern diklaim bisa menyimpan **hingga sekitar 80 hari** tanpa tindakan.
> **Source**: Tank News International, "New ISO tank containers for transportation of LNG", https://tanknewsinternational.com/new-iso-tank-containers-for-transportation-of-lng/ (diakses via pencarian 28 Sep 2026)
> **Confidence**: medium-low (sumber media dagang/vendor-adjacent, bukan spesifikasi pabrikan tunggal atau badan klasifikasi yang disebut namanya — gunakan sebagai orde-besaran ilustratif, bukan janji angka pasti)

> **Claim**: Ada beberapa jalur utama mengelola BOG, dari pencegahan hingga pemanfaatan, dengan venting sebagai upaya terakhir.
> **Number/specific**: PGN LNG secara eksplisit menyebut tiga metode: **(1) re-liquefaction** (mengembalikan BOG jadi cair untuk kembali ke tangki), **(2) pemanfaatan sebagai bahan bakar** (BOG dikompresi lalu dialirkan ke mesin/operasi terminal), **(3) integrasi ke jaringan gas** (BOG dimurnikan lalu diinjeksikan ke pipa darat). Ditambah dari literatur umum: minimalisasi heat ingress lewat kualitas insulasi, dan manajemen inventori/tekanan (jadwal isi-pakai, holding time pendek).
> **Source**: PGN LNG, "Smart Strategies for Managing Boil-Off Gas", 13 Nov 2025, https://pgnlng.co.id/en/berita/learn/managing-boil-off-gas/
> **Confidence**: high

> **Claim**: Reliquefaction mencairkan ulang BOG lewat siklus refrigerasi terpisah, umumnya berbasis siklus Brayton terbalik dengan nitrogen sebagai refrigeran.
> **Number/specific**: Sistem reverse Brayton Cycle (RBC) memakai nitrogen grade komersial untuk menyerap panas dari BOG; konfigurasi umum terdiri dari beberapa kompresor, intercooler, turbo-expander, dan heat exchanger multi-aliran (MCHE) sebelum BOG kembali cair dan dikembalikan ke tangki.
> **Source**: ScienceDirect, "LNG boil-off gas reliquefaction by Brayton refrigeration system – Part 1", https://www.sciencedirect.com/science/article/abs/pii/S0360544219306553 ; dikonfirmasi Wärtsilä Encyclopedia, "LNG Reliquefaction System", https://www.wartsila.com/encyclopedia/term/lng-reliquefaction-system
> **Confidence**: high (konsisten lintas sumber teknik/OEM)

> **Claim**: Reliquefaction secara komersial paling umum diterapkan di kapal LNG dan terminal/fasilitas besar, bukan di titik pelanggan beyond-pipeline berskala kecil.
> **Number/specific**: Produk komersial reliquefaction (mis. Wärtsilä BOG Reliquefaction) dipasarkan khusus untuk segmen marine/kapal LNG. Tidak ditemukan dalam riset ini data biaya atau contoh penerapan reliquefaction di titik distribusi pelanggan skala kecil.
> **Source**: Wärtsilä, "Wärtsilä BOG Reliquefaction", https://www.wartsila.com/marine/products/gas-solutions/wartsila-bog-reliquefaction (diakses 28 Sep 2026)
> **Confidence**: medium (kesimpulan berbasis inferensi dari pemasaran produk + ketiadaan data skala kecil yang ditemukan — bukan pernyataan eksplisit "reliquefaction tidak ekonomis di skala kecil" dari satu sumber tunggal)

> **Claim**: MARVS (Maximum Allowable Relief Valve Setting) adalah tekanan maksimum yang diizinkan untuk beroperasinya katup pelepas (relief valve) pada tangki kargo LNG.
> **Number/specific**: MARVS menjadi dasar setelan tekanan perangkat pelepas tekanan pada tangki. Sebagai konteks desain, tangki LNG atmosferik umumnya memakai MARVS di kisaran **0,7 barg** (sesuai batasan IGF Code untuk tangki atmosferik), sementara tipe tangki lain (termasuk beberapa tangki FSRU) bisa memakai setelan berbeda, dari kisaran **250 mbarg hingga 700 mbarg** tergantung tipe.
> **Source**: Wärtsilä Encyclopedia, "MARVS", https://www.wartsila.com/encyclopedia/term/marvs (dirangkum via pencarian, diakses 28 Sep 2026)
> **Confidence**: medium (definisi inti terverifikasi kuat; angka numerik contoh berasal dari rangkuman pencarian lintas sumber, bukan fetch halaman tunggal yang dikonfirmasi langsung)

> **Claim**: Global Warming Potential (GWP) metana menurut IPCC Sixth Assessment Report (AR6) bergantung pada horizon waktu yang dipakai.
> **Number/specific**: GWP100 (basis 100 tahun) metana **27–30× CO2** (EPA, mengutip IPCC AR6, dipublikasikan 2021); IEA Global Methane Tracker 2025 (mengutip IPCC AR6) menyebut GWP20 (basis 20 tahun) metana fosil **~82,5× CO2**, dan GWP100 metana fosil **~30× CO2** (nilai presisi 29,8, dinaikkan dari nilai "metana murni" 27,9 untuk memperhitungkan efek CO2 turunan oksidasi metana).
> **Source**: EPA, "Understanding Global Warming Potentials", https://www.epa.gov/ghgemissions/understanding-global-warming-potentials (diakses 28 Sep 2026); IEA, "Global Methane Tracker 2025 — Key findings", https://www.iea.org/reports/global-methane-tracker-2025/key-findings (dirangkum via pencarian, diakses 28 Sep 2026)
> **Confidence**: high

> **Claim**: Venting (pelepasan BOG langsung ke atmosfer) adalah opsi pengelolaan yang paling tidak diinginkan karena menimbulkan kerugian ganda.
> **Number/specific**: Venting berarti kehilangan volume gas yang sudah dibayar/dimiliki, sekaligus emisi metana langsung ke atmosfer tanpa pembakaran (metana yang tak terbakar punya dampak iklim jauh lebih besar per satuan massa dibanding CO2 hasil pembakaran, lihat klaim GWP di atas).
> **Source**: PGN LNG, "Smart Strategies for Managing Boil-Off Gas", https://pgnlng.co.id/en/berita/learn/managing-boil-off-gas/ ; ICCT, "Options for Reducing Methane Emissions from New and Existing LNG-Fueled Ships", https://theicct.org/wp-content/uploads/2023/10/Options-for-Reducing-Methane-Emissions-from-New-and-Existing-LNG-Fueled-Ships-FINAL-926.pdf
> **Confidence**: high

> **Claim**: Pada pengukuran nyata satu pelayaran kapal LNG, venting dan emisi fugitif hanya menyumbang sebagian kecil dari total emisi metana — mayoritas justru berasal dari metana yang tak terbakar sempurna (methane slip) saat mesin membakar BOG sebagai bahan bakar.
> **Number/specific**: Venting + fugitive emissions = **0,23%** dari total emisi metana pelayaran tersebut; methane slip dari generator engine (**60%**) dan main engine (**39%**) bersama-sama menyumbang **99,8%** dari total emisi metana pada pelayaran itu.
> **Source**: ICCT-terkait, dirangkum dari publikasi riset emisi metana kapal LNG (termasuk "Total Methane and CO2 Emissions from Liquefied Natural Gas Carrier Ships", Environmental Science & Technology, https://pubs.acs.org/doi/10.1021/acs.est.2c01383), dirangkum via pencarian 28 Sep 2026
> **Confidence**: medium (temuan dari satu studi/pelayaran terukur, bukan rata-rata industri; diakses via ringkasan pencarian, bukan fetch teks lengkap)

> **Claim**: "Boil-off allowance" atau "boil-off warranty" adalah klausul yang lazim ditemukan dalam kontrak jual-beli LNG internasional (Sale and Purchase Agreement/SPA maupun charterparty kapal).
> **Number/specific**: Klausul ini mendefinisikan ambang batas boil-off yang dianggap wajar serta mekanisme kompensasi/penagihan bila boil-off aktual melebihi ambang tersebut — dalam SPA, kelebihan boil-off umumnya ditagihkan ke penjual; dalam charterparty, kelebihan boil-off bisa dikurangkan dari pembayaran ke pemilik kapal.
> **Source**: Law Insider, "Boil Off Gas Clause Samples" & "Boil-Off Warranty Sample Clauses", https://www.lawinsider.com/clause/boil-off-gas ; Gard Insights, "When cargo becomes fuel: Complexities of boil-off and reliquefaction in LNG shipping", https://gard.no/en/insights/when-cargo-becomes-fuel-complexities-of-boil-off-and-reliquefaction-in-lng/
> **Confidence**: high untuk praktik kontrak LNG internasional; **TIDAK terverifikasi** untuk kontrak pasokan gas domestik/beyond-pipeline Indonesia (lihat Flags)

> **Claim**: CNG (Compressed Natural Gas) tidak mengalami boil-off karena disimpan sebagai gas terkompresi pada suhu ambien, bukan cairan kriogenik.
> **Number/specific**: Karena tetap dalam fase gas (bukan cair), CNG tidak punya mekanisme penguapan yang menimbulkan losses volume atau tekanan naik akibat panas masuk sebagaimana LNG. Sebagai catatan pembanding, LNG unggul dalam densitas energi per volume (sering disebut sekitar 2,4× lebih tinggi dari CNG), yang menjadi alasan LNG tetap dipilih untuk volume besar/jarak jauh meski punya isu boil-off.
> **Source**: ScienceDirect Topics, "Compressed Natural Gas — an overview", https://www.sciencedirect.com/topics/engineering/compressed-natural-gas ; Energy Education, "Natural gas vehicle fuel storage", https://energyeducation.ca/encyclopedia/Natural_gas_vehicle_fuel_storage
> **Confidence**: high (prinsip fisika dasar, terverifikasi konsisten lintas sumber teknis)

> **Claim**: Pemerintah Indonesia memposisikan gas bumi (termasuk LNG) sebagai energi transisi domestik, dengan konsumsi domestik yang secara resmi tercatat sudah melampaui volume ekspor sejak 2012.
> **Number/specific**: Komposisi konsumsi gas bumi domestik per akhir 2023: Industri 30,83% (terbesar), Listrik 11,82%, Pupuk 11,72%, ekspor LNG 22,18%, ekspor pipa 8,45%; total konsumsi **5.868 BBTUD**. Infrastruktur hilir (pipa transmisi/distribusi, terminal penerima LNG) terus didorong pembangunannya.
> **Source**: Kementerian ESDM (Ditjen Migas), "Pemerintah Dorong Pemanfaatan Gas Bumi Sebagai Energi Transisi Untuk Domestik", 1 Maret 2024, https://migas.esdm.go.id/post/pemerintah-dorong-pemanfaatan-gas-bumi-sebagai-energi-transisi-untuk-domestik
> **Confidence**: high untuk akurasi angka (sumber resmi ESDM); **catatan penting**: data ini per akhir 2023/dipublikasikan Maret 2024 — sudah >2 tahun dari run Oktober 2026 ini, harus dilabel bertanggal (lihat Flags)

> **Claim**: PT PGN LNG Indonesia dan PT Gagas Energi Indonesia (PGN Gagas) adalah dua entitas berbeda dalam ekosistem PGN/Subholding Gas Pertamina, dengan cakupan bisnis yang berbeda.
> **Number/specific**: PT PGN LNG Indonesia (situs terpisah pgnlng.co.id) menjalankan aktivitas **likuifaksi, penyimpanan/pengapalan, regasifikasi, dan trading** LNG (termasuk operasi FSRU). PT Gagas Energi Indonesia (`company_profile.md`) adalah **anak usaha PGN yang berbeda**, fokus pada distribusi CNG *beyond-pipeline* (Gasku/Gaslink) dan mengoperasikan **LNG Hub** sebagai bagian infrastruktur penyimpanan — tanpa klaim aktivitas likuifaksi/FSRU/trading dalam profil resminya.
> **Source**: `knowledge_base/company_profile.md` (internal, pre-approved) + WebFetch/observasi domain pgnlng.co.id (mis. artikel "Managing Boil-Off Gas", "Exploring LNG's Core Engine: The Liquefaction Plant"), diakses 28 Sep 2026
> **Confidence**: high

> **Claim**: Peran LNG PGN Gagas secara spesifik adalah operator LNG Hub dan penyalur hilir (downstream) — bukan produsen, bukan operator fasilitas likuifaksi/FSRU, bukan eksportir.
> **Number/specific**: `company_profile.md` mencantumkan **LNG Hub** sebagai satu dari infrastruktur Gagas (bersama SPBG, Mother Station, MRU) di bawah kategori "penyimpanan gas bumi"; tidak ada klaim fasilitas likuifaksi, FSRU, atau aktivitas ekspor dalam profil resmi yang disetujui.
> **Source**: `knowledge_base/company_profile.md` (internal, pre-approved)
> **Confidence**: high

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (LNG/BOG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Definisi BOG + fisika heat ingress | LNG kriogenik ~-160 s.d. -163°C; BOG dominan metana; fenomena normal (bukan kebocoran) | H2 #1 + definition snippet | — (vendor-neutral, tanpa mention) |
| Boil-off rate (BOR) & faktor pemercepat | Tangki/kapal besar ~0,10–0,15%/hari (modern ~0,1%/hari); **ISO tank/tangki kecil ~0,1–0,3%/hari — lebih tinggi**; faktor: isi tangki rendah, iklim tropis, frekuensi bongkar-muat, holding time panjang | H2 #2 | — |
| Empat jalur pengelolaan BOG (minimalisasi, inventori, energy recovery, reliquefaction) | Minimalkan heat ingress (insulasi/vakum, hindari tangki nyaris kosong); kelola inventori just-in-time (holding time pendek); manfaatkan sebagai bahan bakar/injeksi pipa; reliquefaction via reverse Brayton — umum di kapal/terminal besar | H2 #3 + tabel metode | **Aside 1 kalimat**: penjadwalan pengiriman ISO tank + regasifikasi satelit yang rapi oleh penyalur hilir (mis. PGN Gagas) menekan holding time & BOG di sisi pelanggan |
| Ekonomi kerugian BOG | Losses ilustratif = volume × BOR × harga (label "estimasi"); "boil-off allowance" lazim di kontrak LNG internasional, **belum terverifikasi** untuk kontrak domestik Indonesia | H2 #4 | — |
| Kapan reliquefaction BELUM sepadan + kontras CNG | Reliquefaction: capex & kompleksitas tinggi, predominan skala kapal/terminal besar; venting = opsi terakhir (rugi gas + emisi metana, GWP100 ~27–30×, GWP20 ~82,5×); **CNG tidak mengalami boil-off sama sekali** — opsi jujur untuk volume kecil/holding lama | H2 #5 | Cross-link ke klaster CNG (`perusahaan-cng-indonesia`) — bukan mention Gagas langsung |
| Closing/CTA | Peran LNG Gagas = **operator LNG Hub** + **penyalur hilir** (menjadwalkan pengiriman ISO tank & regasifikasi satelit ke titik pelanggan) — bagian ekosistem PGN/Subholding Gas Pertamina | Closing | LNG Hub + Gaslink sebagai anchor; CTA lunak ke gagas.co.id setelah kesimpulan |

**Guardrail eksplisit untuk penulis (WAJIB dipatuhi)**:
- ❌ JANGAN pakai "pionir", "pemimpin pasar", "terbesar", atau menyinggung ekspor LNG (Jepang/Korea/China) untuk PGN Gagas — frasa ini ada di landing page klien tapi **tidak didukung** `company_profile.md` dan melanggar blacklist superlatif pipeline ini.
- ❌ JANGAN nyatakan atau implikasikan Gagas melakukan **likuifaksi, regasifikasi skala terminal, operasi FSRU, atau reliquefaction** — company_profile.md hanya menyebut LNG Hub sebagai infrastruktur penyimpanan.
- ❌ JANGAN mengonflasikan **PT PGN LNG Indonesia** (sibling entity — likuifaksi/FSRU/regasifikasi/trading, situs pgnlng.co.id) dengan **PT Gagas Energi Indonesia**.
- ✅ Kata kerja aman: **menyalurkan, memasok, melayani, mengoperasikan (LNG Hub), menjadwalkan (pengiriman ISO tank/regasifikasi satelit)**.
- ✅ Maksimal **2–3 self-mention** — idealnya 1 aside di H2 #3 (inventori/penjadwalan) + closing/CTA.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM (Ditjen Migas), 1 Maret 2024** — https://migas.esdm.go.id/post/pemerintah-dorong-pemanfaatan-gas-bumi-sebagai-energi-transisi-untuk-domestik — *backs*: gas bumi/LNG sebagai energi transisi domestik + data komposisi konsumsi gas nasional (per akhir 2023, label bertanggal).
2. **IEA — Global Methane Tracker 2025** — https://www.iea.org/reports/global-methane-tracker-2025/key-findings — *backs*: GWP metana basis 20 tahun (~82,5×) dan 100 tahun (~30×), mengutip IPCC AR6.
3. **EPA — Understanding Global Warming Potentials** — https://www.epa.gov/ghgemissions/understanding-global-warming-potentials — *backs*: GWP100 metana 27–30× CO2 per IPCC AR6 (2021).
4. **Wärtsilä Encyclopedia** — https://www.wartsila.com/encyclopedia/term/boil-off-gas-(bog) , /boil-off-rate-(bor) , /marvs , /lng-reliquefaction-system — *backs*: definisi teknis inti BOG, BOR, MARVS, dan mekanisme reliquefaction (literatur rekayasa gas OEM).
5. **ICCT — "Options for Reducing Methane Emissions from New and Existing LNG-Fueled Ships" (2023)** — https://theicct.org/wp-content/uploads/2023/10/Options-for-Reducing-Methane-Emissions-from-New-and-Existing-LNG-Fueled-Ships-FINAL-926.pdf — *backs*: rentang BOR industri + nuansa methane slip vs venting pada emisi metana nyata.
6. **CATF — "Methane emissions from LNG: Best practices from liquefaction to gasification" (2021)** — https://cdn.catf.us/wp-content/uploads/2021/09/21091747/LNG-Methane-best-practice-29-Sept-2021.pdf — *backs*: cakupan praktik terbaik emisi metana rantai nilai LNG termasuk pengelolaan boil-off (cakupan topik; PDF penuh tidak berhasil diambil, lihat Flags).
7. **GIIGNL — LNG Custody Transfer Handbook** — https://www.giignl.org/resources/custody-transfer-handbook-7th-edition-2026 — *backs*: standar industri pengukuran/penanganan BOG dalam transfer custody LNG.
8. **PGN LNG — "Smart Strategies for Managing Boil-Off Gas", 13 Nov 2025** — https://pgnlng.co.id/en/berita/learn/managing-boil-off-gas/ — *backs*: definisi BOG, tiga metode penanganan, dan pengingat risiko keselamatan/emisi — rujukan grup PGN (bukan kompetitor Gagas, boleh dikutip sebagai penjelas).

Priority order used untuk topik ini: ESDM (konteks domestik) > IEA/EPA (metrik iklim internasional) > literatur rekayasa gas (Wärtsilä/ICCT/CATF/GIIGNL) > penjelas grup PGN.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu boil-off gas pada LNG dan apakah berbahaya?

Boil-off gas (BOG) adalah gas alam yang menguap dari LNG di dalam tangki kriogenik karena panas dari luar tetap merembes meski tangki sudah diinsulasi — ini fenomena fisik normal, bukan tanda kebocoran. LNG disimpan pada suhu sekitar -160 hingga -163°C, jauh di bawah titik didihnya pada tekanan atmosfer. BOG tidak otomatis berbahaya; risikonya muncul bila dibiarkan menumpuk tanpa dikelola, sehingga tekanan tangki naik dan memicu katup pelepas.

### Berapa persen LNG menguap per hari di tangki?

Lajunya disebut boil-off rate (BOR) dan bervariasi menurut ukuran serta desain tangki. Tangki besar berinsulasi baik seperti pada kapal LNG umumnya dirancang pada kisaran 0,10–0,15% volume per hari, dengan kapal modern mendekati atau di bawah 0,1%/hari. Tangki kecil seperti ISO tank yang lazim dipakai untuk distribusi beyond-pipeline justru punya BOR lebih tinggi, sekitar 0,1–0,3%/hari, karena rasio permukaan-terhadap-volume yang lebih besar. Angka-angka ini rentang ilustratif dari literatur teknis internasional.

### Mengapa LNG menguap padahal tangki sudah diinsulasi?

Insulasi kriogenik — baik berupa vakum maupun material seperti perlite — dirancang meminimalkan, bukan menghilangkan total, perpindahan panas dari lingkungan ke LNG yang disimpan pada suhu ekstrem sekitar -160 hingga -163°C. Selama masih ada selisih suhu sebesar itu, sejumlah kecil panas akan selalu merembes masuk (heat ingress) dan menguapkan sebagian LNG menjadi gas. Boil-off karena itu adalah konsekuensi termodinamika yang tak terhindarkan; yang bisa dikendalikan hanya lajunya.

### Apa yang terjadi jika boil-off gas dibiarkan menumpuk di tangki?

Jika BOG tidak dialirkan keluar atau dimanfaatkan, tekanan di dalam tangki terus naik seiring penguapan yang berlanjut. Setiap tangki punya batas tekanan desain yang disebut MARVS (Maximum Allowable Relief Valve Setting); begitu tekanan mendekati batas itu, katup pelepas otomatis terbuka untuk melepaskan gas demi mencegah kerusakan tangki. Pelepasan tak terkendali seperti ini berarti kerugian volume gas sekaligus emisi metana langsung ke atmosfer — karena itu BOG idealnya dikelola proaktif, bukan dibiarkan sampai memicu venting.

### Apakah boil-off gas bisa dimanfaatkan sebagai bahan bakar?

Bisa — ini disebut energy recovery. BOG dikompresi lalu disalurkan sebagai bahan bakar untuk mesin, genset, atau operasi terminal, atau setelah dimurnikan bisa diinjeksikan ke jaringan pipa gas. Opsi lain yang lebih intensif peralatan adalah reliquefaction: BOG dikompresi lalu didinginkan lewat siklus refrigerasi terpisah (umumnya reverse Brayton berbasis nitrogen) hingga kembali cair. Reliquefaction secara komersial paling umum dipakai di kapal LNG dan terminal besar, bukan di titik pelanggan beyond-pipeline berskala kecil.

### Bagaimana cara menekan kerugian akibat boil-off gas?

Empat jalur utama: (1) minimalkan heat ingress lewat kualitas insulasi tangki dan hindari tangki nyaris kosong, karena rasio permukaan-volume yang buruk mempercepat penguapan; (2) kelola inventori secara just-in-time — jadwalkan pengiriman agar holding time tetap pendek; (3) manfaatkan BOG sebagai bahan bakar (energy recovery); (4) pertimbangkan reliquefaction hanya jika volume dan skala operasi cukup besar untuk menjustifikasi investasi kompresor dan sistem refrigerasinya. Venting sebaiknya jadi opsi paling terakhir.

### Apakah biaya boil-off ditanggung pembeli atau penyedia?

Tergantung struktur kontraknya. Dalam kontrak jual-beli LNG internasional, klausul "boil-off allowance" atau "boil-off warranty" lazim mengatur ambang batas boil-off yang wajar serta siapa menanggung kelebihan di atas ambang itu — bisa penjual, bisa pembeli, tergantung negosiasi. Praktik serupa untuk kontrak pasokan gas domestik/beyond-pipeline di Indonesia belum terverifikasi secara terbuka dalam riset ini, sehingga pembeli industri sebaiknya menanyakan langsung ke penyedia bagaimana losses boil-off diperhitungkan sebelum tanda tangan kontrak.

## Data tables for the writer

### Empat jalur pengelolaan BOG

| Metode | Cara kerja | Cocok untuk skala | Catatan biaya/kompleksitas |
|---|---|---|---|
| Minimalisasi heat ingress | Insulasi vakum/perlite berkualitas, desain double-wall/full containment, hindari tangki nyaris kosong (rasio permukaan-volume naik saat isi rendah) | Semua skala — fondasi wajib | Tertanam di capex tangki; peningkatan setelah pembelian sulit/mahal |
| Manajemen inventori & tekanan | Isi-pakai just-in-time, jadwalkan pengiriman ISO tank agar holding time pendek, pantau tekanan tangki rutin | Sangat cocok skala kecil–menengah (ISO tank, tangki pelanggan beyond-pipeline) | Biaya operasional rendah — soal penjadwalan & disiplin operasi, bukan investasi besar |
| Energy recovery (BOG sebagai bahan bakar) | BOG dikompresi lalu disalurkan sebagai bahan bakar mesin/boiler, atau dimurnikan untuk injeksi ke jaringan pipa | Skala menengah–besar dengan beban yang bisa menyerap BOG secara rutin | Butuh kompresor & sistem penyaluran; sepadan bila ada beban penyerap yang konsisten |
| Reliquefaction | BOG dikompresi lalu didinginkan lewat siklus refrigerasi terpisah (umumnya reverse Brayton berbasis nitrogen) hingga kembali cair, dikembalikan ke tangki | Umumnya kapal LNG & terminal besar | Capex & kompleksitas tinggi (kompresor, expander, cold box) — jarang sepadan di titik pelanggan beyond-pipeline skala kecil |
| *Venting (opsi terakhir)* | *Pelepasan langsung ke atmosfer lewat katup pelepas saat tekanan mendekati MARVS* | *Darurat/kegagalan pengelolaan* | *Rugi ganda: kehilangan volume gas + emisi metana langsung (GWP tinggi)* |

### CNG vs LNG — soal boil-off

| Aspek | CNG | LNG |
|---|---|---|
| Wujud penyimpanan | Gas terkompresi, suhu ambien | Cair pada suhu kriogenik ~-160 s.d. -163°C |
| Mengalami boil-off? | Tidak — tetap fase gas | Ya — BOR tangki besar ~0,10–0,15%/hari; ISO tank/tangki kecil ~0,1–0,3%/hari (lebih tinggi) |
| Holding time tanpa tindakan | Tidak relevan (tidak ada tekanan naik akibat penguapan cairan) | Terbatas, tergantung desain insulasi — dari hitungan hari hingga puluhan hari/bulan pada tangki modern tervakum |
| Risiko losses volume & emisi | Tidak ada losses akibat penguapan | Ada losses volume + risiko emisi metana bila venting jadi opsi terakhir |
| Densitas energi per volume | Lebih rendah | ~2,4× lebih tinggi dari CNG (keunggulan LNG untuk volume besar/jarak jauh) |
| Paling cocok untuk | Volume kecil–menengah, holding lama, lokasi beyond-pipeline tanpa infrastruktur regas | Volume besar/jarak jauh dengan throughput tinggi yang menjaga turnover tangki cepat |

## Edge cases & nuance

- **Jangan pukul-rata angka BOR kapal ke tangki pelanggan.** Angka desain kapal besar (~0,10–0,15%/hari) secara sistematis meremehkan BOG riil di ISO tank/tangki kecil (~0,1–0,3%/hari) — arah biasnya selalu "terlalu optimis" jika dipakai untuk skala pelanggan beyond-pipeline.
- **Reliquefaction bukan "selalu buruk."** Untuk kapal dan terminal besar, reliquefaction rutin dipakai dan terbukti bernilai ekonomis. Kesalahan yang sering terjadi adalah mengasumsikan ekonomi yang sama berlaku di titik pelanggan skala kecil beyond-pipeline — di situlah investasi kompresor + sistem refrigerasi terpisah biasanya sulit balik modal.
- **"Pakai BOG sebagai bahan bakar" mengurangi rugi volume, tapi belum otomatis rendah-emisi.** Studi pelayaran nyata (ICCT-terkait) menunjukkan venting mentah hanya menyumbang sebagian kecil (0,23%) dari total emisi metana pada satu pelayaran terukur — mayoritas (99,8%) justru berasal dari metana yang tak terbakar sempurna (methane slip) saat mesin membakar BOG sebagai bahan bakar. Efisiensi pembakaran peralatan yang menyerap BOG sama pentingnya dengan keputusan "vent atau tidak."
- **GWP metana berubah signifikan tergantung horizon waktu dan jenis metana.** GWP20 (~82,5×) jauh lebih tinggi dari GWP100 (~27–30×) — pilih dan sebutkan basis mana yang dipakai setiap kali mengutip "metana X kali lebih kuat dari CO2"; jangan mencampur keduanya dalam satu klaim.
- **CNG "tidak mengalami boil-off" benar secara struktural, tapi bukan pengganti 1:1 untuk semua kasus LNG.** LNG unggul untuk volume besar/jarak jauh karena densitas energi per volume sekitar 2,4× lebih tinggi — ini prinsip umum untuk cross-link jujur ke klaster CNG, bukan klaim superioritas salah satu produk.
- **Boil-off allowance yang lazim secara internasional tidak otomatis berarti pembeli Indonesia punya perlindungan kontrak yang sama.** Ini area yang harus ditanyakan langsung ke penyedia, bukan diasumsikan berlaku otomatis di kontrak domestik.

## Flags (open factual risk)

- ⚠️ **BOR (0,10–0,15%/hari tangki besar; 0,1–0,3%/hari ISO tank kecil)**: bersumber dari literatur teknik kriogenik internasional (Wärtsilä, ScienceDirect, ICCT), **bukan data terukur Indonesia**. → Rekomendasi: selalu label sebagai "rentang ilustratif dari literatur teknis internasional", jangan janjikan sebagai spesifikasi kinerja produk PGN Gagas.
- ⚠️ **Angka acuan 0,12%/hari (kapal membran 125.000 m³)**: berasal dari ringkasan dokumen paten/kalkulator teknis pihak ketiga, bukan teks resmi IMO/IGC Code yang diakses langsung dalam riset ini. → Rekomendasi: sajikan sebagai satu titik data dalam rentang 0,10–0,15%/hari, jangan klaim sebagai "batas resmi IMO" tanpa hedge.
- ⚠️ **Holding time spesifik (mis. "hingga ~80 hari" untuk ISO tank Type C tervakum modern)**: bersumber dari situs media dagang (tanknewsinternational.com), otoritas menengah-rendah, bukan spesifikasi pabrikan tunggal atau badan klasifikasi resmi yang disebut namanya. → Rekomendasi: gunakan sebagai orde-besaran ("bisa mencapai puluhan hari pada tangki modern tervakum"), jangan janjikan angka pasti.
- ⚠️ **Isi lengkap laporan CATF (LNG Methane best practice, 2021)** tidak berhasil diambil langsung (ukuran file PDF melebihi batas tool fetch) — hanya cakupan topik yang terverifikasi via ringkasan pencarian. → Rekomendasi: kutip CATF hanya untuk cakupan/topik umum (praktik terbaik emisi metana LNG dari likuifaksi ke gasifikasi, termasuk boil-off), jangan kutip angka spesifik apa pun atas nama CATF.
- ⚠️ **"Boil-off allowance" sebagai klausul kontrak**: terverifikasi kuat untuk praktik LNG internasional (SPA/charterparty), **TAPI TIDAK ada sumber yang mengonfirmasi ini lazim di kontrak pasokan gas domestik/beyond-pipeline Indonesia**. → Rekomendasi: jangan nyatakan sebagai praktik standar Indonesia; frasekan sebagai pertanyaan yang perlu ditanyakan pembeli ke penyedia, bukan fakta yang sudah pasti berlaku.
- ⚠️ **LNG Hub PGN Gagas di Bandung** (~15.000 MMBTU/bulan, mitra PT Nusantara Regas, groundbreaking Agustus 2025) dari riset dossier bulan lalu untuk klaster kata kunci ini — sumber hanya dua media niche energi (tambang.co.id, ruangenergi.com), bukan rilis resmi PGN Gagas/ESDM, dan **tidak diverifikasi ulang secara independen pada run ini**. → Rekomendasi: bila dipakai sebagai contoh konkret, atribusikan eksplisit ke media tersebut + tanggal; jangan jadikan klaim kapasitas evergreen; jangan implikasikan Gagas melakukan reliquefaction.
- ⚠️ **Data komposisi konsumsi gas domestik ESDM** (Industri 30,83% dst., total 5.868 BBTUD) bertanggal 1 Maret 2024 (per data akhir 2023) — lebih dari dua tahun sebelum run Oktober 2026 ini. → Rekomendasi: label eksplisit "per data akhir 2023"; jangan sajikan sebagai angka 2026.
- ⚠️ **Ekonomi/capex reliquefaction skala kecil** (di titik pelanggan beyond-pipeline): tidak ditemukan angka biaya spesifik dalam riset ini. Literatur techno-economic yang ditemukan (mis. capex likuifaksi US$124–2.255/tonne-per-annum) mengukur *train* likuifaksi skala besar, **bukan** unit reliquefaction BOG kecil — beda cakupan, sehingga sengaja tidak dipakai di dossier ini agar tidak menyesatkan. → Rekomendasi: jangan cantumkan angka $/Rp reliquefaction skala kecil; nyatakan kualitatif ("perlu kompresor + sistem refrigerasi terpisah, investasi tambahan yang jarang sepadan pada throughput rendah") dan sarankan penulis mengarahkan pembaca meminta simulasi vendor.

## Definition snippet draft (40–60 words)

> Boil-off gas (BOG) adalah gas alam yang menguap secara alami dari LNG (Liquefied Natural Gas) di dalam tangki kriogenik karena panas luar tetap merembes meski tangki sudah diinsulasi. LNG disimpan sekitar -160 hingga -163°C; BOG yang dominan metana ini harus dikelola lewat manajemen tekanan, dimanfaatkan sebagai bahan bakar, atau dicairkan ulang (reliquefaction) agar tidak memicu venting.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram "hierarki empat jalur pengelolaan BOG"**: infografis flowchart vertikal dari BOG terbentuk (puncak) bercabang ke 4 jalur berlabel Bahasa Indonesia (minimalisasi heat ingress, manajemen inventori/tekanan, energy recovery, reliquefaction), dengan "venting" ditandai kotak merah "opsi terakhir" di dasar diagram beserta ikon peringatan. Cocok ditempatkan di H2 #3. Alt-text: "Diagram empat jalur pengelolaan boil-off gas LNG dari minimalisasi hingga reliquefaction".
- **Concept 2 — Kartu perbandingan CNG vs LNG soal boil-off**: dua kartu side-by-side dengan ikon termometer/gauge — kartu kiri "CNG: gas, suhu ambien, TIDAK ada boil-off" (hijau), kartu kanan "LNG: cair, ~-160°C, BOR 0,1–0,3%/hari (tangki kecil)" (oranye) — menegaskan trade-off, bukan superioritas mutlak. Cocok di H2 #5/cross-link CNG. Alt-text: "Perbandingan CNG dan LNG terkait boil-off gas dan penyimpanan".
- **Concept 3 — Gauge/bar sederhana GWP metana 20 vs 100 tahun**: dua bar horizontal berdampingan — "GWP20: ~82,5× CO2" (bar panjang, merah) vs "GWP100: ~27–30× CO2" (bar lebih pendek, oranye) — dengan keterangan kecil "berdasarkan IPCC AR6" untuk kredibilitas. Cocok di H2 #5 (bagian emisi metana). Alt-text: "Grafik perbandingan GWP metana basis 20 tahun dan 100 tahun menurut IPCC AR6".
