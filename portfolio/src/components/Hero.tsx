import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Download } from "lucide-react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Blockchain Enthusiast",
        "Student at BITS Pilani",
        "Solana Builder",
        "Member of Superteam India",
        "BITS Blockchain Club Member",
      ],
      typeSpeed: 35,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),transparent_80%)]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Pranay Jalan
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 h-[40px]"
          >
            I'm a <span ref={typedRef}></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-6 mb-4">
              {[
                {
                  icon: <Github size={24} />,
                  href: "https://github.com/pranayjalan254",
                },
                {
                  icon: <Twitter size={24} />,
                  href: "https://x.com/pranaytwts",
                },
                {
                  icon: <Linkedin size={24} />,
                  href: "https://www.linkedin.com/in/pranay-jalan254",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full inline-block transition-all duration-300 transform hover:scale-105"
              >
                Get in touch
              </a>

              <a
                href="https://drive.google.com/drive/folders/1gJ5ML0m9u1E6YjqBZZc3e6PKeZnSqm51?usp=sharing"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                View My Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
