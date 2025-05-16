import React from "react";
import { motion } from "framer-motion";

const skillGroups = {
  Frontend: [
    "React.js",
    "Tailwind CSS",
    "Material UI",
    "JavaScript"
  ],
  Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT","MySQL"],
  Languages: ["HTML5", "CSS3", "JavaScript","JAVA"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Canva"],
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-16 px-4 md:px-10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(skillGroups).map(([category, skills], index) => (
            <motion.div
              key={index}
              className="bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    title={`Skill: ${skill}`}
                    className="bg-slate-700 text-cyan-200 text-sm px-3 py-1 rounded-full shadow-sm 
                               hover:bg-cyan-500 hover:text-white transition duration-200 
                               hover:shadow-cyan-400 hover:brightness-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
