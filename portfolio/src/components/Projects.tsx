import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { projects } from "../data/Projects";

const categories = [
  "Blockchain",
  "Frontend",
  "Fullstack",
  "Machine Learning",
  "IOT",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Blockchain");
  const filteredProjects = projects.filter((project) =>
    project.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-2xl h-full">
                  <div className="bg-black p-6 rounded-2xl h-full relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={project.logoUrl}
                        alt={project.title}
                        className="w-10 h-10 object-contain"
                      />
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                      {[
                        { icon: Github, link: project.github },
                        { icon: ExternalLink, link: project.demo },
                        { icon: Play, link: project.video },
                      ].map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full hover:from-blue-500/20 hover:to-purple-500/20"
                        >
                          <item.icon size={18} className="text-gray-300" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
