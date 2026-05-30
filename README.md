# GreenSearch — Mini Search Engine

Mesin pencari sederhana berbasis **TF-IDF** dan **Vector Space Model** untuk koleksi dokumen bertopik *Green Economy & Pembangunan Berkelanjutan di Indonesia*. Dibangun dari nol sebagai tugas mata kuliah Temu Kembali Informasi.

**Live Demo:** https://green-search-engine-uts-tki-a.vercel.app

---

## Ringkasan

GreenSearch mengindeks 50 dokumen dari 4 jurnal, lalu mengembalikan dokumen paling relevan terhadap kueri pengguna secara *ranked retrieval*. Sistem tersedia dalam dua bentuk: notebook Python (perhitungan utama) dan aplikasi web (demo interaktif tanpa server).

| Komponen | Keterangan |
|----------|------------|
| Koleksi | 50 dokumen, 4 sumber jurnal |
| Vocabulary | 325 term unik (setelah stemming) |
| Stemmer | Nazief-Adriani (Sastrawi) |
| Pembobotan TF | Log Frequency, `1 + log₁₀(tf)` |
| Pembobotan IDF | `log₁₀(N / df)` |
| Model | Vector Space Model + Cosine Similarity |

---

## Pipeline

```
Dokumen → Text Cleaning → Tokenisasi → Stop-word Removal → Stemming
        → Inverted Index → TF-IDF → VSM + Cosine Similarity → Ranked Retrieval
```

---

## Struktur Proyek

```
.
├── GreenSearch.html                          # Antarmuka web
├── assets/
│   ├── css/style.css                         # Styling
│   └── js/app.js                             # Engine (JavaScript)
├── Tugas P3 TKI.csv                          # Dataset 50 dokumen
├── Tugas_Lanjutan_Mini_Search_Engine.ipynb   # Notebook utama (Python)
├── LAPORAN.md                                # Laporan analisis
└── vercel.json                               # Konfigurasi deploy
```

---

## Menjalankan

### Versi Web

Buka `GreenSearch.html` di browser, atau akses [demo online](https://green-search-engine-uts-tki-a.vercel.app). Tidak memerlukan instalasi.

### Versi Notebook

```bash
pip install PySastrawi pandas numpy scikit-learn matplotlib
```

Buka `Tugas_Lanjutan_Mini_Search_Engine.ipynb`, lalu jalankan seluruh sel (**Run All**).

---

## Fitur

- **Mesin Pencari** — pencarian kueri Bahasa Indonesia dengan skor relevansi dan log preprocessing.
- **Inverted Index** — pemetaan term ke posting list (dokumen, posisi, frekuensi).
- **Analisis Bobot** — perbandingan IDF kata umum vs kata langka.
- **Efek Normalisasi** — perbandingan hasil dengan dan tanpa Cosine Normalization.
- **Evaluasi Sistem** — pengukuran Precision, Recall, dan F-Measure.

---

## Keterbatasan

- Pencarian berbasis pencocokan kata; dokumen relevan bersinonim tidak terdeteksi.
- Stemmer dapat salah memotong istilah teknis atau kata serapan asing.
- Koleksi kecil (50 dokumen) membatasi generalisasi hasil evaluasi.

---

## Kelompok

| Nama | NIM |
|------|-----|
| Bayu Nurcahyo | 3012310007 |
| Ari Setia Hinanda | 3012310005 |

Teknik Informatika — Universitas Internasional Semen Indonesia · Temu Kembali Informasi 2026
