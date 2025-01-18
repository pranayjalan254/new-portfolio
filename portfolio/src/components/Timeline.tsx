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
    <section
      id="timeline"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white"
        >
          My Journey
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Tab Buttons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12">
            {["education", "experience", "hackathons"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab as "education" | "experience" | "hackathons")
                }
                className={`text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gray-900/50 text-gray-400 hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Icons visible only on larger screens */}
                  {tab === "education" ? (
                    <GraduationCap
                      size={16}
                      className="hidden sm:inline-flex"
                    />
                  ) : (
                    <Briefcase size={16} className="hidden sm:inline-flex" />
                  )}
                  <span className="capitalize">{tab}</span>
                </div>
              </button>
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
            >
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
                  className="mb-8 relative pl-6 sm:pl-8 border-l-2 border-purple-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mt-2">
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
