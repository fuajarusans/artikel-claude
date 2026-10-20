---
brief_id: "disaster-recovery-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1192
---

# Editor QC Report — Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada batch override 2026-10 dan keenam FLAG faktual dossier sudah ditangani persis sesuai rekomendasi. Yang paling penting: ketiga risiko faktual terbesar aman. (1) Tidak ada klaim "DRC harus terpisah secara geografis" — baik H2-4 maupun FAQ #4 hanya menyatakan kewajiban Pusat Data + DRC di wilayah Indonesia dan izin OJK untuk luar negeri (Pasal 35), bukan klausul pemisahan geografis yang tidak terbukti di POJK 11; writer sudah membuang frasa "terpisah secara geografis" yang masih ada di brief. (2) Angka RPO/RTO per strategi diberi label eksplisit "rentang tipikal menurut AWS, bukan jaminan kontraktual". (3) Angka "RTO menit" SAP HANA yang di-flag dossier justru TIDAK muncul di artikel — writer hanya menyatakan RPO nol (sinkron, satu region, kapabilitas HA) vs RPO di atas nol (asinkron, DR lintas region) dengan takeover manual, semuanya didukung dossier Claim 10–12 (Google Cloud SAP docs, confidence high). Dengan begitu, satu-satunya angka kuantitatif SAP HANA di artikel ("RPO nol" sinkron) adalah klaim berkonfidensi tinggi, sehingga cross-check ke help.sap.com tidak lagi memblokir publikasi. Dua perbaikan in-place dilakukan, keduanya di meta block dan tidak mengubah body: (a) menambah `dateModified: "2026-10-08"` yang hilang (freshness GEO wajib per seo_playbook §2a/§3; sudah ada di final sibling), dan (b) mengganti satu em-dash di field YAML `external_citations` dengan titik dua sehingga artikel 100% bebas em-dash (body memang sudah 0). Body tetap 1.192 kata (cleaned-prose `tools/count_words.py`; band batch 1000–1200). Dua catatan tetap terbuka dan diteruskan ke user karena user eksplisit minta ditanyai dan strategist memintanya sebelum finalisasi: konfirmasi hub internal + lanjut/berhenti pipeline + penekanan angle — lihat "What I flagged". Tidak satu pun memblokir `approve`, tetapi keputusan hub perlu diambil user sebelum publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise (0 "Di era digital/Seiring/Tidak dapat dipungkiri"), 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat", em-dash = 0 (seluruh file), CV panjang paragraf 0,326 (pop) / 0,335 (sample) di atas gate 0,30; CV kalimat 0,491. Lead dibuka pada pain konkret (ransomware/banjir), bukan definisi. |
| Factual & SAP-spec accuracy | 9 | 6 flag dossier ditangani; tidak ada spesifikasi SAP dikarang; RPO/RTO strategi berlabel "tipikal menurut AWS"; POJK diatribusi No. 11/POJK.03/2022 + berlaku 7 Juli 2022; angka kerugian downtime sengaja dibuat kualitatif; "RTO menit" SAP HANA yang berisiko justru tidak dipakai. |
| On-page SEO compliance | 9 | meta_title 49 char (keyword di 2 kata pertama), meta_description 157 char (band 140–160), slug `disaster-recovery` 17 char keyword-led, H1 + 100 kata pertama memuat keyword, 4 H2 konten (3 question-format), 2 tabel + 1 bulleted list. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 konten (≈48/42/49/47 kata, poin baru bukan ulangan snippet); satu poin terkutip per paragraf; FAQ 5 Q&A siap FAQPage; definition snippet ≈55 kata; `dateModified: 2026-10-08` ditambahkan. |
| Soltius framing discipline | 9 | 2 self-mention brand (positioning line Kesimpulan + soft CTA baris terakhir); "merancang, mengimplementasikan, dan mendukung … bukan membuat perangkat lunaknya"; tanpa superlatif; AWS/GCP/Huawei Cloud tidak diklaim milik Soltius. |
| Internal linking | 8 | TEPAT 2 inline (hub `/id/solutions-by-products/cloud` anchor "solusi SAP di cloud" + cousin `/id/blog/migrasi-erp-ke-cloud` anchor "migrasi ERP ke cloud"), keduanya di H2-3; tanpa link ketiga; tanpa "BACA JUGA". Skor <9 karena pilihan hub masih menunggu keputusan user (lihat flag). |
| FAQ quality | 9 | 5 Q&A (band 3–5); jawaban 41/47/41/43/42 kata; tiap jawaban memuat 1 fakta/angka; diambil dari PAA; tidak mengulang definisi snippet. |

## What I fixed (changelog)
- **Menambah `dateModified: "2026-10-08"` ke meta block** (hilang di draft). Freshness/`dateModified` adalah item wajib GEO di seo_playbook §2a/§3 dan sudah ada di final sibling (ai-customer-service-c01). Tidak memengaruhi hitung body (frontmatter di-strip oleh `count_words.py`).
- **Em-dash → titik dua di field YAML `external_citations`** (baris context POJK): "Pasal 35 — kewajiban…" → "Pasal 35: kewajiban…". Body sudah 0 em-dash; perubahan ini membuat seluruh file 0 em-dash, konsisten klaim batch. Bukan teks terbit (hanya metadata), tanpa dampak kata.
- **Tidak ada perubahan body.** Draft sudah dalam band, bebas AI-tell, dan semua flag tertangani; menambah/menata ulang kalimat berisiko mendekatkan ke cap 1200 (margin tinggal 8 kata) tanpa manfaat. Frontmatter `word_count` tetap 1192 (dikonfirmasi `tools/count_words.py` setelah edit).

## What I flagged (open issues)
- ⚠️ **Keputusan user — HUB internal link** (user eksplisit minta ditanyai; strategist minta dikonfirmasi sebelum finalisasi): landing page topik "disaster recovery" KOSONG di sheet Oktober, jadi strategist memilih hub = halaman solusi Cloud Soltius (`/id/solutions-by-products/cloud`, anchor "solusi SAP di cloud") + cousin = blog `migrasi-erp-ke-cloud` (anchor "migrasi ERP ke cloud"). Hub Cloud dipilih karena menampilkan AWS/Google Cloud/Huawei Cloud sebagai platform hosting SAP (funnel CTA = "SAP on Cloud / hosting / IaaS"). *Mohon konfirmasi*: (a) hub ini sudah tepat, ATAU (b) ada URL halaman solusi lain yang lebih pas (mis. halaman Managed Services/DR khusus bila ada). Jika (b), cukup ganti 1 tautan di H2-3.
- ⚠️ **Keputusan user — lanjut pipeline?** (diteruskan dari dossier): lanjut ke seo-quality-validator sekarang, atau berhenti di tahap final ini dulu untuk review manual user? (QC ini merekomendasikan `approve`; gate curator tetap menunggu `pass` validator.)
- ⚠️ **Keputusan user — penekanan angle "Pentingnya bagi Bisnis"**: saat ini dibawakan lewat H2-4 (downtime → penjualan/reputasi/kepatuhan) + sisi regulasi OJK perbankan. Cukup, atau user ingin penekanan use-case industri tertentu (mis. perbankan atau e-commerce) lebih tebal? Jika ya, bisa ditambah 1–2 kalimat — tetapi ingat margin cap tinggal 8 kata, jadi perlu pangkas di tempat lain agar tetap ≤1200.
- ⚠️ **Verifikasi opsional pra-terbit (severity rendah, tidak memblokir)**: angka RTO "menit" SAP HANA TIDAK dipakai di artikel, jadi flag dossier terkait sudah moot. Satu-satunya angka SAP HANA ("RPO nol" sinkron) berkonfidensi tinggi (Google Cloud SAP docs). Jika tim ingin kehati-hatian ekstra, validator boleh konfirmasi silang "zero recovery point objective (sinkron)" ke help.sap.com, tetapi tidak wajib.
- ⚠️ **Plagiarism/AI-detector belum final** — verdict akhir adalah tugas seo-quality-validator (`tools/quality-check.ps1` + WebSearch). Frasa tampak orisinal (framing 3 lapis backup/DR/BCP, "replikasi bukan backup", contoh berhitung RPO/RTO, konteks POJK), risiko rendah; menunggu validator.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 0 di seluruh file (body sudah 0; satu di YAML diganti titik dua) — batas ≤2 terpenuhi
- [x] Panjang paragraf bervariasi — CV 0,326 (pop) / 0,335 (sample), gate ≥0,30; rentang 18–78 kata; CV kalimat 0,491
- [x] Tidak tiap H2 → 3 bullet — hanya H2-1 memakai 1 bulleted list 3-poin; H2-2/H2-3 memakai tabel; H2-4 prosa
- [x] Tanpa klaim generik tanpa angka — ≥10 angka spesifik inline
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan) — 0
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| DRC: POJK No. 11/POJK.03/2022 Pasal 35 — wajib DC + DRC di wilayah Indonesia; luar negeri perlu izin OJK; **tanpa** klaim pemisahan geografis | dossier Claim 9 + FLAG #1 (frasa "terpisah geografis" dibuang) ✓ | pass |
| RPO/RTO per strategi (jam/menit/detik/nol) berlabel "rentang tipikal menurut AWS, bukan jaminan kontraktual" | dossier Claim 6 + FLAG #3 ✓ | pass |
| SAP HANA System Replication: sinkron → RPO nol (HA satu region); asinkron → RPO >0 (DR lintas region); takeover manual; "RTO menit" tidak dipakai | dossier Claim 10–12 + FLAG #4 ✓ | pass |
| Empat strategi DR (backup & restore → pilot light → warm standby → multi-site active/active), biaya terendah→tertinggi, "menurut AWS Well-Architected" | dossier Claim 5 + AWS whitepaper ✓ | pass |
| Uji DR plan dibingkai lunak ("mendorong pengujian berkala"), tanpa angka "setahun" | dossier FLAG #2 ✓ | pass |
| Kerugian downtime dibingkai kualitatif (tanpa angka karangan tipe "$5.600/menit") | dossier FLAG #5 ✓ | pass |
| Soltius = SAP Platinum Partner via United VARs, Best Cloud & Best RISE Partner, "merancang/mengimplementasikan/mendukung … bukan membuat" | product_matrix + company_profile ✓ | pass |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 49 char (keyword "Disaster Recovery" di 2 kata pertama) — ≤60 ✓
- [x] Meta description 157 char — band 140–160 ✓
- [x] Slug `disaster-recovery` (keyword-led, 17 char) — ≤60 ✓
- [x] H1 memuat primary keyword ("Disaster Recovery")
- [x] H2 konten = 4 (band 3–5); 3 question-format (H2-1/H2-2/H2-4); ≥1 praktis/terstruktur (mini-tabel RPO vs RTO H2-2; tabel 4 strategi H2-3)
- [x] Keyword di 100 kata pertama (lead) + paragraf terakhir (CTA)
- [x] Definition snippet ≈55 kata (SEKALI; "disaster recovery (DR) adalah" muncul 1x; tidak diulang di body/H2/FAQ)
- [x] LSI/semantic ≥8 (RPO, RTO, DRP, BCP, backup, replikasi, failover, high availability, DRC, SAP HANA System Replication, pilot light, warm standby, multi-site, takeover)
- [x] Internal link = 2 (override batch: 1 hub + 1 cousin) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (AWS Well-Architected H2-2 + OJK POJK No. 11/POJK.03/2022 H2-4)
- [x] FAQ = 5 Q&A (band 3–5)
- [x] ≥1 list + ≥1 tabel (1 bulleted 3-poin list + 2 tabel komparasi)
- [x] Word count = 1.192 (band batch 1000–1200; cleaned-prose `count_words.py`)
- [N/A] Image placeholder — override batch: 0 placeholder (tidak di-flag)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 konten: ≈48 / 42 / 49 / 47 kata (poin baru, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi (contoh berhitung RPO/RTO, "replikasi bukan backup", trade-off biaya AWS)
- [x] FAQ parseable untuk FAQPage; freshness ditandai `publish_month: 2026-10` + `dateModified: 2026-10-08`

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping ("merancang, mengimplementasikan, dan mendukung"), BUKAN "membuat SAP" — ditegaskan eksplisit "bukan membuat perangkat lunaknya"
- [x] Self-mention brand = 2 (≤2 per addendum §6): positioning line Kesimpulan + soft CTA baris terakhir (dua kemunculan "soltius" lain hanyalah URL tautan hub/cousin)
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP & platform cocok dossier/product_matrix (SAP HANA System Replication; AWS/Google Cloud/Huawei Cloud tidak diklaim milik Soltius)
- [x] Penutup memakai positioning line (SAP Platinum Partner via United VARs, Best Cloud & Best RISE Partner)
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif; anchor funnel "solusi Cloud" (per brief_tracker row 6: SAP on Cloud/IaaS)
- [x] Hub link = anchor inline natural di H2-3 ("solusi SAP di cloud"), bukan BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article untuk keyword "disaster recovery": **none yet** — tidak ada di `articles_history/index.json` (index hanya memuat Business Intelligence, Data Warehouse, ERP migration, Low-Code, SAP Clean Core, digital manufacturing, warehouse management system)
- Grep `articles_history/` untuk `disaster recovery|RPO|RTO|business continuity|pemulihan bencana|failover` = **0 kecocokan di artikel final**
- Topik DR/RPO/RTO di batch conditional sebelumnya hanya muncul sebagai catatan WHITESPACE di 2 brief (`sap-hyperscaler-c01.brief.md` 2026-08, `cloud-deployment-c01.brief.md` 2026-09), bukan artikel terbit — persis seperti dedup brief
- Subtopic overlap (Jaccard estimate): < 0,12 vs prior terdekat (`iaas-untuk-sap-c01`, `sap-hyperscaler-c01`) — fokus di sini disiplin pemulihan (RPO/RTO, tangga strategi, failover/replikasi), bukan "apa itu IaaS" atau komparasi hyperscaler
- Verdict: **distinct angle confirmed**

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: contoh berhitung RPO/RTO yang langsung bisa dipakai (gangguan 10.30 → online 14.30; backup 10.00, gangguan 10.59 → hilang ≤59 menit), tangga empat strategi dengan label "tipikal menurut AWS, bukan jaminan", disambiguasi jujur backup vs DR vs BCP + "replikasi bukan backup", nuansa SAP HANA yang benar (RPO nol = HA satu region, takeover manual), dan konteks POJK yang akurat tanpa klaim berlebih — plus framing Soltius sebagai implementator tanpa overselling. WEBARQ Promote akan bangga. Satu syarat praktis: pilihan hub internal perlu dikonfirmasi user sebelum publikasi (dan validator menuntaskan plagiarism/AI gate). **Ya → approve.**
