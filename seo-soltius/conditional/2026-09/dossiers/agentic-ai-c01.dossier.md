---
brief_id: "agentic-ai-c01"
researcher_run_date: "2026-08-31"
batch: "conditional-2026-09 (style_addendum WAJIB — 800–1000 kata, tanpa image, FAQ 2–3, 2 internal link, definisi hanya sekali di snippet)"
sources_cited: 5
flags: 4
---

# Research Dossier: Apa Itu Agentic AI dan Potensinya untuk Otomasi Bisnis

## TL;DR for the writer
- Semua angka Gartner di brief **RE-VERIFIED live 2026-08-31** (via WebSearch + judul PR resmi; gartner.com mem-block WebFetch 403). Pakai maksimal 1–2 sitasi inline di artikel 900 kata; sisanya cadangan FAQ.
- **Koreksi fakta SAP penting**: SAP News menyebut **14** Joule Agents baru di SAP Connect (Okt 2025), **BUKAN 15**. Satu sumber sekunder (thelettertwo.com) salah hitung 15 — abaikan; pakai **14** (SAP-official).
- **Deloitte "~11% di produksi" TIDAK dapat dikonfirmasi** — hapus atau ganti. Angka Deloitte yang terkonfirmasi: **25%** pengguna GenAI diperkirakan men-deploy agen pada 2025 → **50%** pada 2027; hanya **~21% (1 dari 5)** punya model tata kelola agen yang matang. Honest-hedging utama = Gartner **>40% dibatalkan/2027** (verified) — cukup pakai ini.
- Framing "agentic memakai generatif sebagai komponen (LLM = lapisan penalaran)" **terkonfirmasi** lintas sumber netral (Salesforce, Red Hat, Databricks). Spektrum, bukan dikotomi.
- Kedua internal link **live 200/OK** (di-WebFetch hari ini). Hub H1 aktual: *"SAP AI Joule Adoption Roadmap: A 2026 Strategic & Technical Guide for ERP Consultants"*. Cousin H1 aktual: *"Panduan Utama Migrasi ERP ke Cloud: Strategi, RoadMap, & Manfaat"*.

---

## Core facts (verified)

> **Claim**: Gartner memproyeksikan mayoritas aplikasi enterprise akan memuat agen AI tugas-spesifik dalam satu tahun.
> **Number/specific**: **40%** aplikasi enterprise memuat agen AI tugas-spesifik pada akhir **2026**, naik dari **kurang dari 5%** pada 2025 (lonjakan ~8x).
> **Source**: Gartner press release, 2025-08-26 — `https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025` (diakses 2026-08-31 via WebSearch; judul PR terkonfirmasi persis).
> **Confidence**: high

> **Claim**: Sebagian besar proyek agentic AI masih tahap awal dan banyak akan gagal (sisi jujur / honest hedging).
> **Number/specific**: **lebih dari 40%** proyek agentic AI dibatalkan hingga akhir **2027** — penyebab: biaya membengkak, nilai bisnis tidak jelas, kontrol risiko lemah. Basis: poll Gartner Jan 2025 atas **3.412** peserta webinar; analis Anushree Verma.
> **Source**: Gartner press release, 2025-06-25 — `https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027` (diakses 2026-08-31).
> **Confidence**: high

> **Claim**: Adopsi agentic AI menjadi arus utama pada 2028 (poin FAQ + arah tren).
> **Number/specific**: setidaknya **15%** keputusan kerja harian dibuat otonom lewat agentic AI pada **2028** (dari **0%** pada 2024); **33%** aplikasi software enterprise memuat agentic AI pada **2028** (dari **kurang dari 1%** pada 2024).
> **Source**: Gartner (dirilis bersamaan PR 2025-06-25) — dikonfirmasi via WebSearch 2026-08-31 (Gartner Facebook/press + agregator tepercaya). 
> **Confidence**: high

> **Claim**: "Agent washing" — banyak vendor melabel ulang produk lama sebagai agentic (nuansa untuk suara praktisi, opsional).
> **Number/specific**: Gartner memperkirakan hanya **~130** dari ribuan vendor agentic AI yang benar-benar riil.
> **Source**: Gartner press release, 2025-06-25 (sama seperti di atas).
> **Confidence**: high — *pakai hanya jika muat; hemat kata.*

> **Claim**: SAP memperluas Joule dari copilot generatif ke agentic melalui Joule Agents.
> **Number/specific**: **14 Joule Agents baru** diperkenalkan di **SAP Connect (Oktober 2025)**, tertanam lintas proses (keuangan, SDM, pengadaan, rantai pasok).
> **Source**: SAP News, 2025-10 — `https://news.sap.com/2025/10/sap-connect-business-ai-new-joule-agents-embedded-intelligence/` (di-WebFetch 2026-08-31: "14 new Joule Agents at SAP Connect").
> **Confidence**: high

> **Claim**: Definisi resmi SAP — Joule Agents vs Joule Assistants.
> **Number/specific**: **Joule Agents** = agen AI dengan keahlian proses bisnis yang menjalankan/mengotomasi alur kerja lintas fungsi. **Joule Assistants** = asisten AI berbasis peran yang "berpartner" dengan seseorang di perannya dan memanggil Joule Agents yang tepat (mengubah niat menjadi tindakan).
> **Source**: SAP official `https://www.sap.com/products/artificial-intelligence/ai-agents.html` + SAP News 2025-10 (di atas). *sap.com mem-block WebFetch; penamaan & definisi dikonfirmasi via judul/isi SAP News + halaman produk via WebSearch.*
> **Confidence**: high

> **Claim**: Joule dibangun di atas SAP BTP, ditenagai SAP Business AI, dan tertanam lintas portofolio cloud SAP.
> **Number/specific**: Joule = copilot AI SAP yang tertanam lintas portofolio cloud (termasuk **SAP S/4HANA Cloud**, SuccessFactors, Ariba), "grounded in your company's data", dibangun di **SAP Business Technology Platform (BTP)**, bagian dari **SAP Business AI**.
> **Source**: SAP News 2025-10 + halaman produk SAP AI. Joule GA di SAP S/4HANA Cloud sejak ~2024 (SAP News 2024-12).
> **Confidence**: high (framing "lintas portofolio, termasuk S/4HANA Cloud" — JANGAN tulis seolah eksklusif S/4HANA).

> **Claim**: Agentic AI memakai AI generatif (LLM) sebagai komponen — spektrum, bukan dikotomi.
> **Number/specific**: AI generatif = **reaktif** (menghasilkan konten atas prompt); agentic AI = **proaktif** (siklus *pahami → rencanakan → bertindak → periksa* dengan pengawasan minimal). Sistem agentic memakai **large language model (LLM)** sebagai lapisan penalaran / salah satu "tool".
> **Source**: Salesforce, Red Hat, Databricks (definisi vendor-netral) — WebSearch 2026-08-31. Referensi: `https://www.databricks.com/blog/agentic-ai-vs-generative-ai`, `https://www.redhat.com/en/topics/ai/agentic-ai-vs-generative-ai`.
> **Confidence**: high

> **Claim**: Adopsi agen di lapangan masih menanjak; tata kelola tertinggal (opsional, cadangan hedging Deloitte).
> **Number/specific**: Deloitte — **25%** perusahaan pengguna GenAI diperkirakan men-deploy agen AI pada **2025**, tumbuh ke **50%** pada **2027**; hanya **~21% (1 dari 5)** punya model tata kelola agen otonom yang matang (survei *State of AI in the Enterprise 2026*: 3.235 pemimpin, 24 negara, Agu–Sep 2025).
> **Source**: Deloitte — `https://www.deloitte.com/us/en/about/press-room/state-of-ai-report-2026.html` + *Path to agentic transformation*. WebSearch 2026-08-31.
> **Confidence**: medium — *ANGKA 25%→50% & 21% muncul konsisten; angka "~11% di produksi" TIDAK ditemukan (lihat Flags). Jika writer mau 1 angka Deloitte, pakai 25%→50% ATAU 21% tata kelola, JANGAN 11%.*

(Total: 8 klaim inti verified high-confidence + 1 medium — cukup untuk artikel 900 kata; writer pakai 8–12 angka terkuat.)

---

## Structured element #1 — Tabel perbandingan (H2 #1, elemen terstruktur UTAMA)

Terkonfirmasi terhadap framing Salesforce/Red Hat/Databricks. Baris quotable untuk AI-Overview.

| Dimensi | AI generatif | Agentic AI |
|---|---|---|
| Sifat | Reaktif (menunggu prompt) | Proaktif (menetapkan & mengejar tujuan) |
| Output | Konten (draf, ringkasan, kode) | Tindakan + hasil alur kerja |
| Cara kerja | Satu putaran: prompt → jawaban | Loop: pahami → rencanakan → bertindak → periksa |
| Contoh | Menulis draf email penawaran | Meneliti prospek, menyusun draf, menjadwalkan kirim, memperbarui CRM |
| Peran manusia | Memberi prompt tiap langkah | Menetapkan tujuan + guardrail, awasi eksepsi |
| Hubungan | Komponen | Memakai model generatif (LLM) sebagai lapisan penalaran |

*Catatan cara kerja (1–2 kalimat setelah tabel): siklus **pahami → rencanakan → bertindak → periksa**, dengan **tool use** = kemampuan memanggil aplikasi/API/sistem lain. JANGAN mendaftar use case domain di sini (boundary dedup).*

## Structured element #2 — Referensi tren adopsi (untuk angka inline H2 #2 & hedging H2 #3)

Data mentah untuk angka inline; JANGAN paksa jadi tabel kedua di artikel bila melewati 1000 kata (addendum §4 — satu tabel diutamakan). Pakai angkanya inline.

| Periode | Angka bersumber (Gartner) | Makna |
|---|---|---|
| 2025 | <5% aplikasi enterprise punya agen AI tugas-spesifik | baseline |
| akhir 2026 | **40%** aplikasi enterprise memuat agen AI tugas-spesifik | lonjakan ~8x |
| akhir 2027 | **>40%** proyek agentic AI **dibatalkan** | realitas: banyak proyek gagal (biaya/nilai/risiko) |
| 2028 | **15%** keputusan kerja harian otonom (dari 0% 2024); **33%** aplikasi software enterprise memuat agentic (dari <1% 2024) | mainstreaming |

---

## Solution focus + Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

| What to teach (SAP tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| SAP Business AI / SAP Joule → **Joule Agents & Joule Assistants** | 14 Joule Agents baru (SAP Connect Okt 2025); dibangun di SAP BTP; tertanam lintas portofolio cloud SAP termasuk SAP S/4HANA Cloud; Joule Agents = agen keahlian proses; Joule Assistants = asisten berbasis peran yang mengoordinasikan agen | H2 #3 + CTA | **SAP Platinum Partner via United VARs** — mengimplementasikan & mendampingi SAP Business AI (implements/supports, NEVER builds) |

- **1 positioning line (Kesimpulan)**: Soltius — SAP Platinum Partner melalui United VARs — mengimplementasikan dan mendampingi penerapan **SAP Business AI** pada proses bisnis nyata, dari penilaian kesiapan data hingga tata kelola dan dukungan pasca go-live.
- **1 soft website CTA (baris terakhir)**: ajakan konsultasi/kunjungi soltius.co.id; anchor funnel = **SAP Business AI (Joule)**. Primary keyword "agentic AI" muncul di penutup/CTA.
- **TANPA aside Soltius di tengah body.** Suara praktisi boleh tanpa nama Soltius (mis. "di lapangan, proyek agentic yang mandek hampir selalu mandek di kesiapan data dan batas kewenangan agen, bukan di modelnya").

---

## Authoritative external sources (sitasi final 1–2 inline; sisanya cadangan)

1. **Gartner (press release, 2025-08-26)** — `https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025` — *backs*: 40% aplikasi enterprise ber-agen pada 2026 (dari <5% 2025). **Sitasi utama di H2 #2.**
2. **SAP official — Joule Agents & Joule Assistants** — `https://www.sap.com/products/artificial-intelligence/ai-agents.html` (+ SAP News `https://news.sap.com/2025/10/sap-connect-business-ai-new-joule-agents-embedded-intelligence/`) — *backs*: penamaan & definisi Joule Agents/Assistants; 14 agen baru. **Sitasi di H2 #3.**
3. *(cadangan honest hedging)* **Gartner (press release, 2025-06-25)** — `https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027` — *backs*: >40% proyek dibatalkan/2027; 15%/2028.
4. *(cadangan definisi)* **Databricks / Red Hat** — framing agentic vs generatif (LLM sebagai komponen). Netral.

Prioritas sitasi inline: Gartner (2025-08-26) + SAP official. Hedging: Gartner (2025-06-25).

---

## FAQ Q&As (2–3 drafted, Bahasa Indonesia; jawaban 30–60 kata, tiap jawaban 1 fakta)

### Apa perbedaan agentic AI dan AI generatif?
AI generatif bersifat reaktif: menghasilkan konten (teks, kode, gambar) sebagai jawaban atas prompt. Agentic AI bersifat proaktif: merencanakan lalu menjalankan tindakan menuju tujuan dengan pengawasan minimal. Sistem agentic umumnya memakai model generatif (large language model) sebagai lapisan penalaran, sehingga keduanya sebuah spektrum, bukan pilihan terpisah.

### Apakah agentic AI akan menggantikan pekerjaan manusia?
Lebih menggeser daripada mengganti. Gartner memproyeksikan setidaknya 15% keputusan kerja harian berjalan otonom lewat agentic AI pada 2028, naik dari 0% pada 2024. Peran manusia bergeser ke menetapkan tujuan, menyetujui langkah berisiko, dan menangani eksepsi (human-in-the-loop).

### Apa itu SAP Joule Agents?
Joule Agents adalah agen AI dengan keahlian proses bisnis yang menjalankan alur kerja lintas fungsi (keuangan, SDM, pengadaan, rantai pasok) di dalam SAP Business AI. SAP memperkenalkan 14 Joule Agents baru pada SAP Connect Oktober 2025; agen ini dikoordinasikan oleh Joule Assistants berbasis peran, tertanam di portofolio cloud SAP.

*(Writer pilih 2–3; jika ruang mepet, FAQ #3 opsional dibuang lebih dulu.)*

---

## Definition snippet draft (40–60 kata; SATU-SATUNYA definisi — body DILARANG mengulang)

> Ringkasnya: agentic AI adalah sistem kecerdasan buatan yang mampu menetapkan langkah, mengambil keputusan, dan menjalankan tindakan menuju sebuah tujuan dengan pengawasan manusia yang minimal. Berbeda dari AI generatif yang menghasilkan konten sebagai jawaban atas perintah, agentic AI menyelesaikan alur kerja: merencanakan, memanggil sistem lain, dan bertindak, bukan sekadar merespons satu prompt.

*(51 kata; entity utama "agentic AI" jelas; extractable untuk AI-Overview.)*

---

## Edge cases & nuance
- **Spektrum, bukan dikotomi**: jangan tulis "agentic menggantikan generatif". Agentic **memakai** generatif (LLM) sebagai komponen penalaran — ini justru pembeda vs kompetitor SERP Indonesia yang menyajikannya sebagai dua kubu terpisah.
- **Mulai dari SATU alur kerja**: rekomendasi Gartner — kejar agentic hanya di tempat bernilai/ROI jelas; integrasi ke sistem legacy kompleks dan mahal. Selaras honest hedging.
- **Boundary dedup (tegas)**: contoh lintas-fungsi cukup **1 frasa** masing-masing. TANPA use case mendalam keuangan (AP/cash/close — milik `ai-untuk-finance-c01`), TANPA use case mendalam rantai pasok / SAP IBP (milik `ai-supply-chain-c01`).
- **Hub Joule adoption**: rujuk sebagai "langkah berikutnya" — JANGAN mengulang 4 fase teknisnya (Assessment & Infrastructure Readiness; Data Strategy & AI Governance; Implementation Roadmap; Optimization & Up-skilling).

---

## Flags (open factual risk — writer WAJIB hindari/hedge)

- ⚠️ **Deloitte "~11% organisasi menjalankan agen di produksi" / "~14% siap deploy"**: TIDAK dapat dikonfirmasi 2026-08-31. → **Rekomendasi: HAPUS.** Ganti (bila perlu 1 angka non-Gartner) dengan Deloitte terkonfirmasi: **25%** pengguna GenAI men-deploy agen 2025 → **50%** 2027, atau hanya **~21%** punya tata kelola agen matang. Honest hedging cukup pakai Gartner **>40% dibatalkan/2027** (verified) — paling aman.
- ⚠️ **Jumlah Joule Agents**: pakai **14** (SAP News, Okt 2025). Sumber sekunder "15 new AI agents" (thelettertwo.com) SALAH — jangan pakai. Angka partner-blog (**"40+ agen"**, **"2.400 skills"**) **DILARANG** sebagai fakta SAP resmi.
- ⚠️ **Joule Studio timing**: partner-blog "Q1 2026" tidak akurat — SAP News menyebut **GA mulai Desember 2025 (beta)**. → **Rekomendasi: JANGAN sebut Joule Studio** (di luar scope artikel konsep; hemat kata). Jika terpaksa, "GA mulai Desember 2025 (beta)".
- ⚠️ **"tertanam di SAP S/4HANA Cloud"**: benar tetapi JANGAN tulis seolah eksklusif — Joule tertanam **lintas portofolio cloud SAP** (termasuk S/4HANA Cloud, SuccessFactors, Ariba). Frasa aman: "tertanam lintas portofolio cloud SAP, termasuk SAP S/4HANA Cloud".
- ℹ️ Jangan mengarang angka produktivitas ("naik X%") tanpa sumber. Semua angka artikel harus dari daftar verified di atas (Gartner/SAP/Deloitte-terbatas), dengan atribusi + tahun.

---

## Internal links (BATCH OVERRIDE: 2 SAJA — verified live 2026-08-31)
- **Hub (funnel ke CTA)**: `https://www.soltius.co.id/blog/sap-ai-joule-adoption-roadmap-a-2026-strategic-technical-guide-for-erp-consultants` — H1 aktual: "SAP AI Joule Adoption Roadmap: A 2026 Strategic & Technical Guide for ERP Consultants". Anchor natural: "roadmap adopsi SAP Joule". Tempat: H2 #3 saat Joule pertama dibahas. **Live 200/OK.**
- **Cousin (konteks platform)**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — H1 aktual: "Panduan Utama Migrasi ERP ke Cloud: Strategi, RoadMap, & Manfaat". Anchor natural: "migrasi ERP ke cloud" / "SAP S/4HANA Cloud". Tempat: H2 #3 saat menjelaskan "di mana agen ini bekerja". **Live 200/OK.**
- Writer tetap cek 200/OK saat menulis. Total tautan internal TETAP 2.
