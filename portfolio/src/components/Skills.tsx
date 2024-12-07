import { motion } from "framer-motion";
import { skills } from "../data/Skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-gradient-to-r ${skill.color} p-[1px] rounded-2xl h-full`}
                >
                  <div className="bg-black p-6 rounded-2xl h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-gradient-${skill.color}`}>
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.span
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                          className={`px-3 py-1 bg-gradient-to-r ${skill.color} bg-opacity-10 rounded-full text-sm text-white`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
