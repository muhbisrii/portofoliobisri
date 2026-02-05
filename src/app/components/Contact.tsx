import { motion } from "motion/react";
import { Mail, MapPin, Youtube, Instagram, Phone, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: "m.bisri139@gmail.com",
      href: "mailto:m.bisri139@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-900/20",
    },
    {
      icon: <Phone size={28} />,
      label: "WhatsApp",
      value: "+62 895-6347-68925",
      href: "https://wa.me/62895634768925",
      color: "text-green-400",
      bg: "bg-green-900/20",
    },
    {
      icon: <MapPin size={28} />,
      label: "Location",
      value: "Banjarmasin, Kalimantan Selatan",
      href: null,
      color: "text-red-400",
      bg: "bg-red-900/20",
    },
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/muhammad-bisri-945a7a300/",
      color: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/muhbisrii",
      color: "hover:text-pink-500 hover:border-pink-500",
    },
    {
      name: "YouTube",
      icon: <Youtube size={24} />,
      href: "https://www.youtube.com/@itsjexxa",
      color: "hover:text-red-500 hover:border-red-500",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background Elements (floating) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-800 to-indigo-700 rounded-full blur-[100px] pointer-events-none opacity-30 animate-floating-slower" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-500 font-[Montserrat] font-bold tracking-wider uppercase mb-3 block">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl font-[Montserrat] font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg mb-16 font-[Montserrat] leading-relaxed max-w-2xl mx-auto">
            Open for opportunities. Feel free to connect with me for collaborations or professional inquiries.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800/80 transition-all flex flex-col items-center group"
            >
              <div className={`p-4 rounded-full ${item.bg} ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-white font-[Montserrat] font-bold text-lg mb-2">{item.label}</h4>
              {item.href ? (
                <a href={item.href} className="text-gray-400 hover:text-white transition-colors font-[Montserrat] text-sm">
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-400 font-[Montserrat] text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-[Montserrat] font-bold text-white mb-8">Follow My Socials</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`flex items-center gap-3 px-6 py-3 border border-zinc-700 rounded-full text-gray-300 transition-all duration-300 group ${social.color} hover:bg-zinc-900`}
              >
                {social.icon}
                <span className="font-[Montserrat] font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
