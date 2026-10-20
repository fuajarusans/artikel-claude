---
brief_id: "cara-clean-core-c01"
researcher_run_date: "2026-09-01"
batch: "conditional-2026-09"
sources_cited: 4
flags: 5
verified_claims: 11
---

# Research Dossier: Cara Menerapkan SAP Clean Core — Langkah Praktis untuk Migrasi

## TL;DR for the writer (batch conditional — dossier ringkas)

- **Model extensibility A–D SAP kini resmi** (SAP News Center, Agustus 2025) dan **menggantikan model tiga-tier lama**. Level A/B = direkomendasikan; C = untuk skenario legacy; D = tidak clean, risiko tertinggi. Ini fakta paling kuat & paling fresh — jangkar H2 #3.
- **Nama tool audit resmi terverifikasi**: SAP Readiness Check, Custom Code Migration app (di SAP BTP ABAP environment), ABAP Test Cockpit (ATC). ATC = pemeriksa kepatuhan clean core object-by-object. Jangan mengarang transaksi/UI.
- **Angka ~60% harus di-hedge jadi rentang 40–60%** (sumber vendor/industri, BUKAN SAP resmi). Custom Code Migration app hanya mengklasifikasi *used/unused* berbasis data pemakaian + hapus yang unused via deletion transport — itu output resminya. "retire/rewrite/migrate/retain" = taksonomi keputusan praktis (industri), bukan label output app.
- **Durasi ~3–4 minggu & 6–18 bulan TIDAK ada sumber SAP resmi** → wajib di-hedge ("umumnya beberapa minggu", "beberapa bulan hingga lebih dari setahun, tergantung kompleksitas") atau kualitatif.
- **ECC/Business Suite 7: mainstream berakhir 31 Des 2027, extended sampai 31 Des 2030** (surcharge 2% poin, tersedia 2028–2030). Dikonfirmasi. Public Edition = clean core by design (modifikasi inti tak tersedia); Private Edition = classic extensibility masih ada tapi tidak dianjurkan.

---

## Core facts (verified) — 11 klaim terkuat untuk artikel 900 kata

> **Claim 1**: SAP memperkenalkan model "clean core extensibility levels" empat tingkat (A–D) yang menggantikan model tiga-tier lama.
> **Number/specific**: Diumumkan resmi Agustus 2025; SAP "evolved its original three-tier model into the clean core level concept, an enhanced maturity model."
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way" (2025-08), https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — akses 2026-09-01
> **Confidence**: high

> **Claim 2**: Definisi tiap level (kata-kata SAP official).
> **Number/specific**: **Level A (Extend with SAP Build)** — ekstensi paling bersih; hanya memakai released API SAP yang stabil (side-by-side di SAP BTP atau on-stack ABAP Cloud). **Level B (Leverage Classic APIs)** — memenuhi kriteria A plus memakai classic API/teknologi resmi SAP yang terdokumentasi & umumnya upgrade-stable. **Level C (Accesses Internal Objects)** — sebagian patuh; mengakses objek internal SAP, fleksibel untuk skenario legacy. **Level D (Not Recommended)** — tidak dianggap "clean"; memakai objek/teknik non-recommended (modifikasi, write access ke tabel SAP). "Level D represents the highest risk and creates significant technical debt."
> **Source**: SAP News Center (2025-08), URL di atas
> **Confidence**: high

> **Claim 3**: Aturan rekomendasi antar-level.
> **Number/specific**: Hanya Level A dan B yang tergolong direkomendasikan; C untuk fleksibilitas skenario legacy; D risiko tertinggi/utang teknis. (Praktik tata kelola: ATC memblokir/menandai pola Level D object-by-object.)
> **Source**: SAP News Center (2025-08) + SAP Community "ATC recommendations for governance of clean core ABAP development", https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130
> **Confidence**: high

> **Claim 4**: Dua pendekatan penempatan ekstensi upgrade-safe.
> **Number/specific**: **Side-by-side extensibility di SAP BTP** (aplikasi ter-decouple dari inti) dan **on-stack extensibility dengan ABAP Cloud** (terintegrasi erat di dalam stack). Keduanya memakai **released API/object** yang punya stability contract agar aman saat upgrade. In-app/key-user extensibility = penyesuaian ringan (custom field, logika sederhana, adaptasi Fiori) yang tetap di dalam sistem.
> **Source**: SAP News Center (2025-08), URL di atas
> **Confidence**: high (in-app/key-user sbg kategori terpisah = deskripsi umum SAP, bukan dari artikel news ini — aman sebagai konsep standar)

> **Claim 5**: SAP Readiness Check — alat analisis kesiapan konversi.
> **Number/specific**: Menganalisis sistem sumber (ECC/Business Suite) dan memetakan item relevan S/4HANA termasuk dampak simplification & custom code sebelum konversi. Nama resmi.
> **Source**: SAP help.sap.com, "Custom Code Migration Guide for SAP S/4HANA" (2025/2026), https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf
> **Confidence**: high

> **Claim 6**: SAP Custom Code Migration app — scoping & analisis custom code.
> **Number/specific**: Aplikasi untuk men-scope & menganalisis custom code yang perlu dimigrasikan dari SAP Business Suite ke S/4HANA; **mengidentifikasi custom code tak-terpakai berdasarkan data pemakaian**; unused code dapat dihapus via *deletion transport request* saat konversi. Berjalan di SAP BTP ABAP environment dan dapat menyisipkan check ATC (varian clean core readiness).
> **Source**: SAP help.sap.com Custom Code Migration Guide (URL di atas) + SAP-samples GitHub `abap-platform-ccm-workshops`
> **Confidence**: high

> **Claim 7**: ABAP Test Cockpit (ATC) — quality gate clean core.
> **Number/specific**: Menyediakan pemeriksaan kualitas & unit test terintegrasi untuk memvalidasi custom code sebelum/selama transisi S/4HANA dan menegakkan standar clean core; menandai kesiapan objek satu per satu (object-by-object) dan dipakai untuk governance pola Level D.
> **Source**: SAP Community "ATC recommendations for governance of clean core ABAP development" (URL Claim 3)
> **Confidence**: high

> **Claim 8**: Sebagian besar custom code lama tidak terpakai — peluang decommission.
> **Number/specific**: Temuan industri: **sekitar 40–60% custom code legacy tidak terpakai** dan bisa didekomisi saat migrasi (satu sumber menyebut hingga ~50% obsolet tapi tetap dipelihara). BUKAN angka SAP resmi — label sebagai temuan tipikal.
> **Source**: smartShift, "Five reasons why removing unused SAP code matters" / "De-Risking SAP S/4HANA", https://smartshift.com/blog/removing-unused-code-matters
> **Confidence**: medium (vendor/industri, bukan SAP official — HEDGE wajib; lihat Flags)

> **Claim 9**: SAP ECC / Business Suite 7 — akhir maintenance.
> **Number/specific**: Mainstream maintenance berakhir **31 Desember 2027**; extended maintenance opsional (surcharge **2 poin persen**) tersedia **2028 hingga 31 Desember 2030**. (Catatan: berlaku untuk ECC 6 EHP 6–8; EHP 0–5 sudah berakhir 2025.) SAP menyatakan tanggal ini tidak bergeser.
> **Source**: SAP Support, "Maintenance strategy / Business Suite 7", https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html
> **Confidence**: high

> **Claim 10**: Public vs Private Edition & modifikasi inti.
> **Number/specific**: **S/4HANA Cloud Public Edition = clean core by design** — update otomatis ke semua tenant; classic/core-modification extensibility tidak tersedia (clean core praktis wajib). **Private Edition** — update terjadwal sendiri; classic extensibility model masih tersedia tetapi SAP tidak menganjurkannya (rekomendasi tetap clean core lewat ABAP Cloud & BTP).
> **Source**: SAP S/4HANA extensibility assets (sap.com) + SAP Community "10 Steps to Clean Core for SAP S/4HANA Cloud Private Edition", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/10-steps-to-clean-core-for-sap-s-4hana-cloud-private-edition-for-customers/ba-p/13713571
> **Confidence**: high

> **Claim 11**: fit-to-standard sebagai baseline sebelum kustomisasi.
> **Number/specific**: Prinsip clean core mengutamakan adopsi proses standar SAP lebih dulu; kustomisasi hanya untuk gap yang benar-benar diperlukan dan ditempatkan sebagai ekstensi upgrade-safe di luar inti. Dimensi clean core: proses, ekstensi, integrasi, data, dan operasi ("stay current").
> **Source**: SAP News Center (2025-08) + SAP-PRESS blog "SAP S/4HANA Clean Core: Principles, Benefits, and Best Practices", https://blog.sap-press.com/sap-s4hana-clean-core-principles-benefits-and-best-practices
> **Confidence**: high (dimensi = konsep standar SAP; jangan bangun scorecard 5-dimensi milik sibling `-03`)

---

## Solution focus + Soltius anchor (from product_matrix.md — baris SAP Clean Core)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| SAP Clean Core + fit-to-standard | Inti S/4HANA standar & upgrade-safe; kustomisasi dipindah ke luar inti; 5 dimensi (proses/ekstensi/integrasi/data/operasi) | Definition snippet + H2 #1 | — (vendor-neutral di body) |
| SAP Readiness Check + Custom Code Migration app + ATC | Nama & fungsi resmi (Claim 5–7); scoping used/unused; ATC quality gate | H2 #2 (langkah audit) | Migration + Enhancement service (Kesimpulan saja) |
| In-app vs side-by-side + ABAP Cloud + levels A–D | Definisi A–D (Claim 2–4); released API; ganti 3-tier Agustus 2025 | H2 #3 | — |
| Public vs Private Edition; ECC 2027/2030 | Claim 9–10; framing hati-hati | H2 #4 (honest) | — |

Reminder framing: Soltius **implements/migrates/supports** — bukan pembuat SAP. Maks 2 self-mention (positioning line di Kesimpulan + soft CTA baris terakhir). Positioning line yang disetujui: SAP Platinum Partner via United VARs, sejak 1998, Metrodata Group, + AMS pasca go-live.

---

## Authoritative external sources (final 1–2 inline — pilih #1 wajib, #2 opsional)

1. **SAP News Center (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: clean core extensibility levels A–D, penggantian model 3-tier, side-by-side vs on-stack ABAP Cloud, released API. **Sitasi UTAMA — tempatkan di H2 #3.** (Alternatif setara: SAP Community "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud (August 2025 Update)", https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399)
2. **SAP help.sap.com — Custom Code Migration Guide for SAP S/4HANA** — https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf — *what it backs*: tool audit (Readiness Check, Custom Code Migration app), scoping used/unused, deletion transport. **Tempatkan di H2 #2.**
3. (Konteks, opsional) **SAP Support — Maintenance strategy Business Suite 7** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *backs*: ECC 2027/extended 2030.

Total tautan eksternal inline final: **1–2 cukup** (addendum). Prioritas #1 (levels A–D) + #2 (tool audit).

---

## Structured element (SATU saja — tabel tahapan, tulang punggung H2 #1)

> Rancang tiap baris agar quotable per-baris untuk AI Overview. Tool = nama resmi terverifikasi (Claim 5–7). JANGAN tambah tabel kedua (batas 1000 kata).

| Langkah | Fokus | Tool / Output SAP (resmi) |
|---|---|---|
| 1. Fit-to-standard | Adopsi proses standar SAP dulu; kustomisasi hanya untuk gap nyata | Workshop fit-to-standard / SAP Best Practices |
| 2. Audit custom code | Inventaris & scoping objek Z; pisahkan terpakai vs tak terpakai | SAP Readiness Check → SAP Custom Code Migration app → ABAP Test Cockpit (ATC) |
| 3. Tetapkan target | Sasaran per dimensi clean core (proses, ekstensi, integrasi, data, operasi) | Target level per dimensi (baseline terukur) |
| 4. Pilih model ekstensi | In-app (key-user) vs side-by-side (SAP BTP) vs on-stack ABAP Cloud | Ekstensi upgrade-safe via released API — utamakan level A/B |
| 5. Tata kelola | Cegah kustomisasi "kotor" baru setelah go-live | ATC + extensibility guideline (blok pola Level D) |

Kalimat penegas setelah tabel (arah, jangan definisi ulang): urutan ini bukan sekali-jalan — audit dijalankan sebelum cutover, tata kelola berlanjut setelah go-live.

**Sisipan aturan keputusan A–D untuk H2 #3 (prosa/list singkat, BUKAN tabel kedua):**
- **Level A** — paling bersih: released API SAP, on-stack ABAP Cloud atau side-by-side di SAP BTP/SAP Build.
- **Level B** — ABAP klasik memakai classic API/framework resmi SAP (terdokumentasi, umumnya upgrade-stable).
- **Level C** — mengakses objek internal SAP; sebagian patuh, fleksibel untuk skenario legacy.
- **Level D** — bukan clean core (modifikasi/objek non-recommended); risiko & utang teknis tertinggi.
- Aturan praktis: **utamakan A/B, pakai C hanya bila perlu, hindari/blok D lewat ATC.**

---

## FAQ Q&As (2–3 draf, Bahasa Indonesia — jawaban 30–60 kata, tiap jawaban 1 fakta)

### Apakah semua kustomisasi harus dihapus untuk menerapkan clean core?
Tidak. Clean core bertahap, bukan syarat 100% sebelum cutover. Audit industri sering menemukan sekitar 40–60% custom code legacy tak terpakai dan bisa didekomisi; sisanya yang sah dipindahkan ke ekstensi upgrade-safe di SAP BTP atau ABAP Cloud, bukan dibuang. *(≈45 kata; fakta: 40–60% — HEDGE sebagai temuan industri.)*

### Tool apa yang dipakai untuk menilai custom code sebelum migrasi?
SAP menyediakan tiga alat berurutan: SAP Readiness Check memetakan dampak simplification dan objek terpengaruh, SAP Custom Code Migration app men-scope objek terpakai vs tak terpakai dari data pemakaian, dan ABAP Test Cockpit (ATC) memeriksa kepatuhan clean core objek per objek. *(≈42 kata; fakta: 3 tool resmi.)*

### Apakah clean core wajib untuk semua deployment SAP?
Untuk SAP S/4HANA Cloud Public Edition, ya secara praktis — update otomatis dan modifikasi inti tidak tersedia (clean core by design). Untuk Private Edition dan on-premise lebih fleksibel: classic extensibility masih ada, tetapi SAP menganjurkan clean core lewat ABAP Cloud dan SAP BTP. *(≈46 kata; fakta: Public = clean core by design.)*

> Catatan writer: pilih **2–3** ini (bukan 5). Q&A pertama & kedua paling kuat (langsung dari PAA brief). Jangan menyalin jawaban ini bulat-bulat ke body H2 (anti-repetisi) — variasikan.

---

## Definition snippet draft (40–60 kata — SATU-SATUNYA definisi di artikel)

> **Ringkasnya:** SAP Clean Core adalah prinsip menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi keluar dari inti, umumnya ke SAP Business Technology Platform (BTP) atau ABAP Cloud. Menerapkannya saat migrasi berarti mengaudit kode kustom, menetapkan target per dimensi, memilih model ekstensi yang aman-upgrade, lalu menjaganya lewat tata kelola.

*(52 kata; entity utama SAP Clean Core jelas; tanpa em-dash; body/H2 DILARANG mengulang ini dengan kata lain.)*

---

## Edge cases & nuance (untuk honest hedge H2 #4)

- Clean core adalah spektrum, bukan tombol on/off — Level C legitim untuk skenario legacy sementara; targetnya A/B, bukan kesempurnaan sebelum cutover.
- "60% tak terpakai" bukan hukum alam: angka riil bergantung usia sistem & disiplin housekeeping; sebagian sistem jauh lebih bersih. Sajikan sebagai rentang, bukan janji.
- Private Edition "boleh" modifikasi ≠ "sebaiknya" — kelonggaran teknis bukan rekomendasi. Framing hati-hati agar tak salah baca.
- Di lapangan, proyek yang tersendat umumnya tersendat di langkah audit yang ditunda, bukan di teknologi ekstensinya (suara praktisi tanpa nama Soltius — diizinkan).

---

## Flags (open factual risk — writer WAJIB hindari/hedge)

- ⚠️ **Angka "~60% custom code tak terpakai"**: sumber = vendor/industri (smartShift), rentang sebenarnya **40–60%**, BUKAN angka SAP resmi. → Tulis "umumnya sekitar 40–60%" atau "kerap mendekati separuh"; JANGAN sajikan 60% sebagai angka pasti/absolut.
- ⚠️ **Durasi "~3–4 minggu" penilaian custom code**: TIDAK ditemukan sumber SAP resmi. → Hedge: "umumnya beberapa minggu" tanpa angka keras, atau beri kualifikasi "tergantung jumlah objek".
- ⚠️ **Durasi "6–18 bulan" transformasi RISE Private**: TIDAK ada sumber SAP resmi terverifikasi. → Hedge kualitatif ("beberapa bulan hingga lebih dari setahun, tergantung kompleksitas lanskap") atau OMIT bila ragu. Jangan sajikan sebagai janji.
- ⚠️ **Empat kategori "retire / rewrite di BTP / migrate ke ABAP Cloud / retain"**: ini **taksonomi keputusan praktis (industri)**, BUKAN label output resmi Custom Code Migration app. Output resmi app = klasifikasi *used/unused* + rekomendasi remediasi + hapus unused via deletion transport. → Sajikan 4 kategori sebagai "kategori keputusan praktis", jangan klaim itu label bawaan app SAP. (Boundary dedup: jangan reproduksi tabel Keep/Eliminate/Rebuild milik sibling `-02`.)
- ⚠️ **Klaim penghematan AMS "25–35%"**: DILARANG total (blog pihak ketiga tak terverifikasi SAP). Jangan tulis.

**Catatan verifikasi tanggal**: model A–D & tanggal ECC dikonfirmasi ke sumber SAP official per 2026-09-01. `dateModified` di meta block harus akurat (model A–D baru Agustus 2025 — freshness penting untuk GEO).

---

## Boundary reminder (dedup — tegas)

- Remediasi = **satu langkah** + tool + kategori keputusan singkat; TANPA tabel Keep/Eliminate/Rebuild penuh (`-02`).
- Extensibility = **aturan keputusan + levels A–D**; TANPA deep-dive SAP Build/Integration Suite (`-04`).
- Scorecard = **output langkah "tetapkan target"**; TANPA kerangka 5-dimensi bertingkat (`-03`).
- Governance = **1–2 kalimat "stay clean"**; TANPA deep-dive pasca go-live (monthly 2026-07).
- Internal link TEPAT 2: hub `sap-clean-core-the-complete-guide` (lead) + cousin `migrasi-erp-ke-cloud` (konteks migrasi). Keduanya diverifikasi live di brief 2026-08-31.
