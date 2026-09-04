import { motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage, type Language } from "../i18n";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("portfolio"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  const languageOptions: { code: Language; flag: string; name: string; nativeName: string }[] = [
    { code: "id", flag: "🇮🇩", name: "Indonesia", nativeName: "Bahasa Indonesia" },
    { code: "en", flag: "🇺🇸", name: "English", nativeName: "United States" },
  ];
  const selectedLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-900/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsLanguageOpen((open) => !open)}
            aria-expanded={isLanguageOpen}
            aria-haspopup="listbox"
            aria-label={t("languageLabel")}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition-colors hover:bg-white/10"
          >
            <span className="text-2xl leading-none" aria-hidden="true">{selectedLanguage.flag}</span>
            <ChevronDown size={17} className={`text-gray-300 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
          </button>

          {isLanguageOpen && (
            <div
              role="listbox"
              aria-label={t("languageLabel")}
              className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={language === option.code}
                  onClick={() => {
                    setLanguage(option.code);
                    setIsLanguageOpen(false);
                  }}
                  className={`flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors ${language === option.code ? "bg-slate-700" : "hover:bg-white/10"}`}
                >
                  <span className="text-3xl leading-none" aria-hidden="true">{option.flag}</span>
                  <span>
                    <span className="block text-base font-semibold text-white">{option.name}</span>
                    <span className="block text-sm text-slate-400">{option.nativeName}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-purple-400 font-[Montserrat] font-medium transition-colors text-sm tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-purple-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black border-b border-purple-900/50 py-4 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-purple-400 font-[Montserrat] font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
