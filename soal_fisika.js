// File: soal_fisika.js
const soalFisika = [
    // ==================== LEVEL 1: MUDAH (1-25) ====================
    {
        id: 1,
        teks: "Sebuah peluru ditembakkan dengan kecepatan awal $v_0$ dan sudut elevasi $\\alpha$. Jika hambatan udara diabaikan, waktu yang dibutuhkan untuk mencapai titik tertinggi adalah...",
        gambar: "",
        opsi: ["$\\frac{v_0 \\sin \\alpha}{g}$", "$\\frac{v_0 \\cos \\alpha}{g}$", "$\\frac{v_0^2 \\sin^2 \\alpha}{2g}$", "$\\frac{2v_0 \\sin \\alpha}{g}$", "$\\frac{v_0 \\sin 2\\alpha}{g}$"],
        jawaban: 0,
        pembahasan: "Pada titik tertinggi, kecepatan arah sumbu y ($v_y$) adalah nol. Menggunakan persamaan gerak lurus berubah beraturan: $v_y = v_{0y} - gt$. Karena $v_y = 0$ dan $v_{0y} = v_0 \\sin \\alpha$, maka $0 = v_0 \\sin \\alpha - gt \\Rightarrow t = \\frac{v_0 \\sin \\alpha}{g}$.",
        trik_cepat: "Ingat komponen vertikal kecepatan selalu menggunakan sinus. Waktu naik = (kecepatan vertikal) dibagi gravitasi $\\rightarrow v_0 \\sin \\alpha / g$."
    },
    {
        id: 2,
        teks: "Sebuah balok bermassa $m$ meluncur ke bawah pada bidang miring yang licin dengan sudut kemiringan $\\theta$. Percepatan balok tersebut adalah...",
        gambar: "",
        opsi: ["$g \\cos \\theta$", "$g \\sin \\theta$", "$g \\tan \\theta$", "$g$", "$g(1 - \\sin \\theta)$"],
        jawaban: 1,
        pembahasan: "Gaya yang menyebabkan balok meluncur adalah komponen berat balok yang sejajar dengan bidang miring, yaitu $w_x = mg \\sin \\theta$. Menurut Hukum II Newton, $F = ma$, sehingga $mg \\sin \\theta = ma$. Massa ($m$) dicoret, didapat $a = g \\sin \\theta$.",
        trik_cepat: "Pada bidang miring LICIN, percepatan turun murni hanya $g \\sin \\theta$. Tidak perlu hitung massa karena massa akan saling membatalkan."
    },
    {
        id: 3,
        teks: "Dua buah benda bermassa $m_1$ dan $m_2$ bergerak berlawanan arah dengan kecepatan $v_1$ dan $v_2$. Jika keduanya bertumbukan lenting sempurna dan massa $m_1 = m_2$, apa yang terjadi setelah tumbukan?",
        gambar: "",
        opsi: ["Keduanya berhenti", "Kecepatan keduanya menjadi setengah", "Bertukar kecepatan", "Menyatu dan bergerak bersama", "Kecepatan keduanya menjadi dua kali lipat"],
        jawaban: 2,
        pembahasan: "Pada tumbukan lenting sempurna (koefisien restitusi $e = 1$) dengan dua benda bermassa identik ($m_1 = m_2$), hukum kekekalan momentum dan energi kinetik menghasilkan persamaan dimana benda-benda tersebut akan saling bertukar kecepatan: $v_1' = v_2$ dan $v_2' = v_1$.",
        trik_cepat: "Aturan emas tumbukan: Jika Tumbukan Lenting Sempurna + Massa Sama = BERTUKAR KECEPATAN secara langsung."
    },
    {
        id: 4,
        teks: "Sebuah kawat penghantar dialiri arus $I$. Jika panjang kawat dilipat menjadi setengahnya dan arus dijadikan dua kali lipat, bagaimana besar medan magnet di pusat kawat melingkar tersebut?",
        gambar: "",
        opsi: ["Tetap", "2 kali lipat", "4 kali lipat", "Setengahnya", "Seperempatnya"],
        jawaban: 2,
        pembahasan: "Medan magnet di pusat kawat melingkar dirumuskan $B = \\frac{\\mu_0 I}{2R}$. Jika kawat dilipat setengahnya, jari-jari $R$ menjadi $R/2$. Arus menjadi $2I$. Maka $B' = \\frac{\\mu_0 (2I)}{2(R/2)} = \\frac{2 \\mu_0 I}{R} = 4 \\times \\frac{\\mu_0 I}{2R} = 4B$.",
        trik_cepat: "$B$ berbanding lurus dengan $I$ dan berbanding terbalik dengan $R$. $I$ dikali 2 (hasil $\\times 2$). $R$ dibagi 2 (hasil $\\times 2$). Total perubahan: $2 \\times 2 = 4$ kali lipat."
    },
    {
        id: 5,
        teks: "Mesin Carnot beroperasi antara suhu $800$ K dan $400$ K. Efisiensi mesin tersebut adalah...",
        gambar: "",
        opsi: ["20%", "40%", "50%", "80%", "100%"],
        jawaban: 2,
        pembahasan: "Rumus efisiensi mesin Carnot: $\\eta = (1 - \\frac{T_r}{T_t}) \\times 100\\%$. Dimana suhu harus dalam Kelvin. $\\eta = (1 - \\frac{400}{800}) \\times 100\\% = (1 - 0.5) \\times 100\\% = 50\\%$.",
        trik_cepat: "Lihat rasio suhunya: $400/800 = 1/2$. Sisa dari rasio tersebut adalah $1 - 1/2 = 1/2$. Setengah itu nilainya 50%."
    },
    {
        id: 6,
        teks: "Sebuah benda bergerak melingkar beraturan dengan jari-jari $R$ dan kecepatan sudut $\\omega$. Percepatan sentripetal benda tersebut adalah...",
        gambar: "",
        opsi: ["$\\omega R$", "$\\omega^2 R$", "$\\omega/R$", "$\\omega^2/R$", "$\\omega R^2$"],
        jawaban: 1,
        pembahasan: "Percepatan sentripetal dirumuskan $a_s = \\frac{v^2}{R}$. Karena $v = \\omega R$, maka $a_s = \\frac{(\\omega R)^2}{R} = \\omega^2 R$.",
        trik_cepat: "Hafalkan: $a_s = \\omega^2 R = v^2/R = v\\omega$. Pilih yang dimensinya sesuai dengan percepatan (panjang/waktu$^2$)."
    },
    {
        id: 7,
        teks: "Sebuah pegas dengan konstanta $k$ ditarik sejauh $x$ dari posisi setimbang. Energi potensial elastis yang tersimpan adalah...",
        gambar: "",
        opsi: ["$kx$", "$\\frac{1}{2}kx$", "$kx^2$", "$\\frac{1}{2}kx^2$", "$2kx^2$"],
        jawaban: 3,
        pembahasan: "Energi potensial elastis pegas dirumuskan $E_p = \\frac{1}{2}kx^2$. Faktor $\\frac{1}{2}$ muncul dari integrasi gaya Hooke $F = kx$ terhadap perpindahan.",
        trik_cepat: "Selalu ada faktor $\\frac{1}{2}$ dan variabel $x$ dikuadratkan. Ingat: $E_p = \\frac{1}{2}kx^2$."
    },
    {
        id: 8,
        teks: "Dua muatan titik $q_1$ dan $q_2$ terpisah sejauh $r$. Jika jarak keduanya dijadikan $2r$, gaya Coulomb menjadi...",
        gambar: "",
        opsi: ["2 kali semula", "4 kali semula", "$\\frac{1}{2}$ kali semula", "$\\frac{1}{4}$ kali semula", "Tetap"],
        jawaban: 3,
        pembahasan: "Gaya Coulomb $F = k\\frac{q_1 q_2}{r^2}$. Jika $r \\rightarrow 2r$, maka $F' = k\\frac{q_1 q_2}{(2r)^2} = \\frac{1}{4} k\\frac{q_1 q_2}{r^2} = \\frac{1}{4}F$.",
        trik_cepat: "Gaya Coulomb berbanding terbalik dengan kuadrat jarak. Jarak 2 kali $\\rightarrow$ gaya $1/2^2 = 1/4$ kali."
    },
    {
        id: 9,
        teks: "Sebuah gelombang berjalan memiliki persamaan $y = 0.02 \\sin(4\\pi t - 2\\pi x)$ dengan $y$ dan $x$ dalam meter, $t$ dalam sekon. Cepat rambat gelombang tersebut adalah...",
        gambar: "",
        opsi: ["0.5 m/s", "1 m/s", "2 m/s", "4 m/s", "8 m/s"],
        jawaban: 2,
        pembahasan: "Dari persamaan $y = A \\sin(\\omega t - kx)$, diketahui $\\omega = 4\\pi$ rad/s dan $k = 2\\pi$ rad/m. Cepat rambat $v = \\frac{\\omega}{k} = \\frac{4\\pi}{2\\pi} = 2$ m/s.",
        trik_cepat: "Cepat rambat = koefisien $t$ dibagi koefisien $x$ (tanpa $\\pi$): $4/2 = 2$ m/s."
    },
    {
        id: 10,
        teks: "Sebuah cermin cekung memiliki jarak fokus $10$ cm. Sebuah benda diletakkan $15$ cm di depan cermin. Jarak bayangan yang terbentuk adalah...",
        gambar: "",
        opsi: ["6 cm", "10 cm", "15 cm", "30 cm", "45 cm"],
        jawaban: 3,
        pembahasan: "Gunakan rumus cermin: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$. $\\frac{1}{10} = \\frac{1}{15} + \\frac{1}{s'} \\Rightarrow \\frac{1}{s'} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30}$. Maka $s' = 30$ cm.",
        trik_cepat: "Untuk cermin cekung dengan $s = 1.5f$, bayangan berada di $3f = 30$ cm. Hafalkan pola: $s = 1.5f \\rightarrow s' = 3f$."
    },
    {
        id: 11,
        teks: "Sebuah benda bermassa $2$ kg bergerak dengan kecepatan $3$ m/s. Momentum benda tersebut adalah...",
        gambar: "",
        opsi: ["1.5 kg m/s", "3 kg m/s", "5 kg m/s", "6 kg m/s", "9 kg m/s"],
        jawaban: 3,
        pembahasan: "Momentum $p = mv = 2 \\times 3 = 6$ kg m/s.",
        trik_cepat: "Momentum = massa $\\times$ kecepatan. Langsung kalikan: $2 \\times 3 = 6$."
    },
    {
        id: 12,
        teks: "Sebuah benda jatuh bebas dari ketinggian $20$ m. Jika $g = 10$ m/s$^2$, kecepatan benda saat menyentuh tanah adalah...",
        gambar: "",
        opsi: ["10 m/s", "15 m/s", "20 m/s", "25 m/s", "40 m/s"],
        jawaban: 2,
        pembahasan: "Gunakan $v^2 = 2gh = 2 \\times 10 \\times 20 = 400$. Maka $v = 20$ m/s.",
        trik_cepat: "$v = \\sqrt{2gh}$. Untuk $h = 20$ dan $g = 10$: $v = \\sqrt{400} = 20$ m/s."
    },
    {
        id: 13,
        teks: "Sebuah konduktor berongga diberi muatan listrik. Medan listrik di dalam rongga konduktor tersebut adalah...",
        gambar: "",
        opsi: ["Maksimum di pusat", "Berbanding lurus dengan jarak dari pusat", "Nol", "Berbanding terbalik dengan jarak dari pusat", "Sama dengan medan di permukaan"],
        jawaban: 2,
        pembahasan: "Dalam konduktor dalam keadaan setimbang elektrostatik, medan listrik di dalam bahan konduktor (termasuk rongga kosong) adalah nol. Muatan hanya tersebar di permukaan luar.",
        trik_cepat: "Ingat prinsip sangkar Faraday: medan listrik di dalam konduktor berongga selalu nol."
    },
    {
        id: 14,
        teks: "Sebuah benda bermassa $m$ diikat dengan tali dan diputar vertikal. Di titik terendah, tegangan tali paling besar karena...",
        gambar: "",
        opsi: ["Kecepatan paling kecil", "Gaya sentripetal paling kecil", "Tegangan tali melawan berat benda", "Energi potensial paling besar", "Percepatan sentripetal nol"],
        jawaban: 2,
        pembahasan: "Di titik terendah, tegangan tali $T$ bekerja ke atas (menuju pusat), sedangkan berat $mg$ bekerja ke bawah. Resultan gaya $T - mg = \\frac{mv^2}{R}$, sehingga $T = mg + \\frac{mv^2}{R}$. Tegangan tali harus melawan berat benda sehingga nilainya paling besar.",
        trik_cepat: "Di titik terendah: $T = mg + \\frac{mv^2}{R}$ (paling besar). Di titik tertinggi: $T = \\frac{mv^2}{R} - mg$ (paling kecil)."
    },
    {
        id: 15,
        teks: "Sebuah transformator ideal memiliki lilitan primer $1000$ dan sekunder $250$. Jika tegangan primer $220$ V, tegangan sekunder adalah...",
        gambar: "",
        opsi: ["55 V", "88 V", "220 V", "440 V", "880 V"],
        jawaban: 0,
        pembahasan: "Untuk transformator ideal: $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$. Maka $V_s = V_p \\times \\frac{N_s}{N_p} = 220 \\times \\frac{250}{1000} = 220 \\times 0.25 = 55$ V.",
        trik_cepat: "Rasio lilitan $250/1000 = 1/4$. Tegangan sekunder = $220/4 = 55$ V."
    },
    {
        id: 16,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$. Jika kecepatannya dijadikan $2v$, energi kinetiknya menjadi...",
        gambar: "",
        opsi: ["Tetap", "2 kali", "4 kali", "8 kali", "16 kali"],
        jawaban: 2,
        pembahasan: "Energi kinetik $E_k = \\frac{1}{2}mv^2$. Jika $v \\rightarrow 2v$, maka $E_k' = \\frac{1}{2}m(2v)^2 = 4 \\times \\frac{1}{2}mv^2 = 4E_k$.",
        trik_cepat: "Energi kinetik berbanding lurus dengan kuadrat kecepatan. Kecepatan 2 kali $\\rightarrow$ energi kinetik $2^2 = 4$ kali."
    },
    {
        id: 17,
        teks: "Sebuah bola dilempar vertikal ke atas dengan kecepatan awal $20$ m/s. Tinggi maksimum yang dicapai bola adalah... ($g = 10$ m/s$^2$)",
        gambar: "",
        opsi: ["10 m", "15 m", "20 m", "25 m", "40 m"],
        jawaban: 2,
        pembahasan: "Di titik tertinggi $v = 0$. Gunakan $v^2 = v_0^2 - 2gh$: $0 = 20^2 - 2(10)h \\Rightarrow 20h = 400 \\Rightarrow h = 20$ m.",
        trik_cepat: "$h_{max} = \\frac{v_0^2}{2g} = \\frac{400}{20} = 20$ m."
    },
    {
        id: 18,
        teks: "Sebuah resistor $R$ dihubungkan dengan baterai $V$. Jika resistor diganti dengan nilai $2R$, daya listrik yang terdisipasi menjadi...",
        gambar: "",
        opsi: ["2 kali", "4 kali", "$\\frac{1}{2}$ kali", "$\\frac{1}{4}$ kali", "Tetap"],
        jawaban: 2,
        pembahasan: "Daya listrik $P = \\frac{V^2}{R}$. Jika $R \\rightarrow 2R$, maka $P' = \\frac{V^2}{2R} = \\frac{1}{2}P$.",
        trik_cepat: "Daya berbanding terbalik dengan hambatan (untuk tegangan tetap). Hambatan 2 kali $\\rightarrow$ daya $1/2$ kali."
    },
    {
        id: 19,
        teks: "Sebuah benda bermassa $m$ berada di permukaan bumi dengan percepatan gravitasi $g$. Jika benda dibawa ke ketinggian $R$ (jari-jari bumi) dari permukaan, percepatan gravitasinya menjadi...",
        gambar: "",
        opsi: ["$g$", "$\\frac{g}{2}$", "$\\frac{g}{4}$", "$\\frac{g}{8}$", "$\\frac{g}{16}$"],
        jawaban: 2,
        pembahasan: "Percepatan gravitasi $g' = G\\frac{M}{r^2}$. Di permukaan $r = R$, di ketinggian $R$ maka $r = 2R$. $g' = G\\frac{M}{(2R)^2} = \\frac{1}{4}G\\frac{M}{R^2} = \\frac{g}{4}$.",
        trik_cepat: "Gravitasi berbanding terbalik dengan kuadrat jarak dari pusat bumi. Jarak 2 kali $\\rightarrow$ gravitasi $1/4$ kali."
    },
    {
        id: 20,
        teks: "Sebuah pipa berisi air yang mengalir. Jika luas penampang pipa mengecil menjadi setengahnya, kecepatan aliran air menjadi...",
        gambar: "",
        opsi: ["Setengah", "Tetap", "2 kali", "4 kali", "Seperempat"],
        jawaban: 2,
        pembahasan: "Menurut persamaan kontinuitas $A_1 v_1 = A_2 v_2$. Jika $A_2 = \\frac{1}{2}A_1$, maka $v_2 = 2v_1$.",
        trik_cepat: "Kontinuitas: $A \\times v = $ konstan. Penampang setengah $\\rightarrow$ kecepatan 2 kali."
    },
    {
        id: 21,
        teks: "Sebuah benda bermassa $m$ diikat tali sepanjang $L$ dan diputar vertikal. Syarat minimum kecepatan di titik tertinggi agar tali tetap tegang adalah...",
        gambar: "",
        opsi: ["$\\sqrt{gL}$", "$\\sqrt{2gL}$", "$\\sqrt{3gL}$", "$\\sqrt{4gL}$", "$\\sqrt{5gL}$"],
        jawaban: 0,
        pembahasan: "Di titik tertinggi, tegangan tali minimum $T = 0$. Gaya sentripetal seluruhnya berasal dari berat: $mg = \\frac{mv^2}{L} \\Rightarrow v = \\sqrt{gL}$.",
        trik_cepat: "Kecepatan minimum di titik tertinggi = $\\sqrt{gL}$. Hafalkan!"
    },
    {
        id: 22,
        teks: "Sebuah kapasitor $C$ diisi hingga tegangan $V$. Energi yang tersimpan dalam kapasitor adalah...",
        gambar: "",
        opsi: ["$CV$", "$\\frac{1}{2}CV$", "$CV^2$", "$\\frac{1}{2}CV^2$", "$2CV^2$"],
        jawaban: 3,
        pembahasan: "Energi kapasitor $E = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$.",
        trik_cepat: "Sama seperti pegas: selalu ada faktor $\\frac{1}{2}$ dan variabel tegangan dikuadratkan."
    },
    {
        id: 23,
        teks: "Sebuah benda bergerak dengan persamaan $x = 2t^2 + 3t + 1$ (x dalam meter, t dalam sekon). Kecepatan benda pada $t = 2$ s adalah...",
        gambar: "",
        opsi: ["7 m/s", "9 m/s", "11 m/s", "13 m/s", "15 m/s"],
        jawaban: 2,
        pembahasan: "Kecepatan $v = \\frac{dx}{dt} = 4t + 3$. Pada $t = 2$: $v = 4(2) + 3 = 11$ m/s.",
        trik_cepat: "Turunkan persamaan posisi: $2t^2 \\rightarrow 4t$, $3t \\rightarrow 3$. Substitusi $t = 2$: $8 + 3 = 11$."
    },
    {
        id: 24,
        teks: "Sebuah lensa cembung memiliki jarak fokus $20$ cm. Sebuah benda diletakkan $30$ cm di depan lensa. Sifat bayangan yang terbentuk adalah...",
        gambar: "",
        opsi: ["Nyata, terbalik, diperkecil", "Nyata, terbalik, diperbesar", "Maya, tegak, diperbesar", "Maya, tegak, diperkecil", "Nyata, tegak, sama besar"],
        jawaban: 1,
        pembahasan: "$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\Rightarrow \\frac{1}{20} = \\frac{1}{30} + \\frac{1}{s'} \\Rightarrow \\frac{1}{s'} = \\frac{1}{60} \\Rightarrow s' = 60$ cm. Perbesaran $M = \\frac{s'}{s} = \\frac{60}{30} = 2$ kali. Karena $s' > 0$ dan $M > 1$: nyata, terbalik, diperbesar.",
        trik_cepat: "Benda di antara $f$ dan $2f$ ($20 < 30 < 40$) pada lensa cembung $\\rightarrow$ bayangan nyata, terbalik, diperbesar."
    },
    {
        id: 25,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk dinding secara tegak lurus dan memantul dengan kecepatan $v$. Perubahan momentum benda adalah...",
        gambar: "",
        opsi: ["$mv$", "$2mv$", "$-mv$", "$-2mv$", "Nol"],
        jawaban: 3,
        pembahasan: "Momentum awal $p_i = mv$ (ke arah dinding), momentum akhir $p_f = -mv$ (berlawanan arah). Perubahan momentum $\\Delta p = p_f - p_i = -mv - mv = -2mv$. Besarnya $2mv$.",
        trik_cepat: "Pantulan sempurna: perubahan momentum = $2mv$ (besar). Arahnya berlawanan dengan arah datang."
    },

    // ==================== LEVEL 2: SEDANG (26-50) ====================
    {
        id: 26,
        teks: "Sebuah benda bermassa $m$ dilepaskan dari puncak bidang miring licin dengan sudut kemiringan $\\theta$ dan panjang lintasan $L$. Kecepatan benda di dasar bidang miring adalah...",
        gambar: "",
        opsi: ["$\\sqrt{2gL}$", "$\\sqrt{2gL \\sin \\theta}$", "$\\sqrt{2gL \\cos \\theta}$", "$\\sqrt{gL \\sin \\theta}$", "$\\sqrt{gL}$"],
        jawaban: 1,
        pembahasan: "Ketinggian awal $h = L \\sin \\theta$. Dengan kekekalan energi: $mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2gL \\sin \\theta}$.",
        trik_cepat: "Ketinggian = panjang lintasan $\\times$ sinus sudut kemiringan. $v = \\sqrt{2gh}$ dengan $h = L \\sin \\theta$."
    },
    {
        id: 27,
        teks: "Sebuah partikel bergerak melingkar dengan percepatan sudut konstan $\\alpha$. Jika mula-mula diam, sudut yang ditempuh setelah waktu $t$ adalah...",
        gambar: "",
        opsi: ["$\\alpha t$", "$\\frac{1}{2}\\alpha t$", "$\\alpha t^2$", "$\\frac{1}{2}\\alpha t^2$", "$2\\alpha t^2$"],
        jawaban: 3,
        pembahasan: "Analog dengan GLBB: $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$. Karena mula-mula diam ($\\omega_0 = 0$), maka $\\theta = \\frac{1}{2}\\alpha t^2$.",
        trik_cepat: "Gerak rotasi = gerak translasi dengan substitusi $x \\rightarrow \\theta$, $v \\rightarrow \\omega$, $a \\rightarrow \\alpha$."
    },
    {
        id: 28,
        teks: "Sebuah bola pejal bermassa $m$ dan jari-jari $R$ menggelinding tanpa slip pada bidang miring. Percepatan bola tersebut adalah...",
        gambar: "",
        opsi: ["$g \\sin \\theta$", "$\\frac{5}{7}g \\sin \\theta$", "$\\frac{2}{3}g \\sin \\theta$", "$\\frac{2}{5}g \\sin \\theta$", "$\\frac{1}{2}g \\sin \\theta$"],
        jawaban: 1,
        pembahasan: "Untuk bola pejal, momen inersia $I = \\frac{2}{5}mR^2$. Dengan dinamika rotasi: $a = \\frac{g \\sin \\theta}{1 + I/(mR^2)} = \\frac{g \\sin \\theta}{1 + 2/5} = \\frac{5}{7}g \\sin \\theta$.",
        trik_cepat: "Hafalkan faktor: silinder pejal $2/3$, bola pejal $5/7$, bola berongga $3/5$, cincin $1/2$ (dari $g \\sin \\theta$)."
    },
    {
        id: 29,
        teks: "Sebuah muatan $q$ bergerak dengan kecepatan $v$ dalam medan magnet $B$ yang tegak lurus. Jari-jari lintasan melingkar muatan tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{mv}{qB}$", "$\\frac{qB}{mv}$", "$\\frac{mv^2}{qB}$", "$\\frac{qBv}{m}$", "$\\frac{mB}{qv}$"],
        jawaban: 0,
        pembahasan: "Gaya Lorentz berfungsi sebagai gaya sentripetal: $qvB = \\frac{mv^2}{r} \\Rightarrow r = \\frac{mv}{qB}$.",
        trik_cepat: "Jari-jari lintasan = momentum dibagi (muatan $\\times$ medan magnet): $r = \\frac{mv}{qB}$."
    },
    {
        id: 30,
        teks: "Sebuah gas ideal mengalami proses isotermal. Jika volume gas diperbesar menjadi 2 kali, tekanan gas menjadi...",
        gambar: "",
        opsi: ["2 kali", "4 kali", "Tetap", "$\\frac{1}{2}$ kali", "$\\frac{1}{4}$ kali"],
        jawaban: 3,
        pembahasan: "Proses isotermal: $PV = $ konstan. Jika $V \\rightarrow 2V$, maka $P \\rightarrow \\frac{1}{2}P$.",
        trik_cepat: "Isotermal = suhu tetap $\\rightarrow$ $PV$ konstan. Volume 2 kali $\\rightarrow$ tekanan $1/2$ kali."
    },
    {
        id: 31,
        teks: "Sebuah benda bermassa $m$ diikat pada pegas dengan konstanta $k$ dan bergetar harmonik. Periode getaran tersebut adalah...",
        gambar: "",
        opsi: ["$2\\pi\\sqrt{\\frac{k}{m}}$", "$2\\pi\\sqrt{\\frac{m}{k}}$", "$\\frac{1}{2\\pi}\\sqrt{\\frac{m}{k}}$", "$2\\pi\\sqrt{mk}$", "$\\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$"],
        jawaban: 1,
        pembahasan: "Periode getaran pegas $T = 2\\pi\\sqrt{\\frac{m}{k}}$. Massa memperlambat getaran (di pembilang), konstanta pegas mempercepat (di penyebut).",
        trik_cepat: "Ingat: $T = 2\\pi\\sqrt{m/k}$. Massa di atas, $k$ di bawah."
    },
    {
        id: 32,
        teks: "Sebuah kawat lurus panjang dialiri arus $I$. Medan magnet pada jarak $r$ dari kawat adalah...",
        gambar: "",
        opsi: ["$\\frac{\\mu_0 I}{2\\pi r}$", "$\\frac{\\mu_0 I}{4\\pi r}$", "$\\frac{\\mu_0 I}{2r}$", "$\\frac{\\mu_0 I}{4r}$", "$\\frac{\\mu_0 I}{\\pi r}$"],
        jawaban: 0,
        pembahasan: "Medan magnet kawat lurus panjang: $B = \\frac{\\mu_0 I}{2\\pi r}$. Gunakan aturan tangan kanan untuk arah.",
        trik_cepat: "Kawat lurus: $2\\pi r$ di penyebut. Kawat melingkar: $2r$ di penyebut. Jangan tertukar!"
    },
    {
        id: 33,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $2m$ yang diam. Jika tumbukan lenting sempurna, kecepatan benda pertama setelah tumbukan adalah...",
        gambar: "",
        opsi: ["$\\frac{v}{3}$", "$-\\frac{v}{3}$", "$\\frac{2v}{3}$", "$-\\frac{2v}{3}$", "$-v$"],
        jawaban: 1,
        pembahasan: "Untuk tumbukan lenting sempurna: $v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 = \\frac{m - 2m}{m + 2m}v = \\frac{-m}{3m}v = -\\frac{v}{3}$. Tanda negatif berarti memantul.",
        trik_cepat: "Rumus cepat: $v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1$. Massa lebih kecil $\\rightarrow$ memantul."
    },
    {
        id: 34,
        teks: "Sebuah tangki berisi air setinggi $h$. Pada dinding tangki dibuat lubang pada kedalaman $h/2$ dari permukaan. Kecepatan air yang keluar dari lubang adalah...",
        gambar: "",
        opsi: ["$\\sqrt{gh}$", "$\\sqrt{2gh}$", "$\\sqrt{gh/2}$", "$\\sqrt{2g(h/2)}$", "$\\sqrt{2g(h - h/2)}$"],
        jawaban: 3,
        pembahasan: "Menurut Torricelli, kecepatan keluaran $v = \\sqrt{2gH}$ dimana $H$ adalah kedalaman lubang dari permukaan. $H = h/2$, maka $v = \\sqrt{2g(h/2)} = \\sqrt{gh}$.",
        trik_cepat: "Torricelli: $v = \\sqrt{2g \\times \\text{kedalaman}}$. Kedalaman = $h/2$, maka $v = \\sqrt{gh}$."
    },
    {
        id: 35,
        teks: "Sebuah partikel bermuatan $q$ dan bermassa $m$ dipercepat oleh beda potensial $V$. Panjang gelombang de Broglie partikel tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{h}{\\sqrt{2mqV}}$", "$\\frac{h}{\\sqrt{mqV}}$", "$\\frac{h}{2mqV}$", "$\\frac{h}{\\sqrt{2mV}}$", "$\\frac{h}{qV}$"],
        jawaban: 0,
        pembahasan: "Energi kinetik $K = qV = \\frac{p^2}{2m} \\Rightarrow p = \\sqrt{2mqV}$. Panjang gelombang de Broglie $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mqV}}$.",
        trik_cepat: "De Broglie: $\\lambda = h/p$. Momentum dari energi kinetik: $p = \\sqrt{2mK}$ dengan $K = qV$."
    },
    {
        id: 36,
        teks: "Sebuah benda bermassa $m$ berada pada bidang miring kasar dengan koefisien gesek $\\mu$. Benda meluncur ke bawah. Percepatan benda tersebut adalah...",
        gambar: "",
        opsi: ["$g(\\sin \\theta - \\mu \\cos \\theta)$", "$g(\\sin \\theta + \\mu \\cos \\theta)$", "$g(\\cos \\theta - \\mu \\sin \\theta)$", "$g(\\mu \\cos \\theta - \\sin \\theta)$", "$g \\sin \\theta$"],
        jawaban: 0,
        pembahasan: "Gaya sejajar bidang: $mg \\sin \\theta - f_k = ma$. Gaya gesek kinetik $f_k = \\mu N = \\mu mg \\cos \\theta$. Maka $a = g(\\sin \\theta - \\mu \\cos \\theta)$.",
        trik_cepat: "Bidang miring kasar: $a = g(\\sin \\theta - \\mu \\cos \\theta)$. Jika $\\mu = 0$ (licin), kembali ke $g \\sin \\theta$."
    },
    {
        id: 37,
        teks: "Sebuah rangkaian RLC seri memiliki $R = 30\\Omega$, $X_L = 40\\Omega$, dan $X_C = 80\\Omega$. Impedansi rangkaian tersebut adalah...",
        gambar: "",
        opsi: ["$30\\Omega$", "$50\\Omega$", "$70\\Omega$", "$90\\Omega$", "$150\\Omega$"],
        jawaban: 1,
        pembahasan: "Impedansi $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{30^2 + (40 - 80)^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\Omega$.",
        trik_cepat: "Gunakan tripel Pythagoras: $30, 40, 50$. $(X_L - X_C) = -40$, kuadratnya sama dengan $40^2$."
    },
    {
        id: 38,
        teks: "Sebuah benda bermassa $m$ diikat pada tali sepanjang $L$ dan diputar vertikal. Agar benda dapat mencapai titik tertinggi, kecepatan minimum di titik terendah adalah...",
        gambar: "",
        opsi: ["$\\sqrt{gL}$", "$\\sqrt{2gL}$", "$\\sqrt{3gL}$", "$\\sqrt{4gL}$", "$\\sqrt{5gL}$"],
        jawaban: 4,
        pembahasan: "Di titik tertinggi: $v_t = \\sqrt{gL}$ (minimum). Dengan kekekalan energi: $\\frac{1}{2}mv_b^2 = \\frac{1}{2}mv_t^2 + mg(2L)$. $v_b^2 = gL + 4gL = 5gL \\Rightarrow v_b = \\sqrt{5gL}$.",
        trik_cepat: "Hafalkan: $v_{terendah} = \\sqrt{5gL}$, $v_{tertinggi} = \\sqrt{gL}$. Selisih kuadrat = $4gL$ (setara $2g \\times 2L$)."
    },
    {
        id: 39,
        teks: "Sebuah silinder pejal bermassa $m$ dan jari-jari $R$ berputar dengan kecepatan sudut $\\omega$. Energi kinetik rotasi silinder tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{1}{2}mR^2\\omega^2$", "$\\frac{1}{4}mR^2\\omega^2$", "$mR^2\\omega^2$", "$\\frac{1}{8}mR^2\\omega^2$", "$\\frac{3}{4}mR^2\\omega^2$"],
        jawaban: 1,
        pembahasan: "Momen inersia silinder pejal $I = \\frac{1}{2}mR^2$. Energi kinetik rotasi $E_k = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{1}{2}mR^2)\\omega^2 = \\frac{1}{4}mR^2\\omega^2$.",
        trik_cepat: "Silinder pejal: $I = \\frac{1}{2}mR^2$. Energi rotasi = $\\frac{1}{2}I\\omega^2 = \\frac{1}{4}mR^2\\omega^2$."
    },
    {
        id: 40,
        teks: "Sebuah muatan listrik $Q$ terdistribusi merata pada permukaan bola berjari-jari $R$. Kuat medan listrik pada jarak $r < R$ dari pusat bola adalah...",
        gambar: "",
        opsi: ["$k\\frac{Q}{r^2}$", "$k\\frac{Q}{R^2}$", "$k\\frac{Qr}{R^3}$", "Nol", "$k\\frac{Q}{Rr}$"],
        jawaban: 3,
        pembahasan: "Untuk konduktor bola bermuatan, medan listrik di dalam bola ($r < R$) adalah nol karena muatan hanya tersebar di permukaan.",
        trik_cepat: "Di dalam konduktor bola: $E = 0$. Di permukaan: $E = kQ/R^2$. Di luar: $E = kQ/r^2$."
    },
    {
        id: 41,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ searah dengan sumbu x positif. Benda lain bermassa $2m$ bergerak dengan kecepatan $v/2$ searah sumbu x negatif. Momentum total sistem adalah...",
        gambar: "",
        opsi: ["$0$", "$mv$", "$2mv$", "$\\frac{3}{2}mv$", "$\\frac{1}{2}mv$"],
        jawaban: 0,
        pembahasan: "Momentum total $p = m_1 v_1 + m_2 v_2 = m(v) + 2m(-v/2) = mv - mv = 0$.",
        trik_cepat: "Momentum adalah vektor. Perhatikan arah! $m \\times v = 2m \\times v/2$, saling menghilangkan."
    },
    {
        id: 42,
        teks: "Sebuah gelombang elektromagnetik merambat dalam ruang hampa. Perbandingan antara amplitudo medan listrik $E_0$ dan medan magnet $B_0$ adalah...",
        gambar: "",
        opsi: ["$c$", "$1/c$", "$c^2$", "$1/c^2$", "$\\mu_0 \\epsilon_0$"],
        jawaban: 0,
        pembahasan: "Dalam gelombang elektromagnetik, $E_0 = cB_0$, sehingga $E_0/B_0 = c$ (kecepatan cahaya).",
        trik_cepat: "Hubungan medan listrik dan magnet dalam GEM: $E = cB$. Jadi $E/B = c$."
    },
    {
        id: 43,
        teks: "Sebuah pegas dengan konstanta $k$ dipotong menjadi dua bagian sama panjang. Konstanta pegas masing-masing potongan menjadi...",
        gambar: "",
        opsi: ["$k/2$", "$k$", "$2k$", "$4k$", "$k/4$"],
        jawaban: 2,
        pembahasan: "Konstanta pegas berbanding terbalik dengan panjangnya: $k \\propto 1/L$. Jika panjang menjadi $L/2$, maka konstanta menjadi $2k$.",
        trik_cepat: "Pegas makin pendek makin kaku. Panjang setengah $\\rightarrow$ konstanta 2 kali."
    },
    {
        id: 44,
        teks: "Sebuah partikel bergerak dengan fungsi posisi $x(t) = t^3 - 6t^2 + 9t$ (x dalam meter, t dalam sekon). Partikel berhenti sesaat pada saat $t = ...$",
        gambar: "",
        opsi: ["1 s dan 2 s", "1 s dan 3 s", "2 s dan 3 s", "3 s saja", "1 s saja"],
        jawaban: 1,
        pembahasan: "Kecepatan $v = \\frac{dx}{dt} = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3)$. Partikel berhenti saat $v = 0$, yaitu $t = 1$ s dan $t = 3$ s.",
        trik_cepat: "Turunkan posisi, faktorkan, cari akar. $3(t-1)(t-3) = 0 \\rightarrow t = 1, 3$."
    },
    {
        id: 45,
        teks: "Sebuah benda bermassa $m$ diikat pada tali dan diputar horizontal dengan kecepatan sudut $\\omega$. Jika panjang tali dijadikan 2 kali dan kecepatan sudut tetap, tegangan tali menjadi...",
        gambar: "",
        opsi: ["Setengah", "Tetap", "2 kali", "4 kali", "Seperempat"],
        jawaban: 2,
        pembahasan: "Tegangan tali = gaya sentripetal $T = m\\omega^2 R$. Jika $R \\rightarrow 2R$ dan $\\omega$ tetap, maka $T' = m\\omega^2(2R) = 2T$.",
        trik_cepat: "$T \\propto R$ (untuk $\\omega$ tetap). Jari-jari 2 kali $\\rightarrow$ tegangan 2 kali."
    },
    {
        id: 46,
        teks: "Sebuah tabung berisi gas ideal pada suhu $T$. Jika suhu gas dinaikkan menjadi $2T$ pada volume tetap, energi kinetik rata-rata molekul gas menjadi...",
        gambar: "",
        opsi: ["Tetap", "2 kali", "4 kali", "$\\frac{1}{2}$ kali", "$\\sqrt{2}$ kali"],
        jawaban: 1,
        pembahasan: "Energi kinetik rata-rata molekul gas $E_k = \\frac{3}{2}kT$. Jika $T \\rightarrow 2T$, maka $E_k \\rightarrow 2E_k$.",
        trik_cepat: "Energi kinetik rata-rata berbanding lurus dengan suhu absolut. Suhu 2 kali $\\rightarrow$ energi kinetik 2 kali."
    },
    {
        id: 47,
        teks: "Sebuah kumparan dengan $N$ lilitan dan luas penampang $A$ berada dalam medan magnet $B$ yang berubah terhadap waktu. GGL induksi yang timbul adalah...",
        gambar: "",
        opsi: ["$NA\\frac{dB}{dt}$", "$-NA\\frac{dB}{dt}$", "$N\\frac{dB}{dt}$", "$-A\\frac{dB}{dt}$", "$NAB$"],
        jawaban: 1,
        pembahasan: "Menurut Hukum Faraday: $\\varepsilon = -N\\frac{d\\Phi}{dt} = -NA\\frac{dB}{dt}$. Tanda negatif menunjukkan arah GGL sesuai Hukum Lenz.",
        trik_cepat: "Hukum Faraday: $\\varepsilon = -N\\frac{d\\Phi}{dt}$. Jangan lupa tanda negatif (Hukum Lenz)."
    },
    {
        id: 48,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $m$ yang diam. Jika tumbukan tidak lenting sama sekali, kecepatan kedua benda setelah tumbukan adalah...",
        gambar: "",
        opsi: ["$v$", "$v/2$", "$v/3$", "$2v$", "$0$"],
        jawaban: 1,
        pembahasan: "Tumbukan tidak lenting sama sekali: benda menyatu. Kekekalan momentum: $mv = (m+m)v' \\Rightarrow v' = v/2$.",
        trik_cepat: "Massa sama + tidak lenting = kecepatan menjadi setengah."
    },
    {
        id: 49,
        teks: "Sebuah cermin datar dan sebuah lensa cembung disusun sedemikian rupa. Benda diletakkan di antara keduanya. Jika bayangan akhir bersifat maya, tegak, dan sama besar dengan benda, maka...",
        gambar: "",
        opsi: ["Benda berada di titik fokus lensa", "Benda berada di pusat kelengkungan lensa", "Benda berada tepat di depan cermin datar", "Benda berada di titik fokus cermin", "Benda berada di antara lensa dan fokusnya"],
        jawaban: 0,
        pembahasan: "Bayangan maya, tegak, sama besar dihasilkan oleh lensa cembung jika benda berada tepat di titik fokus lensa ($s = f$). Sinar keluar sejajar, dipantulkan cermin datar kembali sejajar, dan bayangan akhir sama besar.",
        trik_cepat: "Lensa cembung: benda di fokus $\\rightarrow$ bayangan di tak hingga (maya, tegak, sama besar setelah dipantulkan cermin datar)."
    },
    {
        id: 50,
        teks: "Sebuah partikel bermuatan $q$ bergerak dalam medan listrik $E$ dan medan magnet $B$ yang saling tegak lurus. Agar partikel bergerak lurus tanpa dibelokkan, kecepatan partikel harus...",
        gambar: "",
        opsi: ["$v = \\frac{E}{B}$", "$v = \\frac{B}{E}$", "$v = EB$", "$v = \\frac{E}{B^2}$", "$v = \\frac{B}{E^2}$"],
        jawaban: 0,
        pembahasan: "Gaya listrik $qE$ harus meniadakan gaya magnet $qvB$. Maka $qE = qvB \\Rightarrow v = \\frac{E}{B}$. Ini adalah prinsip pemilih kecepatan (velocity selector).",
        trik_cepat: "Velocity selector: $v = E/B$. Gaya listrik = gaya magnet."
    },

    // ==================== LEVEL 3: SULIT (51-75) ====================
    {
        id: 51,
        teks: "Sebuah silinder pejal bermassa $m$ dan jari-jari $R$ menggelinding tanpa slip menuruni bidang miring dengan sudut $\\theta$. Percepatan linear silinder tersebut adalah...",
        gambar: "",
        opsi: ["$g \\sin \\theta$", "$\\frac{2}{3}g \\sin \\theta$", "$\\frac{3}{4}g \\sin \\theta$", "$\\frac{1}{2}g \\sin \\theta$", "$\\frac{3}{5}g \\sin \\theta$"],
        jawaban: 1,
        pembahasan: "Untuk silinder pejal $I = \\frac{1}{2}mR^2$. $a = \\frac{g \\sin \\theta}{1 + I/(mR^2)} = \\frac{g \\sin \\theta}{1 + 1/2} = \\frac{2}{3}g \\sin \\theta$.",
        trik_cepat: "Silinder pejal: $2/3$. Bola pejal: $5/7$. Bola berongga: $3/5$. Cincin: $1/2$. Hafalkan!"
    },
    {
        id: 52,
        teks: "Sebuah satelit mengorbit bumi pada ketinggian $h$ dari permukaan. Jika jari-jari bumi $R$ dan percepatan gravitasi di permukaan $g$, kecepatan orbit satelit adalah...",
        gambar: "",
        opsi: ["$\\sqrt{\\frac{gR^2}{R+h}}$", "$\\sqrt{\\frac{gR}{R+h}}$", "$\\sqrt{\\frac{g(R+h)^2}{R}}$", "$\\sqrt{g(R+h)}$", "$\\sqrt{\\frac{gR^2}{h}}$"],
        jawaban: 0,
        pembahasan: "Gaya gravitasi = gaya sentripetal: $G\\frac{Mm}{r^2} = \\frac{mv^2}{r} \\Rightarrow v = \\sqrt{\\frac{GM}{r}}$. Karena $g = \\frac{GM}{R^2} \\Rightarrow GM = gR^2$. Dengan $r = R+h$: $v = \\sqrt{\\frac{gR^2}{R+h}}$.",
        trik_cepat: "$v = \\sqrt{GM/r}$. Substitusi $GM = gR^2$ dan $r = R+h$."
    },
    {
        id: 53,
        teks: "Sebuah rangkaian RLC seri beresonansi pada frekuensi $f_0$. Jika kapasitansi dijadikan 4 kali dan induktansi tetap, frekuensi resonansi menjadi...",
        gambar: "",
        opsi: ["$2f_0$", "$f_0/2$", "$4f_0$", "$f_0/4$", "Tetap"],
        jawaban: 1,
        pembahasan: "Frekuensi resonansi $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. Jika $C \\rightarrow 4C$, maka $f_0' = \\frac{1}{2\\pi\\sqrt{L(4C)}} = \\frac{1}{2} \\times \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{f_0}{2}$.",
        trik_cepat: "$f_0 \\propto 1/\\sqrt{C}$. $C$ 4 kali $\\rightarrow$ $f_0$ menjadi $1/\\sqrt{4} = 1/2$ kali."
    },
    {
        id: 54,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ mendekati cermin datar yang bergerak menjauhi benda dengan kecepatan $u$. Kecepatan bayangan relatif terhadap cermin adalah...",
        gambar: "",
        opsi: ["$v + u$", "$v - u$", "$v + 2u$", "$v - 2u$", "$2v + u$"],
        jawaban: 0,
        pembahasan: "Kecepatan bayangan relatif terhadap cermin sama dengan kecepatan benda relatif terhadap cermin. Kecepatan benda relatif terhadap cermin = $v + u$ (karena saling menjauh). Maka kecepatan bayangan relatif terhadap cermin = $v + u$.",
        trik_cepat: "Bayangan di cermin datar: kecepatan relatif bayangan terhadap cermin = kecepatan relatif benda terhadap cermin."
    },
    {
        id: 55,
        teks: "Sebuah partikel bermassa $m$ bergerak dalam potensial osilator harmonik $V(x) = \\frac{1}{2}kx^2$. Menurut mekanika kuantum, energi dasar partikel tersebut adalah...",
        gambar: "",
        opsi: ["$0$", "$\\frac{1}{2}\\hbar\\omega$", "$\\hbar\\omega$", "$\\frac{3}{2}\\hbar\\omega$", "$2\\hbar\\omega$"],
        jawaban: 1,
        pembahasan: "Osilator harmonik kuantum memiliki tingkat energi $E_n = (n + \\frac{1}{2})\\hbar\\omega$ dengan $n = 0, 1, 2, ...$. Energi dasar ($n = 0$) adalah $E_0 = \\frac{1}{2}\\hbar\\omega$.",
        trik_cepat: "Energi titik nol osilator harmonik = $\\frac{1}{2}\\hbar\\omega$. Tidak pernah nol (prinsip ketidakpastian)."
    },
    {
        id: 56,
        teks: "Sebuah bola berongga bermassa $m$ dan jari-jari $R$ menggelinding tanpa slip pada bidang miring. Percepatan bola tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{5}{7}g \\sin \\theta$", "$\\frac{2}{3}g \\sin \\theta$", "$\\frac{3}{5}g \\sin \\theta$", "$\\frac{1}{2}g \\sin \\theta$", "$\\frac{1}{3}g \\sin \\theta$"],
        jawaban: 2,
        pembahasan: "Bola berongga: $I = \\frac{2}{3}mR^2$. $a = \\frac{g \\sin \\theta}{1 + 2/3} = \\frac{3}{5}g \\sin \\theta$.",
        trik_cepat: "Bola berongga: $3/5$. Bola pejal: $5/7$. Silinder pejal: $2/3$. Cincin: $1/2$."
    },
    {
        id: 57,
        teks: "Sebuah muatan $Q$ terdistribusi merata pada bola isolator berjari-jari $R$. Kuat medan listrik pada jarak $r < R$ dari pusat bola adalah...",
        gambar: "",
        opsi: ["$k\\frac{Q}{r^2}$", "$k\\frac{Q}{R^2}$", "$k\\frac{Qr}{R^3}$", "Nol", "$k\\frac{Q}{Rr}$"],
        jawaban: 2,
        pembahasan: "Untuk bola isolator bermuatan merata, medan listrik di dalam bola ($r < R$) sebanding dengan $r$: $E = k\\frac{Qr}{R^3}$. Gunakan Hukum Gauss dengan muatan terkurung $Q_{enc} = Q(r/R)^3$.",
        trik_cepat: "Bola isolator: di dalam $E \\propto r$ ($E = kQr/R^3$). Bola konduktor: di dalam $E = 0$."
    },
    {
        id: 58,
        teks: "Sebuah benda bermassa $m$ diikat pada pegas dengan konstanta $k$ dan bergetar harmonik dengan amplitudo $A$. Energi total getaran tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{1}{2}kA$", "$kA^2$", "$\\frac{1}{2}kA^2$", "$2kA^2$", "$\\frac{1}{4}kA^2$"],
        jawaban: 2,
        pembahasan: "Energi total getaran harmonik = energi potensial maksimum = $\\frac{1}{2}kA^2$. Energi ini kekal dan berosilasi antara energi kinetik dan potensial.",
        trik_cepat: "Energi total = $\\frac{1}{2}kA^2$. Sama seperti energi potensial pegas maksimum."
    },
    {
        id: 59,
        teks: "Sebuah transformator memiliki efisiensi 80%. Jika daya input 500 W, daya output yang dihasilkan adalah...",
        gambar: "",
        opsi: ["100 W", "200 W", "400 W", "500 W", "625 W"],
        jawaban: 2,
        pembahasan: "Efisiensi $\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\%$. $80\\% = \\frac{P_{out}}{500} \\times 100\\% \\Rightarrow P_{out} = 0.8 \\times 500 = 400$ W.",
        trik_cepat: "Daya output = efisiensi $\\times$ daya input = $0.8 \\times 500 = 400$ W."
    },
    {
        id: 60,
        teks: "Sebuah partikel bergerak relativistik dengan kecepatan $0.6c$. Faktor Lorentz $\\gamma$ partikel tersebut adalah...",
        gambar: "",
        opsi: ["1.0", "1.25", "1.5", "1.67", "2.0"],
        jawaban: 1,
        pembahasan: "$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = \\frac{1}{\\sqrt{1 - 0.36}} = \\frac{1}{\\sqrt{0.64}} = \\frac{1}{0.8} = 1.25$.",
        trik_cepat: "Untuk $v = 0.6c$: $\\sqrt{1 - 0.36} = \\sqrt{0.64} = 0.8$. $\\gamma = 1/0.8 = 1.25$. Hafalkan!"
    },
    {
        id: 61,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $2m$ yang diam. Jika tumbukan lenting sempurna, kecepatan benda kedua setelah tumbukan adalah...",
        gambar: "",
        opsi: ["$\\frac{v}{3}$", "$\\frac{2v}{3}$", "$\\frac{v}{2}$", "$\\frac{3v}{4}$", "$v$"],
        jawaban: 1,
        pembahasan: "Untuk tumbukan lenting sempurna: $v_2' = \\frac{2m_1}{m_1 + m_2}v_1 = \\frac{2m}{m + 2m}v = \\frac{2m}{3m}v = \\frac{2v}{3}$.",
        trik_cepat: "Rumus cepat: $v_2' = \\frac{2m_1}{m_1 + m_2}v_1$. Massa target lebih besar $\\rightarrow$ kecepatan $2/3 v$."
    },
    {
        id: 62,
        teks: "Sebuah kawat melingkar berjari-jari $R$ dialiri arus $I$. Medan magnet di pusat lingkaran adalah...",
        gambar: "",
        opsi: ["$\\frac{\\mu_0 I}{2\\pi R}$", "$\\frac{\\mu_0 I}{4\\pi R}$", "$\\frac{\\mu_0 I}{2R}$", "$\\frac{\\mu_0 I}{4R}$", "$\\frac{\\mu_0 I}{R}$"],
        jawaban: 2,
        pembahasan: "Medan magnet di pusat kawat melingkar: $B = \\frac{\\mu_0 I}{2R}$. Untuk $N$ lilitan: $B = \\frac{\\mu_0 N I}{2R}$.",
        trik_cepat: "Kawat melingkar: $2R$ di penyebut. Kawat lurus: $2\\pi R$ di penyebut. Ingat bedanya!"
    },
    {
        id: 63,
        teks: "Sebuah gas ideal monoatomik mengalami proses adiabatik. Jika volume gas diperkecil menjadi setengahnya, tekanan gas menjadi...",
        gambar: "",
        opsi: ["$2P$", "$2^{5/3}P$", "$2^{3/5}P$", "$2^{2/3}P$", "$2^{3/2}P$"],
        jawaban: 1,
        pembahasan: "Proses adiabatik: $PV^\\gamma = $ konstan. Untuk gas monoatomik, $\\gamma = 5/3$. Jika $V \\rightarrow V/2$, maka $P' = P \\times 2^{5/3}$.",
        trik_cepat: "Adiabatik: $P \\propto V^{-\\gamma}$. Volume setengah $\\rightarrow$ tekanan $2^\\gamma = 2^{5/3}$ kali."
    },
    {
        id: 64,
        teks: "Sebuah cermin cekung memiliki jarak fokus $f$. Sebuah benda diletakkan pada jarak $2f$ dari cermin. Perbesaran bayangan yang terbentuk adalah...",
        gambar: "",
        opsi: ["1 kali", "2 kali", "0.5 kali", "4 kali", "0.25 kali"],
        jawaban: 0,
        pembahasan: "Untuk cermin cekung dengan $s = 2f$: $\\frac{1}{f} = \\frac{1}{2f} + \\frac{1}{s'} \\Rightarrow \\frac{1}{s'} = \\frac{1}{2f} \\Rightarrow s' = 2f$. Perbesaran $M = \\frac{s'}{s} = \\frac{2f}{2f} = 1$ kali.",
        trik_cepat: "Benda di pusat kelengkungan ($2f$) cermin cekung $\\rightarrow$ bayangan sama besar, terbalik, nyata."
    },
    {
        id: 65,
        teks: "Sebuah partikel bermassa $m$ bergerak dengan kecepatan $v$ dalam lintasan melingkar berjari-jari $R$. Momentum sudut partikel terhadap pusat lingkaran adalah...",
        gambar: "",
        opsi: ["$mvR$", "$\\frac{1}{2}mvR$", "$mv^2R$", "$\\frac{mv}{R}$", "$mvR^2$"],
        jawaban: 0,
        pembahasan: "Momentum sudut $L = mvr$ untuk gerak melingkar. Karena $v$ tegak lurus $R$, maka $L = mvR$.",
        trik_cepat: "Momentum sudut = momentum linear $\\times$ jari-jari: $L = mvR$."
    },
    {
        id: 66,
        teks: "Sebuah benda bermassa $m$ diikat pada tali sepanjang $L$ dan diputar vertikal. Jika kecepatan di titik terendah adalah $\\sqrt{6gL}$, tegangan tali di titik terendah adalah...",
        gambar: "",
        opsi: ["$3mg$", "$5mg$", "$7mg$", "$6mg$", "$mg$"],
        jawaban: 2,
        pembahasan: "Di titik terendah: $T - mg = \\frac{mv^2}{L}$. $T = mg + \\frac{m(6gL)}{L} = mg + 6mg = 7mg$.",
        trik_cepat: "$T_{terendah} = mg + \\frac{mv^2}{L}$. Substitusi $v^2 = 6gL$: $T = mg + 6mg = 7mg$."
    },
    {
        id: 67,
        teks: "Sebuah kapasitor pelat sejajar dengan luas $A$ dan jarak antar pelat $d$ diisi dengan dielektrik dengan konstanta $\\kappa$. Kapasitansi kapasitor tersebut adalah...",
        gambar: "",
        opsi: ["$\\epsilon_0 \\frac{A}{d}$", "$\\kappa \\epsilon_0 \\frac{A}{d}$", "$\\frac{\\epsilon_0 A}{\\kappa d}$", "$\\kappa^2 \\epsilon_0 \\frac{A}{d}$", "$\\frac{\\epsilon_0 A}{d + \\kappa}$"],
        jawaban: 1,
        pembahasan: "Kapasitansi dengan dielektrik: $C = \\kappa C_0 = \\kappa \\epsilon_0 \\frac{A}{d}$. Dielektrik meningkatkan kapasitansi sebesar faktor $\\kappa$.",
        trik_cepat: "Dielektrik selalu memperbesar kapasitansi: $C = \\kappa C_0$."
    },
    {
        id: 68,
        teks: "Sebuah gelombang stasioner pada tali dengan panjang $L$ yang kedua ujungnya terikat memiliki panjang gelombang untuk nada dasar sebesar...",
        gambar: "",
        opsi: ["$L$", "$2L$", "$L/2$", "$4L$", "$L/4$"],
        jawaban: 1,
        pembahasan: "Untuk nada dasar ($n = 1$), panjang tali $L = \\lambda/2$, sehingga $\\lambda = 2L$. Ujung terikat membentuk simpul di kedua ujung.",
        trik_cepat: "Nada dasar tali terikat: $L = \\lambda/2 \\rightarrow \\lambda = 2L$. Nada atas ke-$n$: $\\lambda_n = 2L/n$."
    },
    {
        id: 69,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk pegas dengan konstanta $k$. Jika tumbukan lenting sempurna, pegas tertekan sejauh...",
        gambar: "",
        opsi: ["$v\\sqrt{\\frac{m}{k}}$", "$v\\sqrt{\\frac{k}{m}}$", "$\\frac{v}{\\sqrt{mk}}$", "$v\\sqrt{2m/k}$", "$v\\sqrt{m/(2k)}$"],
        jawaban: 0,
        pembahasan: "Energi kinetik benda diubah menjadi energi potensial pegas: $\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 \\Rightarrow x = v\\sqrt{\\frac{m}{k}}$.",
        trik_cepat: "Kekekalan energi: $\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2$. Selesaikan untuk $x$: $x = v\\sqrt{m/k}$."
    },
    {
        id: 70,
        teks: "Sebuah partikel bermuatan $q$ dan massa $m$ dipercepat oleh beda potensial $V$ kemudian memasuki medan magnet $B$ yang tegak lurus. Jari-jari lintasan partikel adalah...",
        gambar: "",
        opsi: ["$\\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$", "$\\frac{1}{B}\\sqrt{\\frac{mV}{q}}$", "$\\frac{1}{B}\\sqrt{\\frac{2qV}{m}}$", "$\\frac{1}{B}\\sqrt{\\frac{qV}{m}}$", "$\\frac{1}{B}\\sqrt{\\frac{2mV}{q^2}}$"],
        jawaban: 0,
        pembahasan: "Energi kinetik $qV = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{\\frac{2qV}{m}}$. Jari-jari $r = \\frac{mv}{qB} = \\frac{m}{qB}\\sqrt{\\frac{2qV}{m}} = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$.",
        trik_cepat: "Gabungkan $v = \\sqrt{2qV/m}$ dengan $r = mv/(qB)$. Hasil: $r = \\sqrt{2mV/q}/B$."
    },
    {
        id: 71,
        teks: "Sebuah benda bermassa $m$ berada pada ketinggian $h$ dari permukaan bumi. Jika jari-jari bumi $R$, percepatan gravitasi pada ketinggian tersebut adalah...",
        gambar: "",
        opsi: ["$g\\frac{R}{R+h}$", "$g\\frac{R^2}{(R+h)^2}$", "$g\\frac{h^2}{(R+h)^2}$", "$g\\frac{R+h}{R}$", "$g\\frac{(R+h)^2}{R^2}$"],
        jawaban: 1,
        pembahasan: "$g' = G\\frac{M}{(R+h)^2}$. Di permukaan $g = G\\frac{M}{R^2} \\Rightarrow GM = gR^2$. Maka $g' = g\\frac{R^2}{(R+h)^2}$.",
        trik_cepat: "Gravitasi berbanding terbalik dengan kuadrat jarak dari pusat bumi: $g' = g(R/r)^2$ dengan $r = R+h$."
    },
    {
        id: 72,
        teks: "Sebuah rangkaian RC seri dengan $R = 1\\text{ k}\\Omega$ dan $C = 1\\text{ }\\mu\\text{F}$. Konstanta waktu rangkaian tersebut adalah...",
        gambar: "",
        opsi: ["1 ms", "10 ms", "100 ms", "1 s", "10 s"],
        jawaban: 0,
        pembahasan: "Konstanta waktu $\\tau = RC = (10^3\\Omega)(10^{-6}\\text{ F}) = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
        trik_cepat: "$\\tau = RC$. $\\text{k}\\Omega \\times \\mu\\text{F} = \\text{ms}$. Jadi $1 \\times 1 = 1$ ms."
    },
    {
        id: 73,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $3m$ yang diam. Jika tumbukan lenting sempurna, kecepatan benda pertama setelah tumbukan adalah...",
        gambar: "",
        opsi: ["$-\\frac{v}{2}$", "$-\\frac{v}{3}$", "$-\\frac{2v}{3}$", "$\\frac{v}{2}$", "$\\frac{v}{3}$"],
        jawaban: 0,
        pembahasan: "$v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 = \\frac{m - 3m}{m + 3m}v = \\frac{-2m}{4m}v = -\\frac{v}{2}$.",
        trik_cepat: "Rumus: $v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1$. Massa target 3 kali $\\rightarrow$ $v_1' = -v/2$."
    },
    {
        id: 74,
        teks: "Sebuah kumparan dengan induktansi $L$ dialiri arus $I$. Energi yang tersimpan dalam medan magnet kumparan adalah...",
        gambar: "",
        opsi: ["$LI$", "$\\frac{1}{2}LI$", "$LI^2$", "$\\frac{1}{2}LI^2$", "$2LI^2$"],
        jawaban: 3,
        pembahasan: "Energi medan magnet dalam induktor: $E = \\frac{1}{2}LI^2$. Analog dengan energi kinetik ($\\frac{1}{2}mv^2$) dan energi kapasitor ($\\frac{1}{2}CV^2$).",
        trik_cepat: "Induktor: $E = \\frac{1}{2}LI^2$. Kapasitor: $E = \\frac{1}{2}CV^2$. Pegas: $E = \\frac{1}{2}kx^2$."
    },
    {
        id: 75,
        teks: "Sebuah partikel bergerak dengan kecepatan $0.8c$. Rasio energi relativistik terhadap energi diam partikel tersebut adalah...",
        gambar: "",
        opsi: ["1.25", "1.67", "2.0", "2.5", "3.0"],
        jawaban: 1,
        pembahasan: "$\\gamma = \\frac{1}{\\sqrt{1 - 0.64}} = \\frac{1}{\\sqrt{0.36}} = \\frac{1}{0.6} = 1.67$. Energi total $E = \\gamma mc^2$, energi diam $E_0 = mc^2$. Rasio $E/E_0 = \\gamma = 1.67$.",
        trik_cepat: "Untuk $v = 0.8c$: $\\gamma = 1/0.6 = 5/3 \\approx 1.67$. Hafalkan!"
    },

    // ==================== LEVEL 4: SANGAT SULIT / OSN (76-100) ====================
    {
        id: 76,
        teks: "Sebuah bola pejal bermassa $m$ dan jari-jari $R$ dilepaskan dari puncak bidang miring kasar dengan sudut $\\theta$. Jika bola menggelinding tanpa slip, percepatan bola tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{5}{7}g \\sin \\theta$", "$\\frac{2}{3}g \\sin \\theta$", "$\\frac{2}{5}g \\sin \\theta$", "$\\frac{3}{5}g \\sin \\theta$", "$\\frac{1}{2}g \\sin \\theta$"],
        jawaban: 0,
        pembahasan: "Bola pejal: $I = \\frac{2}{5}mR^2$. $a = \\frac{g \\sin \\theta}{1 + I/(mR^2)} = \\frac{g \\sin \\theta}{1 + 2/5} = \\frac{5}{7}g \\sin \\theta$.",
        trik_cepat: "Bola pejal: $5/7$. Hafalkan urutan: cincin $1/2$ < silinder pejal $2/3$ < bola berongga $3/5$ < bola pejal $5/7$."
    },
    {
        id: 77,
        teks: "Sebuah satelit mengorbit bumi dalam lintasan elips dengan jarak terdekat $r_p$ dan jarak terjauh $r_a$. Perbandingan kecepatan satelit di titik terdekat dan terjauh adalah...",
        gambar: "",
        opsi: ["$r_p/r_a$", "$r_a/r_p$", "$(r_p/r_a)^2$", "$(r_a/r_p)^2$", "$\\sqrt{r_a/r_p}$"],
        jawaban: 1,
        pembahasan: "Kekekalan momentum sudut: $m v_p r_p = m v_a r_a \\Rightarrow v_p/v_a = r_a/r_p$.",
        trik_cepat: "Momentum sudut kekal: $v \\propto 1/r$. Jarak terdekat $\\rightarrow$ kecepatan terbesar."
    },
    {
        id: 78,
        teks: "Sebuah partikel bermuatan $q$ bergerak dalam medan magnet $B$ yang seragam dengan kecepatan $v$ membentuk sudut $\\theta$ terhadap medan. Lintasan partikel tersebut adalah...",
        gambar: "",
        opsi: ["Lingkaran", "Garis lurus", "Heliks (spiral)", "Parabola", "Elips"],
        jawaban: 2,
        pembahasan: "Komponen kecepatan tegak lurus $B$ ($v \\sin \\theta$) menghasilkan gerak melingkar, komponen sejajar $B$ ($v \\cos \\theta$) menghasilkan gerak lurus. Gabungan keduanya menghasilkan lintasan heliks.",
        trik_cepat: "Kecepatan membentuk sudut $\\rightarrow$ heliks. Tegak lurus $\\rightarrow$ lingkaran. Sejajar $\\rightarrow$ garis lurus."
    },
    {
        id: 79,
        teks: "Sebuah benda bermassa $m$ diikat pada pegas dengan konstanta $k$ dan bergetar harmonik. Jika amplitudo getaran dijadikan 2 kali, energi total getaran menjadi...",
        gambar: "",
        opsi: ["2 kali", "4 kali", "8 kali", "$\\frac{1}{2}$ kali", "Tetap"],
        jawaban: 1,
        pembahasan: "Energi total getaran $E = \\frac{1}{2}kA^2$. Jika $A \\rightarrow 2A$, maka $E' = \\frac{1}{2}k(2A)^2 = 4E$.",
        trik_cepat: "Energi getaran berbanding lurus dengan kuadrat amplitudo. Amplitudo 2 kali $\\rightarrow$ energi 4 kali."
    },
    {
        id: 80,
        teks: "Sebuah muatan $Q$ terdistribusi merata pada bola isolator berjari-jari $R$. Energi potensial listrik total sistem adalah...",
        gambar: "",
        opsi: ["$\\frac{3kQ^2}{5R}$", "$\\frac{kQ^2}{2R}$", "$\\frac{kQ^2}{R}$", "$\\frac{3kQ^2}{4R}$", "$\\frac{2kQ^2}{3R}$"],
        jawaban: 0,
        pembahasan: "Energi potensial bola isolator bermuatan merata: $U = \\frac{3}{5}\\frac{kQ^2}{R}$. Untuk bola konduktor: $U = \\frac{1}{2}\\frac{kQ^2}{R}$.",
        trik_cepat: "Bola isolator: $3/5$. Bola konduktor: $1/2$. Ingat perbedaannya!"
    },
    {
        id: 81,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $m$ yang diam. Jika koefisien restitusi $e = 0.5$, kecepatan benda pertama setelah tumbukan adalah...",
        gambar: "",
        opsi: ["$\\frac{v}{4}$", "$\\frac{v}{2}$", "$\\frac{3v}{4}$", "$\\frac{v}{3}$", "$\\frac{2v}{3}$"],
        jawaban: 0,
        pembahasan: "Untuk massa sama: $v_1' = \\frac{1-e}{2}v = \\frac{1-0.5}{2}v = \\frac{0.5}{2}v = \\frac{v}{4}$.",
        trik_cepat: "Massa sama: $v_1' = \\frac{1-e}{2}v$, $v_2' = \\frac{1+e}{2}v$. Untuk $e = 0.5$: $v_1' = v/4$."
    },
    {
        id: 82,
        teks: "Sebuah partikel bermassa $m$ bergerak dalam sumur potensial tak hingga dengan lebar $L$. Energi tingkat dasar partikel tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{h^2}{8mL^2}$", "$\\frac{h^2}{4mL^2}$", "$\\frac{h^2}{2mL^2}$", "$\\frac{h^2}{mL^2}$", "$\\frac{2h^2}{mL^2}$"],
        jawaban: 0,
        pembahasan: "Sumur potensial tak hingga: $E_n = \\frac{n^2 h^2}{8mL^2}$. Untuk $n = 1$: $E_1 = \\frac{h^2}{8mL^2}$.",
        trik_cepat: "Sumur tak hingga: $E_n = \\frac{n^2 h^2}{8mL^2}$. Tingkat dasar $n = 1$: $E_1 = \\frac{h^2}{8mL^2}$."
    },
    {
        id: 83,
        teks: "Sebuah silinder pejal bermassa $m$ dan jari-jari $R$ menggelinding tanpa slip pada bidang datar dengan kecepatan $v$. Energi kinetik total silinder tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{1}{2}mv^2$", "$\\frac{3}{4}mv^2$", "$mv^2$", "$\\frac{5}{4}mv^2$", "$\\frac{3}{2}mv^2$"],
        jawaban: 1,
        pembahasan: "$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. Silinder pejal $I = \\frac{1}{2}mR^2$, $\\omega = v/R$. $E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{1}{2}mR^2)(v/R)^2 = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$.",
        trik_cepat: "Menggelinding: $E_k = \\frac{1}{2}mv^2(1 + I/(mR^2))$. Silinder pejal: $1 + 1/2 = 3/2 \\rightarrow \\frac{3}{4}mv^2$."
    },
    {
        id: 84,
        teks: "Sebuah rangkaian RLC seri memiliki $R = 40\\Omega$, $L = 0.5$ H, dan $C = 200\\mu$F. Frekuensi resonansi rangkaian tersebut adalah...",
        gambar: "",
        opsi: ["$\\frac{10}{\\pi}$ Hz", "$\\frac{20}{\\pi}$ Hz", "$\\frac{5}{\\pi}$ Hz", "$\\frac{50}{\\pi}$ Hz", "$\\frac{100}{\\pi}$ Hz"],
        jawaban: 0,
        pembahasan: "$f_0 = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi\\sqrt{0.5 \\times 200 \\times 10^{-6}}} = \\frac{1}{2\\pi\\sqrt{10^{-4}}} = \\frac{1}{2\\pi(10^{-2})} = \\frac{100}{2\\pi} = \\frac{50}{\\pi}$ Hz. Koreksi: $0.5 \\times 200\\mu = 100\\mu = 10^{-4}$. $\\sqrt{10^{-4}} = 10^{-2}$. $f_0 = 1/(2\\pi \\times 10^{-2}) = 100/(2\\pi) = 50/\\pi$ Hz.",
        trik_cepat: "$LC = 10^{-4}$, $\\sqrt{LC} = 10^{-2}$. $f_0 = 1/(2\\pi \\times 10^{-2}) = 50/\\pi$ Hz."
    },
    {
        id: 85,
        teks: "Sebuah benda bermassa $m$ diikat pada tali sepanjang $L$ dan diputar vertikal. Agar tali tidak putus, tegangan maksimum tali tidak boleh melebihi $T_{max}$. Kecepatan maksimum yang diizinkan di titik terendah adalah...",
        gambar: "",
        opsi: ["$\\sqrt{\\frac{L(T_{max} - mg)}{m}}$", "$\\sqrt{\\frac{L(T_{max} + mg)}{m}}$", "$\\sqrt{\\frac{L T_{max}}{m}}$", "$\\sqrt{\\frac{L(T_{max} - 2mg)}{m}}$", "$\\sqrt{\\frac{L(2T_{max} - mg)}{m}}$"],
        jawaban: 0,
        pembahasan: "Di titik terendah: $T_{max} - mg = \\frac{mv^2}{L} \\Rightarrow v = \\sqrt{\\frac{L(T_{max} - mg)}{m}}$.",
        trik_cepat: "$T_{max} = mg + \\frac{mv^2}{L}$. Selesaikan untuk $v$: $v = \\sqrt{L(T_{max} - mg)/m}$."
    },
    {
        id: 86,
        teks: "Sebuah partikel bergerak dengan kecepatan $0.6c$. Momentum relativistik partikel tersebut dibandingkan dengan momentum klasiknya ($mv$) adalah...",
        gambar: "",
        opsi: ["1.0", "1.25", "1.5", "1.67", "2.0"],
        jawaban: 1,
        pembahasan: "Momentum relativistik $p = \\gamma mv$. Untuk $v = 0.6c$, $\\gamma = 1.25$. Maka $p = 1.25mv$. Rasio $p/p_{klasik} = 1.25$.",
        trik_cepat: "Rasio momentum relativistik/klasik = $\\gamma$. Untuk $v = 0.6c$, $\\gamma = 1.25$."
    },
    {
        id: 87,
        teks: "Sebuah kawat lurus panjang dialiri arus $I$ yang berubah terhadap waktu $I(t) = I_0 e^{-t/\\tau}$. Muatan total yang mengalir melalui kawat dari $t = 0$ hingga $t = \\infty$ adalah...",
        gambar: "",
        opsi: ["$I_0 \\tau$", "$I_0/\\tau$", "$I_0 \\tau/2$", "$2I_0 \\tau$", "$I_0 \\tau^2$"],
        jawaban: 0,
        pembahasan: "$Q = \\int_0^\\infty I(t) dt = \\int_0^\\infty I_0 e^{-t/\\tau} dt = I_0[-\\tau e^{-t/\\tau}]_0^\\infty = I_0(0 - (-\\tau)) = I_0 \\tau$.",
        trik_cepat: "Integral fungsi eksponensial $e^{-t/\\tau}$ dari 0 ke $\\infty$ = $\\tau$. Hasil: $I_0 \\tau$."
    },
    {
        id: 88,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $2m$ yang diam. Jika tumbukan tidak lenting sama sekali, energi kinetik yang hilang adalah...",
        gambar: "",
        opsi: ["$\\frac{1}{6}mv^2$", "$\\frac{1}{3}mv^2$", "$\\frac{1}{2}mv^2$", "$\\frac{2}{3}mv^2$", "$\\frac{5}{6}mv^2$"],
        jawaban: 1,
        pembahasan: "$E_{k,awal} = \\frac{1}{2}mv^2$. Setelah tumbukan: $v' = \\frac{mv}{m+2m} = \\frac{v}{3}$. $E_{k,akhir} = \\frac{1}{2}(3m)(v/3)^2 = \\frac{1}{2}(3m)(v^2/9) = \\frac{1}{6}mv^2$. Energi hilang = $\\frac{1}{2}mv^2 - \\frac{1}{6}mv^2 = \\frac{1}{3}mv^2$.",
        trik_cepat: "Tumbukan tidak lenting: $\\Delta E_k = \\frac{1}{2}\\mu v_{rel}^2$ dengan $\\mu = \\frac{m_1 m_2}{m_1+m_2} = \\frac{2m^2}{3m} = \\frac{2}{3}m$. $\\Delta E_k = \\frac{1}{2}(\\frac{2}{3}m)v^2 = \\frac{1}{3}mv^2$."
    },
    {
        id: 89,
        teks: "Sebuah lensa tipis dengan jarak fokus $f$ digunakan untuk membentuk bayangan nyata yang diperbesar 2 kali. Jarak benda dari lensa adalah...",
        gambar: "",
        opsi: ["$1.5f$", "$2f$", "$3f$", "$0.5f$", "$2.5f$"],
        jawaban: 0,
        pembahasan: "Perbesaran $M = s'/s = 2 \\Rightarrow s' = 2s$. Gunakan $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} = \\frac{1}{s} + \\frac{1}{2s} = \\frac{3}{2s} \\Rightarrow s = 1.5f$.",
        trik_cepat: "Lensa cembung: $M = 2 \\rightarrow s = 1.5f$, $s' = 3f$. $M = 3 \\rightarrow s = 4f/3$."
    },
    {
        id: 90,
        teks: "Sebuah partikel bermuatan $q$ bergerak dalam medan listrik $E$ yang seragam. Jika partikel mulai dari keadaan diam, energi kinetiknya setelah menempuh jarak $d$ adalah...",
        gambar: "",
        opsi: ["$qEd$", "$\\frac{1}{2}qEd$", "$qE/d$", "$2qEd$", "$qEd^2$"],
        jawaban: 0,
        pembahasan: "Usaha yang dilakukan gaya listrik = perubahan energi kinetik: $W = Fd = qEd = \\Delta E_k$. Karena mula-mula diam, $E_k = qEd$.",
        trik_cepat: "Usaha = gaya $\\times$ jarak = $qE \\times d = qEd$."
    },
    {
        id: 91,
        teks: "Sebuah benda bermassa $m$ diikat pada tali sepanjang $L$ dan diputar vertikal. Jika kecepatan di titik tertinggi adalah $\\sqrt{2gL}$, tegangan tali di titik tertinggi adalah...",
        gambar: "",
        opsi: ["$mg$", "$2mg$", "$3mg$", "$0$", "$4mg$"],
        jawaban: 0,
        pembahasan: "Di titik tertinggi: $T + mg = \\frac{mv^2}{L}$. $T = \\frac{m(2gL)}{L} - mg = 2mg - mg = mg$.",
        trik_cepat: "$T_{tertinggi} = \\frac{mv^2}{L} - mg$. Substitusi $v^2 = 2gL$: $T = 2mg - mg = mg$."
    },
    {
        id: 92,
        teks: "Sebuah gas ideal diatomik mengalami proses isokhorik. Jika suhu gas dinaikkan dari $T$ menjadi $2T$, kalor yang diserap gas per mol adalah...",
        gambar: "",
        opsi: ["$\\frac{3}{2}RT$", "$\\frac{5}{2}RT$", "$\\frac{7}{2}RT$", "$RT$", "$2RT$"],
        jawaban: 1,
        pembahasan: "Proses isokhorik: $Q = nC_v\\Delta T$. Gas diatomik: $C_v = \\frac{5}{2}R$. Untuk $n = 1$ mol dan $\\Delta T = T$: $Q = \\frac{5}{2}RT$.",
        trik_cepat: "Isokhorik: $Q = nC_v\\Delta T$. Diatomik: $C_v = \\frac{5}{2}R$. Maka $Q = \\frac{5}{2}RT$."
    },
    {
        id: 93,
        teks: "Sebuah kumparan dengan $N$ lilitan dan luas $A$ berputar dengan kecepatan sudut $\\omega$ dalam medan magnet $B$. GGL induksi maksimum yang dihasilkan adalah...",
        gambar: "",
        opsi: ["$NAB$", "$NAB\\omega$", "$NAB\\omega^2$", "$\\frac{NAB}{\\omega}$", "$2NAB\\omega$"],
        jawaban: 1,
        pembahasan: "Fluks $\\Phi = NAB \\cos(\\omega t)$. GGL $\\varepsilon = -\\frac{d\\Phi}{dt} = NAB\\omega \\sin(\\omega t)$. Nilai maksimum $\\varepsilon_{max} = NAB\\omega$.",
        trik_cepat: "GGL maksimum generator = $NAB\\omega$. Hafalkan!"
    },
    {
        id: 94,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $m$ yang diam. Jika tumbukan lenting sempurna, fraksi energi kinetik yang ditransfer ke benda kedua adalah...",
        gambar: "",
        opsi: ["0", "0.25", "0.5", "0.75", "1.0"],
        jawaban: 4,
        pembahasan: "Untuk massa sama dan lenting sempurna, benda pertama berhenti dan benda kedua bergerak dengan kecepatan $v$. Seluruh energi kinetik ditransfer: fraksi = 1.0 (100%).",
        trik_cepat: "Massa sama + lenting sempurna = transfer energi 100%. Benda pertama berhenti, benda kedua bergerak dengan $v$."
    },
    {
        id: 95,
        teks: "Sebuah partikel bermassa $m$ bergerak dalam potensial $V(x) = \\frac{1}{2}kx^2$. Menurut mekanika kuantum, selisih energi antara tingkat $n = 1$ dan $n = 0$ adalah...",
        gambar: "",
        opsi: ["$\\frac{1}{2}\\hbar\\omega$", "$\\hbar\\omega$", "$\\frac{3}{2}\\hbar\\omega$", "$2\\hbar\\omega$", "$\\frac{5}{2}\\hbar\\omega$"],
        jawaban: 1,
        pembahasan: "Tingkat energi osilator harmonik: $E_n = (n + \\frac{1}{2})\\hbar\\omega$. $E_1 - E_0 = (1 + \\frac{1}{2})\\hbar\\omega - (0 + \\frac{1}{2})\\hbar\\omega = \\hbar\\omega$.",
        trik_cepat: "Selisih tingkat energi osilator harmonik selalu $\\hbar\\omega$ (sama untuk semua tingkat)."
    },
    {
        id: 96,
        teks: "Sebuah benda bermassa $m$ diikat pada tali sepanjang $L$ dan diputar vertikal. Jika kecepatan di titik terendah adalah $\\sqrt{5gL}$, tegangan tali di titik tertinggi adalah...",
        gambar: "",
        opsi: ["$0$", "$mg$", "$2mg$", "$3mg$", "$4mg$"],
        jawaban: 0,
        pembahasan: "Dengan kekekalan energi: $\\frac{1}{2}mv_b^2 = \\frac{1}{2}mv_t^2 + mg(2L)$. $v_t^2 = v_b^2 - 4gL = 5gL - 4gL = gL$. Di titik tertinggi: $T + mg = \\frac{mv_t^2}{L} = mg \\Rightarrow T = 0$.",
        trik_cepat: "Untuk $v_{terendah} = \\sqrt{5gL}$ (kecepatan minimum), tegangan di titik tertinggi = 0. Ini kondisi kritis!"
    },
    {
        id: 97,
        teks: "Sebuah rangkaian RLC seri dengan $R = 30\\Omega$, $L = 0.2$ H, dan $C = 125\\mu$F dihubungkan dengan sumber AC $V = 200$ V pada frekuensi resonansi. Arus yang mengalir adalah...",
        gambar: "",
        opsi: ["$\\frac{20}{3}$ A", "$\\frac{10}{3}$ A", "$\\frac{40}{3}$ A", "$\\frac{5}{3}$ A", "$\\frac{25}{3}$ A"],
        jawaban: 0,
        pembahasan: "Pada resonansi, $X_L = X_C$ sehingga $Z = R = 30\\Omega$. Arus $I = V/Z = 200/30 = 20/3$ A.",
        trik_cepat: "Resonansi: $Z = R$. Arus = $V/R = 200/30 = 20/3$ A."
    },
    {
        id: 98,
        teks: "Sebuah partikel bergerak dengan kecepatan $0.8c$. Energi kinetik relativistik partikel tersebut dibandingkan dengan energi diamnya adalah...",
        gambar: "",
        opsi: ["0.25", "0.5", "0.67", "1.0", "1.5"],
        jawaban: 2,
        pembahasan: "$E_k = (\\gamma - 1)mc^2$. Untuk $v = 0.8c$, $\\gamma = 1.67$. $E_k/E_0 = \\gamma - 1 = 1.67 - 1 = 0.67$.",
        trik_cepat: "Rasio $E_k/E_0 = \\gamma - 1$. Untuk $v = 0.8c$, $\\gamma = 5/3 \\approx 1.67$, maka rasio $= 2/3 \\approx 0.67$."
    },
    {
        id: 99,
        teks: "Sebuah benda bermassa $m$ bergerak dengan kecepatan $v$ menumbuk benda lain bermassa $2m$ yang diam. Jika tumbukan lenting sempurna, fraksi energi kinetik yang ditransfer ke benda kedua adalah...",
        gambar: "",
        opsi: ["$\\frac{2}{9}$", "$\\frac{4}{9}$", "$\\frac{8}{9}$", "$\\frac{1}{3}$", "$\\frac{2}{3}$"],
        jawaban: 2,
        pembahasan: "$E_{k,awal} = \\frac{1}{2}mv^2$. $v_2' = \\frac{2m}{m+2m}v = \\frac{2v}{3}$. $E_{k,akhir} = \\frac{1}{2}(2m)(\\frac{2v}{3})^2 = m \\times \\frac{4v^2}{9} = \\frac{4}{9}mv^2$. Fraksi = $\\frac{4/9 mv^2}{1/2 mv^2} = \\frac{8}{9}$.",
        trik_cepat: "Fraksi transfer = $\\frac{4m_1 m_2}{(m_1+m_2)^2} = \\frac{4(m)(2m)}{(3m)^2} = \\frac{8m^2}{9m^2} = \\frac{8}{9}$."
    },
    {
        id: 100,
        teks: "Sebuah partikel bermassa $m$ bergerak dalam sumur potensial tak hingga dengan lebar $L$. Rasio energi antara tingkat $n = 2$ dan $n = 1$ adalah...",
        gambar: "",
        opsi: ["1", "2", "3", "4", "8"],
        jawaban: 3,
        pembahasan: "Energi sumur tak hingga: $E_n = \\frac{n^2 h^2}{8mL^2}$. Rasio $E_2/E_1 = \\frac{2^2}{1^2} = 4$.",
        trik_cepat: "Energi berbanding lurus dengan $n^2$. $E_2/E_1 = (2/1)^2 = 4$."
    }
];

// Ekspor untuk digunakan di file lain (jika menggunakan modul)
// module.exports = soalFisika;