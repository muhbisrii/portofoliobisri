import project1Img from "../../assets/project1.png";
import project2Img from "../../assets/project2.png";
import magang1 from "../../assets/magang1.jpg";
import magang2 from "../../assets/magang2.jpeg";
import magang3 from "../../assets/magang3.jpg";
import magang4 from "../../assets/magang4.jpg";
import itsjexxa from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.png";
import posterSimpadu from "../../assets/poster simpadu.png";
import logoVowture from "../../assets/logo vowture.png";
import posterWeb from "../../assets/poster web.png";
import logoWedding from "../../assets/logo wedding.png";
import desainRoti from "../../assets/desain roti.png";
import desainSempro from "../../assets/desain sempro.png";

export const projects = [
  {
    id: 1,
    title: "Website & Mobile Pengaduan Masyarakat - DP3A Banjarmasin",
    category: "Web & Mobile",
    image: project1Img,
    description:
      "Website pengaduan masyarakat untuk Dinas Pemberdayaan Perempuan dan Perlindungan Anak Kota Banjarmasin. Situs ini dibuat saat magang di DP3A sebagai tugas magang — menyediakan fitur pengajuan laporan, manajemen kasus, dan dashboard admin.",
    live: "https://sipena-dp3a.vercel.app",
    repo: "https://github.com/muhbisrii/web_dp3a_bjm",
    gallery: [magang1, magang2, magang3, magang4],
    // Detail khusus Project 1 (tetap utuh)
    sections: [
      {
        title: "Cerita Magang",
        content:
          "Saya mengikuti program magang di DP3A Banjarmasin. Pada periode magang ini saya mengerjakan proyek pengaduan masyarakat sebagai tugas magang. Pekerjaan meliputi analisis kebutuhan, komunikasi dengan pemangku kepentingan, dan pengembangan fitur untuk mempermudah warga mengajukan laporan.",
      },
      {
        title: "Perancangan & Implementasi",
        content:
          "Tahap awal dimulai dari membuat desain di Figma. Setelah desain final, dilanjutkan pengembangan website dan aplikasi mobile. Pengembangan website dan mobile dilakukan selama 2 bulan terakhir dari masa magang (masa magang total 4 bulan), dimulai dari setup project, pembuatan API, frontend, hingga pengujian.",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile Apps (Ringkas AI & Grow Track) - Wimedia",
    category: "Web & Mobile",
    image: project2Img,
    description:
      "Mengerjakan proyek wrapping apps untuk klien Wimedia, mengonversi platform web menjadi aplikasi mobile Android. Dari 3 aplikasi yang dikembangkan, saat ini 2 aplikasi telah berhasil dirilis secara publik di Google Play Store (Ringkas AI dan Grow Track).",
    // Detail khusus Project 2 (fokus wrapping, admob, & play store)
    sections: [
      {
        title: "Tugas Utama: App Wrapping",
        content:
          "Fokus utama saya dalam proyek ini adalah melakukan konversi (wrapping) platform web menjadi aplikasi mobile berbasis Android untuk klien Wimedia. Saya bertugas memastikan antarmuka dan fungsi dari web dapat berjalan responsif dan optimal layaknya aplikasi native.",
      },
      {
        title: "Integrasi AdMob & Play Store",
        content:
          "Selain melakukan wrapping, saya juga bertanggung jawab mengintegrasikan SDK Google AdMob ke dalam setiap aplikasi untuk keperluan monetisasi. Setelah proses build dan pengujian selesai, saya menangani tahap deployment hingga aplikasi berhasil diunggah, melewati proses review, dan dirilis di Google Play Store (total 2 dari 3 aplikasi yang direncanakan telah tayang).",
      },
    ],
  },
  {
    id: 4,
    title: "Digital Content Creator (Esports & Wedding)",
    category: "Video Editing",
    image: itsjexxa,
    description:
      "Mengelola dua portofolio media digital: akun TikTok esports (@itsjexxaa) dengan 122.000+ pengikut dan 19,9 juta likes, serta layanan dokumentasi pernikahan (@vowture). Proyek ini membuktikan fleksibilitas dan keahlian mumpuni dalam video editing menggunakan CapCut, mulai dari konten dinamis bertempo cepat dengan retensi tinggi untuk audiens gaming, hingga visual estetis yang adaptif terhadap tren Instagram Reels untuk kebutuhan branding vendor.",
    live: "https://www.tiktok.com/@itsjexxaa",
    repo: "",
  },
  {
    id: 5,
    title: "Kompilasi Proyek Desain Grafis",
    category: "Desain Grafis",
    image: banner3,
    description:
      "Kumpulan dokumentasi karya eksplorasi desain grafis yang mencakup pembuatan poster kegiatan (SIMPADU, Sempro), poster website, logo brand (Vowture, Wedding), hingga materi promosi produk. Fokus pada komposisi visual dan tipografi yang efektif menggunakan ekosistem Canva.",
    live: "",
    repo: "",
    gallery: [posterSimpadu, logoVowture, posterWeb, logoWedding, desainRoti, desainSempro],
    tools: ["Canva"],
  },
  // Note: Proyek Video Editing dan Desain Grafis dikosongkan sementara sesuai permintaan
];

export default projects;