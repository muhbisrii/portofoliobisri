import React, { useEffect, useState } from "react";
import { projects } from "../data/projectsData";
import { ExternalLink, Github, X } from "lucide-react";

export function ProjectDetail() {
  const [project, setProject] = useState<any | null>(null);

  useEffect(() => {
    function updateFromHash() {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("project-")) {
        const id = Number(hash.split("project-")[1]);
        const p = projects.find((x) => x.id === id) ?? null;
        setProject(p);
      } else {
        setProject(null);
      }
    }

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center p-6">
      <div className="absolute inset-0 bg-black/70" onClick={() => (window.location.hash = "#projects")} />
      <div className="relative z-70 max-w-5xl w-full bg-zinc-900/95 border border-zinc-800 rounded-2xl overflow-auto" style={{ maxHeight: "94vh" }}>
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div>
            <h2 className="text-2xl font-[Montserrat] font-bold text-white">{project.title}</h2>
            <p className="text-gray-400 text-sm">{project.category}</p>
          </div>
          <button onClick={() => (window.location.hash = "#projects")} className="text-gray-300 hover:text-white p-2">
            <X />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex items-center justify-center bg-black/10 rounded-lg p-4">
            <img src={project.image} alt={project.title} className="w-full h-auto object-contain max-h-[640px] rounded" />
          </div>

          <div className="md:col-span-1 flex flex-col gap-4">
            <p className="text-gray-300">{project.description}</p>

            {/* Render bagian sections secara dinamis berdasarkan data proyek */}
            {project.sections && project.sections.map((section: any, index: number) => (
              <div key={index}>
                <h4 className="text-sm text-gray-400 mb-2">{section.title}</h4>
                <p className="text-gray-300 text-sm">{section.content}</p>
              </div>
            ))}

            <div className="flex gap-2 mt-2">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-2 bg-purple-600 rounded-full text-white inline-flex items-center gap-2 text-sm hover:bg-purple-700 transition-colors">
                    Demo <ExternalLink size={14} />
                  </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border border-zinc-700 rounded-full text-gray-300 inline-flex items-center gap-2 text-sm hover:bg-zinc-800 transition-colors">
                  <Github size={14} /> Sumber
                </a>
              )}
            </div>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="p-6 border-t border-zinc-800">
            <h4 className="text-lg font-[Montserrat] font-bold text-white mb-4">Dokumentasi</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img: string, i: number) => (
                <div key={i} className="rounded-lg bg-black/10 flex items-center justify-center p-2">
                  <img src={img} alt={`doc-${i}`} className="max-w-full max-h-[420px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;