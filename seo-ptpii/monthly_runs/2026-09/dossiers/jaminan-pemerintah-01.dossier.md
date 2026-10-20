---
brief_id: "jaminan-pemerintah-01"
researcher_run_date: "2026-09-17"
sources_cited: 16
flags: 7
---

# Research Dossier: Jaminan Pemerintah KPBU — Di Mana Tercatat dalam APBN?

## TL;DR for the writer

- **The core distinction holds and is now grounded in primary legal text, not a portal paraphrase.** An uncalled government guarantee is a *kewajiban kontinjensi* (contingent liability): defined verbatim in PSAP 09 (Lampiran PP 71/2010) as a potential obligation not recognised because an outflow is "not probable" and/or "cannot be measured reliably." It is **diungkapkan** (disclosed in notes), not **diakui** (recognised as debt on the neraca), until those two conditions flip.
- **I found the primary source for the "disclosed in APBN" principle directly in Perpres 78/2010 itself** — not just in secondary commentary. Pasal 18(3): a counter-guarantee's resulting *kewajiban kontijensi* "**harus dilaporkan dalam APBN**." And Pasal 23(a): the guarantor (BUPI/PT PII) is under a *legal obligation* to submit a **quarterly** ("triwulanan") "laporan pengelolaan pengendalian kewajiban kontijensi" to the Ministry of Finance. This is the strongest, most citable anchor for the whole article.
- **All four candidate exposure-control levers found primary-law grounding** — described qualitatively below, with no gearing ratio or ceiling number (per the brief's hard constraint). A fifth, previously-unlisted regulation surfaced during research: **PMK 69/2023** ("Tata Cara Pengelolaan Dana Cadangan Penjaminan untuk Pelaksanaan Kewajiban Penjaminan Pemerintah"), berlaku, established 12 Juli 2023 — this is the direct legal home of "dana cadangan penjaminan."
- **The co-guarantee (Penjaminan Bersama) trigger is precisely stated in Perpres 78/2010 Pasal 7**: it fires when a guarantee proposal is otherwise eligible but its value would push BUPI past its own capital adequacy. PMK 68/2024 has since formalised "Penjaminan Pemerintah" as consisting of two forms: **Penjaminan Bersama** and **Penjaminan BUPI**.
- **No dated guarantee-exposure figure was extracted.** Both attempts at the DJPPR media API (the Nota Keuangan fiscal-risk chapter PDF) failed with `ECONNREFUSED`, confirming August's researcher had the same problem. Assert no number — describe the reporting channels, not a value.
- **One accuracy correction for the writer**: a Kemenkeu portal page's claim that "regres tidak berlaku" when a Kementerian/Lembaga is PJPK appears to **conflict** with Perpres 78/2010 Pasal 15(2), which says regres in that case is fulfilled *through the APBN mechanism* — that is regres applying via budget, not regres being switched off. Do not reuse the portal's "tidak berlaku" framing if regres is mentioned at all.

---

## Core facts (verified)

> **Claim**: Legal definition of Penjaminan Infrastruktur (the formal name for "jaminan pemerintah" in KPBU projects)
> **Number/specific**: "Penjaminan Infrastruktur adalah pemberian jaminan atas Kewajiban Finansial Penanggung Jawab Proyek Kerja Sama yang dilaksanakan berdasarkan Perjanjian Penjaminan" — with Kewajiban Finansial PJPK defined as "kewajiban untuk membayar kompensasi finansial kepada Badan Usaha atas terjadinya Risiko Infrastruktur yang menjadi tanggung jawab pihak [PJPK] sesuai dengan Alokasi Risiko sebagaimana disepakati dalam Perjanjian Kerja Sama" — **Perpres No. 78 Tahun 2010, Pasal 1 angka 1–2**
> **Source**: Perpres 78/2010 full text, fetched via peraturan.go.id/files/ps78-2010.pdf, 2026-09-17
> **Confidence**: high — this is the primary regulation text itself, an upgrade over the kpbu.kemenkeu.go.id portal's paraphrase (which the cached research already flagged as the version circulating on the portal). **Recommend the definition snippet use this Perpres-1 wording as its anchor**, not the portal's rewording — they are substantively identical but this is the primary source.

> **Claim**: Foundational principle governing why/how Penjaminan Infrastruktur is administered
> **Number/specific**: "Penjaminan Infrastruktur dilaksanakan sesuai dengan prinsip-prinsip pengendalian dan pengelolaan risiko keuangan negara guna menjaga kesinambungan APBN (*fiscal sustainability*)" — **Perpres 78/2010, Pasal 2 huruf a**
> **Source**: same PDF as above, 2026-09-17
> **Confidence**: high — verbatim primary text. This is the best available primary-source anchor for "kebijakan pengelolaan kewajiban penjaminan" as a named control lever — it is literally the opening operating principle of the regulation.

> **Claim**: Definition of *kewajiban kontinjensi* (contingent liability) in Indonesian government accounting standards
> **Number/specific**: "Kewajiban kontinjensi adalah: (a) kewajiban potensial yang timbul dari peristiwa masa lalu dan keberadaannya menjadi pasti dengan terjadinya atau tidak terjadinya suatu peristiwa atau lebih pada masa datang yang tidak sepenuhnya berada dalam kendali suatu entitas; atau (b) kewajiban kini yang timbul sebagai akibat masa lalu, tetapi tidak diakui karena: (1) tidak terdapat kemungkinan besar (*not probable*) suatu entitas mengeluarkan sumber daya yang mengandung manfaat ekonomis untuk menyelesaikan kewajibannya; atau (2) jumlah kewajiban tersebut tidak dapat diukur secara andal." — **PSAP 09, paragraf 5** (Lampiran II.10, PP 71 Tahun 2010, tanggal 22 Oktober 2010)
> **Source**: ksap.org/pp 71/LAMPIRAN2/lampiran2_10.pdf, fetched and read directly (full PDF text extracted), 2026-09-17
> **Confidence**: high on the definition text itself (verbatim primary standard, not a paraphrase — this resolves the priority-1 flag in the brief). **Important nuance, see Flags**: this specific annex is Lampiran II (SAP Berbasis Kas Menuju Akrual), which paragraf 86 states was applicable "sampai dengan tahun anggaran 2014" — i.e., a transitional basis. The parallel Lampiran I (SAP Berbasis Akrual, the currently governing basis since full accrual became mandatory) could not be independently re-fetched this run (see Flags). The definition is near-certainly structurally identical across both annexes per standard KSAP drafting practice, but this has not been independently confirmed for Lampiran I specifically.

> **Claim**: General recognition criterion for a liability (the flip side of the contingent-liability definition — this is what "crossing into recognised" means)
> **Number/specific**: "Pelaporan keuangan untuk tujuan umum harus menyajikan kewajiban yang diakui jika besar kemungkinan bahwa pengeluaran sumber daya ekonomi akan dilakukan atau telah dilakukan untuk menyelesaikan kewajiban yang ada sampai saat ini, dan perubahan atas kewajiban tersebut mempunyai nilai penyelesaian yang dapat diukur dengan andal." — **PSAP 09, paragraf 18**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim. Read together with the paragraf 5 definition above, this is the primary-text basis for the article's central claim: a contingent liability becomes a recognised liability precisely when the outflow becomes *probable* and the amount becomes *reliably measurable* — the mirror image of paragraf 5(b)(1)–(2).

> **Claim**: PSAP 09 explicitly excludes contingent-liability accounting from its own scope
> **Number/specific**: "Pernyataan Standar ini tidak mengatur: (a) Akuntansi Kewajiban Diestimasi dan Kewajiban Kontinjensi... Huruf (a) dan (b) diatur dalam pernyataan standar tersendiri." — **PSAP 09, paragraf 4**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim. **Important honesty note for the writer**: PSAP 09 itself says detailed recognition/measurement rules for kewajiban kontinjensi live in a *separate* standard/pronouncement, which this research could not independently identify and fetch this run (possibly a KSAP Buletin Teknis). Use the paragraf 5 + paragraf 18 synthesis above as the defensible primary-text basis for the disclosed-vs-recognised distinction; do not claim PSAP 09 is itself "the" standard that regulates contingent-liability treatment in full.

> **Claim**: The co-guarantee (*Penjaminan Bersama*) trigger — when Kementerian Keuangan joins BUPI in guaranteeing a project
> **Number/specific**: BUPI evaluates a guarantee proposal against four tests: (a) correct procedure, (b) project technically/financially feasible, (c) draft cooperation agreement contains required clauses, (d) the guarantee's value does not cause BUPI to exceed its capital adequacy (*kecukupan modal*). If (a)–(c) are met but (d) fails, "**Menteri Keuangan dapat ikut serta melaksanakan penjaminan berdasarkan pembagian risiko**" — the Minister then reviews the documents and decides, and "**Keputusan Badan Usaha Penjaminan Infrastruktur terhadap Usulan Penjaminan, mengikuti keputusan dari Menteri Keuangan.**" — **Perpres 78/2010, Pasal 7 ayat (3)–(9)**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim primary text — this is the cleanest, most defensible statement of the capacity trigger available. **Recommend leading with this** rather than the kpbu.kemenkeu.go.id portal's more granular three-condition list (see Flags — that list's stated legal basis is stale).

> **Claim**: PMK 68/2024 formalises two forms of Penjaminan Pemerintah
> **Number/specific**: Infrastructure guarantees under the current consolidated regulation operate through "**Penjaminan Pemerintah, yang terdiri dari Penjaminan Bersama dan Penjaminan BUPI**" — PMK No. 68 Tahun 2024, effective 18 Oktober 2024 (per locked baseline; JDIH's own summary field shows 24 September 2024, treated as the enactment/*ditetapkan* date rather than the effective date)
> **Source**: jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024/summary, fetched 2026-09-17
> **Confidence**: medium-high — sourced from the regulation's own summary metadata, not the full 7MB operative PDF text (too large to extract this run). The framing is corroborated by the Perpres 78/2010 Pasal 7 mechanism it operationalises.

> **Claim**: BUPI's capital-adequacy ratio is periodically reviewed — the primary-law basis for "batas maksimal penjaminan"
> **Number/specific**: "Menteri Keuangan menetapkan ketentuan mengenai kecukupan modal dari Badan Usaha Penjaminan Infrastruktur dan meninjau kembali rasio kecukupan modal tersebut **selambat-lambatnya setiap 2 (dua) tahun**, dengan mempertimbangkan kondisi perekonomian dan program nasional percepatan penyediaan infrastruktur atau usulan Badan Usaha Penjaminan Infrastruktur." — **Perpres 78/2010, Pasal 21**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim. **No numeric ratio is stated here or anywhere else in this dossier** — describe the mechanism (a capital-adequacy ceiling, set by the Minister of Finance, reviewed at least biennially) without a multiple, per the brief's binding instruction.

> **Claim**: Source of BUPI's own guarantee capital ("Dana Penjaminan Infrastruktur")
> **Number/specific**: "Dana Penjaminan Infrastruktur bersumber dari seluruh kekayaan yang dimiliki oleh Badan Usaha Penjaminan Infrastruktur" (ayat 1); that wealth "bersumber dari penyertaan modal Negara Republik Indonesia" (ayat 2); "Menteri Keuangan mencukupi kekayaan Badan Usaha Penjaminan Infrastruktur melalui mekanisme APBN" (ayat 3); BUPI may also seek funding from hasil usaha, hibah, pinjaman, dan penyertaan modal pihak ketiga (ayat 4) — **Perpres 78/2010, Pasal 19**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim.

> **Claim**: "Dana Cadangan Penjaminan" (government guarantee reserve fund) has its own dedicated, currently-active regulation
> **Number/specific**: **PMK Nomor 69 Tahun 2023** — full title "Tata Cara Pengelolaan Dana Cadangan Penjaminan untuk Pelaksanaan Kewajiban Penjaminan Pemerintah," ditetapkan/berlaku 12 Juli 2023, status **berlaku**. It directly governs the reserve fund: "Dana Cadangan Penjaminan adalah dana hasil akumulasi dari alokasi anggaran kewajiban penjaminan pemerintah yang dikelola dalam rekening khusus," funds are "dialokasikan dalam APBN dan dipindahbukukan ke rekening dana cadangan penjaminan," used for (1) claim payments under government guarantee programmes and (2) placement in government instruments for fund management.
> **Source**: jdih.kemenkeu.go.id/dok/pmk-69-tahun-2023/summary, fetched 2026-09-17 (title/status/date/scope directly confirmed); the specific "unused annual allocation rolls into a cumulative account" mechanic came from a WebSearch-synthesised answer rather than a direct quote of the PMK's operative articles
> **Confidence**: high on existence, title, status and general scope (directly fetched); medium on the precise roll-forward mechanic (not independently quoted from the PMK's own article text this run — see Flags). **This regulation was not in the original brief or `company_profile.md` and is a genuine new finding** — flag it for `company_profile.md` maintenance separately from this article.

> **Claim**: BUPI is under a standing legal obligation to report guarantee-obligation exposure to the Ministry of Finance on a quarterly cadence
> **Number/specific**: "Dalam rangka pembinaan dan pengawasan..., Badan Usaha Penjaminan Infrastruktur wajib menyampaikan: a. **laporan pengelolaan pengendalian kewajiban kontijensi triwulanan**; b. laporan keuangan triwulanan; c. laporan kegiatan usaha semesteran; dan d. laporan keuangan tahunan yang telah diaudit oleh Akuntan Publik." — **Perpres 78/2010, Pasal 23**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim. **This is the strongest available primary-source anchor for the article's "laporan DJPPR" table row.** Corroborating evidence: a file named `LPKP_Q2_2019_indo.pdf` (consistent with "Laporan Pengelolaan Kewajiban Penjaminan," quarterly, Q2 cadence) was located on djppr.kemenkeu.go.id's own publication file path under `.../6Publikasi/09Kontinjensi/` — direct fetch of that specific file failed on a certificate-hostname mismatch, but its filename, path, and quarterly-numbering pattern independently corroborate that this Pasal-23 report type is real and hosted by DJPPR. Attribute the *institutional home* of this quarterly report to "Kementerian Keuangan (BUPI melaporkan kepada Kemenkeu)" rather than asserting "DJPPR" as the exclusive named recipient, since Pasal 22–23 name the reporting duty and Peraturan Menteri Keuangan as the implementing layer, not DJPPR by name.

> **Claim**: Contingent liabilities from a specific counter-guarantee mechanism must be reported within the APBN
> **Number/specific**: When BUPI cooperates with a multilateral financial institution and that cooperation needs a government guarantee, "Menteri Keuangan dapat memberikan *counter-guarantee*" to that institution (ayat 2); "**Dalam hal Menteri Keuangan memberikan counter guarantee..., kewajiban kontijensi yang timbul harus dilaporkan dalam APBN**" (ayat 3) — **Perpres 78/2010, Pasal 18**
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim — but **scope-precise**: this pasal is specifically about MenKeu counter-guarantees to multilateral institutions (the Bank Dunia/MIGA capacity-expansion cooperation named in `company_profile.md`), not the general PJPK-facing guarantee. Use it to substantiate the general principle ("kewajiban kontinjensi dari penjaminan pemerintah masuk pelaporan APBN") while being precise about which mechanism it directly governs if quoted closely.

> **Claim**: Regres — definition and how it is fulfilled, depending on who the PJPK is
> **Number/specific**: Regres is defined as "hak Penjamin untuk menagih Penanggung Jawab Proyek Kerja Sama atas apa yang telah dibayarkannya kepada Penerima Jaminan..., dengan memperhitungkan nilai waktu dari uang yang dibayarkan tersebut (*time value of money*)" (Pasal 1 angka 20). Fulfilment mechanism depends on the PJPK: Menteri/Kepala Lembaga → **mekanisme APBN**; Kepala Daerah → **mekanisme APBD**; BUMN/BUMD → **mekanisme korporasi** (Pasal 15 ayat 2–4).
> **Source**: same PDF, 2026-09-17
> **Confidence**: high, verbatim. **Boundary reminder**: per this brief, regres may appear only as one clause inside a lever, never as a process — this article's boundary belongs to a different sibling. Use at most one sentence, and see the Flags entry below on a portal inconsistency to avoid repeating.

> **Claim**: The Pusat Pengelolaan Risiko Fiskal (PPRF) and its founding year
> **Number/specific**: "Pusat Pengelolaan Risiko Fiskal (PPRF) sebagai suborganisasi Badan Kebijakan Fiskal yang didirikan dalam Kementerian Keuangan pada **tahun 2006**," tasked with managing macroeconomic risk, central government debt risk, contingent liability risk, and mandatory expenditure risk.
> **Source**: ksap.org/sap/risiko-fiskal-pemerintah-pusat-dan-daerah/, fetched 2026-09-17 (page itself dated 1 Agustus 2015 / diperbarui 31 Juli 2015 — an older KSAP explainer, but the 2006 founding fact is a historical fact unaffected by the page's age)
> **Confidence**: high on the 2006 founding fact; note the page's own content is a decade-old explainer that (consistent with the brief's SERP notes) stops short of naming a specific PSAP for contingent-liability recognition.

> **Claim**: Kemenkeu publishes an annual fiscal-risk chapter alongside the state budget, with a current-cycle edition
> **Number/specific**: "Buku II Nota Keuangan RAPBN TA 2026" exists as a published Kemenkeu document (Bab Risiko Fiskal referenced as "Bab 6" in DJPPR's own media library); a **more recent** cycle — Nota Keuangan / RAPBN **Tahun Anggaran 2027**, risiko fiskal chapter discussing "utang hingga belanja wajib" — was publicly reported **24 Agustus 2026**.
> **Source**: media.kemenkeu.go.id/getmedia/.../Buku-II-Nota-Keuangan-RAPBN-TA-2026.pdf (existence, via WebSearch result title, 2026-09-17); money.kompas.com/read/2026/08/24/.../risiko-fiskal-rapbn-2027-menurut-pemerintah-utang-hingga-belanja-wajib (2026-09-17)
> **Confidence**: medium-high on existence and annual cadence; **no content or figures were extracted from either document** — both direct fetch attempts at the DJPPR media API (`api-djppr.kemenkeu.go.id/web/api/v1/media/...`) returned `ECONNREFUSED`, twice, on two different document IDs. **Assert no guarantee-exposure number from the Nota Keuangan** — state only that the chapter exists and is published annually.

> **Claim**: A live Kemenkeu portal page still cites revoked implementing regulations as its legal basis
> **Number/specific**: kpbu.kemenkeu.go.id's "Penjaminan Infrastruktur" page lists its legal basis as Perpres 78/2010 **plus PMK 260/PMK.011/2010 and PMK 8/PMK.08/2016** — both revoked by PMK 68/2024 (per `company_profile.md`'s pre-verified status table)
> **Source**: kpbu.kemenkeu.go.id/read/64-64/pjpk/dukungan-pemerintah/penjaminan-infrastruktur, fetched fresh 2026-09-17
> **Confidence**: high that this is portal lag, not live law — directly re-confirmed today, consistent with the brief's warning and `company_profile.md`'s existing verification.

> **Claim**: Fitch's most recent PT PII rating action, and a separate, later sovereign-level move
> **Number/specific**: Fitch affirmed PT PII's ratings at 'BBB' (Long-Term Foreign/Local-Currency IDR), 'F2' (Short-Term), and 'AAA(idn)' (National Long-Term), Outlook Stable, **12 Februari 2026**, as a Government-Related Entity credit-linked to the sovereign. Separately, on **4 Maret 2026**, Fitch revised **Indonesia's sovereign** rating outlook from Stable to **Negative** (rating itself affirmed at BBB), citing policy uncertainty. No PT PII-specific rating action dated after 12 Februari 2026 was found this run.
> **Source**: petromindo.com/news/article/fitch-affirms-penjaminan-infrastruktur-indonesia-at-bbb-aaa-idn-outlook-stable (12 Feb 2026 affirmation, republishing the Fitch release); malaymail.com/news/money/2026/03/04/... (4 March 2026 sovereign outlook revision); both via WebSearch 2026-09-17
> **Confidence**: high on both dates and both facts, kept as two distinct, separately-dated events. **Do not merge them into a single unqualified "Outlook Stabil" claim** — the sovereign-level move is newer than the PT PII-specific affirmation and directly relevant to a credit-linked GRE.

> **Claim**: PT PII's current guaranteed portfolio scale
> **Number/specific**: 61 proyek (38 KPBU + 23 non-KPBU), nilai proyek > Rp 732 triliun, nilai penjaminan Rp 113 triliun — **per Juni 2026**
> **Source**: brief's locked baseline, consistent with `company_profile.md`'s "publikasi resmi 2026" figures (61 proyek / Rp 732 triliun / Rp 113 triliun)
> **Confidence**: high (pre-verified/locked by the strategist; treat project-value and guarantee-value as two distinct figures — never conflate the two, per the brief's explicit instruction).

> **Claim**: PT PII's founding date and legal basis for its capitalisation as BUPI
> **Number/specific**: PT PII didirikan **30 Desember 2009**; the entity to which the state gave capital specifically to perform Penjaminan Infrastruktur is defined in Perpres 78/2010 Pasal 1 angka 7 with reference to "Peraturan Pemerintah Nomor 35 Tahun 2009 tentang Penyertaan Modal Negara Republik Indonesia untuk Pendirian Perusahaan Perseroan (Persero) di Bidang Penjaminan Infrastruktur"
> **Source**: `company_profile.md` (founding date); Perpres 78/2010 Pasal 1(7) and "Mengingat" clause item 6, fetched 2026-09-17 (statutory cross-reference to PP 35/2009)
> **Confidence**: high. The PP 35/2009 cross-reference is a new, useful corroborating detail not previously in `company_profile.md` — it is the capital-injection regulation that legally created the Persero now operating as PT PII.

---

## Topic focus + PT PII anchor (from product_matrix.md)

| What to teach (KPBU / penjaminan / project finance) | Facts to state accurately | Where in article | PT PII product to anchor the CTA |
|---|---|---|---|
| Disclosed vs recognised — the accounting status of an uncalled guarantee | Kewajiban kontinjensi (PSAP 09 §5) is disclosed, not recognised, until outflow is probable + reliably measurable (§18) | H2 #2 — the primary extractable answer block | Penjaminan Pemerintah |
| Where exposure surfaces in state documents | CaLK/LKPP (BPK-audited); Nota Keuangan Bab Risiko Fiskal (annual, RAPBN); BUPI's quarterly kewajiban-kontinjensi report to Kemenkeu (Perpres 78/2010 Pasal 23) | H2 #3 — table | Penjaminan Pemerintah |
| The four exposure-control levers | Capital-adequacy ceiling reviewed ≥ biennially (Pasal 21); fiscal-sustainability policy principle (Pasal 2); annual APBN budget line for guarantee obligations; cumulative Dana Cadangan Penjaminan (PMK 69/2023) | H2 #4 — numbered list | Penjaminan Pemerintah |
| The co-guarantee capacity trigger | Fires when a proposal is otherwise eligible but exceeds BUPI's capital adequacy (Pasal 7); formalised as "Penjaminan Bersama" alongside "Penjaminan BUPI" under PMK 68/2024 | H2 #4 — closing point | Penjaminan Pemerintah |
| What the disclosed figures cannot tell you | A ceiling of possible exposure ≠ expected cost; no probability, timing, or project-specific signal; portfolio series not a clean time series across publications | H2 #5 — honest/counter-conventional | (no product mention needed here) |

**PT PII anchor**: PT PII is the sole BUMN mandated as Badan Usaha Penjaminan Infrastruktur (BUPI) — the entity Perpres 78/2010 itself creates and regulates throughout. Ring-fencing the government's contingent liabilities is one of PT PII's stated purposes (`company_profile.md`). This makes the disclosure architecture PT PII's own subject matter. Reminder: PT PII **menjamin · menerbitkan penjaminan pemerintah · menstrukturkan penjaminan · mendampingi penyiapan transaksi** — never a lender, equity investor, contractor, operator, or regulator; not under Danantara. Max 2–3 self-mentions (closing + one H2 #4 aside, per the brief).

---

## Authoritative external sources (for the writer to link out / cite)

1. **Peraturan Presiden No. 78 Tahun 2010** (full text) — peraturan.go.id/files/ps78-2010.pdf — *backs*: the definition, the fiscal-sustainability principle, the co-guarantee trigger (Pasal 7), the capital-adequacy review cadence (Pasal 21), the source of BUPI's guarantee funds (Pasal 19), the quarterly contingent-liability reporting duty (Pasal 23), the counter-guarantee APBN-reporting duty (Pasal 18), and regres (Pasal 15).
2. **PSAP 09 (Lampiran PP 71 Tahun 2010, Standar Akuntansi Pemerintahan)** — ksap.org/pp 71/LAMPIRAN2/lampiran2_10.pdf — *backs*: the primary-text definition of kewajiban kontinjensi and the general recognition threshold.
3. **PMK Nomor 69 Tahun 2023** — jdih.kemenkeu.go.id/dok/pmk-69-tahun-2023/summary — *backs*: Dana Cadangan Penjaminan as a currently-governed, distinct instrument.
4. **PMK Nomor 68 Tahun 2024** — jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024/summary — *backs*: current consolidated legal basis; "Penjaminan Bersama dan Penjaminan BUPI" framing.
5. **KSAP** (Komite Standar Akuntansi Pemerintahan) — ksap.org/sap/risiko-fiskal-pemerintah-pusat-dan-daerah/ — *backs*: PPRF founding year (2006) and fiscal-risk governance context.
6. **Kantor Bersama KPBU (Kementerian Keuangan)** — kpbu.kemenkeu.go.id/read/64-64/pjpk/dukungan-pemerintah/penjaminan-infrastruktur — *backs*: single-window policy statement; illustrative (portal-sourced) co-guarantee detail — flagged for stale legal-basis citation.
7. **Fitch Ratings** (via petromindo.com and malaymail.com news coverage) — *backs*: the dated rating-action distinction (PT PII affirmation 12 Feb 2026 vs sovereign outlook revision 4 Mar 2026).

Priority ranking followed: regulasi primer (Perpres 78/2010, PSAP 09/PP 71/2010, PMK 68/2024, PMK 69/2023) > Kemenkeu portal (kpbu.kemenkeu.go.id, KSAP) > Fitch (rating agency) > media ekonomi (kompas, cross-checked only for existence/cadence of the Nota Keuangan, not for figures).

---

## FAQ Q&As (Bahasa Indonesia, draft for the writer)

### Apakah jaminan pemerintah muncul di neraca APBN?
Tidak, selama belum ditagih. Berdasarkan prinsip akuntansi kewajiban dalam PP 71/2010, jaminan pemerintah yang belum dipicu klaim tergolong kewajiban kontinjensi — kewajiban potensial yang keberadaannya belum pasti atau belum bisa diukur andal, sehingga diungkapkan dalam catatan laporan keuangan, bukan diakui sebagai utang di neraca. Statusnya berubah menjadi kewajiban yang diakui hanya jika pembayaran menjadi besar kemungkinan terjadi dan nilainya bisa diukur secara andal.

### Apa itu kewajiban kontinjensi?
Menurut Pernyataan Standar Akuntansi Pemerintahan Nomor 09 (lampiran PP 71/2010), kewajiban kontinjensi adalah kewajiban potensial yang muncul dari peristiwa masa lalu dan baru menjadi pasti bila satu atau lebih peristiwa di masa depan terjadi atau tidak terjadi, di luar kendali penuh entitas — atau kewajiban kini yang tidak diakui karena kemungkinan besar keluarnya sumber daya belum ada, atau jumlahnya belum bisa diukur secara andal. Jaminan pemerintah yang belum diklaim termasuk kategori ini.

### Di mana eksposur penjaminan pemerintah bisa dibaca publik?
Ada tiga jalur resmi. Pertama, Catatan atas Laporan Keuangan dalam Laporan Keuangan Pemerintah Pusat yang diaudit BPK. Kedua, bab risiko fiskal dalam Nota Keuangan yang menyertai RAPBN setiap tahun — edisi terbaru membahas RAPBN Tahun Anggaran 2027, dipublikasikan Agustus 2026. Ketiga, laporan pengelolaan pengendalian kewajiban kontinjensi yang wajib disampaikan Badan Usaha Penjaminan Infrastruktur kepada Kementerian Keuangan setiap triwulan, sesuai Pasal 23 Perpres 78/2010.

### Apa itu dana cadangan penjaminan?
Dana Cadangan Penjaminan adalah rekening khusus yang menampung akumulasi alokasi anggaran kewajiban penjaminan pemerintah dari APBN, diatur tata kelolanya dalam PMK Nomor 69 Tahun 2023. Dana ini disiapkan untuk mendukung pemenuhan kewajiban penjaminan pemerintah bila diperlukan, terpisah dari kekayaan Badan Usaha Penjaminan Infrastruktur sendiri yang menurut Perpres 78/2010 bersumber dari penyertaan modal negara. Keberadaannya membuat eksposur penjaminan terukur, bukan tak terbatas.

### Apakah jaminan pemerintah sama dengan subsidi?
Bukan. Subsidi adalah pengeluaran tunai pasti yang membebani belanja negara setiap tahun. Jaminan pemerintah adalah pengalihan risiko bersyarat: pemerintah baru membayar kompensasi jika risiko yang disepakati dalam perjanjian KPBU benar-benar terjadi dan Penanggung Jawab Proyek Kerja Sama gagal memenuhinya. Perpres 78/2010 menegaskan penjaminan infrastruktur dijalankan berdasarkan prinsip pengendalian risiko keuangan negara demi menjaga keberlanjutan APBN, bukan sebagai instrumen transfer dana rutin.

### Kapan Kementerian Keuangan ikut menjamin bersama (Penjaminan Bersama)?
Ketika usulan penjaminan sebuah proyek dinyatakan layak secara prosedur, teknis, dan finansial, tetapi nilai cakupan penjaminannya akan membuat Badan Usaha Penjaminan Infrastruktur melampaui kecukupan modalnya — sesuai Pasal 7 Perpres 78/2010. Dalam kondisi itu Menteri Keuangan dapat ikut menjamin berdasarkan pembagian risiko, dan keputusan akhir penerimaan usulan mengikuti keputusan Menteri Keuangan. PMK 68/2024 kini menyebut skema ini Penjaminan Bersama, berdampingan dengan Penjaminan BUPI.

### Apa bedanya jaminan pemerintah dan jaminan dalam pengadaan barang/jasa?
Keduanya memakai kata "jaminan" tetapi berbeda rezim hukum. Jaminan pemerintah dalam KPBU adalah penjaminan atas kewajiban finansial PJPK terhadap risiko infrastruktur, diatur Perpres 78/2010 dan dijalankan Badan Usaha Penjaminan Infrastruktur. Jaminan pelaksanaan, jaminan penawaran, atau jaminan uang muka dalam pengadaan barang/jasa pemerintah adalah instrumen berbeda — biasanya bank garansi — yang menjamin kepatuhan kontraktor terhadap kontrak pengadaan, bukan risiko proyek jangka panjang.

### Bagaimana eksposur penjaminan pemerintah dikendalikan agar tidak membebani APBN secara mendadak?
Melalui empat mekanisme yang saling mengunci: peninjauan rasio kecukupan modal Badan Usaha Penjaminan Infrastruktur oleh Menteri Keuangan sekurang-kurangnya tiap dua tahun (Pasal 21 Perpres 78/2010); prinsip pengendalian risiko keuangan negara sebagai landasan setiap keputusan penjaminan; alokasi tahunan Anggaran Kewajiban Penjaminan Pemerintah dalam APBN; dan Dana Cadangan Penjaminan yang mengakumulasi sisa alokasi tersebut sesuai PMK 69/2023. Tidak ada angka rasio tunggal yang berlaku permanen.

---

## Data tables for the writer

### Di mana eksposur penjaminan muncul dalam dokumen negara (H2 #3 table)

| Dokumen | Apa yang dimuat | Kapan terbit |
|---|---|---|
| **Catatan atas Laporan Keuangan (CaLK), bagian dari LKPP** | Pengungkapan pos-pos yang tidak diakui pada neraca, termasuk kewajiban kontinjensi; diaudit BPK | Tahunan, mengikuti siklus LKPP |
| **Nota Keuangan — Bab Risiko Fiskal** | Analisis risiko fiskal pemerintah pusat, termasuk kewajiban kontinjensi dari penjaminan infrastruktur, sebagai bagian dokumen pendamping RAPBN | Tahunan, menyertai RAPBN (edisi terkini: RAPBN TA 2027, dipublikasikan Agustus 2026) |
| **Laporan pengelolaan pengendalian kewajiban kontinjensi** | Posisi dan pengendalian eksposur penjaminan yang wajib disampaikan BUPI kepada Kementerian Keuangan (Perpres 78/2010 Pasal 23 huruf a) | Triwulanan |

*Note for the writer: no dated exposure figure could be pulled from any of these three this run — describe the channel, not a number.*

### Empat pengendali eksposur penjaminan (H2 #4 — present as numbered list in the article; table below is for internal dossier reference)

| Pengendali | Dasar hukum | Apa yang sebenarnya dibatasi |
|---|---|---|
| Rasio kecukupan modal BUPI | Perpres 78/2010 Pasal 17, 21 | Nilai maksimum penjaminan yang bisa diterbitkan BUPI sendiri sebelum memicu Penjaminan Bersama; ditinjau MenKeu ≥ tiap 2 tahun — **jangan sebut angka rasio** |
| Prinsip pengendalian & pengelolaan risiko keuangan negara | Perpres 78/2010 Pasal 2 huruf a | Landasan kebijakan setiap keputusan penjaminan, agar konsisten dengan *fiscal sustainability* |
| Anggaran Kewajiban Penjaminan Pemerintah dalam APBN | PMK 69/2023 | Alokasi tahunan yang disediakan APBN untuk potensi kewajiban penjaminan |
| Dana Cadangan Penjaminan | PMK 69/2023 | Rekening akumulatif dari alokasi anggaran tersebut, disiapkan untuk pembayaran klaim bila diperlukan |
| *(Terpisah dari keempat di atas)* Kapasitas Penjaminan Bersama | Perpres 78/2010 Pasal 7, diformalkan PMK 68/2024 | Jalur eskalasi ke Menteri Keuangan ketika satu proyek melampaui kapasitas BUPI sendiri |

### Reconciling the brief's two lever lists (for the writer/editor, not for the article)

The brief's "Priority verifications" section listed candidate levers as *screening/eligibility, ceiling, regress right, co-guarantee*; the "Article skeleton" section names four different labels (*batas maksimal, kebijakan pengelolaan, anggaran APBN, dana cadangan*) plus a separate "capacity trigger." Both resolve to the same underlying primary-law mechanisms — screening/eligibility maps to Pasal 5 and Pasal 7 ayat (3)(a)-(c); the ceiling maps to Pasal 21's capital-adequacy ratio; regres maps to Pasal 15; co-guarantee maps to Pasal 7 ayat (5)-(9). **Use the Article Skeleton's four-item naming for the H2, since that is what the brief instructs the H2 to cover**; regres earns at most one clause, most naturally placed near the co-guarantee/capacity discussion rather than as a fifth standalone lever.

---

## Edge cases & nuance

- **Penjaminan pemerintah ≠ subsidi, and it does not erase the badan usaha's commercial risk.** It only transfers risk that is contractually allocated to the PJPK's side under the KPBU agreement (Perpres 78/2010 Pasal 4). Keep this distinction sharp in the FAQ and H2 #5.
- **A disclosed exposure figure is a ceiling of possible exposure, not an expected cost.** It says nothing about probability, timing, or which specific project is under stress — that is precisely why it is disclosed rather than recognised.
- **Portfolio figures are cumulative and cross-publication comparisons mix counting scopes** (e.g., "61 proyek" in 2026 vs. earlier-year counts in `company_profile.md`'s illustrative table are not a clean time series). State the figure with its reference year and do not imply monotonic growth.
- **Disambiguation is mandatory near the top of the article** (per the research JSON's `disambiguation_evidence`): "jaminan pemerintah" on this exact keyword also collides in search results with (a) jaminan dalam pengadaan barang/jasa (tender/performance bonds — an entirely different regime, ranking on the same keyword via a BPK PDF), (b) jaminan kebendaan/agunan, and (c) jaminan sosial/BPJS. The infrastruktur/KPBU token must appear in the first sentence.
- **Two distinct "guarantee fund" concepts exist and should not be merged**: (1) BUPI's *own* capital ("Dana Penjaminan Infrastruktur," Pasal 19 — funded by PMN/APBN, this is what backs its capacity to issue guarantees at all) versus (2) the government-side "Dana Cadangan Penjaminan" (PMK 69/2023 — a separate cumulative reserve account fed by annual budget allocations, this is the exposure-control lever). The article's H2 #4 is about the second one; do not conflate it with BUPI's balance-sheet capital.
- **Counter-guarantee (Pasal 18, to multilateral institutions) and co-guarantee/Penjaminan Bersama (Pasal 7, with the Ministry of Finance, for a domestic PJPK-facing guarantee) are different mechanisms.** Both are legitimate to mention but should not be blurred into one.

---

## Flags (open factual risk)

- ⚠️ **Lampiran I PSAP 09 (the currently-governing accrual-basis standard) was not independently fetched this run.** The verified definition text comes from Lampiran II (SAP Kas Menuju Akrual), which states its own applicability window as "sampai dengan tahun anggaran 2014." The definitional substance is understood to be structurally consistent across KSAP's two annexes, but this has not been independently confirmed for Lampiran I. → Recommendation: cite the concept ("sesuai definisi dalam PSAP 09, lampiran PP 71/2010") without over-specifying which annex, or have the editor spot-check `ksap.org/pp 71/LAMPIRAN1/lampiran 1_1.pdf` (a single combined 2.3MB file covering all PSAPs) before publication if maximal precision is required.
- ⚠️ **No dated guarantee-exposure figure was extracted from the Nota Keuangan fiscal-risk chapter.** Both attempts at the DJPPR media API endpoint (`api-djppr.kemenkeu.go.id/web/api/v1/media/...`, two different document IDs, including the one explicitly named in the brief) returned `ECONNREFUSED`. → Recommendation: assert no number; describe the chapter's existence and annual cadence only.
- ⚠️ **kpbu.kemenkeu.go.id's granular three-condition co-guarantee list cites revoked PMK 260/2010 and PMK 8/2016 as its legal basis**, confirmed live again today. Its content may still be operationally accurate (PMK 68/2024's implementing detail was not fully extractable — the operative PDF is ~7MB), but it has not been independently re-verified against current law this run. → Recommendation: lead with the primary Perpres 78/2010 Pasal 7 capital-adequacy framing (verified high-confidence); treat the portal's three-item elaboration as illustrative at most, attributed to the portal if used at all.
- ⚠️ **kpbu.kemenkeu.go.id states "mekanisme regres tidak berlaku dalam Penjaminan Pemerintah di mana Kementerian/Lembaga menjadi PJPK."** This appears to conflict with Perpres 78/2010 Pasal 15 ayat (2), which states that when the PJPK is a Menteri/Kepala Lembaga, regres **is** fulfilled — via the APBN mechanism, rather than case-by-case recovery. These are different claims (non-applicability vs. budgetary fulfilment). → Recommendation: do not reuse the portal's "tidak berlaku" framing anywhere; if regres is mentioned at all (one clause, per the boundary), frame it neutrally per Pasal 15.
- ⚠️ **PMK 69/2023's "unused annual budget rolls into a cumulative reserve" mechanic** is sourced from a WebSearch-synthesised answer, not a direct quote of the regulation's own articles (the primary PDF was not independently fetched and read this run). The regulation's existence, title, status, and general scope (governs Dana Cadangan Penjaminan) are independently confirmed at high confidence. → Recommendation: state the fund's existence and purpose with confidence; describe the roll-forward mechanic more cautiously ("dana ini terbentuk dari akumulasi alokasi anggaran kewajiban penjaminan" rather than a precise procedural claim).
- ⚠️ **No PT PII-specific Fitch rating action was found dated after 12 Februari 2026.** Indonesia's sovereign outlook was separately revised to Negative on 4 Maret 2026 (rating affirmed at BBB). Given PT PII is explicitly rated as a Government-Related Entity credit-linked to the sovereign, an unqualified claim of a current "Outlook Stabil" for PT PII risks being stale. → Recommendation: date the 12 Februari 2026 affirmation explicitly if cited at all; do not state an unqualified current outlook; consider omitting the rating entirely if it is not load-bearing for this particular article's argument (it is not central to the disclosure-vs-recognition angle).
- ⚠️ **Leadership/personnel angle**: none was researched or surfaced. No named officials appear anywhere in this dossier — compliant with the hard blacklist. If the writer is tempted toward an institutional-actor framing (e.g., "Menteri Keuangan memutuskan..."), keep it at the office/institution level only, exactly as Perpres 78/2010's own text does ("Menteri Keuangan" throughout, never a name).

---

## Definition snippet draft (40–60 words)

> Jaminan pemerintah dalam proyek KPBU — disebut Penjaminan Infrastruktur — adalah pemberian jaminan atas kewajiban finansial Penanggung Jawab Proyek Kerja Sama untuk membayar kompensasi kepada badan usaha saat risiko infrastruktur yang menjadi tanggung jawabnya terjadi, sesuai alokasi risiko dalam perjanjian KPBU (Perpres 78/2010). Selama belum ditagih, kewajiban ini diungkapkan sebagai kewajiban kontinjensi, bukan diakui sebagai utang di neraca APBN.
