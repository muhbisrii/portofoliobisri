import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import certArutala from "../../assets/Arutala.png";
import certAxioo1 from "../../assets/ACP1.png";
import certAxioo2 from "../../assets/ACP2.png";
import certAxioo3 from "../../assets/ACP3.png";
import certBnsp from "../../assets/bnsp.jpg";
import { projects } from "../data/projectsData";

export function Projects() {
  const [active, setActive] = useState<"projects" | "certs" | "stack">("projects");
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  const certificates = [
    { id: 1, title: "ArutalaLab Certificate", issuer: "ArutalaLab", year: 2025, image: certArutala },
    { id: 2, title: "Axioo ACP #1", issuer: "Axioo", year: 2024, image: certAxioo1 },
    { id: 3, title: "Axioo ACP #2", issuer: "Axioo", year: 2024, image: certAxioo2 },
    { id: 4, title: "Axioo ACP #3", issuer: "Axioo", year: 2024, image: certAxioo3 },
    { id: 5, title: "Junior Graphic Designer", issuer: "Sertifikasi Pribadi", year: 2026, image: certBnsp },
  ];

  // Grouped tech stacks for clearer layout
  const frontendStack: { name: string; logo: string }[] = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  ];

  const backendStack: { name: string; logo: string }[] = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
    { name: "Vercel", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg" },
  ];

  const multimediaStack: { name: string; logo: string }[] = [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg" },
    { name: "CapCut", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/capcut.svg" },
    { name: "CorelDRAW", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/coreldraw.svg" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "Semua") return true;
    const cat = (project.category || "").toLowerCase();
    if (activeFilter === "Web & Mobile") return cat.includes("web") || cat.includes("mobile");
    if (activeFilter === "Video Editing") return cat.includes("video");
    if (activeFilter === "Desain Grafis") return cat.includes("desain") || cat.includes("grafis") || cat.includes("design") || cat.includes("graphic");
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="text-purple-500 font-[Montserrat] font-bold tracking-wider uppercase mb-2 block">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-5xl font-[Montserrat] font-bold text-white">Portofolio</h2>
          <p className="mt-4 text-gray-400 font-[Montserrat] max-w-2xl">
            Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis. Setiap bagian mewakili tonggak dalam proses pembelajaran saya.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-2 mb-12">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActive("projects")}
              className={`px-6 py-3 rounded-2xl transition-colors font-[Montserrat] font-semibold text-sm ${
                active === "projects"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                  : "text-gray-300"
              }`}
            >
              Proyek
            </button>

            <button
              onClick={() => setActive("certs")}
              className={`px-6 py-3 rounded-2xl transition-colors font-[Montserrat] font-semibold text-sm ${
                active === "certs"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                  : "text-gray-300"
              }`}
            >
              Sertifikat
            </button>

            <button
              onClick={() => setActive("stack")}
              className={`ml-auto px-6 py-3 rounded-2xl transition-colors font-[Montserrat] font-semibold text-sm ${
                active === "stack"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                  : "text-gray-300"
              }`}
            >
              Teknologi
            </button>
          </div>
        </div>

        {/* Filters: tampilkan hanya saat tab 'Proyek' aktif */}
        {active === "projects" && (
          <div className="flex gap-3 mb-8 items-center">
            {["Semua", "Web & Mobile", "Video Editing", "Desain Grafis"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-[Montserrat] font-semibold transition-colors ${
                  activeFilter === f
                    ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                    : "text-gray-300 border border-zinc-800 bg-zinc-900/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        {active === "projects" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full text-center text-gray-400">Tidak ada proyek untuk filter ini.</div>
              ) : (
                filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group overflow-hidden rounded-2xl bg-zinc-900/30 border border-zinc-800"
              >
                <div className="w-full aspect-[4/3] flex items-center justify-center bg-black/10 p-4">
                  <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain rounded-lg shadow" />
                </div>

                <div className="p-6">
                  <span className="text-purple-400 font-[Montserrat] text-sm font-bold uppercase tracking-wide mb-2 block">{project.category}</span>
                  <h3 className="text-lg font-[Montserrat] font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex items-center gap-3">
                    <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm inline-flex items-center gap-2">
                      Demo <ExternalLink size={14} />
                    </a>

                    {/* Tombol Details dikembalikan */}
                    <a href={`#project-${project.id}`} className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full text-sm inline-flex items-center gap-2">
                      Detail
                    </a>

                    <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border border-zinc-800 rounded-full text-gray-300 hover:text-white text-sm inline-flex items-center gap-2">
                      <Github size={14} /> Repositori
                    </a>
                  </div>
                </div>
              </motion.div>
              ))
            )}
          </div>
        )}

        {active === "certs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3 items-center"
              >
                <div className="w-full rounded-lg bg-black/10 flex items-center justify-center p-4">
                  <a href={cert.image} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center">
                    <img src={cert.image} alt={cert.title} className="max-w-full max-h-[420px] object-contain" />
                  </a>
                </div>
                <h4 className="text-lg font-[Montserrat] font-bold text-white text-center">{cert.title}</h4>
                <p className="text-gray-400 text-center">{cert.issuer} • {cert.year}</p>
              </motion.div>
            ))}
          </div>
        )}

        {active === "stack" && (
          <div className="space-y-10">
            {/* Frontend & Web */}
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Frontend & Web</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {frontendStack.map((item: { name: string; logo: string }, idx: number) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md group"
                    title={item.name}
                  >
                    <div className="w-16 h-16 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <img src={item.logo} alt={item.name} className="w-11 h-11 object-contain transition-transform group-hover:scale-110" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name}&background=333&color=fff`; }} />
                    </div>
                    <div className="text-sm text-gray-300 font-[Montserrat] text-center">{item.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend & Cloud */}
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Backend & Cloud</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {backendStack.map((item: { name: string; logo: string }, idx: number) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md group"
                    title={item.name}
                  >
                    <div className="w-16 h-16 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <img src={item.logo} alt={item.name} className="w-11 h-11 object-contain transition-transform group-hover:scale-110" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name}&background=333&color=fff`; }} />
                    </div>
                    <div className="text-sm text-gray-300 font-[Montserrat] text-center">{item.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Multimedia & Design */}
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Multimedia & Design</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {multimediaStack.map((item: { name: string; logo: string }, idx: number) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md group"
                    title={item.name}
                  >
                    <div className="w-16 h-16 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <img src={item.logo} alt={item.name} className="w-11 h-11 object-contain transition-transform group-hover:scale-110" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name}&background=333&color=fff`; }} />
                    </div>
                    <div className="text-sm text-gray-300 font-[Montserrat] text-center">{item.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}