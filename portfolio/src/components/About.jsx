import React from "react";
// Uncomment below if you want to add framer-motion animations
// import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 w-full text-white pt-16 pb-20 px-4 md:px-12 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:h-[360px]">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center h-full pr-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <h3 className="text-cyan-300 text-lg font-medium mb-4">
            UI/UX Designer & Frontend Developer
          </h3>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 text-slate-300 space-y-5 text-base leading-relaxed text-left max-w-lg">
          <p>
            I'm an aspiring <strong>UI/UX designer</strong> and <strong>frontend developer</strong> skilled in{" "}
            <strong>Figma</strong>, <strong>Canva</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. I love designing
            clean, user-friendly interfaces and building responsive, interactive
            web applications.
          </p>
          <p>
            I create <strong>wireframes</strong>, <strong>prototypes</strong>, and engaging layouts with tools
            like <strong>Figma</strong> and <strong>Canva</strong>, and develop scalable interfaces using modern
            web frameworks. I'm always eager to learn, iterate, and grow through
            collaboration and feedback.
          </p>

          <div className="pt-4">
            <a
              href="/FullStack_Ramani.pdf"
              target="_blank"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              rel="noopener noreferrer"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
