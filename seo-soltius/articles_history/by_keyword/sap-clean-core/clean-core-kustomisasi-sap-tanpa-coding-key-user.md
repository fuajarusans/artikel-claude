---
id: 2026-08-sap-clean-core-03
keyword: SAP Clean Core
title: "Clean Core untuk Pengguna Bisnis: Kustomisasi SAP Tanpa Coding lewat Key-User Extensibility"
angle: in-app-key-user-extensibility-pengguna-bisnis
month: 2026-08
status: editor-approved
---

# Article notes

## Angle summary
Artikel ini menarget audiens yang sering terlupakan dalam diskusi clean core: pengguna bisnis (bukan developer) yang selama ini bergantung pada IT atau konsultan untuk setiap perubahan kecil di SAP. Distinct angle-nya adalah pemberdayaan pengguna bisnis melalui key-user extensibility — kemampuan menambahkan custom field, logika bisnis sederhana, dan adaptasi UI Fiori tanpa menulis kode ABAP, tanpa mengorbankan clean core. Artikel menjelaskan mengapa "tanpa coding" bukan berarti "tanpa batas" dan mengklarifikasi apa yang masuk dalam kewenangan key user vs developer.

## Subtopics covered
- Key-user extensibility: definisi dan ruang lingkup
- Custom Fields and Logic: menambahkan field tanpa modifikasi core
- Adaptasi UI SAP Fiori: personalisasi tampilan untuk peran bisnis tertentu
- BAdI (Business Add-In) sebagai extension point clean-core-safe
- Perbedaan key-user extensibility vs developer/side-by-side extensibility
- In-app vs side-by-side: kapan masing-masing digunakan
- Fit-to-standard sebagai fondasi sebelum extensibility
- Contoh use case per departemen (finance, procurement, HR)

## Sections (H2s)
1. Masalah Klasik: Pengguna Bisnis Tergantung IT untuk Setiap Perubahan
2. Key-User Extensibility: Kustomisasi yang Tidak Kotor
3. Custom Fields and Logic: Apa yang Bisa Ditambahkan Tanpa Coding
4. Adaptasi UI Fiori: Menyesuaikan Tampilan untuk Peran Bisnis
5. BAdI: Extension Point yang Clean-Core-Safe
6. Batas Key User: Apa yang Tetap Harus Dilakukan Developer
7. In-App vs Side-by-Side Extensibility: Panduan Memilih
8. Use Case per Departemen: Finance, Procurement, HR

## Internal links used
- https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide — anchor: "SAP Clean Core panduan lengkap"
- https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms — anchor: "low-code platform"
- https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud — anchor: "migrasi ERP ke cloud"

## External citations
- https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools — context: "panduan resmi SAP tentang key-user in-app extensibility tools"
- https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — context: "SAP resmi tentang cara extend S/4HANA Cloud dengan benar dan bersih"

## SAP tech taught / Soltius anchor
- SAP S/4HANA key-user in-app extensibility / Custom Fields and Logic ; Soltius anchor: S/4HANA implementation + change management

## Notes for future strategist runs
- Angles still uncovered for this keyword: SAP Build Apps untuk non-developer: low-code extensibility di atas BTP, clean core governance: siapa yang berhak approve extensibility request, upgrade-safe extensibility: memastikan custom field tidak rusak saat upgrade, pelatihan key user untuk extensibility (change management + enablement)
- Topics this article deliberately did NOT cover: tutorial teknis ABAP Cloud development, developer extensibility (side-by-side) deep dive, perbandingan SAP extensibility vs Salesforce/ServiceNow extensibility
