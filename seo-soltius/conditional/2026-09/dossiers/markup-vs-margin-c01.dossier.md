---
brief_id: "markup-vs-margin-c01"
researcher_run_date: "2026-09-01"
sources_cited: 2
flags: 4
batch: "conditional-2026-09 (RINGKAS — target artikel ~900 kata, 4 H2 ramping; style_addendum.md WAJIB)"
verification_priority: "#1 konsistensi tiap angka + URL SAP — SEMUA lolos (lihat bawah)"
---

# Research Dossier: Markup vs Margin — Perbedaan dan Cara Menghitung Harga Jual

## TL;DR untuk writer
- Semua angka brief **terverifikasi benar** (dihitung ulang, bukan disalin): contoh inti (HPP 80.000 → harga jual 120.000 → margin 33,3%) dan **tiap baris tabel konversi** (Markup 20/25/50/100/150% → Margin 16,7/20/33,3/50/60%) konsisten dengan rumus Margin = Markup ÷ (1 + Markup). Aman dipakai apa adanya.
- Dua sitasi anchor **hidup (200 OK) dengan kutipan pendukung persis**: SAP Learning "Executing Retail Pricing" (markup→margin dihitung otomatis) dan Shopify "Markup vs. Margin" (beda basis + markup% ≠ margin%). Pakai SAP di H2 #4, Shopify di H2 #1 atau #2.
- **Internal link — PERUBAHAN penting:** cousin sibling `blog/laporan-laba-rugi-komponen-jenis-cara-membaca` mengembalikan **HTTP 500** run ini (belum live/error) → **pakai FALLBACK** `blog/macam-macam-laporan-keuangan-dan-pengertiannya` (200 OK, memuat laporan laba rugi + laba kotor/operasi/bersih). Hub `id/solutions-by-products/retail-produk` **200 OK**. Pasang TEPAT 2.
- Definisi hanya SEKALI (snippet di bawah). Body dilarang mengulanginya. HPP hanya *input* ke rumus — jangan bedah cara menghitung HPP (milik `cara-menghitung-hpp-c01`); jangan ulang struktur/komponen laporan laba rugi (milik `laporan-laba-rugi-c01`).

## Definition snippet draft (40–60 kata) — SATU-SATUNYA definisi di artikel
> Ringkasnya: markup dan margin sama-sama mengukur selisih antara harga jual dan harga pokok (HPP), tetapi berbeda basis hitung. Markup adalah persentase kenaikan yang dihitung terhadap biaya, dipakai untuk menetapkan harga jual. Margin adalah persentase laba yang dihitung terhadap harga jual, dipakai untuk mengukur profitabilitas. Untuk transaksi yang sama, persentase markup selalu lebih besar daripada margin.

*(55 kata. Entity-clear, extractable untuk AI Overview. Writer boleh poles tapi jaga 40–60 kata dan JANGAN nyatakan ulang isinya di body/jawaban langsung H2.)*

## Core facts (verified) — angka & rumus

> **Claim**: Markup dihitung atas biaya (HPP); margin dihitung atas harga jual — laba rupiahnya sama, penyebutnya beda.
> **Rumus (citation-ready, 1 baris masing-masing)**:
> - Markup (%) = (Harga Jual − HPP) ÷ HPP × 100%
> - Margin (%) = (Harga Jual − HPP) ÷ Harga Jual × 100%
> - Harga Jual = HPP + (HPP × Markup%)
> **Source**: Shopify "Markup vs. Margin" (beda basis) + kebenaran matematis (dihitung ulang researcher).
> **Confidence**: high

> **Claim**: Contoh inti konsisten baris-per-baris.
> **Number/specific**: HPP Rp80.000; markup 50% → laba Rp40.000 (80.000 × 0,50); harga jual Rp120.000 (80.000 + 40.000); margin = 40.000 ÷ 120.000 = 33,3%. Laba rupiah sama (Rp40.000), persentase beda (markup 50% vs margin 33,3%).
> **Source**: dihitung ulang researcher — BENAR.
> **Confidence**: high

> **Claim**: Rumus konversi dua arah benar.
> **Number/specific**: Margin = Markup ÷ (1 + Markup); Markup = Margin ÷ (1 − Margin). Cek: markup 0,50 → 0,50 ÷ 1,50 = 33,3%; margin 0,25 → 0,25 ÷ 0,75 = 33,3%.
> **Source**: standar matematis, dihitung ulang.
> **Confidence**: high

> **Claim**: Tabel konversi — TIAP baris diverifikasi (Margin = Markup ÷ (1 + Markup)).
> **Number/specific**: 20% → 16,7% (0,20/1,20=0,1667) · 25% → 20% (0,25/1,25=0,20) · 50% → 33,3% (0,50/1,50=0,3333) · 100% → 50% (1,00/2,00=0,50) · 150% → 60% (1,50/2,50=0,60).
> **Source**: dihitung ulang researcher — SEMUA BENAR.
> **Confidence**: high

> **Claim**: Biaya kesalahan menyamakan keduanya = 16,7 poin persentase.
> **Number/specific**: mengira markup 50% = margin 50% → melebih-lebihkan laba 50 − 33,3 = 16,7 poin persentase.
> **Source**: turunan dari contoh inti — BENAR.
> **Confidence**: high

> **Claim**: Verifikasi silang independen mekanisme markup% > margin% (contoh non-brief, JANGAN dipakai sebagai contoh artikel — cukup sebagai bukti mekanisme).
> **Number/specific**: Shopify — barang biaya $50, harga jual $80: markup 60% ((80−50)/50) tetapi margin 37,5% (30/80). Penyebut lebih besar → % lebih kecil.
> **Source**: Shopify "Markup vs. Margin", 200 OK run ini.
> **Confidence**: high

> **Claim**: SAP S/4HANA Retail menghitung harga jual dari harga beli + markup yang ditentukan, dan menghitung margin kotor & bersih otomatis.
> **Number/specific**: kutipan resmi — *"the calculation of the sales prices is usually based on purchase prices and predefined markups"*; *"The system will then automatically calculate various pricing key figures, such as the gross and net margin."*
> **Source**: SAP Learning "Executing Retail Pricing", 200 OK run ini (kutipan diverifikasi ulang hari ini).
> **Confidence**: high

## Structured element (deliverable c) — Rumus + Contoh + Tabel

### Tabel contoh perhitungan (H2 #1) — writer refine
| Komponen | Nilai |
|---|---|
| HPP (harga pokok) | Rp80.000 |
| Markup | 50% → Rp40.000 |
| Harga jual | Rp120.000 |
| Laba kotor | Rp40.000 |
| Margin | 33,3% |

*(Label wajib: "ilustrasi". Poin tegas: laba rupiah sama Rp40.000, persentase beda — markup 50% vs margin 33,3%.)*

### Tabel konversi markup↔margin (H2 #2) — extractable AI Overview
| Markup | Margin |
|---|---|
| 20% | 16,7% |
| 25% | 20% |
| 50% | 33,3% |
| 100% | 50% |
| 150% | 60% |

*(Rumus: Margin = Markup ÷ (1 + Markup). Tiap baris diverifikasi researcher.)*

## Solution focus + Soltius anchor
| What to teach (SAP tech) | Facts to state accurately | Where in article | Soltius anchor CTA |
|---|---|---|---|
| SAP S/4HANA Retail — penetapan harga | Harga jual dari harga beli + markup yang ditentukan; sistem hitung margin kotor & bersih otomatis (SAP Learning). Sebut UMUM — jangan sebut condition type/transaksi/versi. | H2 #4 (1–2 kalimat, TANPA nama Soltius) | Kesimpulan: 1 positioning line — SAP Platinum Partner via United VARs, sejak 1998; implements/supports solusi ritel SAP, penataan logika harga agar margin konsisten & auditable. |

Reminder: Soltius **mengimplementasikan/mendampingi** — bukan membuat. Maks 2 self-mention total (1 Kesimpulan + 1 CTA baris terakhir). Anchor funnel: SAP S/4HANA Retail.

## Authoritative external sources (2 — keduanya 200 OK run ini)
1. **SAP Learning — "Executing Retail Pricing" (Discovering Retail Functions and Business Processes in SAP S/4HANA Retail)** — `https://learning.sap.com/courses/discovering-retail-functions-and-business-processes-in-sap-s-4hana-retail/executing-retail-pricing_efff67d1-e5c9-4dc6-b71e-8653bf8f0580` — *what it backs*: harga jual berbasis harga beli + predefined markups; sistem hitung gross & net margin otomatis. **Sitasi anchor — pakai di H2 #4.**
2. **Shopify — "Markup vs. Margin: What's the Difference?"** — `https://www.shopify.com/blog/markup-vs-margin-whats-the-difference` — *what it backs*: markup atas cost, margin atas selling price; transaksi sama → markup% ≠ margin% (contoh rug: markup 60% vs margin 37,5%). **Pakai di H2 #1 atau #2** untuk menegaskan beda basis.

## Internal links (deliverable — pasang TEPAT 2)
| Slot | URL | Status run ini | Anchor |
|---|---|---|---|
| Hub | `https://www.soltius.co.id/id/solutions-by-products/retail-produk` | ✅ 200 OK | "solusi retail" / "solusi ritel" (tanpa sebut nama produk pihak ketiga iVend) |
| Cousin — **GUNAKAN INI** | `https://www.soltius.co.id/id/blog/macam-macam-laporan-keuangan-dan-pengertiannya` | ✅ 200 OK (memuat laporan laba rugi + laba kotor/operasi/bersih) | "laporan laba rugi" |
| Cousin — sibling (JANGAN pakai) | `https://www.soltius.co.id/id/blog/laporan-laba-rugi-komponen-jenis-cara-membaca` | ❌ **HTTP 500** (belum live/error) | — |

Tempatkan cousin alami di H2 #3 (margin = angka profitabilitas yang dilaporkan/dibandingkan di laporan laba rugi). TANPA "BACA JUGA". Jangan pasang dua-duanya untuk slot cousin.

## FAQ Q&As (2–3 — jawaban 30–60 kata, tiap jawaban 1 fakta/angka; dari PAA brief)

### Apa perbedaan utama markup dan margin?
Keduanya mengukur selisih harga jual dan harga pokok yang sama dalam rupiah, tetapi markup dihitung terhadap biaya (HPP) dan margin terhadap harga jual. Karena biaya lebih kecil daripada harga jual, persentase markup selalu lebih besar — misalnya markup 50% setara margin 33,3%.

### Bagaimana cara mengubah markup menjadi margin?
Gunakan rumus Margin = Markup ÷ (1 + Markup). Contoh: markup 50% (0,50) → 0,50 ÷ 1,50 = 33,3%. Untuk arah sebaliknya, Markup = Margin ÷ (1 − Margin). Rumus ini menjaga target harga dan target laba tidak tertukar.

### Sebaiknya bisnis memakai markup atau margin?
Keduanya, untuk tujuan berbeda. Pakai markup untuk menetapkan harga jual dari biaya (cost-plus pricing); pakai margin untuk mengukur dan membandingkan profitabilitas — angka yang muncul di laporan laba rugi. Menyamakan keduanya bisa melebih-lebihkan laba hingga 16,7 poin persentase.

## Flags (open factual risk — writer WAJIB hindari/hedge)
- ⚠️ **Cousin sibling 500** — `blog/laporan-laba-rugi-komponen-jenis-cara-membaca` TIDAK resolve run ini. Recommendation: pakai fallback `blog/macam-macam-laporan-keuangan-dan-pengertiannya` (200 OK). Editor cek ulang saat publish; bila sibling sudah live, boleh diganti — tapi jangan pasang dua-duanya.
- ⚠️ **SAP condition type / nama transaksi / versi** — JANGAN sebut. Kutipan SAP Learning hanya mendukung klaim umum (harga jual dari harga beli + markup; margin dihitung otomatis). Menyebut "pricing condition"/condition type/T-code tanpa sumber = fabrikasi.
- ⚠️ **Benchmark pasar** ("rata-rata markup ritel X%", "margin sehat Y%") — TIDAK ada sumber; jangan mengarang. Contoh angka Rp80.000/120.000 wajib dilabeli *ilustrasi* (buatan, bukan data perusahaan nyata).
- ⚠️ **Contoh Shopify ($50/$80, markup 60% vs margin 37,5%)** — pakai HANYA sebagai bukti internal mekanisme; JANGAN masukkan ke artikel sebagai contoh (artikel pakai contoh rupiah Rp80.000). Menyalin dua contoh berbeda membingungkan pembaca.

## Boundary dedup (writer wajib patuh)
- JANGAN: komponen/struktur laporan laba rugi (revenue→HPP→laba kotor→operasi→bersih), single vs multiple step, analisis vertikal, akrual vs kas → milik `laporan-laba-rugi-c01`.
- JANGAN: cara menghitung HPP/harga pokok produksi/komponen biaya/WIP → milik `cara-menghitung-hpp-c01`. HPP di sini HANYA input (harga modal) ke rumus.
- JANGAN: BEP/contribution margin, value/dynamic/psychological pricing, target costing mendalam → disisakan untuk artikel lain.
