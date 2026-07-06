---
brief_id: "perusahaan-cng-indonesia-02"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.0
plagiarism_score: 0.0
revision_loop: 0
---

# Quality Validator Report — Layanan Penyedia CNG: Pasokan, Distribusi GTM, hingga Dukungan Teknis

## Verdict: **pass**

Artikel lolos kedua dimensi pemeriksaan. Skor AI heuristik 0,0 dengan burstiness paragraf 0,50 (CV) dan burstiness kalimat 0,84 — keduanya jauh melampaui ambang batas minimum. Tidak ada satu pun dari 87 kalimat yang memicu pola AI dari `style_guide.md §5`. Pemeriksaan plagiarisme terhadap 8 passage kandidat tidak menemukan kecocokan verbatim maupun near-match signifikan pada situs publik non-Gagas; semua frasa yang dicek terindeks sebagai konten orisinal. Artikel siap untuk curator commit.

## AI Detector (heuristic v2.0)

- Score: **0,0** / 1,0 (ambang revise ≥0,30 | reject ≥0,50)
- Paragraph burstiness (CV): **0,50** (target ≥0,45 — tercapai)
- Sentence burstiness: **0,84** (sangat tinggi; variasi kalimat nyata)
- Top-30 vocab share: **0,315** (di bawah zona konsentrasi kosakata AI)
- Flags: **0** (tidak ada pola yang terpicu)
- Word count: 1.600 kata (18 paragraf, 87 kalimat)
- External API used: tidak

Tidak ada opener AI ("Di era digital…", "Tidak dapat dipungkiri…"), tidak ada "Selain itu" beruntun, tidak ada em-dash di body prosa, tidak ada hype adjective bertumpuk. Burstiness kalimat 0,84 mencerminkan campuran nyata 1–6 kalimat per paragraf yang terverifikasi juga oleh editor. Vocabulary concentration 0,315 jauh dari zona bahaya (AI biasanya >0,45 pada top-30 share).

## Plagiarism (web lookup of distinctive passages)

8 passage kandidat diperiksa via WebSearch.

- Passage 1: "Layanan Penyedia CNG: Pasokan, Distribusi GTM, hingga Dukungan Teknis — Banyak calon pelanggan menandatangani kontrak gas dengan satu asumsi keliru: berlangganan CNG sama dengan membeli gas dalam tabung." — **bersih**. Hasil pencarian mengembalikan situs kompetitor CNG (mosafaprimasinergi, sentralgas, cng.co.id) tetapi tidak ada satu pun yang memuat frasa atau komposisi kalimat ini.
- Passage 2: "Memilih penyedia CNG bukan soal siapa menjual gas termurah, melainkan siapa yang menanggung seluruh rantai layanan ketika produksi Anda bergantung padanya." — **bersih**. Hasil pencarian memuat artikel opini energi dan CNG umum; frasa spesifik ini tidak ditemukan di situs mana pun.
- Passage 3: "'Layanan 24 jam' tanpa standar terukur — Klaim tersedia 24 jam terdengar meyakinkan, tetapi tanpa definisi waktu tanggap dan cakupan wilayah, ia hanya nomor telepon yang berdering." — **bersih**. Hasil pencarian kembali ke artikel SLA generik dan layanan medis; metafora "nomor telepon yang berdering" tidak ditemukan di sumber mana pun.
- Passage 4: "Tanpa GTM cadangan atau Mother Station alternatif, satu keterlambatan bisa menghentikan produksi." — **bersih**. Hasil pencarian mengembalikan artikel downtime pabrik generik; frasa spesifik dengan terminologi GTM/Mother Station tidak ada di sumber publik.
- Passage 5: "Tanda Layanan yang 'Tampak Lengkap' tapi Tipis di Lapangan — Brosur mudah terlihat lengkap; lapangan yang menguji." — **bersih**. Hasil pencarian hanya muncul artikel tentang desain brosur; tidak ada overlap frasa.
- Passage 6: "Pemantauan dan penagihan — Pencatatan volume serta tekanan, idealnya lewat telemetri, agar tagihan berbasis pemakaian nyata." — **bersih**. Hasil pencarian mengembalikan artikel smart-metering air dan telemetri umum; tidak ada kecocokan frasa dengan konteks CNG ini.
- Passage 7: "Pembagian persisnya bisa berbeda antarpenyedia, jadi jadikan tabel berikut sebagai daftar periksa pertanyaan, bukan ketentuan baku." — **bersih**. Hasil pencarian tidak relevan (tabel distribusi frekuensi matematika); frasa ini tidak ditemukan di sumber mana pun.
- Passage 8: "Pada model 'jual gas saja', ketiganya bisa jadi biaya terpisah, sumber kejutan biaya tersembunyi." — **bersih**. Hasil pencarian memuat artikel LPG dan biaya gas umum; framing spesifik "biaya tersembunyi" dalam konteks layanan CNG industri ini tidak muncul di sumber mana pun.

Catatan metodologi: terminologi teknis yang muncul di sumber publik (GTM, Mother Station, PRS, virtual pipeline, CNG Cylinder, telemetri) diperlakukan sebagai shared CNG service-chain vocabulary — bukan plagiarisme. Tidak ada situs gagas.co.id yang ditemukan memuat passage-passage ini (artikel baru, belum diterbitkan). Tidak ada hit pada sumber otoritatif yang dikutip (migas.esdm.go.id, bphmigas.go.id) — kutipan artikel merupakan sitasi intentional bukan reproduksi.

**Aggregate plagiarism score: 0,0** (threshold revise: ≥0,10 atau satu hit verbatim ≥20 kata)

## Loop status

Ini adalah revision loop **0** (pertama dan terakhir). Verdict **pass** — tidak ada loop diperlukan.
