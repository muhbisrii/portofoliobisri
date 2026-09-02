import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroPhoto from "../../assets/bisri2.jpg";
import Typewriter from "./Typewriter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-12 overflow-hidden bg-black"
    >
      {/* Background Gradient Blob (floating) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-floating" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-floating-slow" />

      {/* Container utama dengan grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        
        {/* Kolom Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <span className="text-purple-400 font-[Montserrat] font-bold tracking-wider uppercase mb-4 block text-sm md:text-base">
            Halo, saya Muhammad Bisri
          </span>
          <h1 className="text-xl md:text-2xl font-[Montserrat] font-extrabold text-white leading-tight mb-6">
            <span>Crafting </span>
            <Typewriter
              texts={["Digital Experiences"]}
              typingSpeed={90}
              deletingSpeed={40}
              pause={1400}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
            />
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-[Montserrat] mb-8 max-w-lg leading-relaxed">
            Menjembatani dunia kode dan kreativitas. Lulusan Teknik Informatika dengan fondasi multimedia yang kuat, berfokus pada Full Stack Development, Desain Grafis, dan Video Editing untuk menciptakan aplikasi fungsional serta konten visual yang memikat. Berdomisili di <strong>Banjarmasin, Kalimantan Selatan</strong>.
          </p>

          {/*
            Option 2 (alternate) - to use this, replace the above Typewriter `texts` and paragraph with the following:

            <Typewriter
              texts={["Developer & Visual Creator"]}
              typingSpeed={90}
              deletingSpeed={40}
              pause={1400}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
            />

            <p className="text-gray-400 text-base md:text-lg font-[Montserrat] mb-8 max-w-lg leading-relaxed">
              Merging modern software engineering with visual storytelling. I build polished web and mobile applications while producing engaging graphic designs and video edits. Based in <strong>Banjarmasin, Kalimantan Selatan</strong>.
            </p>
          */}
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-[Montserrat] font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-purple-900/50"
            >
              Lihat Karya <ArrowRight size={20} />
            </a>
            <a
              href="https://vowture.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 border border-purple-600 text-white hover:bg-purple-600/20 font-[Montserrat] font-bold rounded-full transition-all flex items-center gap-2"
            >
              Lihat Vowture <ExternalLink size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-700 hover:border-purple-500 hover:text-purple-400 text-gray-300 font-[Montserrat] font-bold rounded-full transition-all flex items-center gap-2"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>

        {/* Kolom Foto (Hidden dihilangkan, ditambahkan ukuran responsif) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full order-first md:order-last mb-4 md:mb-0"
        >
          {/* Max-width disesuaikan: 260px di mobile agar tidak kebesaran, kembali ke max-w-md di layar besar */}
          <div className="relative w-full aspect-square max-w-[260px] md:max-w-md mx-auto animate-floating-slower hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-700">
             {/* Decorative Ring */}
            <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Jarak border dalam disesuaikan untuk HP */}
            <div className="absolute inset-6 md:inset-8 rounded-full overflow-hidden border-4 border-purple-900/50 shadow-2xl shadow-purple-900/30 bg-gray-900">
               <img
                src={heroPhoto}
                alt="Muhammad Bisri"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}