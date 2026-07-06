---
id: 2026-06-digital-manufacturing-02
keyword: digital manufacturing
title: "MES dan ERP: Cara Menghubungkan Lantai Produksi ke Sistem Pusat"
angle: mes-erp-integrasi-shop-floor
month: 2026-06
status: editor-approved
---

# Article notes

## Angle summary
Menjawab pertanyaan paling umum di pabrik yang berdigitalisasi: "Kami sudah punya SAP, tapi lantai produksi masih manual — bagaimana mengintegrasikannya?" Tidak ada satu pun artikel di top-10 SERP Indonesia yang membahas integrasi MES-ERP dari sudut pandang SAP secara step-by-step. Artikel ini menjelaskan arsitektur 3 layer (OT → MES → ERP), peran SAP Digital Manufacturing sebagai jembatan, dan mengapa memasang MES sebelum ERP beres adalah kesalahan umum.

## Subtopics covered
- Gap antara IT layer (ERP) dan OT layer (mesin, sensor)
- Arsitektur integrasi 3 layer: sensor/OT → MES → ERP
- SAP Digital Manufacturing Cloud integrasi native
- OPC UA untuk shop floor connectivity
- Kesalahan: pasang MES sebelum ERP beres

## Sections (H2s)
1. Mengapa Data Lantai Produksi Masih Terputus dari ERP?
2. Apa Perbedaan MES dan ERP — dan Mengapa Keduanya Harus Berdialog?
3. Arsitektur Integrasi Lantai Produksi: Tiga Layer yang Harus Terhubung
4. Yang Sering Salah: Pasang MES Sebelum ERP Beres
5. FAQ (Pertanyaan yang Sering Diajukan)

## Internal links used
- https://www.soltius.co.id/id/blog/digital-manufaktur-sistem — anchor: "digital manufacturing"
- https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud — anchor: "ERP migration to the cloud"
- https://www.soltius.co.id/id/blog/business-intelligence — anchor: "business intelligence"

## External citations
- https://help.sap.com/docs/sap-digital-manufacturing/integration-guide/integration-with-sap-s-4hana-cloud — context: "SAP DM Cloud integrasi native dengan S/4HANA via SAP Cloud Integration"
- https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/setting-up-shop-floor-connectivity-connecting-your-opc-ua-server-with-sap/ba-p/13897749 — context: "SAP Production Connector mendukung OPC UA untuk koneksi mesin non-SAP"

## SAP tech taught / Soltius anchor
- SAP Digital Manufacturing Cloud integrasi MES-ERP; Soltius anchor: implementor integrasi shop floor ke SAP S/4HANA di industri manufaktur

## Notes for future strategist runs
- Angles still uncovered: integrasi mesin legacy (brownfield MES), data historian ke SAP, SAP Digital Manufacturing untuk batch manufacturing
- Topics deliberately NOT covered: definisi digital manufacturing dasar (di -01), ROI/biaya (di -03), predictive maintenance (di -04)
