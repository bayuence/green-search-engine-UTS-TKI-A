// ═══════════════════════════════════════════════════════════════════════
//  GreenSearch — Mini Search Engine (Temu Kembali Informasi)
//  TF-IDF + Vector Space Model + Cosine Similarity
//  Kelompok: Bayu Nurcahyo (3012310007) & Ari Setia Hinanda (3012310005)
// ═══════════════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────────────────
//  1. DATASET — 50 Dokumen dari Tugas P3 TKI.csv (Teks Asli)
// ────────────────────────────────────────────────────────────────────────
const DOCS = [
  {id:0,text:'Konsep green economy merupakan suatu konsep yang relatif baru, namun konsep ini sejatinya pengembangan dari suistainable development.',src:'Jurnal 1'},
  {id:1,text:'Penerapan dan pelaksanaan green economy yang terarah dan menyeluruh di Indonesia harus ditunjang oleh kebijakan pemerintah untuk menjamin keberhasilan penerapannya.',src:'Jurnal 1'},
  {id:2,text:'Seperti yang telah ditetapkan oleh Kabinet Indonesia Bersatu II dalam Rencana Pembangunan Jangka Menengah Nasional-nya (RPJMN) periode 2010\u20132014 sebagai dasar pengembangan perekonomian Indonesia yang berkelanjutan yang antara lain dilakukan melalui aplikasi green budgeting untuk menata-kelola keuangan anggaran pemerintah.',src:'Jurnal 1'},
  {id:3,text:'Konsep pembangunan berkelanjutan di Indonesia telah diamanatkan dalam Pembukaan Undang-Undang Dasar 1945.',src:'Jurnal 1'},
  {id:4,text:'Hal ini sejalan dengan hasil Konferensi PBB tentang Lingkungan Hidup yang diadakan di Stockholm Tahun 1972, Deklarasi Lingkungan Hidup KTT Bumi di Rio de Janeiro Tahun 1992, dan KTT Pembangunan Berkelanjutan di Johannesburg Tahun 2002 yang menyepakati prinsip dalam pengambilan keputusan pembangunan harus memperhatikan dimensi lingkungan.',src:'Jurnal 1'},
  {id:5,text:'Implementasi dari green budgeting antara lain melalui penerapan green procurement pada kebijakan publik.',src:'Jurnal 1'},
  {id:6,text:'Dalam rangka mengembangkan green economy, BKF kini tengah mengembangkan, mengevaluasi, dan menerapkan kebijakan fiskal dan instrumen pendanaan yang dapat menyumbang kepada tanggapan Indonesia terhadap perubahan iklim secara keseluruhan.',src:'Jurnal 1'},
  {id:7,text:'Green economy merupakan suatu model pendekatan pembangunan ekonomi yang tidak lagi mengandalkan pembangunan ekonomi berbasis eksploitasi sumber daya alam dan lingkungan yang berlebihan.',src:'Jurnal 1'},
  {id:8,text:'Green economy merupakan suatu lompatan besar untuk meninggalkan praktik-praktik ekonomi yang mementingkan keuntungan jangka pendek yang telah mewariskan berbagai permasalahan yang mendesak untuk ditangani, termasuk di antaranya menggerakkan perekonomian yang rendah karbon (low carbon economy).',src:'Jurnal 1'},
  {id:9,text:'Peranan Kementerian Keuangan dalam mengimplementasikan konsep green economy sangat penting, selama ini kebijakan fiskal untuk green economy masih terbatas pada pengembangan opsi-opsi kebijakan fiskal dan ekonomi untuk melaksanakan mitigasi perubahan iklim yang berfokus pada sektor energi dan penggunaan lahan.',src:'Jurnal 1'},
  {id:10,text:'Ke depan tantangan Kementerian Keuangan adalah mengembangkan kebijakan fiskal untuk dorongan kepada sektor industri menuju green industry, green electricity.',src:'Jurnal 1'},
  {id:11,text:'Di samping itu, sejalan dengan konsep green economy, Kementerian Keuangan juga dituntut untuk mengembangkan kebijakan fiskal yang berorientasi pada green budgeting.',src:'Jurnal 1'},
  {id:12,text:'Green Economy dapat diartikan sebagai model ekonomi baru yang bertolak belakang dengan model ekonomi sekarang (black economical model) yang mengunakan fossil fuels.',src:'Jurnal 2'},
  {id:13,text:'Selain itu, green economy juga didasarkan pada pengetahuan ecological economics yang membahas tentang ketergantungan manusia secara ekonomis terhadap ekosistem alam akibat ketergantungan manusia terhadap climate change dan global warming.',src:'Jurnal 2'},
  {id:14,text:'Konsep ekonomi hijau meliputi cakupan yang luas dan merupakan paradigma baru dalam pembangunan ekonomi guna menggantikan kebijakan-kebijakan lingkungan yang pada masa lalu kerap difokuskan pada solusi jangka pendek.',src:'Jurnal 2'},
  {id:15,text:'Pendekatan ekonomi hijau merupakan win-win solution dalam mengakhiri perdebatan para penentu kebijakan seputar pelestarian lingkungan dan pertumbuhan ekonomi atau dengan kata lain ekonomi hijau adalah model pembangunan ekonomi berbasiskan pengetahuan terhadap ecological economics dan green economic yang bertujuan untuk menjawab saling ketergantungan antara ekonomi dan ekosistem serta dampak negatif akibat aktivitas ekonomi termasuk perubahan iklim dan pemanasan global.',src:'Jurnal 2'},
  {id:16,text:'Berdasarkan berbagai pengertian yang dikemukakan oleh berbagai penulis, inti dari green economy merupakan low carbon growth, resource efficiency dan social inclusivity, yang berimplikasi pada pembangunan yang berkelanjutan, management energi, ekonomi hijau di perkotaan dan juga bisnis hijau.',src:'Jurnal 2'},
  {id:17,text:'Hal ini membuktikan bahwa hubungan green economy terhadap pembangunan suatu negara sangatlah berpengaruh. Pengaruh tersebut secara tidak langsung terjadi akibat keseimbangan yang terjadi baik dari ekosistem maupun lingkungan.',src:'Jurnal 2'},
  {id:18,text:'Green Economic tidak hanya permasalahan lingkungan, tetapi diperlukan adanya kegiatan industri yang bergerak untuk mengharmonisasikan kegiatan dengan sistem alam sehingga diperlukan kreativitas umat manusia dan pengetahuan mendasar berwawasan lingkungan dari seluruh komponen masyarakat.',src:'Jurnal 2'},
  {id:19,text:'Kebijakan ekonomi hijau Indonesia menekankan pada pengurangan kemiskinan dan internalisasi biaya lingkungan hidup.',src:'Jurnal 2'},
  {id:20,text:'Implementasi utama Ekonomi Hijau di Indonesia adalah komitmen Pemerintah Indonesia untuk mengurangi emisi rumah kaca sebesar 26% pada tahun 2020.',src:'Jurnal 2'},
  {id:21,text:'Penerapan green economy di Indonesia merupakan salah satu konsep yang menguntungkan.',src:'Jurnal 2'},
  {id:22,text:'Implementasi green economy di Indonesia yang terarah dan secara menyeluruh harus ditunjang oleh adanya kebijakan pemerintah untuk dapat menjamin keberhasilan implementasinya.',src:'Jurnal 3'},
  {id:23,text:'Green economy Indonesia ditopang oleh enam sumber energi terbarukan yaitu, gelombang laut, panas bumi, bioenergi, air, angin, dan panas matahari.',src:'Jurnal 3'},
  {id:24,text:'Salah satunya dengan dibuatnya Peraturan Presiden Nomor 12 tahun 2022 tentang Percepatan Pengembangan Energi Terbarukan untuk Penyediaan Tenaga Listrik.',src:'Jurnal 3'},
  {id:25,text:'Berdasarkan uraian diatas, dapat disimpulkan bahwa konsep green economy merupakan sebuah konsep pembangunan ekonomi yang berlandaskan pelestarian lingkungan, yang mana bertujuan untuk meningkatkan kesetaraan dan kesejahteraan sosial masyarakat, sekaligus mengurangi risiko kerusakan lingkungan secara signifikan.',src:'Jurnal 3'},
  {id:26,text:'Tentunya dalam melaksanakan green economy di Indonesia dibutuhkan peran serta seluruh pihak, baik pemerintahan, ekonom, pelaku bisnis, hingga masyarakat dalam mewujudkan green economy sesuai dengan yang telah direncanakan sehingga dapat tercapainya pembangunan berkelanjutan.',src:'Jurnal 3'},
  {id:27,text:'Ekonomi hijau di Indonesia merupakan paradigma pembangunan yang berfokus pada pertumbuhan ekonomi yang berkelanjutan dengan tetap melestarikan lingkungan dan kesejahteraan sosial.',src:'Jurnal 4'},
  {id:28,text:'Penerapan ekonomi hijau terbentuk karena dorongan oleh kesadaran akan keterbatasan sumber daya alam dan dampak negatif pembangunan ekonomi terhadap lingkungan.',src:'Jurnal 4'},
  {id:29,text:'Upaya dalam mengurangi kemiskinan, menciptakan lapangan kerja dan menjamin pertumbuhan ekonomi yang berkelanjutan merupakan penerapan yang melatarbelakangi adanya ekonomi hijau.',src:'Jurnal 4'},
  {id:30,text:'Penelitian ini menggunakan pendekatan kualitatif dengan metode Systematic Literature Review (SLR) untuk menganalisis strategi pembangunan pertanian berkelanjutan berbasis green economy di Indonesia.',src:'Jurnal 4'},
  {id:31,text:'Ekonomi hijau merupakan sistem ekonomi yang bertujuan untuk menyeimbangkan pertumbuhan ekonomi dan pelestarian lingkungan dengan pemanfaatan sumber daya alam secara berkelanjutan dan ramah lingkungan.',src:'Jurnal 4'},
  {id:32,text:'Implementasi ekonomi hijau di Indonesia menunjukkan dampak positif terhadap pendapatan negara.',src:'Jurnal 4'},
  {id:33,text:'Sektor pertanian memiliki peran yang cukup penting dalam transisi menuju ekonomi hijau, karena dalam sektor ini menyerap sekitar 28,15% tenaga kerja nasional menjadikan sektor pertanian dengan penyerapan tenaga kerja terbesar.',src:'Jurnal 4'},
  {id:34,text:'Temuan kajian ini menunjukkan bahwa implementasi ekonomi hijau di Indonesia telah memiliki kerangka kebijakan yang relatif komprehensif melalui RPJMN, LCDI, dan Green Economy Indonesia Roadmap.',src:'Jurnal 4'},
  {id:35,text:'Salah satu prinsip ekonomi hijau adalah efisiensi sumber daya dengan menggunakan sumber daya alam secara berkelanjutan dan bertanggung jawab untuk meminimalkan dampak negatif terhadap lingkungan dan memastikan pertumbuhan ekonomi dan kesejahteraan sosial jangka panjang.',src:'Jurnal 4'},
  {id:36,text:'Penerapan kebijakan ekonomi hijau memiliki pengaruh positif dan signifikan terhadap peningkatan pendapatan nasional.',src:'Jurnal 4'},
  {id:37,text:'Ekonomi hijau mampu memperkuat partisipasi masyarakat pedesaan dalam pembangunan.',src:'Jurnal 4'},
  {id:38,text:'Sejalan dengan tujuan penelitian ini untuk menganalisis peran ekonomi hijau dalam mendorong pembangunan pertanian berkelanjutan yang inklusif, temuan menunjukkan bahwa penerapan ekonomi hijau berkontribusi signifikan dalam memperkuat partisipasi masyarakat pedesaan dalam proses pembangunan.',src:'Jurnal 4'},
  {id:39,text:'Ekonomi hijau mengandalkan pada tiga strategi inti yang meliputi pengurangan emisi karbon, efisiensi penggunaan energi dan sumber daya alam, serta perlindungan terhadap ekosistem dan keanekaragaman hayati.',src:'Jurnal 4'},
  {id:40,text:'Ekonomi hijau secara konseptual bertujuan untuk mendorong pertumbuhan ekonomi yang berkelanjutan tanpa menurunkan kualitas lingkungan hidup.',src:'Jurnal 4'},
  {id:41,text:'Temuan menunjukkan bahwa penerapan prinsip ekonomi hijau telah berkontribusi pada meningkatnya kesadaran dan komitmen pelaku usaha, termasuk di sektor pertanian dan agroindustri, terhadap praktik konservasi lingkungan.',src:'Jurnal 4'},
  {id:42,text:'Hasil penelitian Geissdoerfer et al. (2017) yang menunjukkan bahwa ekonomi hijau dan ekonomi sirkular berperan penting dalam meminimalkan eksploitasi sumber daya alam sekaligus mempertahankan fungsi ekosistem.',src:'Jurnal 4'},
  {id:43,text:'Kebijakan pemerintah merupakan faktor utama pendorong implementasi ekonomi hijau.',src:'Jurnal 4'},
  {id:44,text:'Penelitian oleh Rockstr\u00F6m et al. (2023) menunjukkan bahwa ekspansi pertanian berskala besar di negara berkembang hanya dapat mendukung ekonomi hijau apabila disertai dengan pendekatan berbasis ekosistem dan perlindungan keanekaragaman hayati.',src:'Jurnal 4'},
  {id:45,text:'Transisi ke ekonomi hijau memerlukan investasi besar dalam infrastruktur rendah karbon, energi terbarukan dan teknologi hijau.',src:'Jurnal 4'},
  {id:46,text:'Penerapan kebijakan ekonomi hijau memerlukan dukungan dari berbagai pihak, termasuk sektor swasta, masyarakat, dan lembaga internasional.',src:'Jurnal 4'},
  {id:47,text:'Kerjasama antara pemerintah dan sektor swasta dalam pengembangan teknologi ramah lingkungan dan inovasi sangat penting untuk memaksimalkan pencapaian tujuan ekonomi hijau.',src:'Jurnal 4'},
  {id:48,text:'Penerapan prinsip ekonomi hijau melalui efisiensi penggunaan sumber daya, pemanfaatan energi dan teknologi yang ramah lingkungan, serta pengelolaan limbah yang berbasis pada ekonomi sirkular telah memberi efek positif terhadap produktivitas pertanian dan pendapatan nasional.',src:'Jurnal 4'},
  {id:49,text:'Penelitian ini menunjukkan bahwa penerapan ekonomi hijau di sektor pertanian Indonesia memiliki peran penting dalam mendukung pembangunan berkelanjutan. Indonesia sebagai negara agraris dan kekayaan sumber daya alam yang melimpah, Indonesia memiliki potensi untuk menjadikan bidang pertanian sebagai pilar utama dalam transisi menuju ekonomi hijau.',src:'Jurnal 4'},
];

// ────────────────────────────────────────────────────────────────────────
//  2. STOPWORDS — Sastrawi Indonesian Stopwords
// ────────────────────────────────────────────────────────────────────────
const STOPWORDS=new Set(['ada','adalah','adanya','adapun','agak','agaknya','agar','akan','akankah','akhir','akhirnya','aku','akulah','amat','amatlah','anda','andalah','antar','antara','antaranya','apa','apaan','apabila','apakah','apalagi','apatah','artinya','asal','asalkan','atas','atau','ataukah','ataupun','awal','awalnya','bagai','bagaikan','bagaimana','bagaimanakah','bagaimanapun','bagi','bagian','bahkan','bahwa','bahwasanya','baik','bakal','bakalan','balik','banyak','bapak','baru','bawah','beberapa','begini','beginian','beginikah','beginilah','begitu','begitukah','begitulah','begitupun','bekas','belakang','belakangan','belum','belumlah','benar','benarkah','benarlah','berada','berakhir','berakhirlah','berakhirnya','berapa','berapakah','berapalah','berapapun','berarti','berawal','berbagai','berdatangan','beri','berikan','berikut','berikutnya','berjumlah','berkali','berkata','berkehendak','berkeinginan','berkenaan','berlainan','berlalu','berlangsung','berlebihan','bermacam','bermaksud','bermula','bersama','bersamaan','bersiap','bertanya','berturut','bertutur','berupa','besar','betul','betulkah','biasa','biasanya','bila','bilakah','bilamana','bisa','bisakah','boleh','bolehkah','bolehlah','buat','bukan','bukankah','bukanlah','bukannya','bulan','bung','cara','caranya','cukup','cukupkah','cukuplah','cuma','dahulu','dalam','dan','dapat','dari','daripada','datang','dekat','demi','demikian','demikianlah','dengan','depan','di','dia','diakhiri','diakhirinya','dialah','diantara','diantaranya','diberi','diberikan','diberikannya','dibuat','dibuatnya','didapat','didatangkan','digunakan','diibaratkan','diibaratkannya','diingat','diingatkan','diinginkan','dijawab','dijelaskan','dijelaskannya','dikarenakan','dikatakan','dikatakannya','dikerjakan','diketahui','diketahuinya','dikira','dilakukan','dilalui','dilihat','dimaksud','dimaksudkan','dimaksudkannya','dimaksudnya','dimana','diminta','dimintai','dimisalkan','dimulai','dimulailah','dimulainya','dimungkinkan','dini','dipastikan','diperbuat','diperbuatnya','dipergunakan','diperkirakan','diperlihatkan','diperlukan','diperlukannya','dipersoalkan','dipertanyakan','dipunyai','diri','dirinya','disampaikan','disebut','disebutkan','disebutkannya','disini','disinilah','ditambahkan','ditandaskan','ditanya','ditanyai','ditanyakan','ditegaskan','ditujukan','ditunjuk','ditunjuki','ditunjukkan','ditunjukkannya','ditunjuknya','dituturkan','dituturkannya','diucapkan','diucapkannya','diungkapkan','dong','dua','dulu','empat','enggak','enggaknya','entah','entahlah','guna','gunakan','hal','hampir','hanya','hanyalah','hari','harus','haruslah','harusnya','hendak','hendaklah','hendaknya','hingga','ia','ialah','ibarat','ibaratkan','ibaratnya','ibu','ikut','ingat','ingin','inginkah','inginkan','ini','inikah','inilah','itu','itukah','itulah','jadi','jadilah','jadinya','jangan','jangankan','janganlah','jauh','jawab','jawaban','jawabnya','jelas','jelaskan','jelaslah','jelasnya','jika','jikalau','juga','jumlah','jumlahnya','justru','kala','kalau','kalaulah','kalaupun','kalian','kami','kamilah','kamu','kamulah','kan','kapan','kapankah','kapanpun','karena','karenanya','kasus','kata','katakan','katakanlah','katanya','ke','keadaan','kebetulan','kecil','kedua','keduanya','keinginan','kelamaan','kelihatan','kelihatannya','kelima','keluar','kembali','kemudian','kemungkinan','kemungkinannya','kenapa','kepada','kepadanya','kesampaian','keseluruhan','keseluruhannya','keterlaluan','ketika','khusus','khususnya','kini','kinilah','kira','kiranya','kita','kitalah','kok','kurang','lagi','lagian','lah','lain','lainnya','lalu','lama','lamanya','lanjut','lanjutnya','lebih','lewat','lima','luar','macam','maka','makanya','makin','malah','malahan','mampu','mampukah','mana','manakala','manalagi','masa','masalah','masalahnya','masih','masihkah','masing','mau','maupun','melainkan','melakukan','melalui','melihat','memang','memastikan','memberi','memberikan','membuat','memerlukan','memihak','meminta','memintakan','memisalkan','memperbuat','mempergunakan','memperkirakan','memperlihatkan','mempersiapkan','mempersoalkan','mempertanyakan','mempunyai','memulai','memungkinkan','menaiki','menambahkan','menandaskan','menanti','menantikan','menanya','menanyai','menanyakan','mendapat','mendapatkan','mendatang','mendatangi','mendatangkan','menegaskan','mengakhiri','mengapa','mengatakan','mengatakannya','mengenai','mengerjakan','mengetahui','menggunakan','menghendaki','mengibaratkan','mengibaratkannya','mengingat','mengingatkan','menginginkan','mengira','mengucapkan','mengucapkannya','mengungkapkan','menjadi','menjawab','menjelaskan','menuju','menunjuk','menunjuki','menunjukkan','menunjuknya','menurut','menuturkan','menyampaikan','menyangkut','menyatakan','menyebutkan','menyeluruh','menyiapkan','merasa','mereka','merekalah','merupakan','meski','meskipun','meyakini','meyakinkan','minta','mirip','misal','misalkan','misalnya','mula','mulai','mulailah','mulanya','mungkin','mungkinkah','nah','naik','namun','nanti','nantinya','nyaris','nyatanya','oleh','olehnya','pada','padahal','padanya','pak','paling','panjang','pantas','para','pasti','pastilah','penting','pentingnya','per','percuma','perlu','perlukah','perlunya','pernah','persoalan','pertama','pertanyaan','pertanyakan','pihak','pihaknya','pukul','pula','pun','punya','rasa','rasanya','rata','rupanya','saat','saatnya','saja','sajalah','saling','sama','sambil','sampai','sampaikan','sana','sangat','sangatlah','satu','saya','sayalah','se','sebab','sebabnya','sebagai','sebagaimana','sebagainya','sebagian','sebaik','sebaiknya','sebaliknya','sebanyak','sebegini','sebegitu','sebelum','sebelumnya','sebenarnya','seberapa','sebesar','sebetulnya','sebisanya','sebuah','sebut','sebutkan','sebutlah','sebutnya','secara','secukupnya','sedang','sedangkan','sedemikian','sedikit','sedikitnya','seenaknya','segala','segalanya','segera','seharusnya','sehingga','seingat','sejak','sejauh','sejenak','sejumlah','sekadar','sekadarnya','sekali','sekalian','sekaligus','sekalipun','sekarang','sekaranglah','sekecil','seketika','sekiranya','sekitar','sekitarnya','sekurangnya','sela','selain','selaku','selalu','selama','selamanya','selanjutnya','seluruh','seluruhnya','semacam','semakin','semampu','semampunya','semasa','semasih','semata','semau','semaunya','sementara','semisal','semisalnya','sempat','semua','semuanya','semula','sendiri','sendirian','sendirinya','seolah','sepanjang','sepantasnya','sepantasnyalah','seperlunya','seperti','sepertinya','sepihak','sering','seringnya','serta','serupa','sesaat','sesama','sesampai','sesegera','sesekali','seseorang','sesuatu','sesuatunya','sesudah','sesudahnya','setelah','setempat','setengah','seterusnya','setiap','setiba','setibanya','setidaknya','setinggi','seusai','sewaktu','siap','siapa','siapakah','siapapun','sini','sinilah','soal','soalnya','suatu','sudah','sudahkah','sudahlah','supaya','tadi','tadinya','tahu','tahun','tak','tambah','tambahnya','tampak','tampaknya','tandas','tandasnya','tanpa','tanya','tanyakan','tanyanya','tapi','tenang','tentang','tentu','tentulah','tentunya','tepat','terakhir','terasa','terbanyak','terdahulu','terdapat','terdiri','terhadap','terhadapnya','teringat','terjadi','terjadilah','terjadinya','terkira','terlalu','terlebih','terlihat','termasuk','ternyata','tersampaikan','tersebut','tertentu','terucap','terucapkan','terungkap','tetap','tetapi','tiap','tiba','tidakkah','tidaklah','tidak','tiga','tinggi','toh','tunjuk','turut','tutur','tuturnya','ucap','ucapkan','ucapnya','umum','umumnya','ungkap','ungkapnya','untuk','usah','usai','waduh','wah','wahai','waktu','walaupun','wong','yakni','yaitu','yang']);

// ────────────────────────────────────────────────────────────────────────
//  3. STEMMER — Algoritma Nazief-Adriani (Indonesian Stemmer)
//     Implementasi berbasis rule morphophonemic untuk Bahasa Indonesia.
//     Langkah: (1) hapus partikel, (2) hapus possesif,
//              (3) hapus sufiks derivasi, (4) hapus prefiks derivasi.
// ────────────────────────────────────────────────────────────────────────
class NaziefAdrianiStemmer {
  constructor() {
    this.cache = {};
    // Kata dasar berawalan 'k' yang terserap prefiks meng-/peng-
    this.kRoots = new Set([
      'kembang','kurang','kelola','kerja','kunci','kumpul','kirim',
      'koordinasi','kritik','karang','kasih','kaya','kenal','kubur',
      'kuat','kuasa','kotor','kukuh','kembali','konsumsi','kontribusi',
      'konservasi','komprehensif'
    ]);
  }

  stem(word) {
    if (word.length <= 3) return word;
    if (this.cache[word]) return this.cache[word];
    let result = this._stem(word);
    if (result.length < 3) result = word;
    this.cache[word] = result;
    return result;
  }

  _stem(word) {
    let w = word;
    // Step 1a: Hapus partikel (-lah, -kah, -tah, -pun)
    w = this._removeParticle(w);
    // Step 1b: Hapus pronomina possesif (-ku, -mu, -nya)
    w = this._removePossessive(w);
    const base = w;

    // Step 2 & 3: Coba beberapa kombinasi sufiks, pilih hasil terbaik
    const candidates = [];

    // Coba sufiks -kan
    if (base.length > 5 && base.endsWith('kan')) {
      const r = this._removePrefixes(base.slice(0, -3));
      if (r.length >= 3) candidates.push(r);
    }
    // Coba sufiks -an
    if (base.length > 4 && base.endsWith('an')) {
      const r = this._removePrefixes(base.slice(0, -2));
      if (r.length >= 3) candidates.push(r);
    }
    // Coba sufiks -i (hanya jika ada prefiks derivasi, agar tidak salah stem "ekonomi")
    if (base.length > 5 && base.endsWith('i') && this._hasDerivPrefix(base)) {
      const r = this._removePrefixes(base.slice(0, -1));
      if (r.length >= 3) candidates.push(r);
    }
    // Coba tanpa sufiks
    const r0 = this._removePrefixes(base);
    if (r0.length >= 3) candidates.push(r0);

    if (candidates.length === 0) return word;
    // Pilih kandidat dengan panjang paling dekat ke 5 (typical root length)
    candidates.sort((a, b) => {
      const da = Math.abs(a.length - 5);
      const db = Math.abs(b.length - 5);
      if (da !== db) return da - db;
      return a.length - b.length; // tie-break: lebih pendek
    });
    return candidates[0];
  }

  _removeParticle(w) {
    if (w.length <= 4) return w;
    if (w.endsWith('lah')||w.endsWith('kah')||w.endsWith('tah')||w.endsWith('pun')) return w.slice(0,-3);
    return w;
  }

  _removePossessive(w) {
    if (w.length <= 4) return w;
    if (w.endsWith('nya')) return w.slice(0,-3);
    if (w.endsWith('ku')||w.endsWith('mu')) return w.slice(0,-2);
    return w;
  }

  _hasDerivPrefix(w) {
    return ['me','di','ke','se','ber','ter','per','pe'].some(p=>w.startsWith(p));
  }

  _removePrefixes(w) {
    let r = w;
    for (let i = 0; i < 2; i++) {
      const next = this._removeOnePrefix(r);
      if (next === r || next.length < 3) break;
      r = next;
    }
    return r;
  }

  _isVowel(c) { return 'aiueo'.includes(c); }

  _removeOnePrefix(w) {
    if (w.length < 4) return w;
    const V = (c) => this._isVowel(c);

    // ── Prefiks me- group ──
    if (w.startsWith('meny') && w.length > 5) return 's' + w.slice(4);
    if (w.startsWith('mem') && w.length > 4) {
      const c = w[3];
      if ('bfv'.includes(c)) return w.slice(3);
      if (V(c)) return 'p' + w.slice(3);
      return w.slice(3);
    }
    if (w.startsWith('menge') && w.length > 6) return w.slice(5);
    if (w.startsWith('meng') && w.length > 5) {
      const c = w[4];
      if ('ghq'.includes(c)) return w.slice(4);
      if (V(c)) { const rest=w.slice(4); const wk='k'+rest; return this.kRoots.has(wk)?wk:rest; }
      return w.slice(4);
    }
    if (w.startsWith('men') && w.length > 4) {
      const c = w[3];
      if ('cdjsz'.includes(c)) return w.slice(3);
      if (V(c)) return 't' + w.slice(3);
      return w.slice(3);
    }
    if (w.startsWith('me') && w.length > 4) {
      const c = w[2]; if ('lrwy'.includes(c)||V(c)) return w.slice(2);
    }

    // ── Prefiks pe- group ──
    if (w.startsWith('peny') && w.length > 5) return 's' + w.slice(4);
    if (w.startsWith('pem') && w.length > 4) {
      const c = w[3];
      if ('bfv'.includes(c)) return w.slice(3);
      if (V(c)) return 'p' + w.slice(3);
      return w.slice(3);
    }
    if (w.startsWith('penge') && w.length > 6) return w.slice(5);
    if (w.startsWith('peng') && w.length > 5) {
      const c = w[4];
      if ('ghq'.includes(c)) return w.slice(4);
      if (V(c)) { const rest=w.slice(4); const wk='k'+rest; return this.kRoots.has(wk)?wk:rest; }
      return w.slice(4);
    }
    if (w.startsWith('pen') && w.length > 4) {
      const c = w[3];
      if ('cdjsz'.includes(c)) return w.slice(3);
      if (V(c)) return 't' + w.slice(3);
      return w.slice(3);
    }
    if (w.startsWith('per') && w.length > 4) return w.slice(3);
    if (w.startsWith('pe') && w.length > 4) {
      const c = w[2]; if ('lrwy'.includes(c)||V(c)) return w.slice(2);
    }

    // ── Prefiks ber-, ter- ──
    if (w.startsWith('ber') && w.length > 4) return w.slice(3);
    if (w.startsWith('ter') && w.length > 4) return w.slice(3);

    // ── Prefiks di-, ke-, se- ──
    if (w.startsWith('di') && w.length > 4) return w.slice(2);
    if (w.startsWith('ke') && w.length > 4) return w.slice(2);
    if (w.startsWith('se') && w.length > 4) return w.slice(2);

    return w;
  }
}

const stemmer = new NaziefAdrianiStemmer();
function stem(w) { return stemmer.stem(w); }

// ────────────────────────────────────────────────────────────────────────
//  4. TEXT PREPROCESSING
// ────────────────────────────────────────────────────────────────────────
function cleanText(t) {
  return t.toLowerCase().replace(/\d+/g,'').replace(/[^a-z\s]/g,' ').replace(/\s+/g,' ').trim();
}
function tokenize(t) {
  return cleanText(t).split(' ').filter(w => w.length > 2 && !STOPWORDS.has(w));
}
function preprocess(q) {
  const raw = cleanText(q).split(' ').filter(t => t.length > 1);
  const noSW = raw.filter(t => !STOPWORDS.has(t));
  const stemmed = noSW.map(stem);
  return { raw, noSW, stemmed };
}

// ────────────────────────────────────────────────────────────────────────
//  5. TF-IDF ENGINE — Log Frequency Weighting + IDF
// ────────────────────────────────────────────────────────────────────────
function buildEngine() {
  const N = DOCS.length;
  const allToks = DOCS.map(d => tokenize(d.text).map(stem));
  const vocab = [...new Set(allToks.flat())].sort();
  const df = {};
  vocab.forEach(t => { df[t] = allToks.filter(toks => toks.includes(t)).length; });
  const idf = {};
  vocab.forEach(t => { idf[t] = df[t] > 0 ? Math.log10(N / df[t]) : 0; });

  // Inverted Index
  const invIdx = {};
  allToks.forEach((toks, docId) => {
    toks.forEach((t, pos) => {
      if (!invIdx[t]) invIdx[t] = { df: 0, postings: {} };
      if (!invIdx[t].postings[docId]) { invIdx[t].postings[docId] = []; invIdx[t].df++; }
      invIdx[t].postings[docId].push(pos);
    });
  });

  // TF-IDF vectors: w(t,d) = (1 + log10(tf)) * idf(t)
  const tfidf = allToks.map(toks => {
    const freq = {};
    toks.forEach(t => freq[t] = (freq[t] || 0) + 1);
    const vec = {};
    vocab.forEach(t => { const c = freq[t] || 0; vec[t] = c > 0 ? (1 + Math.log10(c)) * idf[t] : 0; });
    return vec;
  });

  // L2 Normalization
  function l2(v) {
    const s = Math.sqrt(Object.values(v).reduce((a, x) => a + x * x, 0));
    if (s === 0) return v;
    const n = {};
    Object.keys(v).forEach(k => n[k] = v[k] / s);
    return n;
  }
  const tfidfN = tfidf.map(l2);
  const docLen = allToks.map(t => t.length);
  const sources = [...new Set(DOCS.map(d => d.src))];
  return { vocab, df, idf, invIdx, tfidf, tfidfN, allToks, docLen, N, sources };
}
const E = buildEngine();

// ────────────────────────────────────────────────────────────────────────
//  6. SEARCH — Vector Space Model + Cosine Similarity
// ────────────────────────────────────────────────────────────────────────
function qvec(stemmed, norm = true) {
  const freq = {};
  stemmed.forEach(t => freq[t] = (freq[t] || 0) + 1);
  const vec = {};
  E.vocab.forEach(t => { const c = freq[t] || 0; vec[t] = c > 0 ? (1 + Math.log10(c)) * E.idf[t] : 0; });
  if (norm) {
    const s = Math.sqrt(Object.values(vec).reduce((a, x) => a + x * x, 0));
    if (s > 0) Object.keys(vec).forEach(k => vec[k] /= s);
  }
  return vec;
}
function dot(a, b) { let s = 0; Object.keys(a).forEach(t => { if (b[t]) s += a[t] * b[t]; }); return s; }
function search(stemmed, k = 10, norm = true) {
  const qv = qvec(stemmed, norm);
  const dm = norm ? E.tfidfN : E.tfidf;
  return DOCS.map((d, i) => ({ i, score: dot(qv, dm[i]) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

// ────────────────────────────────────────────────────────────────────────
//  7. UI FUNCTIONS
// ────────────────────────────────────────────────────────────────────────
function switchTab(name) {
  const tabs = ['search','index','bobot','norm','eval'];
  tabs.forEach(t => { document.getElementById('tab-' + t).classList.toggle('active', t === name); });
  document.querySelectorAll('.nav-item').forEach((el, i) => el.classList.toggle('active', tabs[i] === name));
  document.querySelectorAll('.tab-nav-item').forEach((el, i) => el.classList.toggle('active', tabs[i] === name));
}
function setQuery(q) { document.getElementById('query-input').value = q; doSearch(); }

function doSearch() {
  const q = document.getElementById('query-input').value.trim();
  if (!q) return;
  const { raw, noSW, stemmed } = preprocess(q);
  const trail = document.getElementById('process-trail'); trail.style.display = 'block';
  document.getElementById('trail-raw').innerHTML = `<span class="token clean">${q}</span>`;
  document.getElementById('trail-tokens').innerHTML = raw.map(t => `<span class="token raw">${t}</span>`).join('');
  document.getElementById('trail-nosw').innerHTML = noSW.map(t => `<span class="token clean">${t}</span>`).join('');
  document.getElementById('trail-stem').innerHTML = stemmed.map(t => `<span class="token stem">${t}</span>`).join('');
  const results = search(stemmed, 10, true);
  document.getElementById('results-count').textContent = `\u2014 ${results.length} dokumen ditemukan`;
  document.getElementById('norm-label').textContent = 'Cosine Similarity (Normalized)';
  const cont = document.getElementById('results-container');
  if (!results.length) { cont.innerHTML = `<div class="empty-state"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg><h3>Tidak ditemukan hasil</h3><p>Coba kata kunci yang lebih umum</p></div>`; return; }
  const maxS = results[0].score;
  const rankCls = ['r1','r2','r3'];
  cont.innerHTML = results.map((r, idx) => {
    const pct = (r.score / maxS * 100).toFixed(0);
    return `<div class="result-item">
      <div class="result-item-header">
        <div class="rank-no ${rankCls[idx]||''}">${idx+1}</div>
        <span class="rank-label">Peringkat ${idx+1}</span>
        <span class="doc-tag">D${r.i+1}</span>
        <span class="score-tag">CosSim: ${r.score.toFixed(5)}</span>
        <span class="len-tag">${E.docLen[r.i]} term</span>
      </div>
      <div class="result-text">${DOCS[r.i].text}</div>
      <div class="result-bar"><div class="result-bar-fill" style="width:${pct}%;"></div></div>
    </div>`;
  }).join('');
}

// ────────────────────────────────────────────────────────────────────────
//  8. TAB BUILDERS
// ────────────────────────────────────────────────────────────────────────

// ── Inverted Index Table ──
function buildIndexTable() {
  const sorted = Object.entries(E.invIdx).sort((a, b) => b[1].df - a[1].df).slice(0, 10);
  const rows = sorted.map(([t, d]) => {
    const ids = Object.keys(d.postings).slice(0, 5).map(x => `D${+x+1}`).join(', ') + (Object.keys(d.postings).length > 5 ? ` +${Object.keys(d.postings).length-5}` : '');
    return `<tr><td class="mono" style="color:#1a4a75;">${t}</td><td class="mono" style="text-align:center;">${d.df}</td><td class="mono" style="text-align:center;color:#1b4d3e;">${E.idf[t] ? E.idf[t].toFixed(4) : '-'}</td><td style="color:#5c6d66;font-size:0.68rem;">${ids}</td></tr>`;
  }).join('');
  document.getElementById('top-terms-table').innerHTML = `<table class="data-table"><thead><tr><th>Term</th><th>DF</th><th>IDF</th><th>Doc IDs</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function searchIndex(term) {
  const t = stem(term.toLowerCase().trim());
  const el = document.getElementById('idx-detail');
  if (!t || t.length < 2) { el.innerHTML = `<p style="font-size:0.7rem;color:#5c6d66;">Ketik kata di atas untuk melihat detail.</p>`; return; }
  const d = E.invIdx[t];
  if (!d) { el.innerHTML = `<p style="font-size:0.7rem;color:#7a2a2a;padding:8px 0;">Term <code style="color:#7a591a;">"${t}"</code> tidak ditemukan dalam index.</p>`; return; }
  const iv = E.idf[t] || 0;
  const rows = Object.entries(d.postings).slice(0, 8).map(([docId, pos]) => {
    const tf = pos.length; const tfl = (1 + Math.log10(tf)).toFixed(4); const tfidfv = (parseFloat(tfl) * iv).toFixed(4);
    return `<tr><td class="mono" style="color:#1a4a75;">D${+docId+1}</td><td class="mono" style="text-align:center;">${tf}</td><td class="mono" style="text-align:center;color:#1b4332;">${tfl}</td><td class="mono" style="text-align:center;color:#4a2c75;">${tfidfv}</td><td style="font-size:0.63rem;color:#5c6d66;">[${pos.slice(0,4).join(',')}${pos.length>4?'...':''}]</td></tr>`;
  }).join('');
  el.innerHTML = `<div class="grid-2" style="margin-bottom:8px;">
    <div class="metric-block"><div class="metric-block-label">Document Frequency</div><div class="metric-block-val" style="color:#7a591a;">${d.df}</div><div class="metric-block-sub">dari ${E.N} dokumen</div></div>
    <div class="metric-block blue"><div class="metric-block-label">IDF = log\u2081\u2080(${E.N}/${d.df})</div><div class="metric-block-val">${iv.toFixed(4)}</div></div>
  </div>
  <table class="data-table"><thead><tr><th>Doc</th><th>TF Raw</th><th>TF Log</th><th>TF-IDF</th><th>Posisi</th></tr></thead><tbody>${rows}</tbody></table>`;
}

// ── Analisis Bobot (Dinamis) ──
function buildBobotAnalysis() {
  const t1 = 'ekonomi', t2 = 'fiskal';
  const df1 = E.invIdx[t1] ? E.invIdx[t1].df : 0, df2 = E.invIdx[t2] ? E.invIdx[t2].df : 0;
  const idf1 = E.idf[t1] || 0, idf2 = E.idf[t2] || 0;
  const r1 = df1 > 0 ? (E.N / df1) : 0, r2 = df2 > 0 ? (E.N / df2) : 0;
  const p1 = ((df1/E.N)*100).toFixed(0), p2 = ((df2/E.N)*100).toFixed(0);
  const lo1 = idf1 < 0.5, lo2 = idf2 < 0.5;

  // IDF Bar Chart data
  const idfSorted = Object.entries(E.idf).sort((a,b)=>b[1]-a[1]).slice(0,18);
  const maxIdf = idfSorted[0][1];
  const idfBars = idfSorted.map(([t,v])=>{
    const pct=(v/maxIdf*100).toFixed(0); const dft=E.df[t]||0;
    const clr=v>1.2?'#1a4a75':v>0.7?'#1b4332':'#8c9d95';
    return `<div class="idf-bar-row"><span class="idf-term-name">${t}</span><span class="idf-df-label">df=${dft}</span><div class="idf-bar-track"><div class="idf-bar-track-fill" style="width:${pct}%;background:${clr};"></div></div><span class="idf-num">${v.toFixed(3)}</span></div>`;
  }).join('');

  function cardHTML(term,df,idf_v,ratio,pct,isLow) {
    const catLabel = isLow ? 'rendah' : 'tinggi';
    const catClass = isLow ? 'yellow' : 'green';
    const noteClass = isLow ? 'warn' : 'green';
    const noteText = isLow
      ? `<strong>Kata umum \u2014 IDF rendah.</strong> Muncul di ${pct}% dokumen. Tidak mampu membedakan dokumen secara spesifik. Diskriminator lemah.`
      : `<strong>Kata langka \u2014 IDF tinggi.</strong> Muncul di ${pct}% dokumen. Sangat spesifik dan mengidentifikasi dokumen tertentu. Diskriminator kuat.`;
    return `<div class="card">
      <div class="card-header"><h3>Kata Kunci: "${term}"</h3></div>
      <div class="formula-block">
        <span class="comment">// Langkah 1: Identifikasi Document Frequency</span><br>
        <span class="kw">term</span>    = <span class="val">"${term}"</span><br>
        <span class="kw">df</span>      = <span class="val">${df}</span>  <span class="comment">// muncul di ${df} dari ${E.N} dokumen</span><br>
        <span class="kw">N</span>       = <span class="val">${E.N}</span>  <span class="comment">// total dokumen</span><br><br>
        <span class="comment">// Langkah 2: Hitung IDF</span><br>
        <span class="kw">IDF</span>     = log\u2081\u2080(<span class="kw">N</span> / <span class="kw">df</span>)<br>
                = log\u2081\u2080(<span class="val">${E.N}</span> / <span class="val">${df}</span>)<br>
                = log\u2081\u2080(<span class="val">${ratio.toFixed(4)}</span>)<br>
                = <span class="op">${idf_v.toFixed(4)}</span>  <span class="comment">\u2190 IDF ${catLabel}</span>
      </div>
      <div class="grid-3" style="margin-top:8px;">
        <div class="metric-block ${catClass}"><div class="metric-block-label">Document Freq</div><div class="metric-block-val">${df}</div><div class="metric-block-sub">dari ${E.N} dok</div></div>
        <div class="metric-block"><div class="metric-block-label">N / df</div><div class="metric-block-val" style="color:#a0a0a8;">${ratio.toFixed(2)}</div><div class="metric-block-sub">rasio</div></div>
        <div class="metric-block ${isLow?'':'blue'}"><div class="metric-block-label">IDF</div><div class="metric-block-val" style="color:${isLow?'#b5a58a':'inherit'};">${idf_v.toFixed(4)}</div><div class="metric-block-sub">bobot ${catLabel}</div></div>
      </div>
      <div class="note-box ${noteClass}" style="margin-top:8px;">${noteText}</div>
    </div>`;
  }

  document.getElementById('bobot-content').innerHTML = `
    <div class="section-header"><h2>Analisis Bobot</h2><p>Perhitungan manual nilai IDF untuk 2 kata kunci dari topik Green Economy. N = ${E.N} dokumen.</p></div>
    <div class="grid-2">${cardHTML(t1,df1,idf1,r1,p1,lo1)}${cardHTML(t2,df2,idf2,r2,p2,lo2)}</div>
    <hr class="divider">
    <div class="card"><div class="card-header"><h3>Tabel Perbandingan IDF</h3></div>
      <table class="data-table"><thead><tr><th>Parameter</th><th>${t1}</th><th>${t2}</th><th>Keterangan</th></tr></thead><tbody>
        <tr><td>N (total dokumen)</td><td class="mono">${E.N}</td><td class="mono">${E.N}</td><td class="text-muted text-small">Koleksi tetap</td></tr>
        <tr><td>df (document frequency)</td><td class="mono" style="color:#b5a58a;">${df1}</td><td class="mono" style="color:#7a9b8a;">${df2}</td><td class="text-muted text-small">Jumlah dok mengandung term</td></tr>
        <tr><td>N / df</td><td class="mono">${r1.toFixed(4)}</td><td class="mono">${r2.toFixed(4)}</td><td class="text-muted text-small">Semakin besar = semakin langka</td></tr>
        <tr><td>IDF = log\u2081\u2080(N/df)</td><td class="mono" style="color:#b5a58a;">${idf1.toFixed(4)}</td><td class="mono" style="color:#8a9bb5;">${idf2.toFixed(4)}</td><td class="text-muted text-small">Selisih ${Math.abs(idf1-idf2).toFixed(2)}</td></tr>
        <tr><td>Kategori</td><td><span class="badge badge-yellow">Umum</span></td><td><span class="badge badge-blue">Langka</span></td><td class="text-muted text-small">Berdasarkan frekuensi</td></tr>
      </tbody></table>
    </div>
    <div class="card"><div class="card-header"><h3>Distribusi IDF \u2014 Top 18 Term</h3></div><div>${idfBars}</div></div>
    <div class="card"><div class="card-header"><h3>Penjelasan Konseptual</h3></div>
      <p style="font-size:0.8rem;color:#5a5a64;line-height:1.75;">IDF (Inverse Document Frequency) dirancang untuk memberikan <strong style="color:#a0a0a8;">bobot tinggi</strong> pada term yang <strong style="color:#a0a0a8;">langka</strong> dan <strong style="color:#a0a0a8;">bobot rendah</strong> pada term yang <strong style="color:#a0a0a8;">umum</strong>.</p>
      <div class="grid-2" style="margin-top:10px;">
        <div><p style="font-size:0.73rem;color:#7a7a84;margin-bottom:4px;font-weight:600;">Alasan Matematis</p>
          <div class="formula-block" style="font-size:0.7rem;"><span class="comment">// Term umum (df tinggi)</span><br>N/df \u2248 1  \u2192  log\u2081\u2080(1) = <span class="val">0</span>  \u2192  IDF rendah<br><br><span class="comment">// Term langka (df rendah)</span><br>N/df >> 1  \u2192  log\u2081\u2080(besar) = <span class="val">tinggi</span></div>
        </div>
        <div><p style="font-size:0.73rem;color:#7a7a84;margin-bottom:4px;font-weight:600;">Alasan Logis (Information Theory)</p>
          <div class="formula-block" style="font-size:0.7rem;"><span class="comment">// Shannon: self-information</span><br>I(x) = <span class="op">-log</span> P(x)<br><br>Kejadian langka \u2192 P rendah<br>\u2192 I(x) tinggi  \u2192  informasi lebih banyak</div>
        </div>
      </div>
      <div class="note-box" style="margin-top:10px;"><strong>Prinsip inti IDF:</strong> "The rarer the term, the more informative it is." Kata yang jarang muncul dalam koleksi dokumen mengandung informasi lebih spesifik dan mampu membedakan (mendiskriminasi) dokumen satu dari lainnya dengan lebih kuat. IDF secara matematis mengimplementasikan prinsip ini.</div>
    </div>`;
}

// ── Norm Comparison ──
function buildNormComparison() {
  const q = 'kebijakan ekonomi hijau indonesia';
  const { stemmed } = preprocess(q);
  const wN = search(stemmed, 8, true), woN = search(stemmed, 8, false);
  const maxB = woN[0]?.score || 1, maxG = wN[0]?.score || 1;
  const render = (res, cls, maxS) => res.map((r, i) => {
    const pct = (r.score / maxS * 100).toFixed(0);
    return `<div class="compare-row"><span class="cr-rank">${i+1}</span><span class="cr-doc" style="color:${cls==='bad'?'#7a2a2a':'#1b4332'};">${'D'+(r.i+1)}</span><div class="cr-bar-wrap"><div class="cr-bar" style="width:${pct}%;background:${cls==='bad'?'#f8c4c4':'#1b4d3e'};"></div></div><span class="cr-score" style="color:${cls==='bad'?'#7a2a2a':'#1b4332'};">${r.score.toFixed(4)}</span><span class="cr-len">${E.docLen[r.i]}t</span></div>`;
  }).join('');
  document.getElementById('norm-bad-results').innerHTML = render(woN, 'bad', maxB);
  document.getElementById('norm-good-results').innerHTML = render(wN, 'good', maxG);
}

// ── Evaluation ──
function buildEvaluation() {
  const scenarios = [
    { query: 'kebijakan ekonomi hijau indonesia', label: 'Kueri 1 \u2014 "kebijakan ekonomi hijau indonesia"', kw: ['kebijakan','ekonomi hijau','green economy','indonesia','pemerintah'] },
    { query: 'pertanian berkelanjutan energi terbarukan', label: 'Kueri 2 \u2014 "pertanian berkelanjutan energi terbarukan"', kw: ['pertanian','energi','berkelanjutan','terbarukan'] },
  ];
  let sumP = 0, sumR = 0, sumF = 0;
  const html = scenarios.map(sc => {
    const { stemmed } = preprocess(sc.query);
    const res = search(stemmed, 10, true);
    const gt = new Set(DOCS.filter(d => sc.kw.filter(k => d.text.toLowerCase().includes(k)).length >= 2).map(d => d.id));
    const retrieved = new Set(res.map(r => r.i));
    const TP = new Set([...retrieved].filter(x => gt.has(x)));
    const FP = new Set([...retrieved].filter(x => !gt.has(x)));
    const FN = new Set([...gt].filter(x => !retrieved.has(x)));
    const P = TP.size / (TP.size + FP.size) || 0;
    const R = TP.size / (TP.size + FN.size) || 0;
    const F = P + R > 0 ? 2 * P * R / (P + R) : 0;
    sumP += P; sumR += R; sumF += F;
    const rows = res.map((r, i) => {
      const isTP = TP.has(r.i), isFP = FP.has(r.i);
      const badge = isTP ? `<span class="badge badge-green">TP</span>` : isFP ? `<span class="badge badge-red">FP</span>` : `<span class="badge badge-gray">\u2014</span>`;
      return `<tr><td class="mono">${i+1}</td><td class="mono">D${r.i+1}</td><td class="mono">${r.score.toFixed(4)}</td><td>${badge}</td><td style="max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${DOCS[r.i].text.slice(0,80)}...</td></tr>`;
    }).join('');
    const fnRows = [...FN].slice(0, 2).map(id => `<tr style="opacity:0.5"><td class="mono">\u2014</td><td class="mono">D${id+1}</td><td class="mono">0.0000</td><td><span class="badge badge-yellow">FN</span></td><td style="max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${DOCS[id].text.slice(0,80)}...</td></tr>`).join('');
    return `<div class="card" style="margin-bottom:12px;">
      <div class="card-header"><h3>${sc.label}</h3></div>
      <div class="grid-3" style="margin-bottom:10px;">
        <div class="metric-block green"><div class="metric-block-label">Precision</div><div class="metric-block-val">${P.toFixed(3)}</div><div class="metric-block-sub">TP/(TP+FP) = ${TP.size}/${TP.size+FP.size}</div></div>
        <div class="metric-block blue"><div class="metric-block-label">Recall</div><div class="metric-block-val">${R.toFixed(3)}</div><div class="metric-block-sub">TP/(TP+FN) = ${TP.size}/${TP.size+FN.size}</div></div>
        <div class="metric-block purple"><div class="metric-block-label">F-Measure</div><div class="metric-block-val">${F.toFixed(3)}</div><div class="metric-block-sub">2\u00B7P\u00B7R/(P+R)</div></div>
      </div>
      <div style="overflow-x:auto;"><table class="data-table"><thead><tr><th>Rank</th><th>Doc</th><th>CosSim</th><th>Status</th><th>Kalimat</th></tr></thead><tbody>${rows}${fnRows}</tbody></table></div>
      <p style="font-size:0.66rem;color:#4a4a54;margin-top:6px;">Ground truth: ${gt.size} dok relevan | Retrieved: ${retrieved.size} | TP=${TP.size} FP=${FP.size} FN=${FN.size}</p>
    </div>`;
  }).join('');
  document.getElementById('eval-results').innerHTML = html;
  const n = scenarios.length;
  document.getElementById('avg-p').textContent = (sumP / n).toFixed(3);
  document.getElementById('avg-r').textContent = (sumR / n).toFixed(3);
  document.getElementById('avg-f').textContent = (sumF / n).toFixed(3);
}

// ── Update Statistik Dinamis ──
function updateStats() {
  const vocabCount = E.vocab.length;
  const postingCount = Object.values(E.invIdx).reduce((s, e) => s + Object.keys(e.postings).length, 0);
  const srcCount = E.sources.length;
  // Sidebar
  const sv = document.getElementById('sidebar-vocab');
  const sp = document.getElementById('sidebar-posting');
  if (sv) sv.textContent = vocabCount;
  if (sp) sp.textContent = postingCount;
  // Main stats bar
  const mv = document.getElementById('main-vocab');
  const mp = document.getElementById('main-posting');
  if (mv) mv.textContent = vocabCount;
  if (mp) mp.textContent = postingCount;
}

// ────────────────────────────────────────────────────────────────────────
//  9. INITIALIZATION
// ────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  buildIndexTable();
  buildBobotAnalysis();
  buildNormComparison();
  buildEvaluation();
});
