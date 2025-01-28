import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "a Full Stack Developer",
        "a Web3 Content Writer ",
        "a Student at BITS Pilani",
        "the Member of Superteam India",
        "the Partnerships Lead at BITS Blockchain Club",
      ],
      typeSpeed: 30,
      backSpeed: 15,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0, 98, 255, 0.1),transparent_80%)]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold whitespace-nowrap"
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
            className="text-base sm:text-xl md:text-2xl text-gray-400 h-[40px]"
          >
            I'm <span ref={typedRef}></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 mb-4">
              {[
                {
                  icon: <FiGithub size={20} />,
                  href: "https://github.com/pranayjalan254",
                },
                {
                  icon: <FaXTwitter size={20} />,
                  href: "https://x.com/pranaytwts",
                },
                {
                  icon: <LuLinkedin size={20} />,
                  href: "https://www.linkedin.com/in/pranay-jalan254",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full hover:from-blue-500/20 hover:to-purple-500/20 text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Updated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get in touch
              </a>

              <a
                href="https://drive.google.com/drive/folders/1gJ5ML0m9u1E6YjqBZZc3e6PKeZnSqm51?usp=sharing"
                target="_blank"
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download size={16} />
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
