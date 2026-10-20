---
brief_id: "saas-paas-iaas-c01"
researcher_run_date: "2026-07-06"
sources_cited: 7
flags: 4
batch_overrides: "conditional-2026-07 — artikel 800–1000 kata; FAQ 2–3; TANPA image placeholder; dossier diringkas per style_addendum.md"
---

# Research Dossier: SaaS vs PaaS vs IaaS: Perbedaan dan Contoh Penerapannya

## TL;DR for the writer

- Ketiga model punya definisi baku yang bisa dikutip: **NIST SP 800-145** (September 2011) mendefinisikan cloud computing dengan **tepat tiga service model** — SaaS, PaaS, IaaS — dibedakan oleh *apa yang dikelola konsumen vs penyedia*. Ini tulang punggung H2 #1 dan definition snippet.
- Tabel siapa-mengelola-apa (centerpiece artikel) sudah diverifikasi terhadap matriks shared-responsibility resmi Microsoft (diperbarui 5 Mei 2026): **data & identitas SELALU tanggung jawab pengguna di ketiga model** — ini nuansa jujur yang tidak ada di artikel pesaing lokal.
- Pemetaan SAP terverifikasi dari sumber SAP resmi: **SAP S/4HANA Cloud Public Edition & SAP SuccessFactors = contoh SaaS; SAP BTP = PaaS; RISE with SAP membundel SaaS + PaaS (BTP) + IaaS hyperscaler dalam satu kontrak**. Sebut RISE 1 kalimat saja (batas dedup vs artikel IaaS 2026-06).
- Satu angka tren untuk FAQ/lead: Gartner memproyeksikan belanja cloud publik end-user global **~USD 850 miliar pada 2026, tumbuh 21,3% YoY** (Forecast 3Q25 Update, Sep 2025) — atribusikan ke Gartner, jangan tulis sebagai angka realisasi.
- Batas dedup KERAS: jangan bahas sertifikasi instance HANA, self-managed vs RISE, atau statistik pasar cloud Indonesia — milik `iaas-untuk-sap-c01` (2026-06).

## Core facts (verified)

> **Claim 1**: SaaS, PaaS, dan IaaS adalah tiga service model dalam definisi baku cloud computing.
> **Number/specific**: NIST SP 800-145 "The NIST Definition of Cloud Computing" (September 2011) — model cloud terdiri dari 5 karakteristik esensial, **3 service model**, dan 4 deployment model.
> **Source**: NIST, https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf (PDF dibaca penuh, 2026-07-06)
> **Confidence**: high

> **Claim 2**: Pada SaaS, pengguna memakai aplikasi milik penyedia dan TIDAK mengelola infrastruktur di bawahnya.
> **Number/specific**: NIST: konsumen "does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities" — kecuali pengaturan konfigurasi aplikasi yang terbatas. Akses via browser/antarmuka program.
> **Source**: NIST SP 800-145, hlm. 2 (URL di Claim 1)
> **Confidence**: high

> **Claim 3**: Pada PaaS, pengguna men-deploy aplikasi buatannya sendiri di platform penyedia, tanpa mengelola server/OS.
> **Number/specific**: NIST: konsumen men-deploy aplikasi "created using programming languages, libraries, services, and tools supported by the provider"; tidak mengelola network/server/OS/storage, tetapi "has control over the deployed applications" + konfigurasi lingkungan hosting.
> **Source**: NIST SP 800-145, hlm. 2–3
> **Confidence**: high

> **Claim 4**: Pada IaaS, pengguna menyewa sumber daya komputasi dasar dan tetap mengelola OS ke atas.
> **Number/specific**: NIST: konsumen memprovisikan "processing, storage, networks, and other fundamental computing resources"; tidak mengelola infrastruktur fisik cloud tetapi "has control over operating systems, storage, and deployed applications" + kontrol terbatas komponen jaringan tertentu (mis. host firewall).
> **Source**: NIST SP 800-145, hlm. 3
> **Confidence**: high

> **Claim 5**: Pembagian tanggung jawab per lapisan (bahan tabel utama) — OS dikelola pengguna hanya di IaaS; lapisan fisik selalu milik penyedia.
> **Number/specific**: Matriks Microsoft (per model): **OS** = pengguna (IaaS) / penyedia (PaaS & SaaS); **aplikasi** = pengguna (IaaS) / berbagi (PaaS & SaaS); **physical hosts/network/datacenter** = penyedia di ketiga model; **data, konfigurasi, identitas & akun pengguna** = pengguna di KETIGA model. Halaman diperbarui 5 Mei 2026.
> **Source**: Microsoft Learn, "Shared responsibility in the cloud", https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility (diakses 2026-07-06)
> **Confidence**: high

> **Claim 6**: Contoh produk per model dari vendor resminya (anti-salah-kategori ala SERP lokal).
> **Number/specific**: Microsoft: **IaaS** = Azure Virtual Machines, Azure Disk Storage; **PaaS** = Azure App Service, Azure Functions, Azure SQL Database; **SaaS** = Microsoft 365, Dynamics 365. AWS: IaaS = "basic building blocks for cloud IT" (jaringan, komputer virtual, storage) dengan "the highest level of flexibility and management control".
> **Source**: Microsoft Learn (URL Claim 5); AWS, "Types of Cloud Computing", https://aws.amazon.com/types-of-cloud-computing/ (diakses 2026-07-06)
> **Confidence**: high

> **Claim 7**: SAP secara resmi memberi contoh SaaS dari portofolionya: SAP S/4HANA Cloud Public Edition dan SAP SuccessFactors.
> **Number/specific**: SAP Learning mendefinisikan SaaS sebagai "complete ready-to-use, cloud-based applications via the internet on a subscription model" dengan contoh S/4HANA Cloud Public Edition & SuccessFactors; IaaS = "rent or lease virtual computing resources, such as infrastructure, processing power, storage, and networking".
> **Source**: SAP Learning, "Differentiating Cloud Service Models", https://learning.sap.com/courses/discovering-fundamental-cloud-concepts/differentiating-cloud-service-models (diakses 2026-07-06)
> **Confidence**: high

> **Claim 8**: SAP memposisikan SAP Business Technology Platform (SAP BTP) sebagai PaaS.
> **Number/specific**: Halaman produk SAP: BTP menyatukan data & analitik, AI, pengembangan aplikasi, otomasi, dan integrasi dalam "fully managed platform as a service (PaaS) offerings".
> **Source**: SAP, https://www.sap.com/products/technology-platform.html (diakses 2026-07-06)
> **Confidence**: high

> **Claim 9**: RISE with SAP membundel ketiga lapisan — SaaS + PaaS + IaaS — dalam satu kontrak.
> **Number/specific**: RISE mencakup SaaS (SAP S/4HANA Cloud Private Edition), PaaS (SAP BTP), dan IaaS dari hyperscaler (Microsoft Azure, AWS, Google Cloud); SAP bertindak sebagai kontraktor utama satu kontrak. **Batas dedup: sebut maksimal 1 kalimat.**
> **Source**: SAP PRESS, "What Is RISE with SAP?", https://blog.sap-press.com/what-is-rise-with-sap; TechTarget, "Rise with SAP vs. S/4HANA Cloud", https://www.techtarget.com/searchsap/answer/Rise-with-SAP-vs-S-4HANA-Cloud-What-are-the-differences (diakses 2026-07-06)
> **Confidence**: high

> **Claim 10**: Belanja cloud publik global terus tumbuh dua digit — angka tren untuk FAQ #1.
> **Number/specific**: Gartner memproyeksikan belanja cloud publik end-user dunia **~USD 850 miliar pada 2026 (+21,3% YoY)**, didorong permintaan integrasi AI; pasar diproyeksikan mencapai USD 1,48 triliun pada 2029. (Pembanding rilis resmi sebelumnya: USD 723,4 miliar untuk 2025, press release 19 Nov 2024.)
> **Source**: Gartner, "Forecast: Public Cloud Services, Worldwide, 2023-2029, 3Q25 Update" (Sep 2025), https://www.gartner.com/en/documents/6996966 ; rilis 2025: https://www.gartner.com/en/newsroom/press-releases/2024-11-19-gartner-forecasts-worldwide-public-cloud-end-user-spending-to-total-723-billion-dollars-in-2025
> **Confidence**: medium-high — angka 850 miliar/21,3% terkorfirmasi konsisten di beberapa hasil pencarian yang mengutip dokumen forecast Gartner 3Q25, tetapi halaman press-release publiknya tidak bisa di-fetch langsung (gartner.com memblokir). Tulis sebagai "Gartner memproyeksikan ... sekitar USD 850 miliar pada 2026" — proyeksi beratribusi, bukan realisasi.

> **Claim 11**: Posisi PaaS SAP tervalidasi pihak ketiga (penguat E-E-A-T, opsional 1 klausa).
> **Number/specific**: SAP dinobatkan Leader di **2026 Gartner Magic Quadrant for Integration Platform as a Service (iPaaS)** untuk ke-**6 kalinya berturut-turut** (SAP Integration Suite, bagian dari SAP BTP). Publikasi 19 Maret 2026.
> **Source**: SAP News, https://news.sap.com/2026/03/sap-six-time-leader-gartner-magic-quadrant-ipaas/ (diakses 2026-07-06)
> **Confidence**: high

> **Claim 12**: Banyak solusi enterprise memakai KOMBINASI model layanan, bukan salah satu (honest hedging H2 #4 + FAQ #3).
> **Number/specific**: Microsoft: "Many Azure solutions use a combination of service models." Contoh konkret di ekosistem SAP = Claim 9 (satu lanskap RISE memuat SaaS + PaaS + IaaS sekaligus).
> **Source**: Microsoft Learn (URL Claim 5); SAP PRESS (URL Claim 9)
> **Confidence**: high

## Solution focus + Soltius anchor

Keyword tidak ada di `product_matrix.md` → framing universal berlaku (blacklist, "implements not builds", tanpa superlatif). Per brief + addendum §6: **maksimal 2 self-mention**.

| What to teach (vendor-neutral) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| 3 model layanan cloud + siapa-mengelola-apa | Claims 1–6 (NIST + Microsoft) | H2 #1, tabel H2 #2 | — (body bebas Soltius) |
| Pemetaan enterprise/SAP: S/4HANA Cloud ≈ SaaS, SAP BTP = PaaS, hyperscaler = IaaS, RISE = bundel 3 lapisan (1 kalimat) | Claims 7–9, 11 | H2 #3 | — |
| Aturan memilih + kombinasi model | Claim 12 | H2 #4 | **Kesimpulan**: 1 positioning line — "Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendukung solusi SAP di ketiga lapisan cloud — dari aplikasi, platform SAP BTP, hingga SAP di atas infrastruktur cloud." + **baris terakhir**: soft CTA soltius.co.id (anchor funnel: SAP BTP / Cloud) |

Internal link (per brief, 2 saja): hub `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` (anchor "migrasi ERP ke cloud") + cousin `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms` (anchor sekitar penyebutan SAP BTP di H2 #3).

## Authoritative external sources (writer cites 1–2 inline)

1. **NIST SP 800-145 — The NIST Definition of Cloud Computing (September 2011)** — https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf — *backs*: definisi baku ketiga model + siapa mengelola apa. **Pilihan utama** (standar internasional, stabil, bebas vendor).
2. **Microsoft Learn — Shared responsibility in the cloud (diperbarui 5 Mei 2026)** — https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility — *backs*: matriks tanggung jawab per lapisan (data tabel) + "data & identitas selalu di pengguna".
3. (Opsional, untuk angka FAQ) **Gartner — Forecast: Public Cloud Services, Worldwide, 3Q25 Update (Sep 2025)** — https://www.gartner.com/en/documents/6996966 — *backs*: ~USD 850 miliar 2026, +21,3%.

## FAQ Q&As (2–3, Bahasa Indonesia — jawaban 30–60 kata, 1 fakta per jawaban)

### Mana yang lebih baik: SaaS, PaaS, atau IaaS?
Tidak ada yang unggul universal — SaaS menang di kecepatan pakai, IaaS di kontrol, PaaS di tengahnya. Ketiganya tumbuh: Gartner memproyeksikan belanja cloud publik global sekitar USD 850 miliar pada 2026, naik 21,3% dari 2025. Pilih per beban kerja: seberapa besar kontrol yang benar-benar dibutuhkan tim Anda. *(47 kata)*

### SAP termasuk SaaS, PaaS, atau IaaS?
Tergantung produknya. SAP S/4HANA Cloud dikonsumsi berlangganan seperti SaaS, SAP Business Technology Platform (SAP BTP) adalah PaaS, dan infrastrukturnya berjalan di IaaS hyperscaler seperti Microsoft Azure, AWS, atau Google Cloud. RISE with SAP bahkan membundel ketiga lapisan itu dalam satu kontrak. *(43 kata)*

### Apakah perusahaan bisa memakai ketiganya sekaligus?
Bisa — dan itu praktik umum, bukan pengecualian. Microsoft mencatat banyak solusi cloud memakai kombinasi model layanan. Dalam satu lanskap SAP, aplikasi SaaS, ekstensi di platform PaaS, dan server IaaS hyperscaler berjalan berdampingan dalam satu arsitektur. *(36 kata)*

## Data table for the writer (centerpiece H2 #2 — konsisten NIST + Microsoft)

### Perbedaan SaaS, PaaS, IaaS: siapa mengelola apa

| Aspek | SaaS | PaaS | IaaS |
|---|---|---|---|
| Aplikasi | Penyedia (pengguna hanya konfigurasi terbatas) | Pengguna (aplikasi yang dibangun/di-deploy) | Pengguna |
| Data & identitas pengguna | **Pengguna** | **Pengguna** | **Pengguna** |
| OS, runtime, middleware | Penyedia | Penyedia | Pengguna |
| Server, storage, jaringan fisik | Penyedia | Penyedia | Penyedia |
| Tingkat kontrol pengguna | Paling rendah | Menengah | Paling tinggi |
| Kecepatan mulai pakai | Paling cepat (langganan, siap pakai) | Cepat untuk tim developer | Perlu setup & tim infrastruktur |
| Contoh | Microsoft 365, SAP S/4HANA Cloud (Public Edition) | SAP BTP, Azure App Service | Azure Virtual Machines, AWS EC2, Google Compute Engine |

Elaborasi 1 paragraf yang disarankan: kontrol naik dari SaaS → IaaS, beban operasional ikut naik (NIST: hanya di IaaS pengguna mengendalikan OS); baris "data & identitas" sengaja seragam — di model mana pun, data tetap tanggung jawab pengguna (Microsoft, 2026).

## Edge cases & nuance

- **"S/4HANA Cloud = SaaS" perlu 1 kata pengaman**: yang murni SaaS adalah **Public Edition** (contoh resmi SAP). Gunakan frasa brief "dikonsumsi bak/seperti SaaS" atau sebut "khususnya Public Edition" — jangan masuk detail Public vs Private (di luar scope).
- **Data & identitas selalu di pengguna** — bantahan halus terhadap asumsi "pindah ke SaaS berarti lepas semua tanggung jawab"; kutip Microsoft.
- **Bukan pilihan salah-satu**: mayoritas lanskap enterprise multi-model (Claim 12) — pakai sebagai honest hedging di H2 #4, 1–2 kalimat.
- **Anti-salah-kategori** (pesaing lokal menyebut "Facebook = PaaS", "AWS = PaaS saja"): pakai HANYA contoh terverifikasi di Claim 6–8. AWS/Azure/Google Cloud adalah *penyedia* dengan layanan di banyak model — yang IaaS adalah layanan spesifiknya (EC2, Azure VM, Compute Engine).

## Flags (open factual risk)

- ⚠️ **Gartner USD 850 miliar 2026 (+21,3%)**: press release publiknya tidak dapat diakses langsung (gartner.com memblokir fetch); angka terkonfirmasi konsisten dari beberapa kutipan dokumen Forecast 3Q25. → Rekomendasi: tulis "Gartner memproyeksikan ... sekitar USD 850 miliar pada 2026, tumbuh 21,3%" — beratribusi + kata "sekitar/proyeksi"; JANGAN jadikan angka realisasi atau membulatkan ke "hampir 1 triliun".
- ⚠️ **Heroku & Google App Engine sebagai contoh PaaS; Google Workspace sebagai SaaS**: kategorisasi textbook, tetapi TIDAK terverifikasi dari halaman vendor pada run ini (fetch Google Cloud terpotong). → Rekomendasi: prioritaskan contoh terverifikasi (Microsoft 365, Azure App Service, SAP BTP, Azure VM, AWS EC2); Google Workspace/App Engine boleh disebut sekilas tanpa klaim spesifik; Heroku sebaiknya dilewati saja.
- ⚠️ **RISE with SAP**: hanya 1 kalimat (bundel 3 lapisan, satu kontrak). Detail paket, self-managed vs RISE, sertifikasi HANA = milik `iaas-untuk-sap-c01` (2026-06) — JANGAN disentuh.
- ⚠️ **Statistik pasar cloud Indonesia**: sengaja TIDAK dikumpulkan (dedup boundary artikel IaaS Juni). Writer jangan menambahkan sendiri.

## Definition snippet draft (40–60 words)

> SaaS, PaaS, dan IaaS adalah tiga model layanan cloud computing menurut standar NIST yang berbeda pada batas tanggung jawab pengelolaan. SaaS menyediakan aplikasi siap pakai berlangganan, PaaS menyediakan platform untuk membangun dan menjalankan aplikasi, sedangkan IaaS menyewakan infrastruktur dasar — server virtual, penyimpanan, dan jaringan. Makin ke arah IaaS, makin besar kontrol sekaligus tanggung jawab pengguna.

(55 kata — entity-clear, ketiga istilah terdefinisi, siap dipasang setelah lead dengan pembuka "Ringkasnya:".)

## Notes for image-planner

**N/A — batch conditional 2026-07 tanpa image placeholder** (style_addendum §3). Konsep visual "tumpukan lapisan per model" disampaikan lewat tabel siapa-mengelola-apa di atas.
