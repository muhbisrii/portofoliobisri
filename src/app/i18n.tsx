import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "id" | "en";

const translations = {
  id: {
    home: "Home",
    about: "Tentang",
    portfolio: "Portofolio",
    contact: "Kontak",
    hello: "Halo, saya Muhammad Bisri",
    crafting: "Menciptakan",
    digitalExperiences: "Pengalaman Digital",
    heroDescription: "Menjembatani dunia kode dan kreativitas. Lulusan Teknik Informatika dengan fondasi multimedia yang kuat, berfokus pada Full Stack Development, Desain Grafis, dan Video Editing untuk menciptakan aplikasi fungsional serta konten visual yang memikat. Berdomisili di",
    viewWork: "Lihat Karya",
    viewVowture: "Lihat Vowture",
    contactMe: "Hubungi Saya",
    languageLabel: "Bahasa",
    aboutTitle: "Tentang Saya",
    aboutText: "Hai, saya Muhammad Bisri. Saya lulusan D3 Teknik Informatika dari Politeknik Negeri Banjarmasin dengan fokus utama pada Full Stack Development.",
    aboutText2: "Di samping dunia pemrograman, saya memiliki latar belakang pendidikan Multimedia di SMKN 1 Banjarmasin. Melalui fondasi tersebut, saya menguasai berbagai bidang kreatif media digital, seperti desain grafis, video editing, hingga produksi aset visual yang menarik dan komunikatif.",
    internship: "Magang",
    internshipTotal: "Total 10 bulan",
    internshipDetail: "6 bulan saat SMK + 4 bulan saat kuliah",
    education: "Pendidikan & Latar Belakang",
    experience: "Pengalaman Kerja",
    documentation: "Dokumentasi Pengalaman",
    softwareSkills: "Keahlian Perangkat Lunak",
    portfolioDescription: "Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis. Setiap bagian mewakili tonggak dalam proses pembelajaran saya.",
    projects: "Proyek",
    certificates: "Sertifikat",
    technology: "Teknologi",
    all: "Semua",
    webMobile: "Web & Mobile",
    videoEditing: "Video Editing",
    graphicDesign: "Desain Grafis",
    noProjects: "Tidak ada proyek untuk filter ini.",
    demo: "Demo",
    detail: "Detail",
    repository: "Repositori",
    source: "Sumber",
    contactHeading: "Mari Terhubung",
    contactDescription: "Terbuka untuk kesempatan. Silakan hubungi saya untuk kolaborasi atau kebutuhan profesional.",
    followMe: "Ikuti Saya di Media Sosial",
    location: "Lokasi",
    rights: "Semua hak dilindungi.",
    online: "Online",
    chatPlaceholder: "Ketik pertanyaan untuk Bisri...",
    chatbotOffline: "Chatbot saat ini belum aktif karena API key belum dikonfigurasi.",
    chatbotOfflineShort: "Maaf, saya sedang offline.",
    chatbotVideoUnsupported: "Browser Anda tidak mendukung pemutaran video.",
    close: "Tutup",
    projectDocumentation: "Dokumentasi",
    videoDocumentation: "Dokumentasi Video",
  },
  en: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
    hello: "Hello, I am Muhammad Bisri",
    crafting: "Crafting",
    digitalExperiences: "Digital Experiences",
    heroDescription: "Bridging the worlds of code and creativity. An Informatics Engineering graduate with a strong multimedia foundation, focused on Full Stack Development, Graphic Design, and Video Editing to create functional applications and engaging visual content. Based in",
    viewWork: "View My Work",
    viewVowture: "View Vowture",
    contactMe: "Contact Me",
    languageLabel: "Language",
    aboutTitle: "About Me",
    aboutText: "Hi, I am Muhammad Bisri. I hold a D3 degree in Informatics Engineering from Politeknik Negeri Banjarmasin, with a primary focus on Full Stack Development.",
    aboutText2: "Alongside programming, I have an educational background in Multimedia from SMKN 1 Banjarmasin. This foundation has helped me master creative digital media fields, including graphic design, video editing, and the production of engaging, communicative visual assets.",
    internship: "Internship",
    internshipTotal: "10 months total",
    internshipDetail: "6 months in vocational school + 4 months in college",
    education: "Education & Background",
    experience: "Work Experience",
    documentation: "Experience Documentation",
    softwareSkills: "Software Skills",
    portfolioDescription: "Explore my journey through projects, certifications, and technical skills. Each section represents a milestone in my learning process.",
    projects: "Projects",
    certificates: "Certificates",
    technology: "Technology",
    all: "All",
    webMobile: "Web & Mobile",
    videoEditing: "Video Editing",
    graphicDesign: "Graphic Design",
    noProjects: "No projects found for this filter.",
    demo: "Demo",
    detail: "Details",
    repository: "Repository",
    source: "Source",
    contactHeading: "Let's Connect",
    contactDescription: "Open to opportunities. Feel free to contact me for collaboration or professional needs.",
    followMe: "Follow Me on Social Media",
    location: "Location",
    rights: "All rights reserved.",
    online: "Online",
    chatPlaceholder: "Type a question for Bisri...",
    chatbotOffline: "The chatbot is currently inactive because the API key has not been configured.",
    chatbotOfflineShort: "Sorry, I am currently offline.",
    chatbotVideoUnsupported: "Your browser does not support video playback.",
    close: "Close",
    projectDocumentation: "Documentation",
    videoDocumentation: "Video Documentation",
  },
} as const;

type TranslationKey = keyof typeof translations.id;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key) => translations[language][key] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}