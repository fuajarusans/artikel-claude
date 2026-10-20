---
brief_id: "cloud-deployment-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 1
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — word band 800–1000 cleaned-prose, FAQ 2–3, internal link = 2, zero image placeholder by design, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Quality Validator Report — Public vs Private vs Hybrid Cloud: Perbedaan dan Cara Memilih

## Revisi R1 (2026-09-01) — verdict akhir: **pass**

Verdict awal `revise` (di bawah) sudah ditindaklanjuti. Dua paragraf mid-body dipecah persis
sesuai "Revision instructions": (1) poin "Kedua, NIST … *community cloud*" dijadikan paragraf
pendiri sendiri; (2) poin multicloud pada "Dua catatan jujur" dipisah jadi paragraf tersendiri.
Tidak ada fakta, angka, tautan, atau paragraf jawaban-langsung yang diubah; word count tetap 905.

`tools/quality-check.ps1` dijalankan ulang: **paragraph burstiness CV 0.257 → 0.348** (di atas
ambang AI-tell 0.30), **skor AI agregat 0.19 → 0.08**, verdict script **pass**, paragraf 14 → 16,
hanya sisa 2 flag low (vocab-repetition — non-blocking). Guardrail yang memicu revise sudah lolos.
**Artikel curator-ready.** Catatan verdict awal dipertahankan di bawah untuk jejak audit.

---

## Verdict awal: **revise** (sudah diperbaiki di R1 — lihat atas)

Artikel lolos telak pada dua gerbang utama — plagiarisme dan akurasi fakta — tetapi tersandung satu guardrail statistik yang berlaku penuh di batch ini: **keseragaman panjang paragraf (CV = 0.257) berada di bawah ambang 0.30 yang spec validator perlakukan sebagai AI-tell kuat**, walau lexical scanner bersih dan skor agregat AI (0.19) secara nominal "pass". Web-lookup atas 8 passage distingtif tidak menemukan satu pun kecocokan verbatim di halaman non-Soltius (plagiarisme 0.00). Semua angka & klaim regulasi/produk di-verifikasi ulang live 2026-09-01 dan terkonfirmasi akurat (Flexera 73% + ~3 poin YoY, S/4HANA Cloud Public Edition upgrade 2×/tahun vs Private Edition kontrol pelanggan, UU 27/2022, NIST SP 800-145). Perbaikan yang diminta bersifat **tunggal, kecil, dan bebas-risiko fakta**: pecah 2 paragraf mid-body agar variasi panjang paragraf naik ke ≥0.30 (idealnya mendekati 0.45). Bukan re-spin; hanya satu writer pass ritme. Jika perbaikan itu dilakukan, artikel curator-ready.

## Kenapa revise, bukan pass (catatan keputusan)

- Skor agregat AI script = **0.19** → verdict script "pass" (ambang revise 0.30). Namun spec `seo-quality-validator` mencantumkan failure mode eksplisit: *"❌ Approving when paragraph burstiness CV < 0.30 (strong AI tell even if no specific pattern fired)."* Guardrail ini **bukan** termasuk cek yang di-override oleh assignment (override hanya: word band, FAQ, internal link, image). Task menegaskan *"AI-tell heuristics … apply in full."*
- CV = **0.257** bukan miss marginal (mis. 0.298) — 10 dari 14 paragraf prosa mengelompok rapat di pita 43–50 kata.
- Preseden batch: validator `agentic-ai-c01` me-*pass* CV = 0.331 justru karena **di atas** garis 0.30 ("di atas ambang AI-tell kuat"). Konsistensi menuntut artikel di **bawah** 0.30 tidak diloloskan otomatis.
- Faktor peringan (didokumentasikan, bukan pembatal guardrail): sentence burstiness **1.132** (sangat manusiawi), 0 lexical AI-tell, dan keseragaman ini sebagian artefak struktural addendum (jawaban langsung 40–60 kata + FAQ 30–60 kata mengkompres pita paragraf). Faktor-faktor ini membuat risiko "konten AI ter-skala" secara substansi rendah — tetapi tidak menaikkan CV melewati garis yang spec tetapkan.

## AI Detector (heuristic v2.0)
- Score: **0.19** / 1.0 — script verdict **pass**; **validator escalate → revise** karena guardrail CV<0.30 (thresholds script: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.257** ⚠️ (target ≥0.45; **<0.30 = AI-tell kuat** — guardrail terpicu)
- Sentence burstiness (CV): **1.132** (sangat bervariasi — indikator manusia kuat; peringan)
- Top-30 vocab share: **0.381** (di atas ambang 0.35 — low flag, wajar untuk artikel topik-padat "cloud/hybrid/private/public/data")
- Flags (2):
  - **[high] paragraph-uniformity**: Paragraph word-count CV=0.257 (target ≥0.45; <0.30 strong AI tell) → **memicu revise**
  - [low] vocab-repetition: Top 30 words = 38.1% of body (target <30%) → **tidak memblokir**; konsentrasi kosakata topikal, bukan sinyal AI

**Distribusi panjang paragraf (kata):** 62 · 45 · 46 · 67 · 43 · 49 · 44 · 43 · 50 · 46 · 50 · 46 · 70 · 16 (mean 48.4, sd 12.42). Outlier hanya lead (62), post-tabel (67), Kesimpulan (70), CTA (16); seluruh mid-body 43–50.

## Plagiarism (web lookup of distinctive passages)
8 passage distingtif dicek via WebSearch berkutip. Query script yang tercemar sintaks markdown/heading diganti fragmen prosa bersih agar lookup bermakna.

- ✅ "Vendor kerap melempar tiga istilah dalam satu tarikan napas" — clean (tak ada halaman memuat frasa persis; hanya hasil tak-relevan)
- ✅ "hybrid dipakai 73% organisasi … ~14% murni multicloud" — clean (73% adalah statistik industri lazim; kalimat & susunan artikel orisinal, tak ter-lift)
- ✅ "private cloud boleh berada on-premise atau off-premise dan dioperasikan pihak ketiga" — clean (parafrase NIST; halaman sejenis memakai kata berbeda)
- ✅ "RISE with SAP mengantar SAP S/4HANA Cloud dalam dua edisi yang memetakan sumbu ini" — clean
- ✅ "hybrid mencampur public dan private yang terhubung, sedangkan multicloud memakai beberapa public cloud" — clean (konsep umum; frasa persis tak muncul)
- ✅ "Ketiga model tidak berbeda hanya pada 'berbagi versus privat'" — clean
- ✅ "Private Edition bersifat single-tenant dengan ruang kustomisasi lebih luas" — clean
- ✅ "Menurut NIST SP 800-145, private cloud boleh … dioperasikan pihak ketiga" (FAQ) — clean
- **Aggregate plagiarism score: 0.00** — tidak ada verbatim hit ≥20 kata di situs non-Soltius; tidak ada partial near-match. Lolos ambang (pass jika <0.10 & tanpa hit verbatim 20+ kata).

## Fact re-verification (klaim angka & kapabilitas produk — WAJIB re-cek)
Semua di-WebSearch live 2026-09-01 terhadap sumber primer/otoritatif:

| Klaim di artikel | Sumber primer | Verdict |
|---|---|---|
| Flexera 2026: 73% organisasi menjalankan hybrid, naik ~3 poin YoY | Flexera blog "2026 State of the Cloud" — "73% of organizations operating hybrid estates—a 3-percentage-point increase year over year" | ✅ akurat (cocok persis) |
| Flexera 2026: hanya ~14% murni multicloud (tanpa private) | Flexera 2026 (angka sekunder same-report; dossier Claim 5) — tidak berhasil dikorroborasi angka **eksak 14%** di live search run ini | ⚠️ single-source (bukan fabrikasi; teratribusi & internally consistent dgn 73% hybrid) |
| SAP S/4HANA Cloud Public Edition: upgrade otomatis 2×/tahun (multi-tenant SaaS) | SAP Community — Public Edition di-upgrade dua kali/tahun (Feb & Aug), mandatory | ✅ akurat |
| Private Edition: single-tenant, kontrol jadwal upgrade di pelanggan | SAP Community — Private Edition tidak dipaksa upgrade; pelanggan mengatur jadwal | ✅ akurat (tanpa angka cadence tahun — flag dossier dipatuhi) |
| NIST SP 800-145 terbit September 2011; 4 model deployment + 3 model layanan | NIST SP 800-145 (fakta kanonik mapan; dossier Claim 1) — artikel pakai "September 2011", **bukan** metadata PDF "April 2012" | ✅ akurat |
| Private cloud boleh on/off-premise & pihak ketiga; pembeda = single-tenant | NIST SP 800-145 verbatim (dossier Claim 2) | ✅ akurat |
| Hybrid ≠ multicloud (public+private terhubung vs beberapa public cloud) | Konsensus multi-sumber + NIST (dossier Claim 6) | ✅ akurat |
| UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi sebagai pendorong private/hybrid | JDIH/peraturan.bpk.go.id — disahkan 17 Okt 2022, UU PDP pertama | ✅ akurat; artikel benar TIDAK membedah pasal/denda (flag dipatuhi) |

Tidak ada angka tak-bersumber; semua teratribusi + tahun. Flag dossier dipatuhi: tanpa harga/diskon S/4HANA, tanpa cadence tahun Private Edition, tanpa denda UU PDP, tanpa metadata NIST "April 2012", tanpa tumpuk sumber adopsi. **Satu catatan tindak lanjut** (tidak memblokir): angka ~14% pure-multicloud bergantung tunggal Flexera 2026 — bila ingin diperkuat saat publish, verifikasi dari rilis resmi Flexera; jangan tambah sumber kedua atau derivasi (sesuai instruksi dossier). Konsisten dengan flag editor.

## Batch-override compliance (style_addendum.md §7)
| Cek | Nilai batch | Hasil | Status |
|---|---|---|---|
| Word band | 800–1000 (cleaned-prose) | **905** via `tools/count_words.py`; raw script 956 (juga dalam pita) — TIDAK dibaca sebagai >1000 fail | ✅ compliant |
| FAQ | 2–3 Q&A | 3 Q&A (46/50/46 kata, tiap memuat angka/fakta) | ✅ compliant |
| Internal link | 2 (1 hub + 1 cousin) | 2 — hub `cloud-computing-pengertian-jenis-layanan` (lead) + cousin `migrasi-erp-ke-cloud` (H2#3) | ✅ compliant |
| Image placeholder / images.json | 0 (dilarang by design) | 0 `{IMAGE_NN}`; tak ada images.json | ✅ N/A by design — image checks skipped |
| Definisi hanya sekali (snippet) | 1× di snippet | Definisi tiga model hanya di "Ringkasnya:"; jawaban tiap H2 pakai sudut baru (dimensi/kriteria/konsekuensi sistem inti); koreksi private≠on-premise + community cloud + hybrid-vs-multicloud = info baru | ✅ compliant |
| Self-mention Soltius | maks 2 | 2 (positioning line Kesimpulan + soft CTA "kunjungi soltius.co.id") | ✅ compliant |
| Sitasi eksternal otoritatif | 1–2 | 2 (NIST SP 800-145 + Flexera 2026) | ✅ compliant |

## Full-force checks (berlaku penuh — bukan override)
- **Anti-AI (§5):** lexical bersih — 0 opener klise, 0 "Selain itu" berturut, 0 "penting untuk dicatat", 0 era-filler, 0 em-dash; suara praktisi hadir; sentence burstiness 1.132. **Namun** paragraph-uniformity CV 0.257 < 0.30 = AI-tell struktural yang memicu revise (lihat AI Detector).
- **EYD & konsistensi:** bersih. Istilah asing di-italic konsisten (*cloud bursting*, *downtime*, *the best of both worlds*); OpEx/CapEx & multi-tenant/single-tenant konsisten; "UU No. 27 Tahun 2022" penulisan benar; nama produk SAP lengkap di sebutan pertama (SAP S/4HANA Cloud, RISE with SAP). Tidak ditemukan error EYD yang memblokir.
- **Struktur:** utuh — frontmatter YAML valid; H1 + 3 H2 body + FAQ (3 Q) + Kesimpulan + soft CTA baris terakhir; tabel head-to-head 7-dimensi well-formed; 1 bullet-list lead-in bold; blockquote snippet 43 kata. ≥1 H2 question-format (2 ada) + ≥1 H2 praktis/tabel (H2#1) terpenuhi. Honest hedging hadir ("Dua catatan jujur", hybrid ≠ best-of-both-worlds). `word_count` frontmatter (905) cocok cleaned-prose.
- **Framing Soltius:** implementator/pendamping ("mendampingi perpindahan sistem inti ke cloud lewat RISE with SAP dan layanan Migration"), **bukan** pembuat/penyedia cloud; kredensial (Best RISE & Best Cloud Partner 2021 + sejak 1998) = satu framing; tanpa superlatif.

## Revision instructions
Satu isu, satu tujuan: **naikkan variasi panjang paragraf (CV) dari 0.257 ke ≥0.30 (idealnya mendekati 0.45)** dengan memecah 2 paragraf mid-body menjadi paragraf pendek + sedang. **JANGAN** ubah fakta, angka, tautan, atau word count di luar ±5%. **JANGAN** sentuh paragraf jawaban-langsung tepat setelah tiap H2 (harus tetap 40–60 kata: "Ketiga model tidak berbeda…", "Tentukan per beban kerja…", "Begitu yang dipindah…"). Edit hanya dua paragraf non-jawaban berikut.

- **Passage 1 (post-tabel H2#1, 67 kata)** — *Original*: "Dua hal sering salah kaprah. Pertama, private cloud tidak identik dengan server di kantor sendiri. [NIST SP 800-145]…menyatakan private cloud boleh berada on-premise atau off-premise dan dioperasikan pihak ketiga; yang menentukan adalah dedikasinya untuk satu organisasi. Kedua, NIST juga mencantumkan *community cloud* sebagai model keempat, meski jarang dipakai komersial di Indonesia."
  - **Issue**: AI pattern (paragraph-uniformity) — paragraf ini salah satu dari sedikit outlier panjang; pecah untuk menambah 1 paragraf pendek.
  - **Fix guidance**: Jadikan poin "Kedua" paragraf berdiri sendiri yang pendek (~12–16 kata), mis.: paragraf-1 = "Dua hal sering salah kaprah. Pertama, private cloud tidak identik dengan server di kantor sendiri. [NIST SP 800-145](…) … untuk satu organisasi." lalu paragraf-2 (pendek) = "NIST juga mencantumkan *community cloud* sebagai model keempat, meski jarang dipakai komersial di Indonesia." Fakta identik, hanya split.

- **Passage 2 (H2#3 "Dua catatan jujur.", 50 kata)** — *Original*: "Dua catatan jujur. Hybrid bukan otomatis 'the best of both worlds'; ia menambah kompleksitas integrasi, tata kelola dua lingkungan, dan biaya pengelolaan. Dan hybrid berbeda dari multicloud: hybrid mencampur public dan private yang terhubung, sedangkan multicloud memakai beberapa public cloud sekaligus dan bisa tanpa private sama sekali. Keduanya sering tertukar."
  - **Issue**: AI pattern (paragraph-uniformity) — pecah menjadi dua paragraf (satu pendek ~22 kata + satu sedang) untuk menambah spread.
  - **Fix guidance**: paragraf-1 = "Dua catatan jujur. Hybrid bukan otomatis 'the best of both worlds'; ia menambah kompleksitas integrasi, tata kelola dua lingkungan, dan biaya pengelolaan." paragraf-2 = "Hybrid juga berbeda dari multicloud: hybrid mencampur public dan private yang terhubung, sedangkan multicloud memakai beberapa public cloud sekaligus dan bisa tanpa private sama sekali. Keduanya sering tertukar." Tidak ada fakta baru; hanya pemisahan.

> Kedua split ini menambah ≥2 paragraf pendek (≈12–22 kata) yang memecah klaster 43–50 kata, cukup menaikkan CV melewati 0.30 tanpa menyentuh addendum (band 800–1000, jawaban-langsung 40–60, FAQ 30–60, tautan = 2, self-mention = 2). Setelah writer merevisi, jalankan ulang `tools/quality-check.ps1` dan konfirmasi paragraph CV ≥ 0.30 sebelum pass. Tidak ada isu lain yang perlu disentuh.

## Loop status
Revision loop **0** (first validator pass; verdict revise). Jika writer merevisi lalu validator re-run, itu menjadi loop 1 (maks 2). Batch ini **berhenti di verdict untuk review user** (per assignment) — validator TIDAK menjalankan writer/curator dan TIDAK commit ke articles_history.

## The shipping question
Akankah review HCU/SpamBrain menandai ini sebagai konten AI ter-skala? **Substansi: kemungkinan tidak** (fakta grounded, sentence burstiness tinggi, 0 lexical tell) — **tetapi** guardrail struktural (paragraph CV<0.30) belum lolos. Akankah frasa 20 kata dari paragraf mana pun muncul verbatim di tempat lain? **Tidak** — 8 passage bersih. Satu "maybe" (paragraph uniformity) → **revise** (perbaikan kecil, bukan reject).
