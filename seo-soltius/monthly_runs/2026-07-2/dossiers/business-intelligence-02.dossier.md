---
brief_id: "business-intelligence-02"
researcher_run_date: "2026-07-07"
sources_cited: 14
flags: 5
---

# Research Dossier: Business Intelligence untuk Retail & Distribusi FMCG

## TL;DR for the writer

- **Angle = BI vertikal untuk rantai retail–distribusi FMCG**, bukan definisi BI generik. Bawa setiap konsep BI ke *pain* nyata distributor: stok tidak merata antar wilayah, sell-out lambat sampai, promo tanpa ukuran ROI. Sumber data BI = ERP (S/4HANA / SAP Business One) → data warehouse (SAP Datasphere/BW/4HANA) → SAP Analytics Cloud (SAC) untuk dashboard & forecast.
- **SAP tech yang diajarkan**: SAP Analytics Cloud (BI + planning + predictive dalam satu SaaS) dan fitur **Smart Predict** (tiga skenario: classification, regression, **time series forecasting** — yang terakhir persis untuk *demand forecasting* per produk/outlet). Terverifikasi SAP-official. Jangan melebih-lebihkan; SAC bukan "AI ajaib", ia butuh data historis bersih (rasio ~5:1 historis:forecast).
- **Angka jangkar (terverifikasi)**: OOS ritel global rata-rata **8,3%** (studi Gruen/Corsten/Bharadwaj 2002, standar industri yang masih dikutip) → kerugian pendapatan hingga ~4% bagi peritel FMCG. Pasar FMCG Indonesia **>USD 100 miliar** (bukan ">USD 50 miliar" seperti tebakan brief — KOREKSI, lihat Flags). Traditional trade (warung/toko) masih **~69%** pangsa (Q2 2024) — konteks penting kenapa data lapangan FMCG Indonesia kotor & sulit real-time.
- **Penyebab OOS penting untuk H2 #5 (honest angle)**: ~72% OOS berasal dari praktik *ordering/replenishment* di dalam toko, hanya ~28% dari rantai pasok hulu (Gruen/Corsten). Artinya: analitik canggih tidak menyembuhkan input/master-data yang buruk — pesan counter-conventional yang kredibel.
- **Soltius anchor** (closing, maks 2–3 sebutan): Analytics + **Data and AI Consulting**, pengalaman industri Consumer Products / Wholesale Distribution / Retail. Klien deskriptor satu baris yang boleh disebut: **PT Tigaraksa Satria Tbk** (distribusi; SAP ECC 6.0 & BW on HANA). Jangan mengarang angka proyek.

## Core facts (verified)

> **Claim**: SAP Analytics Cloud (SAC) menyatukan business intelligence, perencanaan (planning), dan analitik prediktif dalam satu solusi SaaS cloud.
> **Number/specific**: "combines all analytics capabilities — including planning, predictive analytics, reporting and business intelligence (BI) — in a single SaaS solution"
> **Source**: SAP News (news.sap.com), "Making Data-Driven Decisions with SAP Analytics Cloud" + SAP product page sap.com/products/data-cloud/cloud-analytics.html, diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAC Smart Predict menyediakan tiga jenis skenario prediktif.
> **Number/specific**: (1) **Classification** — memperkirakan probabilitas/propensity (mis. kecenderungan beli, risiko churn); (2) **Regression** — memprediksi nilai numerik & pengaruhnya (mis. estimasi revenue); (3) **Time Series Forecasting** — menghasilkan ramalan deret waktu per nilai dimensi (mis. "forecast revenue untuk tiap produk dan tiap titik penjualan harian untuk 30 hari ke depan").
> **Source**: SAP Learning (learning.sap.com), "Exploring SAP Analytics Cloud Smart Predict", diakses 2026-07-07
> **Confidence**: high

> **Claim**: Time series forecasting di Smart Predict adalah mekanisme yang tepat untuk *demand forecasting* per produk dan per outlet/wilayah.
> **Number/specific**: Menghasilkan "individual forecasts generated for each value of a dimension" — sehingga bisa forecast per SKU × per titik penjualan. Rule of thumb SAP: rasio ~5:1 data historis : jumlah periode forecast (mis. 100 bulan historis → ~20 periode forecast andal).
> **Source**: SAP Learning + SAP Help Portal / SAP Community "Time Series Forecasting in SAC Smart Predict", diakses 2026-07-07
> **Confidence**: high (rasio 5:1 adalah pedoman praktik, bukan batas keras — frasakan sebagai "pedoman umum")

> **Claim**: SAC menghadirkan augmented analytics (deteksi anomali, natural-language query, prediksi tren otomatis) dan kini asisten AI Joule.
> **Number/specific**: Augmented analytics SAC mencakup anomaly detection, automating data quality, natural-language Q&A, dan "identifying, predicting, and forecasting trends"; Joule copilot masuk ke SAC untuk mengotomasi pembuatan report/dashboard/plan.
> **Source**: SAP News (news.sap.com), "Unleashing the Latest SAP Data and Analytics Innovations" (2024) + "Making Data-Driven Decisions with SAP Analytics Cloud", diakses 2026-07-07
> **Confidence**: high

> **Claim**: Tingkat *out-of-stock* (OOS) ritel rata-rata dunia adalah sekitar 8,3% dan telah menjadi angka rujukan industri yang stabil bertahun-tahun.
> **Number/specific**: Rata-rata OOS global **8,3%** (Eropa tertinggi ~8,6%); studi audit lintas negara sektor grocery/FMCG.
> **Source**: Gruen, T.W., Corsten, D. & Bharadwaj, S. (2002), *Retail Out-of-Stocks: A Worldwide Examination of Causes, Rates, and Consumer Responses*, Grocery Manufacturers of America; dikutif ulang di NACDS & literatur akademik, diakses 2026-07-07
> **Confidence**: high (studi rujukan klasik; angka konsisten dikutip lintas sumber)

> **Claim**: Mayoritas OOS berasal dari praktik pemesanan & replenishment di dalam toko, bukan dari rantai pasok hulu.
> **Number/specific**: ~**72%** OOS akibat praktik in-store ordering/replenishing yang keliru; ~**28%** dari masalah suplai/perencanaan rantai pasok.
> **Source**: Gruen & Corsten (2003), turunan studi 2002; dikutip di literatur stockout, diakses 2026-07-07
> **Confidence**: high

> **Claim**: OOS menimbulkan kerugian pendapatan signifikan bagi peritel FMCG.
> **Number/specific**: Kerugian pendapatan hingga ~**4%** bagi peritel FMCG akibat OOS (turunan dari studi Corsten-Gruen); dari sisi shopper, ~1 dari 13 item yang dicari tidak tersedia.
> **Source**: Literatur turunan Corsten-Gruen (mis. ulasan globalpraxis / KPI benchmark), diakses 2026-07-07
> **Confidence**: medium (angka "hingga 4%" adalah interpretasi turunan; frasakan "hingga sekitar 4%" dengan atribusi)

> **Claim**: Pasar FMCG Indonesia adalah salah satu yang terbesar & tercepat tumbuh di Asia Tenggara.
> **Number/specific**: Nilai pasar **>USD 100 miliar**; CAGR ~7,6% (2021–2025); Q3 2024 belanja FMCG ~**IDR 208 triliun** (naik ~1,1% YoY).
> **Source**: Statista "FMCG market in Indonesia — statistics & facts" + Market Research Indonesia (data Kantar Worldpanel/NIQ), diakses 2026-07-07
> **Confidence**: medium (angka ">USD 100 miliar" adalah agregat sumber pasar/analis, bukan angka resmi BPS tunggal — atribusikan ke Statista/Kantar, jangan sajikan sebagai fakta mutlak)

> **Claim**: Traditional trade (warung/toko kelontong) masih mendominasi distribusi FMCG di Indonesia.
> **Number/specific**: Traditional trade ~**69%** pangsa pasar FMCG (Q2 2024); minimarket ~17%. Rumah tangga mengalokasikan ~20% total pengeluaran ke FMCG sejak 2018.
> **Source**: Statista / Market Research Indonesia (data Kantar Worldpanel), diakses 2026-07-07
> **Confidence**: high (untuk fakta pangsa channel; sumber panel ritel konsisten)

> **Claim**: Market basket analysis adalah metode BI untuk menemukan produk yang sering dibeli bersamaan.
> **Number/specific**: Disebut juga *association analysis*; menghasilkan aturan asosiasi ("jika beli A maka cenderung beli B") yang dipakai untuk cross-sell, bundling, dan penataan rak/planogram.
> **Source**: MicroStrategy product help + literatur akademik (ResearchGate, "Determination of Association Rules with Market Basket Analysis: Application in the Retail Sector"), diakses 2026-07-07
> **Confidence**: high (konsep mapan/teruji)

> **Claim**: Data warehouse modern SAP (SAP Datasphere) menjadi lapisan sumber tunggal yang memasok data ke SAC untuk analitik.
> **Number/specific**: SAP Datasphere (generasi penerus SAP Data Warehouse Cloud) menyatukan data integration, cataloging, semantic modeling, data warehousing & virtualization dari sumber SAP dan non-SAP; terintegrasi mulus dengan SAP Analytics Cloud.
> **Source**: SAP News (news.sap.com) "A Deeper Look Into How SAP Datasphere Enables a Business Data Fabric" (2023) + sap.com/products/data-cloud/datasphere.html, diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAC menghasilkan "single source of truth" dengan dashboard/KPI mendekati real-time yang menggabungkan data SAP & non-SAP.
> **Number/specific**: SAC "combining SAP and non-SAP data into real-time dashboards and interactive visualizations"; menyediakan prebuilt KPIs/models built on SAP business-process definitions.
> **Source**: SAP product page sap.com/products/data-cloud/cloud-analytics.html + SAP News, diakses 2026-07-07
> **Confidence**: high

> **Claim**: Kinerja penjualan eceran Indonesia (proxy permintaan konsumen) tumbuh sepanjang 2025.
> **Number/specific**: Indeks Penjualan Riil (IPR) tumbuh positif YoY di 2025 (mis. Sept 2025 diprakirakan ~5,8% YoY; Des 2025 ~4,4% YoY) — didukung kategori makanan/minuman/tembakau.
> **Source**: Bank Indonesia, Survei Penjualan Eceran (SPE) 2025, bi.go.id, diakses 2026-07-07
> **Confidence**: high (untuk arah tren; angka bulanan adalah prakiraan BI, atribusikan per bulan)

> **Claim**: Distorsi inventaris (OOS + overstock gabungan) merupakan beban biaya besar bagi peritel global.
> **Number/specific**: Distorsi inventaris menelan biaya ~USD 1,77 triliun bagi peritel global pada 2023 (setara ~7,2% dari seluruh penjualan ritel).
> **Source**: IHL Group (dikutip via ringkasan benchmark inventaris ritel), diakses 2026-07-07
> **Confidence**: medium (angka sering dikutip; atribusikan ke IHL Group dan frasakan sebagai estimasi industri)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Analytics Cloud (SAC)** | BI + planning + predictive dalam satu SaaS; dashboard real-time; single source of truth (news.sap.com / sap.com) | H2 #1–#3 (dashboard, metrik) & H2 #4 | Analytics solution + **Data and AI Consulting** |
| **SAC Smart Predict — Time Series Forecasting** | 3 skenario (classification/regression/time series); time series = forecast per produk×outlet; pedoman rasio ~5:1 (learning.sap.com) | H2 #2 use case #1 (demand forecasting) | Data and AI Consulting |
| **Hubungan BI ↔ ERP ↔ Data Warehouse** | Sumber data = transaksi ERP (S/4HANA / SAP Business One) → SAP Datasphere/BW/4HANA → SAC (news.sap.com) | H2 #4 ("dari mana datanya") | Optional 1-baris aside: pengalaman implementasi Soltius menghubungkan BI ke data ERP |
| **Soltius (implementor, bukan pembuat)** | Analytics + Data and AI Consulting; industri Consumer Products/Wholesale Distribution/Retail; klien distribusi PT Tigaraksa Satria | Closing CTA | "Melalui layanan Data and AI Consulting, Soltius..." |

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** SAP — **tidak membangun** SAC/Datasphere. Maks 2–3 sebutan Soltius. Klien Tigaraksa Satria hanya deskriptor satu baris (distribusi), tanpa mengarang hasil.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Learning — "Exploring SAP Analytics Cloud Smart Predict"** (learning.sap.com, diakses 2026-07-07) — https://learning.sap.com/courses/applying-ai-powered-visualizations-and-augmented-analytics-to-business-data-in-sap-analytics-cloud/exploring-sap-analytics-cloud-smart-predict_fe5bbba0-18fa-49b1-a8ef-eb54602a229f — *what it backs*: tiga skenario Smart Predict; time series untuk demand forecasting per produk/outlet.
2. **SAP News — "Making Data-Driven Decisions with SAP Analytics Cloud"** (news.sap.com, 2021, diakses 2026-07-07) — https://news.sap.com/2021/07/data-driven-decisions-cloud-based-analytics/ — *what it backs*: SAC menyatukan BI+planning+predictive; real-time visibility; augmented analytics.
3. **Gruen, Corsten & Bharadwaj (2002), *Retail Out-of-Stocks*, Grocery Manufacturers of America** — ref: https://www.scirp.org/reference/referencespapers?referenceid=1363882 — *what it backs*: OOS global ~8,3%; ~72% penyebab dari in-store ordering/replenishment (angka jangkar untuk H2 #2 & #5).
4. **Statista — "FMCG market in Indonesia: statistics & facts"** (statista.com, diakses 2026-07-07) — https://www.statista.com/topics/7509/fmcg-market-in-indonesia/ — *what it backs*: pasar FMCG Indonesia >USD 100 miliar; traditional trade ~69%.
5. **Bank Indonesia — Survei Penjualan Eceran 2025** (bi.go.id, diakses 2026-07-07) — https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2721425.aspx — *what it backs*: tren pertumbuhan penjualan eceran Indonesia 2025 (konteks permintaan konsumen).

(Prioritas link-out untuk writer: minimal 1 SAP-official [#1 atau #2] + 1 dari Statista/BI/Gruen-Corsten.)

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu sell-in dan sell-out dalam analitik penjualan distribusi?
*Sell-in* adalah penjualan dari prinsipal/distributor ke channel berikutnya (mis. ke retailer atau outlet), sedangkan *sell-out* adalah penjualan aktual dari outlet ke konsumen akhir. Analitik BI membandingkan keduanya untuk mendeteksi penumpukan stok di channel: sell-in tinggi tapi sell-out rendah menandakan barang menumpuk, bukan terjual. Data sell-out yang cepat dan akurat—idealnya dari POS atau laporan outlet—adalah dasar *demand forecasting* dan pencegahan *out-of-stock* yang andal.

### Bagaimana Business Intelligence membantu mengurangi stok mati dan kehabisan stok (OOS)?
BI menggabungkan data penjualan, inventaris, dan pergerakan per wilayah menjadi dashboard yang memperlihatkan *fill rate*, DSI (*days sales of inventory*), dan tren sell-out. Dengan *demand forecasting*—misalnya melalui SAP Analytics Cloud Smart Predict yang membuat ramalan deret waktu per produk dan per outlet—perencanaan replenishment jadi berbasis pola nyata, bukan tebakan. Ini penting karena OOS ritel rata-rata dunia sekitar 8,3% (Gruen/Corsten), dan mayoritasnya (~72%) berakar pada praktik pemesanan di lapangan.

### Apa itu market basket analysis dan apa manfaatnya untuk distribusi FMCG?
Market basket analysis (analisis keranjang belanja), disebut juga *association analysis*, adalah metode BI yang menemukan produk yang cenderung dibeli bersamaan dalam satu transaksi. Hasilnya berupa aturan asosiasi—"jika beli A, cenderung beli B". Untuk FMCG, wawasan ini dipakai untuk bundling promosi, cross-sell, penataan planogram rak, dan rekomendasi mix produk per outlet, sehingga distributor dapat mendorong penjualan tanpa menambah biaya akuisisi pelanggan.

### Apakah UKM distribusi bisa memakai BI, atau hanya perusahaan besar?
Bisa. Skala UKM distribusi tetap bisa mengadopsi BI, terutama jika data transaksi sudah tertata di ERP seperti SAP Business One yang memang menyasar segmen menengah. Kuncinya bukan ukuran perusahaan, melainkan kualitas data: master data produk yang seragam dan input penjualan yang disiplin. Analitik prediktif seperti forecasting butuh riwayat data yang cukup—SAP menyarankan pedoman rasio sekitar 5:1 antara data historis dan periode yang diramalkan.

### Berapa lama data penjualan bisa tampil di dashboard—apakah bisa real-time?
Tergantung sumber dan arsitektur data. Data dari ERP yang terhubung langsung ke platform analitik dan data warehouse (misalnya SAP Datasphere sebagai sumber tunggal) bisa tampil mendekati real-time. Namun data lapangan dari ratusan outlet sering masih *batch* harian karena bergantung input manual atau sinkronisasi DMS. Yang realistis untuk distribusi FMCG umumnya adalah pembaruan harian, dengan segmen tertentu (mis. modern trade ber-POS) mendekati real-time.

### Metrik apa yang paling penting untuk dashboard distribusi retail?
Prioritaskan metrik yang memicu tindakan: *fill rate* (persentase pesanan terpenuhi), *OOS rate* (kehabisan stok), *sell-through rate*, DSI, dan ROI promo/*trade spend*. Metrik ini langsung menghubungkan ke keputusan replenishment, alokasi stok antar wilayah, dan efektivitas promosi. Hindari *vanity metrics* seperti total kunjungan dashboard atau jumlah laporan yang dibuat—angka yang terlihat sibuk tetapi tidak mengubah keputusan operasional.

## Data tables for the writer

### Tabel use case → metrik → keputusan (H2 #2)
| Use case BI | Metrik utama | Keputusan yang dipicu | Tech pendukung |
|---|---|---|---|
| Demand forecasting per wilayah | Forecast accuracy, MAPE, tren sell-out | Alokasi stok & rencana produksi/PO per wilayah | SAC Smart Predict (time series) |
| Optimasi inventaris & cegah OOS/overstock | OOS rate (benchmark ~8,3%), DSI, fill rate | Replenishment & transfer stok antar gudang wilayah | SAC dashboard + data ERP |
| Sell-in vs sell-out | Rasio sell-in:sell-out, stok di channel | Deteksi penumpukan channel; setel target sell-in | SAC + data DMS/ERP |
| Efektivitas promo & trade spend | ROI promo, uplift volume, margin | Lanjutkan/hentikan/ubah mekanik promo | SAC planning + BI |
| Market basket & mix produk | Lift, support, confidence (aturan asosiasi) | Bundling, cross-sell, planogram per outlet | Market basket analysis |

### Tabel metrik aksi vs vanity (H2 #3)
| Metrik aksi (wajib) | Kenapa penting | Metrik vanity (hati-hati) |
|---|---|---|
| Fill rate | Ukur keandalan pemenuhan pesanan | Jumlah dashboard dibuat |
| OOS rate | Deteksi kehilangan penjualan (rujuk ~8,3% global) | Total login ke tool BI |
| Sell-through rate | Ukur kecepatan barang terjual di outlet | Jumlah baris data diproses |
| DSI | Ukur efisiensi modal kerja di stok | "Total revenue" tanpa segmentasi |
| ROI promo / trade spend | Justifikasi anggaran promo | Jumlah laporan diunduh |

### Tabel sumber data BI distribusi (H2 #4)
| Sumber data | Isi | Kecepatan realistis | Peran |
|---|---|---|---|
| ERP (S/4HANA / SAP Business One) | Transaksi, PO, invoice, master data | Real-time / mendekati | Sumber kebenaran transaksi |
| DMS / aplikasi salesforce lapangan | Order & kunjungan outlet | Batch harian umumnya | Data sell-out & distribusi |
| POS (modern trade) | Penjualan konsumen akhir | Mendekati real-time | Sinyal sell-out akurat |
| Data warehouse (SAP Datasphere/BW/4HANA) | Konsolidasi lintas sumber | Terjadwal / virtual | Single source of truth untuk BI |

## Edge cases & nuance

- **"Real-time" sering dibesar-besarkan.** Untuk distribusi FMCG Indonesia dengan mayoritas traditional trade (~69%), banyak data sell-out masih batch harian karena bergantung input tenaga lapangan/DMS. Frasakan honest: real-time itu bergantung arsitektur & sumber, bukan default.
- **Forecast bagus butuh data bersih.** ~72% OOS berakar di praktik ordering di dalam toko (Gruen/Corsten) — bukan sesuatu yang bisa diselesaikan model prediktif jika input dan master data buruk. Ini inti H2 #5.
- **SAC punya versi embedded yang terbatas.** Versi embedded SAP Analytics Cloud (di dalam S/4HANA) hanya mendukung story creation, TIDAK termasuk planning/predictive. Fitur Smart Predict penuh ada di SAC enterprise/full. Jangan menyiratkan semua kapabilitas tersedia di setiap edisi.
- **Angka pasar FMCG bervariasi antar sumber.** ">USD 100 miliar" adalah agregat estimasi analis/panel (Statista/Kantar), bukan angka BPS resmi. Sajikan sebagai estimasi dengan atribusi, bukan fakta pasti.
- **Smart Predict ≠ AI generatif.** Smart Predict = automated machine learning (klasifikasi/regresi/time series). Joule adalah lapisan generative-AI terpisah. Jangan mencampuradukkan keduanya.

## Flags (open factual risk)

- ⚠️ **KOREKSI brief — ukuran pasar FMCG Indonesia**: brief menyebut ">USD 50 miliar (Statista — verifikasi)". Verifikasi menunjukkan angka yang lebih umum dikutip adalah **>USD 100 miliar** (Statista/Kantar). → rekomendasi: gunakan ">USD 100 miliar" dengan atribusi ke Statista/Kantar; JANGAN pakai USD 50 miliar. Frasakan sebagai estimasi.
- ⚠️ **Angka "kerugian hingga 4% pendapatan akibat OOS"**: turunan interpretatif dari studi Corsten-Gruen, bukan angka langsung dari studi asli 2002. → rekomendasi: frasakan "hingga sekitar 4%" dengan atribusi, atau cukup pakai angka OOS 8,3% yang lebih kokoh.
- ⚠️ **Angka distorsi inventaris USD 1,77 triliun (2023)**: bersumber IHL Group, sering dikutip second-hand. → rekomendasi: atribusikan ke IHL Group dan frasakan sebagai estimasi industri, atau omit jika ragu.
- ⚠️ **IPR bulanan Bank Indonesia adalah prakiraan (diprakirakan), bukan realisasi final**: angka seperti "5,8% Sept 2025" adalah prakiraan SPE. → rekomendasi: pakai untuk arah tren ("penjualan eceran tumbuh sepanjang 2025"), atribusikan ke BI-SPE, hindari menyajikan sebagai angka final tunggal.
- ⚠️ **Pedoman rasio 5:1 (historis:forecast) Smart Predict**: pedoman praktik yang beredar di dokumentasi/komunitas SAP, bukan batas keras yang dipublikasikan sebagai aturan resmi. → rekomendasi: frasakan "sebagai pedoman umum, SAP menyarankan..." — jangan sajikan sebagai spesifikasi mutlak.

## Definition snippet draft (48 words)

> **Business Intelligence untuk retail dan distribusi FMCG** adalah pemanfaatan data penjualan, inventaris, dan pergerakan produk—dari ERP hingga outlet—menjadi dashboard dan analitik yang memandu keputusan distribusi. Dengan BI, distributor memantau sell-out, mencegah *out-of-stock* dan *overstock*, serta meramalkan permintaan per wilayah secara berbasis data, bukan intuisi.
