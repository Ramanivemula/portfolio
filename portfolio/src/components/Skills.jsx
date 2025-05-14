import React from "react";

const skillGroups = {
  "Frontend": ["React.js", "SvelteKit", "Redux Toolkit", "Tailwind CSS", "Material UI", "Framer Motion"],
  "Backend": ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
  "Languages": ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code", "Figma"]
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 text-white py-16 px-4 md:px-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillGroups).map(([category, skills], index) => (
            <div
              key={index}
              className="bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-700 text-cyan-200 text-sm px-3 py-1 rounded-full shadow-sm hover:bg-cyan-500 hover:text-white transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
