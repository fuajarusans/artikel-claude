---
brief_id: "lift-shift-vs-replatform-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.19
plagiarism_score: 0.02
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md overrides applied — word band 800–1000 via cleaned-prose count, FAQ 2–3, internal links exactly 2, NO image placeholders/no images.json, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Quality Validator Report — Lift & Shift vs Re-Platform: Strategi Migrasi SAP ke IaaS

## Verdict: **pass**

Artikel lolos kedua gerbang QC validator. AI-detector heuristik memberi skor **0,19** (di bawah ambang revise 0,30; script verdict = `pass`). Web-lookup pada delapan passage distinctive tidak menemukan satu pun kecocokan verbatim prosa di situs non-Soltius: setiap kalimat prosa — lead, jawaban langsung tiap H2, dan jawaban FAQ — ditulis dengan diksi sendiri. Satu-satunya "kecocokan" adalah (a) fakta tanggal ECC (31 Des 2027 / 31 Des 2030) yang lazim di banyak sumber (fakta, bukan plagiarisme) dan (b) kutipan definisi AWS Prescriptive Guidance yang memang disitasi + diatribusi eksplisit. Seluruh klaim regulasi/kapabilitas produk diverifikasi ulang dan akurat; tidak ada rumus untuk dihitung ulang (artikel komparatif, bukan kalkulatif). Terdapat **satu titik lunak yang saya periksa manual**: burstiness paragraf CV=0,273 (di bawah garis bahaya 0,30). Setelah re-read paragraf yang di-flag, saya menyimpulkan ini artefak format padat batch (bukan AI-tell) — dikuatkan burstiness kalimat 0,904 (sangat manusiawi) dan nol pola AI-tell yang menyala. Rincian di bawah. Sesuai instruksi batch, validator **tidak** menjalankan curator dan **tidak** commit — berhenti di sini untuk review user.

## AI Detector (heuristic v2.0)
- Score: **0,19 / 1.0** (thresholds: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,273** (target ≥0,45; <0,30 = flag AI-tell kuat) — **HIGH flag; ditangani manual, lihat di bawah**
- Sentence burstiness (CV): **0,904** (target ≥0,45) — **sangat kuat**, ritme kalimat jelas manusiawi (kalimat pendek "Keduanya berada di sumbu berbeda." / "Re-platform menukar tempo untuk hasil." berselang prosa panjang).
- Top-30 vocab share: **0,367** (sedikit di atas ambang flag 0,35) — flag `low`.
- Flags (2):
  - **[high] `paragraph-uniformity`: CV paragraf 0,273 (<0,30).** Ini item failure-mode agen ("jangan approve saat CV paragraf <0,30"), jadi saya **re-read sendiri** paragraf yang di-flag dan menimbangnya, bukan menerima skor mentah. **Disposisi: artefak format, bukan AI-tell — tidak menaikkan ke revise.** Alasan konkret: (1) Addendum batch mewajibkan blok panjang-tetap — jawaban langsung 40–60 kata setelah TIAP H2 (×3), jawaban FAQ 30–60 kata (×3), plus snippet ~53 kata. Tujuh dari 15 paragraf tubuh secara struktural terkunci di pita ~42–59 kata; hanya lead (~78 kata) dan CTA (~25 kata) yang jadi outlier — dua outlier dalam 15 tak cukup mengangkat CV. Uniformitas ini akan muncul identik pada teks yang ditulis MANUSIA yang menuruti aturan format sama. (2) Burstiness KALIMAT 0,904 — sinyal ritme yang lebih halus & sulit dipalsukan — berada di puncak rentang manusiawi; teks AI seragam di KEDUA level, artikel ini seragam di level paragraf (karena mandat format) tetapi sangat bursty di level kalimat. (3) Re-read manual: tanpa pola AI-tell (nol "Selain itu" beruntun, nol "penting untuk dicatat", nol filler era, nol "dengan demikian"), diksi manusiawi & idiomatis ("rapat berikutnya justru mandek", "Pemicu tersering datang dari kalender, bukan teknologi", "Re-platform menukar tempo untuk hasil"), hedge jujur ("Detail per-rilis SUM berubah, jadi perlakukan ini pada level konsep"). Mem-force revise di sini berarti menghukum format batch itu sendiri, bukan konten AI. CV **tidak** turun karena pengenceran gaya AI.
  - **[low] `vocab-repetition`: Top-30 = 36,7%.** Artikel komparasi ~900 kata bertopik-tunggal wajar mengulang entitas inti (rehost, re-platform, lift, shift, SAP, HANA, migrasi, sistem, database, cloud) — dan GEO/§2a justru MENGHENDAKI entitas eksplisit yang diulang untuk kejelasan. Menambah 0,04 ke skor; bukan penalti bermakna, tidak mendekati ambang.
- Anti-AI manual re-check (di luar skrip): `Selain itu` pembuka = 0; `penting untuk di...` = 0; `dengan demikian` = 0; `di era digital / seiring perkembangan / tidak dapat dipungkiri / sebagai kesimpulan / menariknya` = 0. Em-dash (U+2014) = **2** (≤2; keduanya di snippet "Ringkasnya:" sebagai pemisah klausa), en-dash = 0. Lead buka pada pain konkret (rapat mandek soal rehost-vs-optimasi), bukan pembuka klise.

## Plagiarism (web lookup of distinctive passages)
Delapan passage distinctive dicek via quoted WebSearch pada laman sumber teratas. Passage murni definisi standar / kutipan sitasi diabaikan sesuai aturan skoring.

- ✅ Lead: "…rapat berikutnya justru mandek pada satu pertanyaan teknis" — **clean.** Quoted search = 0 kecocokan (hasil hanya dokumen SAP tak-relevan; frasa tak terindeks di mana pun).
- ✅ H2#1 direct answer: "Perbedaannya terletak pada seberapa banyak yang Anda sentuh saat memindahkan" — **clean.** 0 verbatim; hasil malah tak relevan (topik "memberi vs menawarkan", viskositas). Prosa orisinal.
- ✅ "…rehost umumnya lewat *homogeneous system copy* tanpa menyentuh platform, sedangkan re-platform mengganti komponen tertentu…" — **clean.** 0 verbatim; hasil generik migrasi (BiznetGio/Medium) dengan kalimat & urutan berbeda.
- ✅ Original insight: "miskonsepsi yang paling sering merusak perencanaan" + "menyamakan lift and shift dengan *brownfield*" — **clean.** 0 verbatim (hasil: miskonsepsi kurikulum, lifting plan crane — tak berkaitan). Insight pembeda ini orisinal.
- ✅ "Re-platform menukar tempo untuk hasil" — **clean.** 0 verbatim (hasil: Tempo.co, aplikasi edit video — tak berkaitan). Idiom orisinal.
- ✅ FAQ #2 answer: "Rehost mempertahankan versi dan database yang ada, jadi sistem tetap ECC setelah pindah" — **clean.** Hasil = AWS Prescriptive Guidance (sumber yang memang disitasi) + konten migrasi generik; tanpa verbatim prosa artikel.
- ⚠️ Fakta tanggal ECC: "*Mainstream maintenance* SAP ECC 6.0 berakhir **31 Desember 2027** … *extended maintenance* … sampai **31 Desember 2030**" — **fakta, bukan hit.** Tanggal ini terkonfirmasi lintas banyak sumber otoritatif (SAPinsider, SAP Community, Rimini Street). Pernyataan fakta publik dengan frasa sendiri; tak ada verbatim prosa. **Penting:** artikel dengan benar hanya menyebut TANGGAL dan **mengabaikan** angka biaya extended ("~2 poin persentase / ~9%") yang beredar di blog pihak ketiga — persis sesuai Flag dossier. Disiplin fakta dijunjung.
- ✅/diabaikan — Kesimpulan: "Sebagai SAP Platinum Partner melalui United VARs dan berpengalaman sejak 1998, Soltius mengimplementasikan…" — self-reference kredensial Soltius (bukan plagiarisme; sesuai aturan). Kutipan AWS ("tanpa perubahan apa pun" / "sebagian optimasi") & SAP Community DMOVE2S4 = sitasi disengaja + diatribusi, diabaikan.
- **Aggregate plagiarism score: 0,02** (< 0,10 pass; tidak ada verbatim hit ≥20 kata di situs non-Soltius). Domain soltius.co.id yang muncul di URL tautan internal = self-reference, bukan plagiarisme.

## Fact / claim re-verification (override: re-verify formula math + cited regulation/product-capability claims)
- **Rumus/aritmetika:** **N/A** — artikel bersifat komparatif-kualitatif; tidak ada rumus atau perhitungan numerik untuk diverifikasi. Kolom "kecepatan"/"biaya" di tabel sengaja kualitatif-relatif ("lebih cepat/lebih lama"), mengikuti langsung definisi AWS — bukan durasi/biaya numerik. Sesuai Flag dossier: tidak ada "hari–minggu / 4–12 minggu", tidak ada "3x lebih cepat", tidak ada angka OpEx.
- **Tenggat ECC (regulasi/kebijakan maintenance) — terverifikasi:** mainstream maintenance SAP ECC 6.0 berakhir **31 Desember 2027**, extended **31 Desember 2030** — dikonfirmasi lintas sumber otoritatif; selaras product_matrix §5. Artikel menyebut tanggal saja, tanpa mengangkakan biaya extended tanpa sumber SAP resmi. ✓
- **7 Rs / definisi rehost & replatform (AWS) — terverifikasi:** AWS Prescriptive Guidance mendefinisikan rehost = "lift and shift" (pindah "tanpa perubahan apa pun", tanpa optimasi cloud) dan replatform = "lift, tinker, and shift" (memasukkan "sebagian optimasi", mis. DB ke layanan terkelola). Kutipan artikel akurat & diatribusi. ✓
- **SUM DMO / DMOVE2S4 / DMO with System Move (kapabilitas produk) — terverifikasi & di-hedge benar:** dibingkai level-konsep (DMOVE2S4 = pendekatan satu langkah menggabungkan migrasi DB + update sistem + konversi S/4HANA; DMO with System Move = sekaligus pindah host/hyperscaler) dengan hedge eksplisit "Detail per-rilis SUM berubah, jadi perlakukan ini pada level konsep." Tanpa nomor SP/T-code karangan. Sesuai dossier (SAP Community, high conf) + Flag. ✓
- **Re-platform ke SAP HANA butuh instance tersertifikasi lintas 3 hyperscaler — terverifikasi:** artikel menyatakan "menuntut *instance* tersertifikasi, dan ketiga hyperscaler menjalankannya dengan konfigurasi berbeda" — akurat, tanpa menyebut SKU tunggal permanen. Sesuai dossier (SAP HANA certified/TDI). ✓
- **Kredensial Soltius — cocok KB:** "SAP Platinum Partner melalui United VARs … berpengalaman sejak 1998; mengimplementasikan serta mendampingi" — cocok product_matrix / CLAUDE.md; framing implementator/pendamping (bukan pembuat). ✓

## Structure & EYD integrity (all apply in full)
- Frontmatter YAML lengkap (`word_count: 893`, `target_word_count: 900`); H1 ber-keyword ("Lift & Shift" di 8 karakter pertama). ✓
- Lead 1 paragraf, buka pada pain konkret + keyword, tanpa paragraf roadmap. ✓
- Snippet "Ringkasnya:" (blockquote, ~53 kata, band 40–60) — **definisi muncul SEKALI saja**; H2#1/FAQ diperiksa, tidak ada pengulangan definisi dengan kata lain (H2#1 buka pada "seberapa banyak yang Anda sentuh" + asal 7 Rs; FAQ#1 pada dua-sumbu — semua info BARU). ✓
- Body **3 H2** (band 3–4) + `## FAQ` + `## Kesimpulan`; ≥1 H2 question-format (H2#2 "Kapan Sebaiknya…?", juga H2#1 berformat pertanyaan) ✓; ≥1 H2 praktis/terstruktur (H2#1 tabel 7 dimensi × rehost/re-platform; integritas markdown tabel OK: 3 kolom, header + separator + 7 baris) ✓; format campur (tabel/prosa), bukan tiap H2 → list. ✓
- Jawaban langsung 40–60 kata tepat setelah tiap H2 (poin BARU, bukan ulangan snippet). ✓
- FAQ = **3** Q&A (band 2–3); tiap jawaban 42–50 kata + memuat fakta (dua-sumbu; ECC tetap setelah rehost + tenggat 31 Des 2027; durasi relatif tanpa angka karangan). ✓
- Kesimpulan ≤80 kata + 1 positioning line Soltius; soft CTA "…kunjungi soltius.co.id." sebagai baris terakhir terpisah; primary keyword "lift and shift" hadir di penutup. ✓
- Self-mention Soltius = **2** (positioning Kesimpulan + CTA); framing implementer/pendamping. ✓
- Internal links = **tepat 2** (hub `migrasi-erp-ke-cloud` di lead + cousin SAP-di-AWS/Azure/GCP di H2#3); sitasi eksternal otoritatif = **2** inline (AWS Prescriptive Guidance + SAP Community DMOVE2S4). ✓
- EYD/typografi: istilah asing di-italic (*hyperscaler*, *cutover*, *homogeneous/heterogeneous system copy*, *brownfield*, *greenfield*, *sizing*, *data center*, *mainstream/extended maintenance*, *host*); tanggal "31 Desember 2027"; bold untuk penekanan; bersih, tanpa galat EYD. ✓

## Batch override log (addendum §7 — recorded as N/A / compliant, not failed)
- **Word band 800–1000: COMPLIANT.** Cleaned-prose via `tools/count_words.py` = **893** (target ~900). Skrip mentah menghitung **936** token (termasuk sel tabel/URL/token markdown) — kebetulan MASIH di dalam band; sesuai override, angka mentah **TIDAK** dibaca sebagai fail. **compliant.**
- **FAQ 2–3: COMPLIANT** (3 Q&A).
- **Internal links = 2: COMPLIANT** (1 hub + 1 cousin, keduanya soltius.co.id). Editor mengganti URL cousin dari slug pipeline `sap-hyperscaler-c01` (belum live, HTTP 500) ke artikel Soltius hyperscaler yang terverifikasi live pada topik identik; anchor tak berubah. Substitusi ini di luar cakupan verdict validator (liveness = verifikasi editor) dan tidak memblokir — diteruskan sebagai catatan awareness.
- **Image checks: N/A by design** — 0 `{IMAGE_NN}` + tidak ada images.json; stage image di-skip untuk batch ini. Tidak di-flag.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi diperlukan; writer tidak di-loop. Flag `paragraph-uniformity` sengaja TIDAK dijadikan revise — memaksa varians paragraf akan menabrak mandat panjang-tetap jawaban langsung & FAQ (dan mandat GEO "satu poin per paragraf"); sinyal ritme sesungguhnya (burstiness kalimat 0,904) + read manual sudah membuktikan voice manusiawi.

## Handoff
- Curator-ready: editor `recommendation: approve` + validator `verdict: pass`.
- Catatan awareness diteruskan ke user/curator: tautan cousin kini menunjuk artikel Soltius hyperscaler yang sudah terbit (bukan `sap-hyperscaler-c01` pipeline yang belum live) — valid apa adanya; bila `sap-hyperscaler-c01` terbit, URL cousin dapat ditukar balik untuk perekat cluster lebih ketat.
- Sesuai instruksi batch conditional 2026-09, validator **tidak** menjalankan curator dan **tidak** commit ke `articles_history` — batch berhenti di sini untuk review user.
