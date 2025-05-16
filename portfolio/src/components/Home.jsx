import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ramaniImg from "../assets/ramani.png";
import resume from "../assets/FullStack_Ramani.pdf";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-900 px-12 py-24"
    >
      <div className="bg-slate-800 rounded-3xl shadow-2xl p-10 w-full max-w-6xl flex flex-col md:flex-row justify-between h-auto items-center gap-1">
        {/* LEFT SIDE */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-300 font-mono text-sm uppercase tracking-widest h-7">
            Design. Code. Iterate.
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <span className="bg-gradient-to-r from-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Ramani Vemula
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 relative inline-block">
            UI/UX Designer & Frontend Developer
            <span className="block w-20 h-1 bg-cyan-400 mt-1 mx-auto md:mx-0 rounded-full animate-pulse" />
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center md:justify-start text-2xl text-cyan-400 pt-4">
            <a href="https://github.com/Ramanivemula" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="hover:text-white transition transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/ramani-vemula-b80360276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-white transition transform hover:scale-110" />
            </a>
            <a href="mailto:ramani.vemula@mitaoe.ac.in" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope className="hover:text-white transition transform hover:scale-110" />
            </a>
            <a href="https://wa.me/919373004289" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-white transition transform hover:scale-110" />
            </a>
          </div>

          {/* CV Button */}
          <div className="pt-4">
            <a
              href={resume}
              target="_blank"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-full transition transform hover:scale-105 shadow-md"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-tr from-cyan-500 to-indigo-500 p-1 rounded-[30%] shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src={ramaniImg}
              alt="Ramani"
              className="w-72 h-72 object-cover rounded-[30%] shadow-inner"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
