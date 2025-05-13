// About.jsx
import React from "react";
// import { motion } from "framer-motion"; // Uncomment if using Framer Motion

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 w-full text-white pt-8 pb-12 px-4 md:px-10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-10 md:h-[340px]">
        {/* Left Side - Heading (Vertically Centered) */}
        <div className="md:w-1/2 text-left flex flex-col justify-center h-full">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-1">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <h3 className="text-cyan-300 text-lg font-medium">
            Full Stack Developer
          </h3>
        </div>

        {/* Right Side - Description + Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        > */}
        <div className="md:w-1/2 text-slate-300 space-y-5 text-base leading-relaxed text-left max-w-md">
          <p>
            I'm a full stack web developer with a passion for crafting clean,
            scalable web applications using the MERN stack.
          </p>
          <p>
            I love turning ideas into reality through beautiful UI/UX and
            robust backend development. I collaborate in agile teams and write
            clean, maintainable code.
          </p>

          <div className="pt-2">
            <a
              href="/FullStack_Ramani Vemula (2).pdf"
              target="_blank"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              Know More
            </a>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
}
