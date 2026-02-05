import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import Groq from "groq-sdk";

// Konfigurasi Groq API dengan prefix VITE_ untuk akses Client-side
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo! Saya AI Assistant Bisri. Ada yang bisa saya bantu?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { 
            role: "system", 
            content: `Kamu adalah Bisri AI Assistant, asisten virtual dari Bisri.
            
            PROFIL BISRI:
            - Identitas: Lahir di Banjarmasin, 11 Februari 2004.
            - Kesibukan: Mahasiswa Informatika yang aktif mengedit video dan eksplorasi teknologi frontend.
            - Alasan masuk IT: Ketertarikan pada inovasi digital dan prospek karier yang luas.
            - Visi Karier: Menjadi Software Engineer profesional.
            
            GAYA BICARA:
            - Ramah, profesional, dan to-the-point khas mahasiswa IT.
            - Jika ditanya hal di luar portofolio, arahkan kembali dengan sopan.`
          },
          // Spread messages yang ada
          ...(newMessages as any),
        ],
        model: "llama-3.3-70b-versatile",
      });

      setMessages([...newMessages, { 
        role: "assistant", 
        content: chatCompletion.choices[0]?.message?.content || "Maaf, saya sedang offline." 
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
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
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
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
                  placeholder="Ketik pertanyaan untuk Bisri..."
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