import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-[Montserrat] font-bold text-white tracking-tighter mb-2 uppercase">
            Muhammad Bisri<span className="text-purple-500">.</span>
          </h3>
          <p className="text-gray-500 text-sm font-[Montserrat]">
            © {new Date().getFullYear()} Muhammad Bisri. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
