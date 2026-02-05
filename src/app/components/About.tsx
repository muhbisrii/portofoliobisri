import { motion } from "motion/react";
import { Code2, Smartphone, Figma, Scissors } from "lucide-react";
import aboutPhoto from "../../assets/aboutbisri.jpeg";

export function About() {
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

  // Animation variants for reusability and cleaner code
  const fadeInOut = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Information */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // once: false allows animation to repeat on scroll
          variants={fadeInOut}
          className="lg:col-span-7"
        >
          <h2 className="text-4xl md:text-5xl font-[Montserrat] font-extrabold text-white mb-6 uppercase tracking-tight">
            About <span className="text-purple-500">Me</span>
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-8" />

          <p className="text-gray-300 text-lg font-[Montserrat] leading-relaxed mb-10">
            Hi, I'm <strong className="text-white">Muhammad Bisri</strong>. I am currently a student at <strong className="text-purple-400">Politeknik Negeri Banjarmasin</strong> majoring in Informatics Engineering.
            <br /><br />
            Although my focus is now on <strong className="text-white">Frontend Web & Mobile Development</strong>, I have a strong creative background. Thanks to my Multimedia major at <strong className="text-purple-400">SMKN 1 Banjarmasin</strong>, I am proficient in design tools like **CorelDraw** and **Photoshop**, allowing me to bridge the gap between code and aesthetics.
          </p>

          {/* Education Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-6">Education</h3>
            <div className="space-y-8 border-l-2 border-zinc-800 pl-8 relative">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Dot on timeline */}
                  <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-4 border-purple-500" />
                  
                  <span className="text-purple-400 font-[Montserrat] font-bold text-sm bg-purple-900/20 px-3 py-1 rounded-md mb-2 inline-block">
                    {edu.year}
                  </span>
                  <h4 className="text-xl text-white font-[Montserrat] font-bold mt-1">
                    {edu.school}
                  </h4>
                  <p className="text-gray-400 font-[Montserrat] text-base">
                    {edu.major}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-6">Software Skills</h3>
            <div className="flex flex-wrap gap-4">
              
              {/* 1. Frontend Dev */}
              <div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-purple-500 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition-transform cursor-default" title="Frontend Dev">
                <Code2 size={28} />
              </div>

              {/* 2. Mobile Dev */}
              <div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-indigo-500 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-110 transition-transform cursor-default" title="Mobile Dev">
                <Smartphone size={28} />
              </div>

              {/* 3. Figma */}
              <div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-[#F24E1E] flex items-center justify-center text-white shadow-[0_0_15px_rgba(242,78,30,0.3)] hover:scale-110 transition-transform cursor-default" title="Figma">
                <Figma size={28} className="text-[#F24E1E]" />
              </div>

              {/* 4. CapCut */}
              <div className="w-16 h-16 rounded-2xl bg-[#000000] border border-white flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform cursor-default" title="CapCut">
                {/* Using Scissors as a metaphor for video editing since no CapCut icon in Lucide */}
                <Scissors size={28} />
              </div>

              {/* 5. Photoshop Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#001e36] border border-[#31a8ff] flex items-center justify-center text-[#31a8ff] font-bold text-xl font-[Montserrat] shadow-[0_0_15px_rgba(49,168,255,0.3)] hover:scale-110 transition-transform cursor-default" title="Adobe Photoshop">
                Ps
              </div>
              
              {/* 6. CorelDraw Badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#0b330e] border border-[#5ebd3e] flex items-center justify-center text-[#5ebd3e] font-bold text-xl font-[Montserrat] shadow-[0_0_15px_rgba(94,189,62,0.3)] hover:scale-110 transition-transform cursor-default" title="CorelDraw">
                Cd
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Photo Area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: false, amount: 0.3 }} // Animated every time it enters view
           transition={{ duration: 0.6, delay: 0.2 }}
           className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center"
        >
          {/* Decorative Backdrops (Blobs) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse" />
          
          <div className="absolute inset-4 rounded-[3rem] border-2 border-purple-500/30 rotate-6" />
          
          {/* Image Container */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-2xl">
             <img 
               src={aboutPhoto}
               alt="Muhammad Bisri"
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
             />
             
             {/* Floating Badge (Top Right) */}
             <div className="absolute top-8 right-0 bg-yellow-500/90 backdrop-blur text-black font-[Montserrat] font-bold px-4 py-2 rounded-l-full shadow-lg transform translate-x-2 hover:translate-x-0 transition-transform">
                Banjarmasin
             </div>

             {/* Bottom Badge (Bottom Left) */}
             <div className="absolute bottom-8 left-0 bg-purple-600/90 backdrop-blur text-white font-[Montserrat] font-bold px-4 py-2 rounded-r-full shadow-lg">
                South Borneo
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}