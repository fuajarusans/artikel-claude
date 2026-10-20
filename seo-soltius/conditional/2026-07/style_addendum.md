# Style Addendum — Batch Conditional 2026-07 (WAJIB dibaca semua agent batch ini)

Aturan ini **meng-override** `knowledge_base/style_guide.md` KHUSUS untuk artikel di
`conditional/2026-07/`. Semua yang tidak disebut di sini tetap mengikuti style guide utama
(tone B2B §3, kejujuran & E-E-A-T §4, anti-AI §5, meta block §7, linking §9, sitasi §10,
disiplin Soltius §11). Artikel monthly TIDAK terpengaruh.

Keputusan user, 2026-07-06: artikel harus **on-point — informasi padat tanpa bertele-tele**.

---

## 1. Panjang: 800–1000 kata (target ~900)

- Hitungan = body (H1 sampai CTA), di luar frontmatter.
- Di bawah 800 = terlalu tipis; di atas 1000 = gagal (langsung pangkas).
- `target_word_count: 900` di frontmatter; isi `word_count` aktual setelah menulis.
- Cara memangkas yang benar: buang kalimat pengantar/transisi kosong, contoh kedua yang
  redundan, dan sub-bahasan pinggiran — BUKAN memampatkan semua kalimat jadi telegram.
  Ritme tetap bervariasi (paragraf 1–4 kalimat; kalimat pendek campur sedang).

## 2. Struktur ringkas

```
1. Frontmatter YAML (format §7 style guide, target_word_count: 900)
2. Lead — 1 paragraf ≤80 kata. Pain konkret + keyword + janji artikel. TANPA paragraf roadmap.
3. Definition snippet "Secara singkat/Ringkasnya:" 40–60 kata (blockquote) — tetap WAJIB (AI-Overview bait).
4. Body 3–4 H2:
   - **DILARANG mengulang definisi yang sudah ada di snippet** (aturan user, 2026-07-06):
     definisi muncul SEKALI saja, yaitu di snippet. H2 definitional ("Apa itu ...")
     menjadi OPSIONAL — hanya boleh ada jika isinya menambah info BARU (asal
     istilah/standar, kepanjangan akronim, konteks sejarah/pasar), BUKAN menyatakan
     ulang definisi snippet dengan kata lain. Jika tidak ada info baru, langsung
     masuk ke H2 perbedaan/cara kerja/praktis.
   - ≥1 H2 question-format
   - ≥1 H2 praktis/terstruktur (tabel/rumus/tahapan — sesuai notes tracker)
   - H2 honest/counter-conventional: OPSIONAL — hanya jika muat tanpa melewati 1000 kata;
     kalau tidak muat, cukup 1–2 kalimat honest hedging di dalam body.
5. FAQ: 2–3 Q&A saja. Jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka. Ambil dari PAA.
6. ## Kesimpulan — ≤80 kata, 1 positioning line Soltius, CTA konsultatif.
7. Soft website CTA (soltius.co.id) — baris terakhir, tetap WAJIB.
```

## 3. TANPA image placeholder

- **DILARANG** menulis `{IMAGE_NN: ...}` dalam bentuk apa pun.
- Stage image-planner DILEWATI; tidak ada `images.json` untuk batch ini.
- Konsep yang biasanya jadi gambar (diagram alur, struktur bertingkat) disampaikan lewat
  tabel, list bertahap, atau prosa — pilih yang paling informatif.

## 4. Elemen format minimum (menggantikan tabel §2 style guide)

| Elemen | Minimum batch ini |
|---|---|
| Paragraf prosa | 4+ |
| Elemen terstruktur (tabel ATAU list dengan lead-in bold) | 1+ (tabel diutamakan untuk komparasi/rumus/fase; jangan paksa dua-duanya) |
| Angka spesifik inline (durasi, %, jumlah, tahun, rentang harga) | 4+ |
| H2 question-format | 1 |
| FAQ | 2–3 Q&A |
| Internal link | 2 (1 hub/halaman paling relevan + 1 cousin) — turun dari 3 |
| Sitasi eksternal otoritatif | 1–2 (tetap) |
| Image placeholder | 0 (dilarang) |

## 5. GEO / AI-Overview (tetap berlaku, dipadatkan)

- Jawaban langsung 40–60 kata segera setelah tiap H2 utama, baru elaborasi.
- Jawaban langsung itu TIDAK BOLEH menyatakan ulang isi definition snippet — isi
  dengan poin baru milik H2 tersebut (perbedaan, angka, aturan praktis).
- Satu paragraf = satu poin yang bisa dikutip & diverifikasi.
- Entity jelas: nama produk SAP lengkap di sebutan pertama, akronim di-expand sekali.

## 6. Soltius & CTA

- Maksimal **2** self-mention: 1 positioning line di Kesimpulan + 1 soft website CTA
  (baris terakhir). Tanpa aside Soltius di tengah body (ruangnya tidak ada di 900 kata).
- CTA anchor = kolom "Produk / Solusi (funnel-to)" di brief_tracker.md.

## 7. Catatan untuk editor & validator batch ini

- Band word count yang dicek: **800–1000** (bukan 1.500–1.800).
- FAQ yang dicek: **2–3** (bukan 5–8).
- Validasi image-brief: **N/A** — placeholder memang tidak ada; JANGAN flag sebagai isu.
- Internal link yang dicek: **2** (bukan 3).
- Semua cek lain (anti-AI §5, EYD, sitasi, framing Soltius, meta block) berlaku penuh.
- **Cek repetisi definisi**: definisi hanya boleh muncul sekali (di snippet). Paragraf
  atau H2 yang mengulang definisi snippet dengan kata lain = pangkas/tulis ulang.
