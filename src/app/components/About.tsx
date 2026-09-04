import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import aboutPhoto from "../../assets/bisrivow.jpg";
import pengalaman1 from "../../assets/pengalaman1.jpg";
import pengalaman2 from "../../assets/pengalaman2.jpg";
import pengalaman3 from "../../assets/pengalaman3.jpg";
import pengalaman4 from "../../assets/pengalaman4.jpg";
import pengalaman5 from "../../assets/pengalaman5.jpg";
import pengalaman6 from "../../assets/pengalaman6.jpg";
import pengalaman7 from "../../assets/pengalaman7.jpg";
import pengalaman8 from "../../assets/pengalaman8.jpg";
import pengalaman9 from "../../assets/pengalaman9.jpg";
import pengalaman10 from "../../assets/pengalaman10.jpg";
import { useLanguage } from "../i18n";

export function About() {
  const { language, t } = useLanguage();
  const education = [
    {
      year: "2023 - 2026",
      school: "Politeknik Negeri Banjarmasin",
      major: "D3 Teknik Informatika",
    },
    {
      year: "2020 - 2023",
      school: "SMKN 1 Banjarmasin",
      major: "Multimedia",
    },
  ];

  const experience = [
    {
      role: "Freelance Content Creator & Video Editor",
      company: "Vowture",
      year: language === "id" ? "2025 - Sekarang" : "2025 - Present",
      description:
        language === "id" ? "Memproduksi konten visual, video editing adaptif tren media sosial, dan mengelola website portofolio digital." : "Produce visual content, adapt video edits to social media trends, and manage a digital portfolio website.",
    },
    {
      role: "Staf Magang IT & Keuangan",
      company: "DPPPA Kota Banjarmasin",
      year: "Sep 2025 - Des 2025",
      description:
        language === "id" ? "Merancang dan mendemonstrasikan aplikasi Portal Pengaduan Publik berbasis web, serta digitalisasi dokumen administratif." : "Designed and demonstrated a web-based Public Complaints Portal and digitized administrative documents.",
    },
    {
      role: "Mobile Apps Developer (Freelance)",
      company: "Project Based",
      year: language === "id" ? "2026 - Sekarang" : "2026 - Present",
      description: language === "id" ? "Mengembangkan antarmuka aplikasi mobile yang responsif dan fungsional." : "Develop responsive and functional mobile application interfaces.",
    },
    {
      role: "Staf Magang Desainer Grafis",
      company: "Istana Print",
      year: "Jan 2022 - Sep 2022",
      description:
        language === "id" ? "Merancang aset visual percetakan klien menggunakan CorelDRAW dan Canva dengan presisi tinggi." : "Designed client print assets using CorelDRAW and Canva with high precision.",
    },
  ];

  const fadeInOut = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-zinc-950 relative w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Top Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInOut}
          className="lg:col-span-7"
        >
          <h2 className="text-4xl md:text-5xl font-[Montserrat] font-extrabold text-white mb-6 uppercase tracking-tight">
            {t("aboutTitle")}
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-8" />

          <p className="text-gray-300 text-lg font-[Montserrat] leading-relaxed mb-8">
            {t("aboutText")}
            <br /><br />
            {t("aboutText2")}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="rounded-2xl border border-purple-500/20 bg-zinc-900/70 p-3 md:p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-1">IPK</p>
              <p className="text-2xl font-[Montserrat] font-bold text-white">3.67</p>
            </div>
            <div className="rounded-2xl border border-indigo-500/20 bg-zinc-900/70 p-3 md:p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 mb-1">{t("internship")}</p>
              <p className="text-base md:text-lg font-[Montserrat] font-semibold text-white">{t("internshipTotal")}</p>
              <p className="text-sm text-gray-400 leading-tight">{t("internshipDetail")}</p>
            </div>
          </div>
        </motion.div>

        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center w-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse hidden md:block" />
          <div className="absolute inset-4 rounded-[3rem] border-2 border-purple-500/30 rotate-6 hidden sm:block" />
          
          <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-2xl">
             <img 
               src={aboutPhoto}
               alt="Muhammad Bisri"
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
             />
             <div className="absolute top-6 right-0 bg-yellow-500/90 backdrop-blur text-black font-[Montserrat] font-bold px-3 py-1.5 rounded-l-full shadow-lg transform translate-x-2 hover:translate-x-0 transition-transform hidden sm:block text-sm">
                Banjarmasin
             </div>
             <div className="absolute bottom-6 left-0 bg-purple-600/90 backdrop-blur text-white font-[Montserrat] font-bold px-3 py-1.5 rounded-r-full shadow-lg hidden sm:block text-sm">
               Kalimantan Selatan
             </div>
          </div>
        </motion.div>

        {/* Timeline & Gallery */}
        <div className="lg:col-span-12 w-full overflow-hidden">
          
          {/* Education Section */}
          <div className="mb-10 w-full">
            <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-6">{t("education")}</h3>
            <div className="space-y-8 border-l-2 border-zinc-800 ml-2 relative">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 lg:pl-8">
                  <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-4 border-purple-500" />
                  
                  <span className="text-purple-400 font-[Montserrat] font-bold text-sm bg-purple-900/20 px-3 py-1 rounded-md mb-2 inline-block">
                    {edu.year}
                  </span>
                  <h4 className="text-xl text-white font-[Montserrat] font-bold mt-1 break-words">
                    {edu.school}
                  </h4>
                  <p className="text-gray-400 font-[Montserrat] text-base break-words">
                    {edu.major}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-10 w-full">
            <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-6">{t("experience")}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
              
              {/* Left: Timeline */}
              <div className="w-full">
                <div className="space-y-8 border-l-2 border-zinc-800 ml-2 relative">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 lg:pl-8">
                      <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-4 border-indigo-500" />

                      <span className="text-indigo-400 font-[Montserrat] font-bold text-sm bg-indigo-900/20 px-3 py-1 rounded-md mb-2 inline-block">
                        {exp.year}
                      </span>
                      <h4 className="text-xl text-white font-[Montserrat] font-bold mt-1 break-words">{exp.role}</h4>
                      <p className="text-purple-400 font-[Montserrat] font-semibold mb-1 break-words">{exp.company}</p>
                      <p className="text-gray-400 font-[Montserrat] text-base break-words">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Dokumentasi (10 Foto dengan Grid Rapat/Dense) */}
              <div className="w-full">
                <h4 className="text-lg text-white font-[Montserrat] font-semibold mb-4">{t("documentation")}</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[140px] grid-flow-row-dense">
                  
                  {/* Foto 1: 2x2 */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="col-span-2 row-span-2 group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman1} alt="pengalaman1" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 2: 2x2 */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.05 }} className="col-span-2 row-span-2 group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman2} alt="pengalaman2" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 3: 1x1 */}
                  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }} className="group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman3} alt="pengalaman3" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 4: 2x1 */}
                  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.12 }} className="col-span-2 group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman4} alt="pengalaman4" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 5: 1x1 */}
                  <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.14 }} className="group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman5} alt="pengalaman5" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 6: 1x1 */}
                  <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.16 }} className="group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman6} alt="pengalaman6" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 7: 2x1 */}
                  <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.18 }} className="col-span-2 group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman7} alt="pengalaman7" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 8: 1x1 */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman8} alt="pengalaman8" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 9: 2x1 */}
                  <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.22 }} className="col-span-2 group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman9} alt="pengalaman9" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>

                  {/* Foto 10: 1x1 */}
                  <motion.div initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.24 }} className="group relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                    <img src={pengalaman10} alt="pengalaman10" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-6">{t("softwareSkills")}</h3>
            <div className="flex flex-wrap gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition-transform cursor-default" title="Pengembangan Frontend">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-9 h-9" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-110 transition-transform cursor-default" title="Pengembangan Mobile">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-9 h-9" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-[#F24E1E] flex items-center justify-center shadow-[0_0_15px_rgba(242,78,30,0.3)] hover:scale-110 transition-transform cursor-default" title="Figma">
                  <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-9 h-9" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#000000] border border-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform cursor-default" title="Penyunting Video (CapCut)">
                  <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaQDG.nPeYqpMXSUQbV6ZbCL6QTM3OVwY7Kj03Rv3m5nPdh34eCofRrj.Az92oGHX6l3krAeKjdsSw1nRkJBRqg-&format=source&h=170" alt="CapCut" className="w-9 h-9" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#001e36] border border-[#00C4CC] flex items-center justify-center shadow-[0_0_15px_rgba(0,196,204,0.15)] hover:scale-110 transition-transform cursor-default" title="Canva">
                  <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBb8YkqrmoFjcMUJULGOJelC8Ine_BvOlvZ_c8f6Cr9YsezlXNTSuDxwdHYQQUld3hgZ5BMUud35l9ZrayGmr4xA-&format=source&h=170" alt="Canva" className="w-9 h-9" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#0b330e] border border-[#5ebd3e] flex items-center justify-center shadow-[0_0_15px_rgba(94,189,62,0.3)] hover:scale-110 transition-transform cursor-default" title="CorelDraw">
                  <img src="https://cdn.simpleicons.org/coreldraw/5ebd3e" alt="CorelDraw" className="w-9 h-9" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}