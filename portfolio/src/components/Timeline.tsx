import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { education } from "../data/Education";
import { experience } from "../data/Experience";
import { hackathons } from "../data/Hackathons";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<
    "education" | "experience" | "hackathons"
  >("education");

  return (
    <section id="timeline" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          My Journey
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-3 mb-12">
            {["education", "experience", "hackathons"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setActiveTab(tab as "education" | "experience" | "hackathons")
                }
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {tab === "education" ? (
                    <GraduationCap size={16} />
                  ) : (
                    <Briefcase size={16} />
                  )}
                  <span className="capitalize">{tab}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Timeline Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative pl-8" // Adjusted padding
            >
              {/* Gradient line for timeline - adjusted positioning */}
              <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />

              {(activeTab === "education"
                ? education
                : activeTab === "experience"
                ? experience
                : hackathons
              ).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-8 relative"
                >
                  {/* Timeline dot with gradient - adjusted positioning */}
                  <div className="absolute -left-[35px] top-[18px] p-[1px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <div className="w-4 h-4 bg-black rounded-full" />
                  </div>

                  {/* Card with gradient border */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-2xl">
                    <div className="bg-black p-6 rounded-2xl">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {activeTab === "education"
                          ? (item as { institution: string }).institution
                          : activeTab === "experience"
                          ? (item as { company: string }).company
                          : (item as { event: string }).event}
                      </p>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
