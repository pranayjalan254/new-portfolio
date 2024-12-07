import { Code2, Database, Globe, Server } from "lucide-react";
export const skills = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "Solidity"],
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose", "Firebase"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "Tools",
    icon: Code2,
    items: ["Github", "Vercel", "GCP"],
    color: "from-purple-500 to-pink-500",
  },
];
