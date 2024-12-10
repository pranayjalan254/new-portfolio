import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Development",
      description:
        "Passionate about creating clean, efficient code and building user-friendly applications.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description:
        "Love tackling complex challenges and finding innovative solutions.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-[100px] opacity-10" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800/50">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Hi, I’m Pranay Jalan, a blockchain developer with a passion
                  for decentralized technology and cryptography. I'm the member
                  of Superteam India and building DocVault on Solana with a
                  $2000 grant. I also contribute to the BITS Blockchain Club
                  through hackathons, workshops, and projects.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Beyond blockchain, I enjoy working on IoT projects, combining
                  hardware and software to create impactful solutions. In my
                  free time, I love playing table tennis or brainstorming new
                  ideas to tackle real-world problems.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-r ${card.gradient} p-[1px] rounded-2xl`}
                >
                  <div className="bg-black p-6 rounded-2xl h-full">
                    <div className="flex items-center gap-4">
                      <div className="text-white">{card.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-400">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
