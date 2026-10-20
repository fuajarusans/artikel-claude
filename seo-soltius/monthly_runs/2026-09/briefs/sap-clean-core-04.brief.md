---
keyword: "SAP Clean Core"
keyword_slug: "sap-clean-core"
landing_page: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
month: "2026-09"
brief_id: "sap-clean-core-04"
angle: "biaya-btp-side-by-side-clean-core"
angle_hash: "c75d69f5a31e475ce074658cf29d37865bdbea2e"
search_intent: "decision"
target_word_count: 1650
strategist_run_date: "2026-09-22"
---

# SAP Clean Core: Biaya Ekstensi di BTP yang Jarang Dihitung

## Hook hypothesis

Setiap artikel clean core mengulang mantra yang sama: "jangan modifikasi core, pindahkan kustomisasi ke SAP BTP." Yang hampir tidak pernah ditulis: **SAP BTP bukan platform gratis.** Saat perusahaan memindahkan logika kustom ke *side-by-side extensibility*, mereka tidak menghilangkan biaya kustomisasi — mereka **memindahkannya dari capex satu kali (biaya build ABAP di dalam core) menjadi opex berulang** (konsumsi BTP yang ditagih setiap bulan, selamanya). Seorang CFO atau kepala IT procurement yang menyetujui strategi clean core sering baru menyadari ongkos ini setelah tagihan konsumsi tahun pertama melebihi estimasi awal SAP. Angle ini menjawab kebutuhan nyata pengambil keputusan finansial: **berapa sebenarnya biaya menjalankan model clean core, dari mana angkanya muncul (CPEA/BTPEA), dan bagaimana mengontrolnya sebelum kontrak ditandatangani.** Soltius kredibel di sini sebagai mitra ERP Strategy + Digital Platform yang men-*sizing* dan menata kelola lanskap ekstensi BTP di lapangan — bukan menjual lisensi, tapi membantu klien tidak over-commit atau kaget di renewal.

## Primary keyword

`SAP Clean Core`

## Secondary / LSI keywords (8–12)

- SAP BTP (Business Technology Platform)
- side-by-side extensibility
- biaya SAP BTP / harga SAP BTP
- CPEA (Cloud Platform Enterprise Agreement)
- BTPEA (BTP Enterprise Agreement)
- consumption-based commercial model
- cloud credits SAP
- TCO ekstensi SAP
- FinOps SAP BTP
- capex vs opex ERP
- SAP Build (di atas BTP)
- SAP BTP Cost Estimator / Cost and Usage Management

## Search intent & SERP feature targets

- **Stage**: decision (penganggaran & persetujuan model ekstensi — CFO/IT procurement)
- **Format**: cost breakdown + comparison table (decision-diagnostic), bukan tutorial teknis
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — pertanyaan "apakah SAP BTP berbayar / berapa biaya clean core" makin sering ditanyakan ke AI
  - [x] Featured Snippet (definisi CPEA + tabel CPEA vs BTPEA)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> Catatan metode: WebFetch langsung ke Google SERP ID mengembalikan halaman error (pola umum). SERP landscape disusun dari WebSearch berbasis intent (2026-09-22). Angka apa pun di bawah adalah sinyal pihak ketiga — **researcher wajib verifikasi/ganti dengan angka bersumber terbaru; jangan dikutip sebagai fakta tanpa atribusi.**

**Top 3 competing pages (berbahasa Inggris; belum ada yang kuat dalam Bahasa Indonesia):**
1. `https://saplicensingexperts.com/blog/sap-btp-extension-scenarios-the-complete-enterprise-guide-for-2026` — *angle*: skenario ekstensi BTP + implikasi konsumsi CPEA per skenario (buying guide).
2. `https://saplicensingexperts.com/blog/sap-btp-cost-optimisation-hidden-costs-explained` — *angle*: biaya tersembunyi BTP yang tidak diperkirakan enterprise.
3. `https://itaa.com/insights/understanding-the-cost-impact-of-saps-clean-core-strategy/` — *angle*: dampak biaya strategi clean core (kategori biaya bergeser, bukan hilang).

**Gaps to exploit** (yang TIDAK dikupas dengan baik oleh top pages):
- **Tidak ada konten Bahasa Indonesia** yang menjelaskan ekonomi BTP untuk clean core bagi audiens B2B Indonesia (semua sumber Inggris, banyak dari vendor licensing advisory yang menjual jasa negosiasi).
- Kebanyakan sumber fokus ke enterprise besar/global; **belum ada framing untuk mid-market Indonesia** (rentang belanja realistis, kapan model ini belum ekonomis).
- Belum ada yang menautkan cost BTP secara jujur ke **narasi clean core Soltius** (capex→opex, "kustomisasi tidak gratis meski bersih") dengan sudut netral-vendor + tabel keputusan.
- Kaitan biaya ke **SAP Build / low-code** (yang juga jalan di atas BTP dan ikut mengonsumsi credit) jarang dibuat eksplisit.

**People Also Ask (dari riset intent 2026-09):**
- Apakah SAP BTP berbayar? Berapa biayanya?
- Apa itu CPEA (Cloud Platform Enterprise Agreement)?
- Apa bedanya CPEA dan BTPEA?
- Apakah clean core benar-benar menghemat biaya?
- Berapa biaya membangun side-by-side extension di SAP BTP?
- Bagaimana cara mengontrol / memantau konsumsi SAP BTP agar tidak membengkak?
- Apakah credit BTP yang tidak terpakai hangus?
- Apakah SAP Build ikut memakan biaya BTP?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `sap-clean-core-business-case-roi-direksi` (2026-07-2-01) — membahas ROI/TCO dan *biaya inaksi* dari program clean core secara keseluruhan.
- **How this brief differs**: Artikel -07-2-01 menjawab "apakah clean core layak secara bisnis (ROI program transformasi)". Brief ini menjawab pertanyaan yang sama sekali berbeda dan lebih spesifik: **"setelah memutuskan clean core, berapa biaya OPERASIONAL berulang dari platform ekstensinya (SAP BTP) dan bagaimana mengendalikannya"** — model komersial CPEA/BTPEA, cost driver per jenis ekstensi, dan tata kelola FinOps. Ini biaya *menjalankan* model, bukan ROI *memilih* model. Tidak ada artikel prior (dari 23 artikel clean core) maupun hub page yang menyentuh ekonomi konsumsi BTP.
- **Subtopic overlap (Jaccard) with closest prior**: ~0.05 (hanya konsep "biaya/TCO" yang beririsan; himpunan subtopik CPEA/BTPEA/consumption/FinOps sepenuhnya baru). Jaccard vs semua prior lain < 0.1.

## Article skeleton — H2s the writer should expand

1. **H2 (question-format)**: "Apakah SAP BTP berbayar? Mengapa clean core memunculkan biaya baru" — *covers*: bantah asumsi bahwa "pindahkan kustomisasi ke BTP" berarti gratis; definisi *consumption-based commercial model*; jawaban 40–60 kata langsung sebagai definition snippet. Sertakan kalimat "SAP BTP adalah ... ditagih berdasarkan konsumsi ...".
2. **H2 (counter-conventional, trust-builder)**: "Bukan menghilangkan biaya, tapi memindahkannya: dari capex ke opex" — *covers*: insight jujur bahwa biaya build ABAP satu kali di core berubah jadi ongkos konsumsi berulang di BTP; mengapa ini tetap layak (upgrade-safe, tidak menahan inovasi) tapi harus dianggarkan sadar; ekstensi "clean core" ditagih dengan aturan CPEA yang sama seperti side-by-side lain — bersih tidak berarti bebas biaya.
3. **H2 (definitional)**: "CPEA vs BTPEA: dua model komersial SAP BTP yang perlu Anda pahami" — *covers*: CPEA (prepaid credit pool, credit hangus akhir tahun bila tanpa carryover), BTPEA (banded/tiered, harga unit turun saat volume naik, untuk konsumsi yang lebih dapat diprediksi); **tabel perbandingan** (fitur, cara tagih, cocok untuk siapa). Flag researcher untuk konfirmasi penamaan & mekanisme terkini.
4. **H2 (practical/structured)**: "Dari mana biaya BTP muncul? Cost driver per jenis ekstensi" — *covers*: setiap application instance yang berjalan mengonsumsi credit minimum; side-by-side app mengonsumsi lebih banyak (aplikasi independen); Integration Suite berbasis volume pesan; SAP Build (low-code) juga jalan di atas BTP dan ikut memakan credit; arsitektur integrasi yang buruk bisa menggandakan konsumsi. Sajikan sebagai daftar cost driver + contoh kategori belanja.
5. **H2 (practical/how-to)**: "Cara mengestimasi dan mengontrol biaya BTP (FinOps clean core)" — *covers*: minta *credit rate card* sebelum tanda tangan; model konsumsi dengan volume transaksi sendiri (estimasi awal SAP kerap terlalu rendah); pakai SAP BTP Cost Estimator + Cost and Usage Management di BTP Cockpit; atur subaccount per proyek/departemen + tagging untuk chargeback/showback; tetapkan platform owner ber-budget authority + review konsumsi bulanan; pisahkan layanan produksi bervolume tinggi (locked rate) dari eksperimen (CPEA). Format: numbered checklist.
6. **H2 (honest / counter-conventional)**: "Kapan model BTP ini BELUM ekonomis untuk Anda" — *covers*: perusahaan dengan kebutuhan ekstensi minimal / proses mendekati standar mungkin belum perlu belanja BTP besar; risiko over-commit credit (credit hangus) vs under-commit (overage mahal); mid-market yang bisa mulai kecil; bahaya mengejar "clean" secara berlebihan sampai boros. Hindari over-engineering.
7. **FAQ** — questions to answer:
   - Apakah SAP BTP berbayar dan berapa kisaran biayanya?
   - Apa itu CPEA dan bagaimana cara kerjanya?
   - Apa bedanya CPEA dan BTPEA?
   - Apakah clean core benar-benar menghemat biaya?
   - Apakah credit BTP yang tidak terpakai akan hangus?
   - Apakah SAP Build / low-code ikut memakan biaya BTP?
   - Bagaimana cara memantau konsumsi BTP agar tidak membengkak?

(≥1 H2 question-format: H2 #1 & #3. ≥1 honest/counter-conventional: H2 #2 & #6. Sesuai `style_guide.md` §1a.)

## SAP / partner tech to teach (from product_matrix.md + keywords.md derivation)

Ajarkan secara netral-vendor: **SAP BTP** sebagai platform ekstensi *side-by-side* untuk clean core; **model komersial berbasis konsumsi** — **CPEA (Cloud Platform Enterprise Agreement)** dan **BTPEA (SAP BTP Enterprise Agreement)**; konsep **cloud credits** & consumption band; **SAP BTP Cockpit** (Cost and Usage Management), **SAP BTP Cost Estimator**; kaitan **SAP Build** (Build Apps/Process Automation) yang berjalan di atas BTP. Kaitkan ke prinsip clean core: kustomisasi keluar dari core → masuk ke BTP yang ditagih per konsumsi.

**Facts the researcher MUST verify (jangan mengarang angka):**
- Penamaan & mekanisme terkini **CPEA vs BTPEA** (apakah BTPEA sudah menggantikan/berdampingan dengan CPEA di 2026; cara banding/tiering).
- Aturan **credit expiry / carryover** CPEA saat ini.
- Apakah benar **tiap application instance = minimal 1 unit CPEA** (konfirmasi model konsumsi resmi SAP).
- Angka-angka pihak ketiga yang HANYA boleh dipakai bila terkonfirmasi + beratribusi + diberi label estimasi: ~25% credit BTP tak terpakai (~$600 juta, 2025); estimasi awal SAP kerap terlalu rendah ~45%; FinOps governance dapat menghemat 20–40%; arsitektur integrasi buruk menggandakan konsumsi 3–5×; rentang belanja mid-market vs enterprise; biaya pelatihan developer. **Ganti dengan sumber primer/terbaru bila memungkinkan; jangan sajikan sebagai fakta pasti.**

## Soltius anchor (max 2–3 self-mentions; usually the closing)

- **Service/credential to anchor the CTA**: ERP Strategy + Digital Platform (implementasi ekstensi/BTP) + AMS — *placement*: closing. Framing: "Sebagai SAP Platinum Partner melalui United VARs, Soltius membantu men-*sizing* dan menata kelola lanskap ekstensi BTP agar biaya clean core terukur sejak awal, bukan kejutan di renewal." (implements/menata kelola — BUKAN menjual/membuat SAP).
- Optional 1 mid-article aside: pada H2 #5 (FinOps), satu kalimat bahwa penetapan platform owner + review bulanan adalah pola yang Soltius terapkan bersama klien AMS. Jaga total ≤3 mention.

## Internal links to place

- **Primary** (this keyword's hub): `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide` — anchor: `SAP Clean Core` (inline natural di lead/awal, saat menjelaskan prinsip "pindahkan kustomisasi ke luar core").
- **Cousin 1**: `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms` — anchor: `platform low-code SAP Build` — why: SAP Build berjalan DI ATAS BTP dan ikut mengonsumsi credit; tautan wajar saat membahas cost driver ekstensi low-code.
- **Cousin 2**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor: `migrasi ERP ke cloud` — why: biaya ekstensi BTP adalah komponen TCO nyata dari langkah pindah ke cloud ERP (RISE with SAP); tautan wajar saat membahas capex→opex.

(Cousin pairing sesuai cross-link map `product_matrix.md` untuk SAP Clean Core = ERP migration + Low-Code Platform; keduanya ada dalam daftar cousin yang diizinkan bulan ini.)

## E-E-A-T signals to embed

- Specific numbers/facts to cite (with source hints): kisaran belanja BTP tahunan (mid-market vs enterprise), persentase credit tak terpakai, faktor understatement estimasi awal, penghematan dari FinOps governance — **semua HARUS beratribusi & berlabel estimasi** (source hints: SAP Help Portal consumption model, SAP Learning "Cost and Usage Management", SAP Community Cost Estimator blog, laporan advisory pihak ketiga yang kredibel). Gunakan rentang + hedge jujur ("acuan lapangan, bukan janji pasti").
- Authoritative sources to cite (suggest 2): (1) **SAP Help Portal — "What Is the Consumption-Based Commercial Model?"** (`https://help.sap.com/docs/btp/sap-business-technology-platform/what-is-consumption-based-commercial-model`); (2) **SAP Learning — "Using Cost and Usage Management" / SAP BTP Pricing** (`https://learning.sap.com/courses/operating-sap-business-technology-platform/using-cost-and-usage-management` atau `https://www.sap.com/products/technology-platform/pricing.html`).
- First-party Soltius angle: pengalaman men-*sizing* dan menata kelola lanskap BTP/ekstensi untuk klien S/4HANA di Indonesia (ERP Strategy + Digital Platform + AMS) — kredibilitas untuk berbicara soal mengontrol biaya tanpa menjual credit.

## AI Overview & GEO optimization (seo_playbook §2a)

- **Question-first + extractable**: H2 #1 & #3 berformat pertanyaan; tiap H2 diberi jawaban langsung 40–60 kata sebelum elaborasi (umpan sitasi GEO).
- **Definition snippet (40–60 words)**: paragraf di ~150 kata pertama menjawab "SAP BTP adalah ... ditagih berdasarkan konsumsi (consumption-based) ..." dan menyatakan inti angle: clean core memindahkan biaya kustomisasi, bukan menghapusnya.
- **Entity list** (named explicitly): SAP BTP (Business Technology Platform), CPEA (Cloud Platform Enterprise Agreement), BTPEA (SAP BTP Enterprise Agreement), SAP Build, SAP BTP Cockpit, Cost Estimator, side-by-side extensibility, cloud credits, SAP S/4HANA.
- **FAQ target**: 7 pertanyaan (lihat skeleton), memanfaatkan PAA di atas; tiap jawaban 40–80 kata, self-contained, dengan satu angka/fakta beratribusi.

## Data captured this run

- **Source(s)**: live WebSearch (2026-09-22) + WebFetch landing page fresh; `_extracted/seo_report_apr2026.md` tidak dipakai untuk metrik (keywords.md 2026-09 menyetel `seo_report: none`). Ahrefs/GSC tidak terhubung.
- **Apr 2026 rank** (from report): #100 (whitespace terbesar; sinyal historis, bukan target metrik bulan ini).
- **Volume / KD / trend**: n/a (Ahrefs not connected). Trend: topik clean core + biaya BTP naik sepanjang 2025–2026 (banyak konten advisory licensing baru 2026); pertanyaan biaya BTP makin sering ke AI engines. Sinyal WebSearch, bukan angka Ahrefs.
- **SERP features present**: AI Overview + PAA (untuk kueri biaya/lisensi BTP).
- **cache_source**: `2026-09/research/sap-clean-core.research.json` (captured: 2026-09-17; diperbarui 2026-09-22 dengan angle biaya-BTP + sumber cost/FinOps).

## Notes for SME researcher

Fokus verifikasi (JANGAN mengarang angka; ganti estimasi pihak ketiga dengan sumber primer bila ada):
1. Konfirmasi **model komersial SAP BTP terkini (2026)**: apakah **BTPEA** sudah aktif menggantikan/berdampingan dengan **CPEA**, mekanisme banding/tiering, dan aturan **credit expiry/carryover**. Sumber: SAP Help Portal (consumption-based commercial model), SAP BTP pricing page.
2. Konfirmasi klaim **"tiap application instance mengonsumsi minimal 1 unit CPEA"** dan bahwa **ekstensi clean-core-safe ditagih dengan aturan konsumsi yang sama** seperti side-by-side lain.
3. Cari **angka bersumber & terbaru** untuk: rentang belanja BTP tahunan (bedakan mid-market vs enterprise, idealnya konteks/rupiah bila ada), understatement estimasi awal, penghematan FinOps governance, credit tak terpakai. Beri atribusi + label estimasi; jika hanya ada sumber advisory pihak ketiga, sampaikan sebagai "menurut [sumber], sebagai acuan, bukan angka resmi SAP".
4. Konfirmasi bahwa **SAP Build** (Build Apps/Process Automation) berjalan di atas BTP dan ikut mengonsumsi credit (untuk cost-driver low-code).
5. Konfirmasi keberadaan **SAP BTP Cost Estimator** & **Cost and Usage Management di BTP Cockpit** sebagai alat FinOps resmi.

## Notes for future strategist runs

Yang artikel ini SENGAJA TIDAK bahas (disisakan untuk sibling berikutnya):
- **Strategi testing/regression otomatis** untuk upgrade cloud 2×/tahun (SAP Cloud ALM test management, SAP Enterprise Continuous Testing/Tricentis) — masih uncovered, angle operasional QA/basis.
- **Clean core sejak awal untuk mid-market via GROW with SAP** (public cloud, bersih by design) — masih uncovered, persona SME.
- **Myth-busting clean core** (format daftar mitos vs fakta) — masih uncovered, format berbeda.
- Detail **negosiasi kontrak lisensi SAP** (di luar cakupan; artikel ini fokus memahami & mengontrol biaya, bukan taktik negosiasi vendor).
