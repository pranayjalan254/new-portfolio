import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingNav from "./components/FloatingNav";
import Blog from "./components/Blog";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <FloatingNav isMenuOpen={isMenuOpen} />

      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <footer className="py-8 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>© 2024 Pranay Jalan. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/your-github"
              className="hover:text-blue-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-blue-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
