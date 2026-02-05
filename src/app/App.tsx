import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <MusicPlayer />
      <ProjectDetail />
    </div>
  );
}
