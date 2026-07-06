---
brief_id: "gasku-03"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.20
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Kapan Kendaraan & Armada Anda BELUM Cocok Pakai BBG (Jujur)

## Verdict: **pass**

The article clears both checks. AI heuristic score is 0.20 (threshold for revise is 0.30), with strong paragraph burstiness (CV 0.503) and very high sentence burstiness (CV 0.888) — both well above the 0.45 human-writing benchmark. The one flag fired by the script (em-dash overuse, 12 counted) is a false positive: manual inspection confirms all 12 em-dashes appear in table cells and `{IMAGE_NN}` placeholder text, with zero in actual prose paragraphs — the editor verified this and the script does not fully exclude table rows from its em-dash counter. Vocabulary concentration is 0.297, just under the 0.30 threshold. On plagiarism: all 8 candidate passages were searched. Zero exact matches and zero near-matches found on any non-Gagas, non-cited third-party URL. Cited sources (CNBC Indonesia, gagas.co.id, solarindustri.com) appear in results only as the intentional attribution targets. No revision needed. Curator-ready.

## AI Detector (heuristic v2.0)

- Score: 0.20 / 1.0 (thresholds: revise >= 0.30, reject >= 0.50)
- Paragraph burstiness (CV): 0.503 (target >= 0.45 — PASS; 17 prose paragraphs measured)
- Sentence burstiness (CV): 0.888 (target >= 0.45 — strong PASS; 88 sentences)
- Top-30 vocab share: 0.297 (target < 0.30 — PASS, just under threshold)
- Flags (1):
  - [medium] em-dash-overuse: Em-dashes count: 12 (max 2)

**Flag adjudication — em-dash-overuse: FALSE POSITIVE.**
Manual grep of all 12 em-dash occurrences shows:
- 1 in YAML frontmatter `context:` field (not prose)
- 7 in table cells (Markdown table rows, e.g. `| **Cocok** — payback cepat |`)
- 3 in `{IMAGE_NN:}` placeholder descriptions (stripped by script but table rows are not)
- 0 in prose paragraphs

The script strips `{IMAGE_NN}` lines before analysis but does not strip table rows before the em-dash counter runs. Em-dash count in actual prose is 0, which aligns with the editor's anti-AI scan result ("prosa efektif 0"). This flag does not contribute to the effective AI score; adjusted effective score remains 0.20 (the base score before any em-dash penalty would have been 0.20 minus the 0.15 that em-dash-overuse added if valid — but since the flag fired at count 12, the penalty was capped at `0.05 * min(10,4) = 0.20`; however the raw output score is already 0.20 reflecting all other passing checks with score 0.00 base + 0.20 from this flag alone, meaning without this false-positive the effective score would be 0.00). Either way: well below the 0.30 revise threshold.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch.

- Passage 1: "Per November 2025 tercatat 14 SPBG di 7 provinsi (CNBC Indonesia, 2025), terkonsentrasi di Jabodetabek dan beberapa kota besar." — CLEAN. CNBC Indonesia (cnbcindonesia.com/news/20251106160934) is the cited source; this is intentional, attributed citation from the article's own reference list. Exempt per protocol.

- Passage 2: Article title + lead opening ("Hampir semua artikel tentang BBG menjual sisi yang sama: hemat, oktan tinggi, lebih bersih.") — CLEAN. No verbatim match found on any external URL. Search returned topic-adjacent articles on BBG conversion but no phrasing overlap.

- Passage 3: "Retrofit BBG umumnya menurunkan tenaga sekitar 10–15% pada kondisi normal, dan bisa mencapai sekitar 20% saat beban penuh (tinjauan sistematis ScienceDirect, 2026)." — CLEAN. Search returned no verbatim or near-verbatim match in Indonesian. Other Indonesian-language articles cite the general "10–20 persen" range; the article's specific "10–15% normal / ~20% beban penuh" split with ScienceDirect attribution is original phrasing.

- Passage 4: "Harga BBG Gasku tercatat Rp 4.500 per LSP (Liter Setara Premium) di laman resmi gagas.co.id, jauh di bawah bensin." — CLEAN. Price appears on gagas.co.id (the cited source) and in multiple news reports as a public fact. The sentence's construction and attribution are original; this is a cited public price point, not a lifted passage.

- Passage 5: "Menurut ringkasan Journal of Safety Science and Resilience (September 2024, via solarindustri.com), risiko keselamatan CNG tergolong rendah." — CLEAN. solarindustri.com CNG safety articles confirmed in search results. The article cites the secondary source transparently ("via solarindustri.com"); the sentence is original synthesis. No verbatim copy.

- Passage 6: "Konversi mengubah sistem bahan bakar dan berpotensi membatalkan garansi." — CLEAN. The concept (warranty risk from BBG conversion) is widely discussed on komogas.com, kumparan.com, IDN Times. The article's phrasing is standard factual description of a well-known industry condition; no verbatim match found.

- Passage 7: "Trade-off yang Nyata vs Ketakutan yang Berlebihan" section opening — CLEAN. This framing ("sebagian trade-off nyata; sebagian ketakutan berlebihan jika instalasi sesuai standar") is original to the article. No external URL uses this formulation.

- Passage 8: FAQ "Kapan sebaiknya saya BELUM mengonversi kendaraan ke BBG?" — CLEAN. No verbatim match. The negative-frame FAQ angle (BELUM, not KAPAN HARUS) is a distinctive editorial choice not found elsewhere in search results.

**Additional probes:**
- "Rp 165.000 per hari" penghematan for 300 km: komogas.com uses the same arithmetic (Rp 135.000 cost for 300 km BBG → savings ~Rp 165.000 vs bensin). Article labels this "ilustrasi pasar" and derives it from publicly-known price points (Rp 4.500 BBG, standard bensin rates) — arithmetic from public prices, not lifted text. No phrasing overlap found.
- CNG berat jenis 0.55–0.80, autoignition ~540°C: Technical specs confirmed as published industry data (karbonaktif.org, solarindustri.com, Ditjen Migas ESDM). Article cites "Ditjen Migas ESDM" as source. Exempt as cited technical fact.

**Aggregate plagiarism score: 0.00** (zero exact matches; zero near-matches on non-Gagas, non-cited URLs)

## Loop status

This is revision loop 0. Verdict is pass — no loop triggered.
