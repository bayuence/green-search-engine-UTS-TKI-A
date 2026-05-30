# LAPORAN ANALISIS MINI SEARCH ENGINE

**Mata Kuliah:** Temu Kembali Informasi
**Topik Koleksi:** Green Economy & Pembangunan Berkelanjutan di Indonesia
**Dosen Pengampu:** Taufiqotul Bariyah, S.Kom., M.IM., MCE

**Disusun Oleh:**

| Nama | NIM |
|------|-----|
| Bayu Nurcahyo | 3012310007 |
| Ari Setia Hinanda | 3012310005 |

Departemen Informatika — Universitas Internasional Semen Indonesia, Gresik

---

## Pendahuluan

Laporan ini menjelaskan hasil pembangunan dan analisis sebuah Mini Search
Engine berbasis pembobotan TF-IDF dan Vector Space Model (VSM). Sistem dibangun
untuk koleksi 50 dokumen bertopik green economy dan pembangunan berkelanjutan di
Indonesia yang dihimpun dari empat sumber jurnal.

Sistem melalui pipeline pemrosesan sebagai berikut:

```
Dokumen → Text Cleaning → Tokenisasi → Stop-word Removal → Stemming →
Inverted Index → Pembobotan TF-IDF → VSM + Cosine Similarity → Ranked Retrieval
```

Pembobotan TF menggunakan **Log Frequency Weighting** dengan rumus
`TF = 1 + log10(tf)`, sedangkan IDF menggunakan `IDF = log10(N / df)`. Stemming
Bahasa Indonesia dilakukan dengan algoritma Nazief-Adriani melalui pustaka
Sastrawi. Total dokumen N = 50 dan ukuran vocabulary akhir setelah stemming
adalah 325 kata unik.

Laporan ini berfokus pada tiga analisis yang diminta: (1) Analisis Bobot,
(2) Analisis Efek Normalisasi, dan (3) Evaluasi Sistem.

---

## 1. Analisis Bobot

Dalam analisis bobot, dipilih dua kata kunci sebagai sampel perhitungan nilai
IDF, yaitu **"ekonomi"** dan **"fiskal"**. Pemilihan kedua kata ini didasarkan
pada perbedaan frekuensi kemunculannya dalam koleksi. Kata "ekonomi" merupakan
istilah yang sangat umum pada koleksi bertopik green economy, sedangkan "fiskal"
relatif jarang dan lebih spesifik. Perbedaan ini menjadikan keduanya
representatif untuk menggambarkan cara kerja IDF secara kontrastif — bagaimana
kata umum menghasilkan bobot rendah dan kata langka menghasilkan bobot tinggi.

### a. Analisis Kata Kunci Pertama — "ekonomi"

**Langkah pertama**, mencari dokumen yang mengandung kata kunci. Setelah
melalui proses stemming, kata "ekonomi" ditemukan pada 33 dokumen berikut:

> Dokumen 3, 8, 9, 10, 13, 15, 16, 17, 20, 21, 26, 28, 29, 30, 32, 33, 34, 35,
> 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50.

Dengan demikian nilai **df("ekonomi") = 33** dari total 50 dokumen.

**Langkah kedua**, memasukkan nilai df ke perhitungan IDF:

```
IDF(ekonomi) = log10(N / df)
IDF(ekonomi) = log10(50 / 33)
IDF(ekonomi) = log10(1.5152)
IDF(ekonomi) = 0.1805
```

Nilai IDF 0.1805 yang rendah menunjukkan bahwa "ekonomi" adalah kata yang sangat
umum — muncul di 66% koleksi. Karena hampir semua dokumen memuatnya, kata ini
lemah sebagai pembeda (diskriminator) antar dokumen.

### b. Analisis Kata Kunci Kedua — "fiskal"

**Langkah pertama**, mencari dokumen yang mengandung kata kunci. Kata "fiskal"
ditemukan hanya pada 4 dokumen berikut:

> Dokumen 7, 10, 11, 12.

Dengan demikian nilai **df("fiskal") = 4** dari total 50 dokumen.

**Langkah kedua**, memasukkan nilai df ke perhitungan IDF:

```
IDF(fiskal) = log10(N / df)
IDF(fiskal) = log10(50 / 4)
IDF(fiskal) = log10(12.5000)
IDF(fiskal) = 1.0969
```

Nilai IDF 1.0969 yang tinggi menunjukkan bahwa "fiskal" adalah kata yang spesifik
— hanya muncul di 8% koleksi. Kata ini menjadi diskriminator yang kuat: jika
sebuah kueri mengandung "fiskal", dokumen yang memuatnya hampir pasti lebih
relevan dibanding yang tidak.

### c. Perbandingan dan Kesimpulan

| Parameter | ekonomi | fiskal |
|-----------|---------|--------|
| N (total dokumen) | 50 | 50 |
| df (jumlah dokumen) | 33 | 4 |
| N / df | 1.5152 | 12.5000 |
| IDF = log10(N/df) | 0.1805 | 1.0969 |
| Kategori | Umum (IDF rendah) | Langka (IDF tinggi) |

Selisih IDF antara keduanya adalah 0.9165, dengan rasio df 33:4 (sekitar 8 kali
lipat). Hasil ini membuktikan prinsip dasar IDF: **semakin jarang sebuah kata
muncul dalam koleksi, semakin tinggi bobotnya**, karena kata tersebut lebih
mampu membedakan dokumen yang benar-benar relevan. Hal ini sejalan dengan
prinsip teori informasi bahwa kejadian yang langka membawa informasi yang lebih
besar.

---

## 2. Analisis Efek Normalisasi

Pada analisis ini dilakukan perbandingan hasil pencarian antara metode yang
**menggunakan Cosine Normalization** dengan yang **hanya menggunakan dot
product tanpa normalisasi**. Tujuannya untuk mengetahui pengaruh normalisasi
terhadap perhitungan relevansi dan urutan peringkat dokumen. Sebagai studi
kasus digunakan kueri **"kebijakan ekonomi hijau indonesia"**.

### a. Perbandingan Peringkat

Tabel berikut membandingkan 10 dokumen teratas dari kedua metode. Kolom
"panjang" menunjukkan jumlah term pada dokumen tersebut.

| Rank | Tanpa Normalisasi (Dot Product) | Panjang | Dengan Normalisasi (Cosine) | Panjang |
|------|----------------------------------|---------|------------------------------|---------|
| 1 | D35 — skor 0.807 | 17 | D23 — skor 0.2344 | 11 |
| 2 | D7 — skor 0.703 | 25 | D2 — skor 0.2240 | 12 |
| 3 | D2 — skor 0.611 | 12 | D35 — skor 0.1990 | 17 |
| 4 | D23 — skor 0.611 | 11 | D33 — skor 0.1896 | 8 |
| 5 | D50 — skor 0.587 | 31 | D44 — skor 0.1837 | 8 |
| 6 | D15 — skor 0.512 | 19 | D28 — skor 0.1587 | 13 |
| 7 | D21 — skor 0.502 | 13 | D22 — skor 0.1586 | 7 |
| 8 | D16 — skor 0.454 | 41 | D21 — skor 0.1509 | 13 |
| 9 | D3 — skor 0.430 | 25 | D37 — skor 0.1453 | 11 |
| 10 | D10 — skor 0.430 | 27 | D47 — skor 0.1423 | 10 |

### b. Pengamatan

Terlihat jelas perbedaan perilaku kedua metode:

- **Tanpa normalisasi**, dokumen-dokumen panjang cenderung naik ke atas.
  Contohnya D7 (25 term), D50 (31 term), dan D16 (41 term) menempati posisi
  tinggi. Hal ini terjadi karena dokumen panjang memiliki lebih banyak term,
  sehingga akumulasi nilai dot product-nya membesar — bukan karena lebih
  relevan, melainkan semata karena lebih banyak kontributor.

- **Dengan normalisasi**, peringkat berubah. Dokumen pendek yang fokus pada
  topik kueri justru naik. Contohnya D33 (8 term), D44 (8 term), dan D22
  (7 term) yang sebelumnya tidak menonjol kini masuk peringkat atas. Sementara
  D16 yang panjang (41 term) keluar dari 10 besar.

Kasus paling kontras adalah **D16**: dengan dot product ia berada di peringkat 8
(skor 0.454), namun setelah normalisasi ia terlempar dari daftar teratas. Ini
membuktikan bahwa skor tingginya sebelumnya hanyalah efek panjang dokumen, bukan
relevansi sesungguhnya.

### c. Penjelasan (Kaitan dengan Vector Space Model)

Dalam VSM, skor relevansi tanpa normalisasi dihitung sebagai dot product:

```
Skor(q, d) = Σ [ TF-IDF(t, q) × TF-IDF(t, d) ]
```

Karena dokumen panjang memiliki banyak term dengan nilai TF-IDF, total
akumulasinya membesar. Inilah yang menyebabkan **bias terhadap panjang
dokumen**.

Solusinya adalah Cosine Normalization, yang membagi dot product dengan panjang
(norma L2) kedua vektor:

```
CosSim(q, d) = (q · d) / (||q|| × ||d||)
```

Dengan pembagian ini, yang dibandingkan adalah **arah vektor** (merepresentasikan
topik dokumen), bukan **besar vektor** (merepresentasikan panjang dokumen).
Setiap vektor diproyeksikan ke panjang satu unit — dalam eksperimen, seluruh
50 dokumen yang sebelumnya bernorma beragam (misal D5 = 7.63, D6 = 2.98) menjadi
bernorma tepat 1.0000 setelah dinormalisasi. Akibatnya, perbandingan antar
dokumen menjadi adil tanpa memandang seberapa panjang teksnya.

**Analogi sederhana:** bayangkan dua orang membicarakan topik yang sama. Orang A
bicara 1000 kata dan menyebut "ekonomi hijau" 10 kali; orang B bicara 100 kata
dan menyebutnya 5 kali. Tanpa normalisasi, A menang (10 > 5). Tapi dengan
normalisasi, B menang (5/100 = 5% > 10/1000 = 1%) karena B secara proporsional
lebih fokus membahas topik tersebut. Inilah keadilan yang dibawa normalisasi.

---

## 3. Evaluasi Sistem

Evaluasi dilakukan menggunakan dua kueri berbeda, yaitu **"kebijakan ekonomi
hijau indonesia"** (Kueri 1) dan **"pertanian berkelanjutan energi terbarukan"**
(Kueri 2). Tujuannya mengukur kemampuan sistem menemukan dokumen relevan
berdasarkan kueri. Dokumen yang dianggap relevan ditetapkan terlebih dahulu
sebagai **ground truth** berdasarkan penilaian kelompok terhadap isi dokumen.
Kinerja sistem kemudian diukur menggunakan tiga metrik:

- **Precision** = TP / (TP + FP) → dari yang diambil sistem, berapa yang benar relevan.
- **Recall** = TP / (TP + FN) → dari semua yang relevan, berapa yang berhasil ditemukan.
- **F-Measure** = 2 × (P × R) / (P + R) → harmonik mean antara Precision dan Recall.

Sistem mengambil 10 dokumen teratas (top-10) untuk tiap kueri.

### a. Hasil Pengujian Kueri Pertama — "kebijakan ekonomi hijau indonesia"

Ground truth untuk kueri ini berjumlah **13 dokumen** yang dinilai membahas
kebijakan/pemerintah Indonesia terkait ekonomi hijau:

> D2, D7, D10, D12, D16, D20, D23, D24, D27, D35, D37, D44, D50.

Dari 10 dokumen yang dikembalikan sistem, diperoleh:

| Komponen | Nilai |
|----------|-------|
| Retrieved (diambil sistem) | 10 |
| Ground Truth (relevan total) | 13 |
| TP (relevan & diambil) | 5 |
| FP (tidak relevan, diambil) | 5 |
| FN (relevan, tidak diambil) | 8 |

- **True Positive (5):** D2, D23, D35, D37, D44
- **False Positive (5):** D21, D22, D28, D33, D47
- **False Negative (8):** D7, D10, D12, D16, D20, D24, D27, D50

Perhitungan metrik:

```
Precision = TP / (TP + FP) = 5 / (5 + 5) = 0.5000
Recall    = TP / (TP + FN) = 5 / (5 + 8) = 0.3846
F-Measure = 2 × (0.5 × 0.3846) / (0.5 + 0.3846) = 0.4348
```

### b. Hasil Pengujian Kueri Kedua — "pertanian berkelanjutan energi terbarukan"

Ground truth untuk kueri ini berjumlah **11 dokumen**:

> D24, D25, D31, D34, D39, D40, D42, D45, D46, D49, D50.

Dari 10 dokumen yang dikembalikan sistem, diperoleh:

| Komponen | Nilai |
|----------|-------|
| Retrieved (diambil sistem) | 10 |
| Ground Truth (relevan total) | 11 |
| TP (relevan & diambil) | 10 |
| FP (tidak relevan, diambil) | 0 |
| FN (relevan, tidak diambil) | 1 |

Perhitungan metrik:

```
Precision = TP / (TP + FP) = 10 / (10 + 0) = 1.0000
Recall    = TP / (TP + FN) = 10 / (10 + 1) = 0.9091
F-Measure = 2 × (1.0 × 0.9091) / (1.0 + 0.9091) = 0.9524
```

### c. Ringkasan dan Interpretasi

| Metrik | Kueri 1 | Kueri 2 | Rata-rata |
|--------|---------|---------|-----------|
| Precision | 0.5000 | 1.0000 | 0.7500 |
| Recall | 0.3846 | 0.9091 | 0.6469 |
| F-Measure | 0.4348 | 0.9524 | 0.6936 |

Nilai **MAP (Mean Average Precision)** dari kedua kueri adalah **0.6221**.

Hasil menunjukkan performa yang **berbeda cukup tajam antara kedua kueri**, dan
justru perbedaan inilah yang menarik untuk dianalisis:

**Kueri 2 berperforma sangat baik** (Precision sempurna, Recall 0.91). Hampir
seluruh dokumen yang diambil benar-benar relevan, dan hanya 1 dokumen relevan
yang terlewat. Ini karena kueri 2 mengandung istilah yang cukup spesifik
("pertanian", "energi", "terbarukan") sehingga sistem TF-IDF dapat membedakan
dokumen relevan dengan baik.

**Kueri 1 berperforma sedang** (Precision 0.50, Recall 0.38). Ada dua penyebab
utama:

1. **Efek over-stemming.** Kata "kebijakan" pada kueri ter-stem menjadi "bijak"
   (token akhir kueri: `['bijak', 'ekonomi', 'hijau', 'indonesia']`). Bentuk
   "bijak" tidak cocok dengan term pada dokumen yang sebenarnya membahas
   kebijakan, sehingga beberapa dokumen relevan gagal terambil. Ini adalah
   keterbatasan stemmer yang menarik untuk dicatat.

2. **Ground truth lebih besar dari kapasitas top-10.** Kueri 1 punya 13 dokumen
   relevan, sementara sistem hanya mengambil 10. Secara matematis, Recall
   maksimal yang bisa dicapai sudah dibatasi (10/13 ≈ 0.77), sehingga delapan
   dokumen relevan (D7, D10, D12, dst.) tidak sempat masuk daftar.

Selain itu, kelima False Positive pada Kueri 1 (D21, D22, D28, D33, D47)
sebenarnya tetap membahas ekonomi hijau Indonesia, hanya saja tidak memenuhi
kriteria "kebijakan/pemerintah" yang kami tetapkan sebagai ground truth. Ini
menunjukkan bahwa batas relevansi memang tidak selalu hitam-putih.

### d. Catatan tentang Kualitas Ground Truth

Perlu ditekankan bahwa nilai evaluasi sangat bergantung pada kualitas penetapan
ground truth. Pada koleksi yang lebih besar dan kueri yang lebih kompleks, nilai
Recall berpotensi menurun karena dokumen relevan yang menggunakan sinonim atau
variasi kata tidak akan ditemukan oleh sistem berbasis pencocokan kata eksak.

Oleh karena itu, pengembangan lebih lanjut dapat dilakukan melalui penerapan
teknik **query expansion**, perbaikan **stemming** (untuk menghindari kasus
"kebijakan" → "bijak"), atau penggunaan **model semantik** agar sistem lebih
tangguh dalam menemukan dokumen relevan yang tidak memuat kata kunci secara
eksplisit.

---

## Kesimpulan

1. **Mini Search Engine** berhasil dibangun dengan pipeline lengkap mulai dari
   pembersihan teks hingga ranked retrieval, mampu memproses kueri Bahasa
   Indonesia dan mengembalikan dokumen terurut berdasarkan relevansi.

2. **Analisis Bobot** membuktikan prinsip IDF: kata "ekonomi" (df=33, IDF=0.18)
   yang umum berbobot rendah, sedangkan "fiskal" (df=4, IDF=1.10) yang langka
   berbobot tinggi. Kata langka adalah diskriminator yang lebih kuat.

3. **Analisis Normalisasi** menunjukkan bahwa tanpa normalisasi, dokumen panjang
   memperoleh skor lebih tinggi secara tidak adil (kasus D16, D50). Cosine
   Normalization mengatasinya dengan membandingkan arah vektor, bukan
   panjangnya, sehingga ranking menjadi adil.

4. **Evaluasi Sistem** menghasilkan rata-rata Precision 0.75, Recall 0.65,
   F-Measure 0.69, dan MAP 0.62. Perbedaan performa antar kueri memperlihatkan
   pengaruh spesifisitas kueri dan keterbatasan stemming terhadap kualitas hasil
   pencarian.

Secara keseluruhan, sistem bekerja sesuai prinsip teori temu kembali informasi,
dan keterbatasan yang ditemukan justru memberikan gambaran nyata tentang
tantangan dalam membangun sistem IR.
