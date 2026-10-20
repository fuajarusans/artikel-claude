---
brief_id: "perusahaan-lng-indonesia-05"
researcher_run_date: "2026-08-11"
sources_cited: 13
flags: 7
---

# Research Dossier: Kendala Pasokan LNG dan Cara Mengatasinya di Lapangan

## TL;DR for the writer

- This is a **troubleshooting article** (gejala → penyebab → tindakan), not a safety/hazard piece. Keep the frame on **uptime/keandalan pasokan**, not on cryogenic danger (that's the separate `keselamatan-lng-bahaya-kriogenik-penanganan` article — don't duplicate cold-burn/leak content).
- Five core failure modes to teach, each with a verified mechanism: **boil-off gas (BOG) & venting** (heat leak → tank pressure → relief past MARVS), **pressure drop at peak load** (vaporizer capacity vs demand, often worsened by frost), **ambient-air-vaporizer (AAV) frost/icing** (moist air freezes on fins, degrading heat transfer), **gas-quality/Wobbe-Index mismatch** (unstable burner flame), and **delivery delay / cold-chain scheduling** (holding time vs resupply timing). **Rollover** is a sixth, rarer phenomenon worth one honest mention.
- **Do not invent or generalize numeric rates.** The one hard BOG-rate figure found (0.237%/day) is from an *FSRU-scale academic study (170,000 m³)* — an illustrative example only, not a customer-facility or Gagas-specific number. MARVS values (~0.7 barg) and "holding time up to ~100 days" are marine-carrier / vendor-spec figures, not universal — hedge all of these explicitly in the article.
- **Gagas's LNG role is now well-documented and must stay narrow**: PGN Gagas operates an **LNG Hub** (confirmed: Bandung LNG Hub, groundbreaking Aug 5, 2025) and partners with **PT Nusantara Regas** for LNG break-bulking, ISO-tank/Type-C tank transport, and sale of regasified gas. It is a **downstream distributor**, not a liquefaction plant or FSRU operator. Never use "pionir/pemimpin pasar" — the gagas.co.id landing page itself uses this forbidden phrase; do not source it from there.
- **ISO 45001:2018 is a CNG-distribution certification per company_profile.md — do not present it as an LNG credential.** The LNG anchor should rest on the **24-jam layanan + perhitungan pemakaian akurat** positioning line and the confirmed LNG Hub/Nusantara Regas facts, not on ISO 45001.

---

## Core facts (verified)

> **Claim**: Boil-off gas (BOG) forms because heat continuously leaks into a cryogenic LNG tank from the environment, causing some liquid to evaporate.
> **Number/specific**: LNG is stored at approximately −162°C; any heat ingress causes continuous evaporation that raises tank vapor pressure if unmanaged.
> **Source**: Margono, Hanif Nur Fauzi (2020), *"Kajian Kelayakan Pemilihan Teknologi Reliquefaction Plant atau MSO Compressor Sebagai Alternatif Pemanfaatan Boil Off Gas (BOG) Pada FSRU 170.000 m³"*, Jurnal Teknik ITS — repository.its.ac.id/80451/ (also mirrored at neliti.com/publications/509224), accessed 2026-08-11.
> **Confidence**: high (mechanism is standard cryogenic-storage physics, confirmed by an Indonesian peer-institution engineering thesis).

> **Claim**: If BOG is not managed, tank pressure can rise past the design limit and the tank's pressure-relief system releases gas to atmosphere (venting) to protect the tank.
> **Number/specific**: Venting is triggered when internal pressure approaches the tank's relief-valve setting; described in LNG-industry technical literature as a safety measure, not a routine operating target.
> **Source**: Aggregated technical literature (ScienceDirect: "Model based analysis of the boil-off gas management and control for LNG fuelled vessels"; UNECE working paper "What is boil-off?", LNG_TF-02-06e) via WebSearch synthesis, accessed 2026-08-11.
> **Confidence**: medium-high (mechanism consistent across multiple technical sources; full-text UNECE PDF could not be fetched directly — 403 — so treat as corroborated-by-search-synthesis rather than directly verified full text).

> **Claim**: MARVS (Maximum Allowable Relief Valve Setting) is the maximum pressure at which a cargo/storage tank's relief valve is set to operate — i.e., the ceiling that defines when venting occurs.
> **Number/specific**: For marine LNG containment (atmospheric-type tanks under the IGF Code), MARVS is commonly cited at around 0.7 barg. This is a **marine-carrier design figure**, not necessarily the value for land-based ISO tanks or a customer's on-site storage.
> **Source**: Wärtsilä Encyclopedia — "MARVS" (wartsila.com/encyclopedia/term/marvs); AcronymFinder / marinepublic.com industry glossaries, accessed 2026-08-11.
> **Confidence**: medium (concept is high-confidence; the specific 0.7 barg figure is scoped to marine carriers and should not be stated as universal — see Flags).

> **Claim**: BOG can be managed through reliquefaction (recompressing and re-cooling the vapor back to liquid), consumption as fuel, or (in some marine/FSRU contexts) routing into a pipeline system.
> **Number/specific**: In the cited FSRU case study (170,000 m³ vessel), a Wärtsilä HGS Mark III reliquefaction plant (capacity 7,000 kg/hour) was compared against an MSO compressor routing option (10,000 kg/hour) — reliquefaction was found technically preferable for sustained operation despite higher capex/opex.
> **Source**: Margono (2020), ITS Repository / Neliti, as above.
> **Confidence**: high for the mechanism; the specific figures are **explicitly FSRU-scale** and must be framed as an illustrative example, not a general or customer-facility number.

> **Claim**: LNG rollover is a rare but real phenomenon: stratified layers of LNG with different density/temperature in the same tank can suddenly mix, causing a sharp spike in boil-off gas.
> **Number/specific**: During rapid mixing, boil-off rate can increase roughly 20-fold, potentially exceeding the tank's vapor-discharge capacity; a reduced boil-off rate beforehand is cited as an early warning sign. At least 24 LNG rollover incidents have been documented in the literature since 1960.
> **Source**: "Rollover Prevention Model for Stratified Liquefied Natural Gas in Storage Tanks," *Energies* (MDPI), doi.org/10.3390/en16227666; corroborated by Skuld (P&I Club) — "LNG Stratification & Rollover," skuld.com/topics/cargo/liquid-bulk/lng-stratification--rollover/ (fetched directly), accessed 2026-08-11.
> **Confidence**: high for the mechanism and warning-sign description (Skuld page fetched directly); medium for the exact "24 incidents since 1960" count (secondary aggregation — attribute as a literature figure, not a verified registry count).

> **Claim**: Rollover prevention in practice centers on tank-filling discipline — comparing incoming cargo density against the existing heel before loading, using top-fill vs bottom-fill depending on relative density, and avoiding unmanaged mixing in near-empty tanks.
> **Number/specific**: Skuld cites a "less than 800 m³" heel as a specific risk threshold for mixing when loading nearly-empty tanks (marine-scale context).
> **Source**: Skuld — "LNG Stratification & Rollover," fetched directly 2026-08-11.
> **Confidence**: high (directly fetched from a maritime P&I club technical resource); note this is carrier/terminal-tank-management practice, more relevant to explaining *why* rollover happens than to a HORECA/industrial LNG Hub customer's own actions.

> **Claim**: Ambient Air Vaporizers (AAV) — a common regasification method that uses heat from ambient air to turn LNG back into gas — are prone to frost/ice formation on their finned tubes, which degrades heat-transfer efficiency and reduces vaporizer capacity over time.
> **Number/specific**: Ice tends to form unevenly, concentrated near the inlet; fully frosted AAVs become largely ineffective and require periodic defrosting; some installations show on-off operational instability caused by frosting cycles.
> **Source**: ScienceDirect — "Frost formation criterion framework for ambient air vaporizers integrating inter-fin mainstream air temperature correction" (2025); "Air-side heat transfer characteristics of ambient air vaporizers... under cryogenic frosting conditions," accessed via WebSearch synthesis 2026-08-11.
> **Confidence**: high (mechanism consistent across multiple peer-reviewed/technical sources; specific figures not independently full-text verified — treat quantitative claims as illustrative).

> **Claim**: Wobbe Index is the standard engineering measure of fuel-gas interchangeability on a given burner — gases with the same Wobbe Index deliver the same thermal output through a fixed burner orifice.
> **Number/specific**: If incoming gas composition shifts enough that its Wobbe Index diverges materially from the value the burner was set up for, the burner will not retain its designed thermal capacity and may need re-adjustment (symptom: unstable or inefficient flame).
> **Source**: The Engineering ToolBox — "Fuel Gases - Wobbe Index" (engineeringtoolbox.com/wobbe-index-d_421.html); Wikipedia "Wobbe index" (cross-check), accessed 2026-08-11.
> **Confidence**: high for the concept (standard, well-established combustion-engineering principle); **no specific tolerance percentage should be asserted** for Indonesia — see Flags.

> **Claim**: Indonesia's energy regulator (Ditjen Migas, Kementerian ESDM) has formal authority over the quality/spec ("mutu/spesifikasi") of gas bumi that is commercially traded and distributed, alongside licensing and continuity-of-supply oversight.
> **Number/specific**: Ditjen Migas's stated scope includes "standar dan mutu (spesifikasi) gas bumi yang diniagakan dan kaidah keteknikan yang baik" (quality/spec standards for traded natural gas and sound engineering practice).
> **Source**: Kementerian ESDM / Ditjen Migas — "Permen ESDM Tentang Kegiatan Usaha Gas Bumi Melalui Pipa," migas.esdm.go.id/post/read/Permen-ESDM-Tentang-Kegiatan-Usaha-Gas-Bumi-Melalui-Pipa, fetched directly 2026-08-11.
> **Confidence**: high (directly fetched, primary regulator source); this source confirms *regulatory authority over quality*, not a specific Wobbe Index tolerance number.

> **Claim**: Indonesia's national downstream gas infrastructure master plan explicitly includes LNG and CNG facilities (not just pipelines) as recognized distribution modalities.
> **Number/specific**: The Rencana Induk Jaringan Transmisi dan Distribusi Gas Bumi Nasional (RIJTDGBN) 2022–2031 lists "fasilitas Liquefied Natural Gas (LNG), fasilitas Compressed Natural Gas (CNG)" alongside transmission/distribution pipelines as planned infrastructure categories, an update from the prior 2012 master plan.
> **Source**: Kementerian ESDM / Ditjen Migas, published 13 March 2023 — migas.esdm.go.id, "...Rencana Induk Jaringan Transmisi dan Distribusi Gas Bumi Nasional (RIJTDGBN) 2022-2031," fetched directly 2026-08-11.
> **Confidence**: high (directly fetched, primary regulator source, dated).

> **Claim**: An LNG ISO tank is a cryogenic, double-walled, vacuum-insulated container built to hold LNG at approximately −162°C during "virtual pipeline" (beyond-pipeline) distribution by truck, ship, or rail.
> **Number/specific**: Standard modules are 20–40 feet, holding roughly 20,000–40,000 liters, described by PGN LNG as functioning "like a giant thermos."
> **Source**: PT PGN LNG Indonesia — "LNG ISO Tank: A Smart Solution for Flexible Distribution," pgnlng.co.id/en/berita/learn/iso-tank/, fetched directly 2026-08-11.
> **Confidence**: high (fetched directly from a PGN-group technical resource; note pgnlng.co.id is a *sister* PGN entity, not PGN Gagas itself — attribute correctly, don't conflate).

> **Claim**: "Holding time" is the industry term for how long a well-insulated LNG tank can hold cargo before internal vapor pressure builds enough to require venting.
> **Number/specific**: Industry/vendor sources describe holding times of "more than 75 days" at ~80% fill for typical tank designs, and ISO tank containers specifically cited as offering hold times "of up to 100 days" depending on insulation and fill level.
> **Source**: Aggregated trade/industry sources (Riviera Maritime Media, cheresources.com community references) via WebSearch synthesis, accessed 2026-08-11.
> **Confidence**: low-medium — these are vendor/trade-press figures, not a peer-reviewed or regulator source, and not confirmed against PGN Gagas's own equipment. **Treat as an indicative range only** — see Flags.

> **Claim**: PGN Gagas operates an LNG Hub as downstream distribution infrastructure and has formally partnered with PT Nusantara Regas to develop LNG break-bulking, LNG transport via ISO tank/Type-C tank, and sale of regasified gas.
> **Number/specific**: Groundbreaking of the Bandung LNG Hub occurred 5 August 2025, with PGN CEO Arief S. Handoko and Gagas CEO Santiaji Gunawan both quoted; reported target capacity ~15,000 MMBTU/month (≈0.5 BBTUD), aimed at the HOREKA/hospitality and industrial sectors in Bandung and South West Java.
> **Source**: ANTARA News — "PGN Gagas perkuat layanan gas bumi bagi sektor horeka di Bandung," antaranews.com/berita/5016865, fetched directly 2026-08-11; corroborated by Radar Bandung and Ecobiz Asia coverage of the same event (same date/officials), accessed via WebSearch 2026-08-11.
> **Confidence**: high for the *role/partnership facts* (multiple independent outlets, officials named, dated); medium for the *capacity figure* specifically — it is a groundbreaking-day press figure, likely a planned/target capacity rather than a confirmed operating throughput as of this writing — see Flags.

> **Claim**: PGN Gagas's own confirmed LNG-related infrastructure, per its company profile, is limited to "LNG Hub" as a piece of infrastructure — the profile does **not** establish Gagas as a liquefaction producer, FSRU operator, or full "perusahaan LNG."
> **Number/specific**: Company profile lists Mother Station, LNG Hub, SPBG, and MRU as Gagas's infrastructure categories, explicitly flagging that Gagas's LNG-chain role must be verified before any "LNG company" framing.
> **Source**: `knowledge_base/company_profile.md` (internal, pre-approved) — cross-checked against the Antara News/Nusantara Regas reporting above, which independently confirms a downstream/distribution role (break-bulking, ISO tank transport, regasified-gas sale) rather than production/liquefaction.
> **Confidence**: high (internal KB + external corroboration align).

> **Claim**: ISO 45001:2018 (Occupational Health & Safety Management System) is PGN Gagas's certification specifically **"untuk layanan distribusi CNG"** (for CNG distribution services), per the company profile — it is not documented as covering LNG operations.
> **Number/specific**: Certified 2025, alongside ISO 9001:2015 (QMS) and ISO 37001:2016 (Anti-Bribery Management System), which are general/corporate-wide, not LNG-specific.
> **Source**: `knowledge_base/company_profile.md` (internal, pre-approved), accessed 2026-08-11.
> **Confidence**: high (explicit KB wording) — **critical constraint**: do not cite ISO 45001 as an LNG-reliability credential in this article (matches the brief's LNG-framing guard).

> **Claim**: The gagas.co.id landing page for "Perusahaan LNG Indonesia" itself uses forbidden framing ("pionir dan pemimpin pasar / market leader dalam distribusi gas bumi ritel") that contradicts the company's own blacklist.
> **Number/specific**: N/A — this is a content-governance finding, not a factual claim to reuse.
> **Source**: gagas.co.id/perusahaan-lng-indonesia (per this month's cached strategist research, `monthly_runs/2026-08/research/perusahaan-lng-indonesia.research.json`, captured 2026-08-11) cross-checked against `knowledge_base/company_profile.md` blacklist section.
> **Confidence**: high — this is a direct instruction to the writer, not a claim about the world.

---

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG/LNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Mekanisme BOG & venting (heat leak → tekanan tangki → MARVS → katup pelepas) | BOG dari rembesan panas ke tangki kriogenik; venting adalah katup pengaman, bukan operasi normal; kelola via konsumsi terjadwal / reliquefaction pada skala tertentu (FSRU-scale contoh, bukan angka umum) | H2 #2 | (vendor-neutral; no Gagas mention needed here) |
| Drop tekanan saat beban puncak & frost AAV | Kapasitas vaporizer vs permintaan; AAV rentan frost karena kelembapan udara membeku di sirip, menurunkan efisiensi transfer panas | H2 #3 | Optional aside: dukungan teknis Gagas saat komisioning sizing (light touch, not a claim of specific service spec) |
| Tabel diagnostik gejala→penyebab→solusi (BOG, tekanan, frost, Wobbe, keterlambatan, rollover) | Lihat tabel diagnostik di bawah — kualitatif, tanpa angka karangan | H2 #4 (tabel) | (vendor-neutral teaching section; no self-mention needed) |
| Menjaga kontinuitas: holding time, buffer, koordinasi pemasok, transparansi volume BOG | Holding time = konsep (indikatif "puluhan hari" tergantung insulasi/isi — hedge angka); siapa menanggung losses BOG perlu kejelasan kontrak/SLA | H2 #5 | **PGN Gagas — layanan 24 jam & perhitungan pemakaian akurat**, sebagai mitra kontinuitas pasok & transparansi volume. Framing: penyalur/pendukung pasokan hilir yang mengoperasikan **LNG Hub** (mis. Bandung, groundbreaking Agustus 2025) bersama mitra midstream (PT Nusantara Regas) — BUKAN produsen/FSRU. |
| Kapan masalah bukan LNG-nya (undersizing, jadwal tak realistis, SDM belum terlatih) | Perencanaan sistem pelanggan sering jadi akar masalah, bukan bahan bakarnya | H2 #6 | (honest section; no self-mention needed, keeps credibility) |

Reminder: max 2–3 PGN Gagas self-mentions. Suggested placement: one aside in H2 #3 or #5 (technical support), main anchor in the closing/CTA. **Never** state Gagas performs liquefaction, operates an FSRU, or is a "pionir/pemimpin pasar." **Never** cite ISO 45001 for LNG.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM / Ditjen Migas — RIJTDGBN 2022–2031 (13 Maret 2023)** — migas.esdm.go.id/post/read/dukung-pengembangan-infrastruktur-hilir-gas-bumi-menteri-esdm-tetapkan-rencana-induk-jaringan-transmisi-dan-distribusi-gas-bumi-nasional-rijtdgbn-2022-2031 — *what it backs*: LNG and CNG facilities are formally recognized downstream distribution infrastructure in Indonesia's national gas master plan, alongside pipelines — good context for why cold-chain/beyond-pipeline continuity matters nationally.
2. **Kementerian ESDM / Ditjen Migas — Permen ESDM tentang Kegiatan Usaha Gas Bumi Melalui Pipa** — migas.esdm.go.id/post/read/Permen-ESDM-Tentang-Kegiatan-Usaha-Gas-Bumi-Melalui-Pipa — *what it backs*: the regulator's formal authority over gas-quality/spec standards and continuity-of-supply oversight — supports the Wobbe/gas-quality section without needing an invented tolerance number.
3. **ANTARA News (5 Agustus 2025) — PGN Gagas Bandung LNG Hub / Nusantara Regas partnership** — antaranews.com/berita/5016865/pgn-gagas-perkuat-layanan-gas-bumi-bagi-sektor-horeka-di-bandung — *what it backs*: PGN Gagas's actual, confirmed LNG role (downstream distributor operating an LNG Hub, partnered with Nusantara Regas for break-bulking/ISO-tank transport/regasified-gas sale) — the primary source for the LNG-framing guard.
4. **Jurnal Teknik ITS / ITS Repository (2020) — Margono, "Kajian... Boil Off Gas (BOG) Pada FSRU 170.000 m³"** — repository.its.ac.id/80451/ — *what it backs*: peer-institution technical grounding for the BOG mechanism and management-options discussion (framed explicitly as an FSRU-scale illustrative example, not a customer-facility number).

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu boil-off gas pada LNG dan bagaimana cara mengelolanya?
Boil-off gas (BOG) adalah gas alam yang menguap dari LNG di dalam tangki kriogenik akibat rembesan panas dari lingkungan, meski tangki berinsulasi baik. Jika dibiarkan, tekanan tangki naik dan sebagian gas harus dilepas lewat katup pengaman (venting). Pengelolaannya umumnya lewat percepatan konsumsi, penjadwalan pasokan yang rapi, atau — pada skala besar seperti FSRU — reliquefaction (mendinginkan kembali gas menjadi cair).

### Mengapa tekanan gas bisa turun saat beban pemakaian sedang tinggi?
Penurunan tekanan saat beban puncak umumnya terjadi karena kapasitas vaporizer (alat pengubah LNG cair menjadi gas) tidak mengejar laju kebutuhan saat itu, apalagi bila sebagian unit sedang mengalami penurunan efisiensi akibat frost. Solusinya biasanya berupa penyesuaian ukuran/kapasitas vaporizer, penjadwalan defrost berkala, dan menyiapkan kapasitas cadangan untuk jam-jam beban tinggi.

### Kenapa vaporizer LNG bisa membeku (frost/icing)?
Ambient Air Vaporizer (AAV) menyerap panas dari udara sekitar untuk menguapkan LNG yang sangat dingin (sekitar −162°C). Proses perpindahan panas terus-menerus ini membuat uap air di udara membeku menjadi lapisan es pada sirip-sirip logamnya, sehingga efisiensi transfer panas dan kapasitas vaporizer menurun. Solusi umum: defrost berkala atau bergantian antar-unit agar pasokan tidak terputus total.

### Apa itu venting pada sistem LNG dan bagaimana menghindarinya?
Venting adalah pelepasan gas ke atmosfer lewat katup pengaman ketika tekanan di dalam tangki mendekati atau melewati batas maksimum yang diizinkan (MARVS). Ini adalah mekanisme keselamatan, bukan kondisi operasi normal. Cara menguranginya: kelola konsumsi dan jadwal pengisian ulang agar selaras dengan laju boil-off, serta jaga integritas insulasi tangki agar rembesan panas — dan BOG — tetap minimal.

### Apa itu rollover pada tangki LNG dan seberapa sering terjadi?
Rollover adalah percampuran mendadak dua lapisan LNG dengan densitas dan suhu berbeda di dalam satu tangki, yang bisa memicu lonjakan laju boil-off secara tajam hingga berisiko melebihi kapasitas pelepasan tekanan tangki. Fenomena ini relatif jarang dan lebih terkait pengelolaan pengisian tangki (misalnya mencampur kargo tanpa memperhitungkan densitas) daripada aktivitas rutin pelanggan di lokasi.

### Bagaimana menjaga pasokan LNG tetap kontinu di lokasi pelanggan?
Kontinuitas pasokan LNG umumnya dijaga lewat kombinasi: kapasitas tangki/holding time yang sesuai pola konsumsi, buffer stok untuk mengantisipasi keterlambatan pengiriman, koordinasi jadwal pengiriman ISO tank dengan pemasok, serta kejelasan siapa menanggung kehilangan volume akibat BOG dalam kontrak. Respons cepat pemasok saat ada gangguan juga menjadi faktor penting.

### Apa bedanya kendala pasokan LNG dengan CNG dari sisi operasional?
LNG melibatkan rantai dingin kriogenik (tangki, vaporizer, ISO tank) yang memunculkan titik gangguan spesifik seperti BOG, frost vaporizer, dan rollover — hal-hal yang tidak relevan pada CNG karena CNG disimpan dalam bentuk gas terkompresi pada suhu ruang, bukan cairan sangat dingin. Sebagai gantinya, CNG punya titik gangguan sendiri seperti tekanan tabung dan jadwal pengisian ulang kaskade.

---

## Data tables for the writer

### Tabel Diagnostik: Gejala → Kemungkinan Penyebab → Tindakan

| Gejala | Kemungkinan Penyebab | Tindakan Umum |
|---|---|---|
| BOG menumpuk / venting sering terjadi | Rembesan panas ke tangki meningkat (insulasi menurun, LNG lama tak terpakai, level pengisian rendah) | Percepat/jadwalkan konsumsi selaras laju boil-off; evaluasi reliquefaction bila skala besar; cek integritas insulasi tangki |
| Tekanan gas turun saat beban puncak | Kapasitas vaporizer tidak mengejar laju permintaan (undersized) dan/atau sebagian unit AAV membeku | Sizing ulang / tambah unit vaporizer paralel; jadwalkan defrost bergantian; siapkan kapasitas cadangan |
| Vaporizer membeku (frost/icing) | Kelembapan udara mengembun & membeku di sirip AAV akibat perpindahan panas kriogenik terus-menerus | Defrost berkala/bergantian antar-unit; pantau beda suhu masuk-keluar sebagai indikator dini |
| Nyala/alat pembakaran tak stabil | Ketidaksesuaian Wobbe Index gas terhadap setelan burner (komposisi/sumber pasokan berubah) | Verifikasi spesifikasi mutu gas dengan pemasok; kalibrasi ulang burner bila sumber pasokan berubah signifikan |
| Pengiriman ISO tank terlambat | Penjadwalan rute/cold-chain meleset; kendala armada, cuaca, atau jarak tempuh | Tentukan buffer stok berdasarkan holding time tangki; koordinasikan jadwal dengan pemasok; perjelas SLA respons waktu |
| Rollover tangki (jarang, berisiko tinggi) | Percampuran mendadak lapisan LNG berbeda densitas/suhu akibat pengisian tak sesuai prosedur | Ikuti prosedur pengisian sesuai densitas (top/bottom fill); pantau profil suhu; hindari mixing tak terkendali pada tangki nyaris kosong |

### LNG (rantai dingin) vs CNG — titik gangguan operasional

| Aspek | LNG | CNG |
|---|---|---|
| Bentuk penyimpanan | Cair, kriogenik (~−162°C) | Gas terkompresi, suhu ruang |
| Titik gangguan khas | BOG/venting, frost vaporizer, rollover | Tekanan tabung, jadwal pengisian ulang kaskade |
| Perangkat kunci | Tangki kriogenik, vaporizer (AAV dll.), ISO tank | Tabung/kaskade tekanan tinggi, GTM, Mother Station |
| Sensitivitas terhadap kelembapan/iklim | Tinggi (frost pada vaporizer) | Rendah |
| Cocok untuk | Volume besar, jarak jauh, kebutuhan panas proses tinggi | Volume menengah, jarak lebih dekat, kebutuhan lebih fleksibel |

---

## Edge cases & nuance

- **Skala membedakan segalanya.** Contoh BOG 0,237%/hari dan MARVS 0,7 barg berasal dari konteks FSRU/kapal — jauh lebih besar dari tangki/ISO tank di lokasi pelanggan HOREKA atau industri kecil-menengah. Jangan menyamakan skala; sajikan sebagai ilustrasi mekanisme, bukan patokan angka pelanggan.
- **Rollover jarang relevan langsung bagi pelanggan akhir.** Ini lebih soal disiplin pengisian di sisi kapal/terminal/tangki besar. Cukup disebut sebagai bagian dari "kenapa BOG bisa melonjak tiba-tiba", bukan sebagai risiko harian yang harus diwaspadai operator fasilitas kecil.
- **"Holding time hingga ~100 hari" adalah figur vendor/industri, bukan janji layanan** — tergantung ukuran tangki, insulasi, dan tingkat pengisian. Jangan menyajikannya sebagai garansi.
- **Wobbe Index**: konsepnya solid dan diakui global, tapi jangan mengarang angka toleransi (mis. "±10%") untuk konteks Indonesia — sumber yang ditemukan untuk angka tersebut berotoritas rendah. Cukup jelaskan prinsip: gas dengan Wobbe Index berbeda signifikan dari setelan burner bisa membuat nyala tak stabil.
- **Gagas ≠ produsen/FSRU.** Bahkan dengan berita LNG Hub Bandung (Agustus 2025) dan kemitraan Nusantara Regas, peran Gagas tetap di sisi hilir: break-bulking, transportasi ISO tank, dan niaga gas hasil regasifikasi — bukan likuifaksi atau operasi FSRU.
- **Landing page klien sendiri memakai framing terlarang** ("pionir dan pemimpin pasar") — ini kemungkinan sisa konten lama yang belum disesuaikan dengan blacklist company_profile.md. Jangan jadikan rujukan gaya bahasa.

---

## Flags (open factual risk)

- ⚠️ **Angka laju BOG (0,237%/hari)**: hanya bersumber dari satu studi akademik skala FSRU 170.000 m³ (ITS, 2020). Rekomendasi: gunakan hanya sebagai contoh ilustratif berskala FSRU yang disebutkan eksplisit, jangan digeneralisasi ke tangki/ISO tank pelanggan.
- ⚠️ **Nilai MARVS ~0,7 barg**: spesifik untuk tangki tipe atmosferik pada kapal LNG di bawah IGF Code. Tangki darat/ISO tank bisa punya nilai desain berbeda. Rekomendasi: jelaskan MARVS sebagai *konsep* (batas atas tekanan yang memicu pelepasan katup), hindari menyebut angka 0,7 barg sebagai berlaku universal.
- ⚠️ **"Holding time hingga ~100 hari"**: berasal dari sumber vendor/media dagang (Riviera Maritime Media dan sejenisnya), bukan badan standar atau sumber primer, dan belum dikonfirmasi terhadap peralatan milik Gagas. Rekomendasi: frasakan sebagai kisaran indikatif industri ("dapat mencapai puluhan hingga ratusan hari tergantung insulasi dan tingkat pengisian"), jangan sebagai janji layanan.
- ⚠️ **Toleransi Wobbe Index (mis. "±10%")**: sumber yang ditemukan berotoritas rendah (bukan dari ESDM langsung). Rekomendasi: jelaskan prinsip Wobbe Index tanpa menyebut angka toleransi spesifik untuk Indonesia.
- ⚠️ **Kapasitas LNG Hub Bandung (~15.000 MMBTU/bulan, ~0,5 BBTUD)**: figur ini muncul dari pemberitaan seremoni groundbreaking 5 Agustus 2025 — kemungkinan besar merupakan target/kapasitas rencana, bukan throughput operasional yang telah terkonfirmasi saat artikel ini ditulis. Rekomendasi: jika dipakai, atribusikan jelas ke pemberitaan Agustus 2025 dan hindari menyatakannya sebagai kapasitas berjalan tanpa verifikasi ulang tanggal publikasi.
- ⚠️ **"Sedikitnya 24 insiden rollover LNG sejak 1960"**: angka agregat dari literatur akademik sekunder (jurnal Energies/MDPI), bukan basis data primer yang diverifikasi langsung. Rekomendasi: jika dipakai, atribusikan sebagai figur dari literatur keselamatan LNG, bukan sebagai statistik resmi berjalan.
- ⚠️ **Cakupan LNG Hub Gagas**: yang terkonfirmasi baru LNG Hub Bandung (kemitraan dengan Nusantara Regas, Agustus 2025) plus "LNG Hub" generik di company_profile.md. Rekomendasi: jangan menyiratkan Gagas mengoperasikan banyak LNG Hub di berbagai kota kecuali ada verifikasi tambahan — cukup sebut "LNG Hub" tanpa klaim jumlah/lokasi lain.

---

## Definition snippet draft (40–60 words)

> **Boil-off gas** (BOG) adalah gas alam yang menguap secara alami dari LNG (Liquefied Natural Gas) di dalam tangki kriogenik akibat rembesan panas dari lingkungan ke cairan bersuhu sekitar −162°C. Bila tak dikelola, BOG menaikkan tekanan tangki hingga melewati batas aman (MARVS) dan memicu pelepasan gas lewat katup pengaman (venting).

(53 words)

---

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram mekanisme BOG**: Ilustrasi potongan-melintang tangki kriogenik LNG dengan panah kecil menandai rembesan panas dari luar masuk ke dinding tangki berinsulasi, gauge tekanan yang naik secara bertahap, dan katup pelepas tekanan (relief valve) di puncak tangki dengan label "MARVS = batas tekanan maksimum". Gaya diagram teknis-bersih, palet biru-dingin (LNG) kontras oranye tipis untuk panah panas; teks Bahasa Indonesia singkat pada tiap elemen ("rembesan panas", "tekanan naik", "katup pengaman/venting"). Alt-text: "Diagram mekanisme boil-off gas dan venting pada tangki LNG kriogenik."
- **Concept 2 — Infografis tabel diagnostik (screenshot-friendly)**: Versi visual dari tabel Gejala → Penyebab → Tindakan, disusun sebagai 6 kartu/baris dengan ikon berbeda per gejala (kepingan es untuk frost vaporizer, jarum gauge untuk drop tekanan, truk dengan jam untuk keterlambatan pengiriman, gelombang ganda untuk rollover, api tak stabil untuk mismatch Wobbe, awan gas untuk BOG/venting). Palet warna netral korporat dengan aksen biru PGN Gagas; ringkas agar mudah dibagikan/screenshot. Alt-text: "Tabel diagnostik gejala, penyebab, dan tindakan mengatasi kendala pasokan LNG."
- **Concept 3 — Peta rantai dingin dari LNG Hub ke pelanggan**: Ilustrasi alur horizontal sederhana: LNG Hub (ikon tangki + fasilitas) → truk ISO tank/virtual pipeline → lokasi pelanggan (ikon pabrik/hotel/rumah sakit) → vaporizer di lokasi → titik pemakaian, dengan ikon peringatan kecil (segitiga kuning) ditempatkan di titik-titik rawan gangguan (tangki: BOG; truk: keterlambatan; vaporizer: frost/tekanan). Tujuan: membantu pembaca memetakan di mana masalah biasanya muncul di sepanjang rantai. Alt-text: "Peta rantai pasok LNG beyond-pipeline dari LNG Hub hingga lokasi pelanggan dengan titik rawan gangguan."
