import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useLanguage } from "../i18n";

// Konfigurasi Gemini API dengan prefix VITE_ untuk akses Client-side
const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = geminiApiKey ? new GoogleGenerativeAI(geminiApiKey) : null;

export function Chatbot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo! Saya AI Assistant Bisri. Saya siap membantu menjelaskan skill, pengalaman, dan fokus Bisri sebagai profesional IT dan Multimedia." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages([{ role: "assistant", content: language === "id"
      ? "Halo! Saya AI Assistant Bisri. Saya siap membantu menjelaskan skill, pengalaman, dan fokus Bisri sebagai profesional IT dan Multimedia."
      : "Hello! I am Bisri's AI Assistant. I can explain Bisri's skills, experience, and focus as an IT and Multimedia professional." }]);
  }, [language]);

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChat = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    const newMessages = [...messages, { role: "user", content: userMessage }];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    if (!genAI) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: t("chatbotOffline"),
        },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      // Inisialisasi model Gemini 1.5 Flash beserta System Instructions (Otak AI)
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: `Kamu adalah Bisri AI Assistant, asisten virtual representatif dari Muhammad Bisri.
            
        PROFIL BISRI (UPDATE TERBARU):
        - Status: Fresh Graduate D3 Teknik Informatika dari Politeknik Negeri Banjarmasin (IPK 3.67).
        - Fokus & Keahlian: Punya kompetensi komprehensif di dua bidang, yaitu Full Stack Development (React JS, Flutter, Laravel) dan Multimedia Kreatif (Graphic Design, Video Editing di balik layar).
        - Nilai Jual (Value): Memadukan logika pemrograman untuk membangun aplikasi dengan keahlian visual untuk mengeksekusi UI/UX serta konten media yang estetis. Terbiasa mengeksekusi proyek secara terstruktur.
        - Pengalaman Kerja/Magang: 
          1. Staf IT & Keuangan di DP3A Banjarmasin (Merancang portal pengaduan publik & dokumentasi konten video Instagram dinas).
          2. Freelance Content Creator & Video Editor (Mengelola media Vowture, konten Esports, dan Wedding).
          3. Mobile Apps Developer (Project Based merancang antarmuka aplikasi seluler).
          4. Staf Magang Desainer Grafis di Istana Print.
        - Visi Karier: Siap berkontribusi penuh di lingkungan kerja profesional sebagai Full Stack Developer, Software Engineer, atau Creative Media Specialist.
        
        GAYA BICARA:
        - Ramah, sangat profesional, percaya diri, dan to-the-point khas seorang pekerja IT.
        - Jangan berbicara seolah-olah Bisri masih mahasiswa, gunakan nada bicara orang yang sudah lulus dan siap kerja.
        - Jika ditanya hal di luar portofolio atau informasi pribadi yang di luar konteks, arahkan kembali dengan sopan ke karya dan pengalaman profesional Bisri.
        
        Jawab dalam bahasa ${language === "id" ? "Indonesia" : "Inggris"}, sesuai bahasa yang dipilih pengguna.`
      });

      // Format array messages agar sesuai dengan API Gemini (role: "user" | "model")
      const formattedContents = newMessages.map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      // Eksekusi API Call
      const chatCompletion = await model.generateContent({
        contents: formattedContents
      });

      const aiResponseText = chatCompletion.response.text();

      setMessages([...newMessages, { 
        role: "assistant", 
        content: aiResponseText || t("chatbotOfflineShort") 
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...newMessages, { 
        role: "assistant", 
        content: "Maaf, koneksi ke server AI sedang terganggu. Silakan coba lagi nanti." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-[Montserrat]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-zinc-950 border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ rotate: [0, 15, -15, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="p-2 bg-white/20 rounded-lg"
                >
                  <Bot size={20} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-sm">Bisri AI Assistant</h3>
                  <p className="text-purple-200 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> {t("online")}
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                    ? "bg-purple-600 text-white rounded-tr-none shadow-lg shadow-purple-500/20" 
                    : "bg-zinc-800 text-gray-200 rounded-tl-none border border-zinc-700"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-zinc-700">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-zinc-800/50 bg-zinc-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleChat()}
                  placeholder={t("chatPlaceholder")}
                  className="w-full bg-black border border-zinc-700 rounded-full py-3 px-5 pr-12 text-sm text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-zinc-600"
                />
                <button 
                  onClick={handleChat}
                  disabled={isLoading}
                  className="absolute right-2 p-2 bg-purple-600 hover:bg-purple-500 rounded-full text-white transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto w-14 h-14 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40 text-white transition-all duration-300 relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20"></span>
        )}
      </motion.button>
    </div>
  );
}