import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const categories = [
  "Blockchain",
  "Frontend",
  "Fullstack",
  "Machine Learning",
  "IOT",
];

const projects = [
  {
    title: "DocVault",
    description:
      "A decentralized credential issuance platform that allows institutions to issue and verify credentials on the blockchain.",
    category: ["Blockchain", "Fullstack"],
    video: "/doc-vault.mp4",
    github: "https://github.com/pranayjalan254/docVault",
    demo: "https://doc-vault.vercel.app/",
    tech: ["ReactJS", "Solidity", "Firebase", "Blockchain"],
  },
  {
    title: "TokenTrackr",
    description:
      "A Dapp that allows users to track their token holdings, historical balances and allowances on the Ethereum blockchain.",
    video: "/tokentrackr.mp4",
    category: ["Blockchain", "Fullstack"],
    github: "https://github.com/pranayjalan254/TokenTrackr",
    demo: "https://token-trackr.vercel.app/",
    tech: ["ReactJS", "Typescript", "Web3Auth", "Blockchain"],
  },
  {
    title: "Spotlight",
    description: "A landing page for a nft event ticket selling platform.",
    video: "/spotlight.mp4",
    category: ["Blockchain", "Frontend"],
    github: "https://github.com/pranayjalan254/spotlight",
    demo: "https://spotlight-nft.vercel.app/",
    tech: ["ReactJS", "Typescript", "Blockchain"],
  },
  {
    title: "Wound Area Estimator",
    description:
      "A web application that estimates the area of a wound using image processing techniques.",
    video: "/wound-area.mp4",
    category: ["Fullstack"],
    github: "https://github.com/pranayjalan254/wound-sensor",
    demo: "https://wound-sensor.vercel.app/",
    tech: ["React", "Flask", "Python", "Google Cloud"],
  },
  {
    title: "Email/SMS Spam Classifier",
    description:
      "A practice project to familiarize with machine learning and natural language processing.",
    video: "/spam.mp4",
    category: ["Machine Learning"],
    github:
      "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
    demo: "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
    tech: ["Logistic Regression", "Naive Bayes", "Python", "NLTK"],
  },
  {
    title: "BITS Blockchain Club Website",
    description: "A website for the blockchain club of BITS Pilani",
    video: "/blockchain-club.mp4",
    category: ["Frontend"],
    github: "https://github.com/BITS-BLOCKCHAIN/BitsBlockchainWebsite",
    demo: "https://bitsblockchain.vercel.app/",
    tech: ["React", "Vercel", "Club"],
  },
  {
    title: "Bank Loan Management System",
    description: "A practice project to learn MERN stack and Restful APIs.",
    video: "/loan.mp4",
    category: ["Fullstack"],
    github: "https://github.com/yourusername/task-api",
    demo: "https://bank-loan-management-system.vercel.app/",
    tech: ["MERN", "RestAPIs", "Practice"],
  },
  {
    title: "DHT MultiHop Wireless Sensor Network",
    description:
      "A WSN using ESP8266-01 and DHT11 for humidity-temperature monitoring, with multihop communication, RPi aggregation, and power consumption analysis.",
    category: ["IOT"],
    video: "/wsn-iot.mp4",
    github: "https://github.com/pranayjalan254/dht-wsn",
    demo: "https://drive.google.com/file/d/1crtGof4TY2UucVRQF7kaVbttF5Uv5Wpr/view?usp=sharing",
    tech: ["ESP8266-01", "ArduinoIDE", "RaspberryPi", "Flask"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Blockchain");
  const filteredProjects = projects.filter((project) =>
    project.category.includes(activeCategory)
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-900/50 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
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
