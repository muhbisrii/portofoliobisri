import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import certArutala from "../../assets/Arutala.png";
import certAxioo1 from "../../assets/ACP1.png";
import certAxioo2 from "../../assets/ACP2.png";
import certAxioo3 from "../../assets/ACP3.png";
import { projects } from "../data/projectsData";

export function Projects() {
  const [active, setActive] = useState<"projects" | "certs" | "stack">("projects");

  const certificates = [
    { id: 1, title: "ArutalaLab Certificate", issuer: "ArutalaLab", year: 2025, image: certArutala },
    { id: 2, title: "Axioo ACP #1", issuer: "Axioo", year: 2024, image: certAxioo1 },
    { id: 3, title: "Axioo ACP #2", issuer: "Axioo", year: 2024, image: certAxioo2 },
    { id: 4, title: "Axioo ACP #3", issuer: "Axioo", year: 2024, image: certAxioo3 },
  ];

  const stack = [
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "ReactJS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vite",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Node JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
    },
    {
      name: "Material UI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Vercel",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="text-purple-500 font-[Montserrat] font-bold tracking-wider uppercase mb-2 block">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-5xl font-[Montserrat] font-bold text-white">Portfolio Showcase</h2>
          <p className="mt-4 text-gray-400 font-[Montserrat] max-w-2xl">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-2 mb-12 overflow-x-auto">
          <div className="flex items-center gap-2 md:gap-4 min-w-max">
            <button
              onClick={() => setActive("projects")}
              className={`px-6 py-3 rounded-2xl transition-all font-[Montserrat] font-semibold text-sm ${
                active === "projects"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActive("certs")}
              className={`px-6 py-3 rounded-2xl transition-all font-[Montserrat] font-semibold text-sm ${
                active === "certs"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Certificates
            </button>

            <button
              onClick={() => setActive("stack")}
              className={`md:ml-auto px-6 py-3 rounded-2xl transition-all font-[Montserrat] font-semibold text-sm ${
                active === "stack"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="min-h-[400px]">
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/50 transition-all"
                >
                  <div className="w-full aspect-video flex items-center justify-center bg-black/40 p-4">
                    <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="p-6">
                    <span className="text-purple-400 font-[Montserrat] text-sm font-bold uppercase tracking-wide mb-2 block">{project.category}</span>
                    <h3 className="text-lg font-[Montserrat] font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex items-center gap-3">
                      <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm inline-flex items-center gap-2">
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border border-zinc-800 rounded-full text-gray-300 hover:text-white text-sm inline-flex items-center gap-2">
                        <Github size={14} /> Repo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {active === "certs" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-4 group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-black aspect-[1.414/1] flex items-center justify-center p-2">
                    <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                    <a href={cert.image} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                       <ExternalLink className="text-white" />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold font-[Montserrat]">{cert.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {active === "stack" && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {stack.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-purple-500/50 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-zinc-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.src = `https://ui-avatars.com/api/?name=${item.name}&background=333&color=fff`;
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 font-[Montserrat] group-hover:text-white transition-colors">{item.name}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}