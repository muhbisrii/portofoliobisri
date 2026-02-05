import project1Img from "../../assets/project1.png";
import magang1 from "../../assets/magang1.jpg";
import magang2 from "../../assets/magang2.jpeg";
import magang3 from "../../assets/magang3.jpg";
import magang4 from "../../assets/magang4.jpg";

export const projects = [
  {
    id: 1,
    title: "Website & Mobile Pengaduan Masyarakat - DP3A Banjarmasin",
    category: "Government / Web & Mobile",
    image: project1Img,
    description:
      "Website pengaduan masyarakat untuk Dinas Pemberdayaan Perempuan dan Perlindungan Anak Kota Banjarmasin. Situs ini dibuat saat magang di DP3A sebagai tugas magang — menyediakan fitur pengajuan laporan, manajemen kasus, dan dashboard admin.",
    live: "https://web-dp3a-bjm.vercel.app/",
    repo: "https://github.com/muhbisrii/web_dp3a_bjm",
    gallery: [magang1, magang2, magang3, magang4],
  },
];

export default projects;
