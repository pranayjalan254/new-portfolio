import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "education"
  );

  const education = [
    {
      year: "2022-2026",
      title: "Bachelor of Engineering in Electronics and Instrumentation",
      institution: "BITS Pilani, Pilani Campus",
      description:
        "Internet Of Things, Data Structures and Algorithms, Database Management, Microprocessors, Microelectronic Circuits, Analog and Digital VLSI Design, Control Systems",
    },
    {
      year: "2020-2022",
      title: "High School",
      institution: "Vidyanidhi Jr. College of Science",
      description: "Science, Mathematics, Physics, Electronics",
    },
  ];

  const experience = [
    {
      year: "May 2024 - July 2024",
      title: "Full Stack Developer Intern",
      company: "Pacify Medical Technologies Pvt Ltd",
      description:
        "Developed a ReactJS web app interface to process wound images and calculate burn areas, integrating a pre-trained Mask RCNN model with a Flask backend on Google Cloud.",
    },
    {
      year: "May 2024 - Present",
      title: "Design and Partnerships Lead",
      company: "Bits Blockchain Club",
      description:
        "Established a website for the club which will improve the engagement and participant registrations in upcoming events",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Journey
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12 space-x-4">
            {["education", "experience"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "education" | "experience")}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gray-900/50 text-gray-400 hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {tab === "education" ? (
                    <GraduationCap size={20} />
                  ) : (
                    <Briefcase size={20} />
                  )}
                  <span className="capitalize">{tab}</span>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {(activeTab === "education" ? education : experience).map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 relative pl-8 border-l-2 border-purple-500"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-semibold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      <p className="text-gray-400 mt-1">
                        {activeTab === "education"
                          ? (item as { institution: string }).institution
                          : (item as { company: string }).company}
                      </p>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
