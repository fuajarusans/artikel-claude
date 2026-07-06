---
id: 2026-06-sap-clean-core-02
keyword: SAP Clean Core
title: "Remediasi Custom Code SAP: Langkah Membersihkan Z-Code Menuju ABAP Cloud"
angle: remediasi-custom-code-abap-cloud
month: 2026-06
status: editor-approved
---

# Article notes

## Angle summary
Artikel how-to yang menjawab PAA "bagaimana cara membersihkan custom code SAP" yang belum dijawab konten bahasa Indonesia mana pun. Berbeda dari brief -01 (definisi clean core), artikel ini fokus praktis: apa yang harus dilakukan dengan Z-code hari ini. 4 fase remediasi berurutan (audit → triase → migrasi → governance), tabel Keep/Eliminate/Rebuild yang bisa langsung dipakai tim IT, dan angle counter-conventional "kapan TIDAK perlu bergegas remediasi". Soltius berbicara dari pengalaman lapangan brownfield conversion, bukan teori.

## Subtopics covered
- Z-code dan mengapa menjadi hambatan terbesar migrasi S/4HANA
- 4 fase remediasi custom code SAP
- Tabel triase: Keep, Eliminate, atau Rebuild ke SAP BTP
- SAP Custom Code Migration app dan ABAP Test Cockpit
- Kapan remediasi BELUM jadi prioritas utama

## Sections (H2s)
1. Apa itu Z-code dan mengapa ia menjadi hambatan terbesar migrasi S/4HANA?
2. Empat fase remediasi custom code SAP: dari audit hingga ABAP Cloud
3. Tabel triase: Keep, Eliminate, atau Rebuild ke SAP BTP?
4. Apakah semua Z-code harus dibersihkan sebelum migrasi ke S/4HANA?
5. Kapan remediasi custom code BELUM jadi prioritas utama?
6. FAQ (Pertanyaan yang Sering Diajukan)

## Internal links used
- https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide — anchor: "SAP Clean Core"
- https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud — anchor: "migrasi ERP ke cloud"
- https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms — anchor: "platform low-code SAP Build"

## External citations
- https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf — context: "Custom Code Migration Guide SAP S/4HANA 2025 — proses end-to-end migrasi kode"
- https://pages.community.sap.com/topics/abap/abap-cloud-faq — context: "SAP Community ABAP Cloud FAQ — definisi, released objects, perbedaan dengan ABAP klasik"

## SAP tech taught / Soltius anchor
- ABAP Cloud model / SAP Custom Code Migration app / ABAP Test Cockpit; Soltius anchor: tim konsultan yang melakukan remediasi kode di lapangan brownfield conversion

## Notes for future strategist runs
- Angles still uncovered: prioritisasi remediasi berdasarkan business criticality, estimasi effort dan biaya remediasi, tools otomasi remediasi kode
- Topics deliberately NOT covered: definisi clean core (di -01), maturity assessment (di -03), side-by-side extensibility (di -04)
