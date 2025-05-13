import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ramaniImg from "../assets/ramani.png"; // make sure this exists
import resume from '../assets/FullStack_Ramani.pdf';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-2">
      <div className="bg-slate-800 rounded-3xl shadow-xl p-10 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-slate-400 text-lg">Hello, It's Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Ramani Vemula
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
            And I'm a Full Stack Developer
          </h2>
          <p className="text-slate-400">
            Passionate about building scalable and responsive web apps using the MERN stack. Always exploring the next great tech.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 justify-center md:justify-start text-2xl text-cyan-400">
            <a href="https://github.com/Ramanivemula" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/ramani-vemula-b80360276" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="mailto:ramani.vemula@mitaoe.ac.in" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="hover:text-white transition" />
            </a>
            <a href="https://wa.me/919373004289" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-white transition" />
            </a>
          </div>

          {/* CV Button */}
          <div className="pt-4">
            <a
              href={resume}
              target="_blank"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-5 rounded-full transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <div className="bg-cyan-500 p-1 rounded-[30%] shadow-lg transform hover:scale-105 transition">
            <img
              src={ramaniImg}
              alt="Ramani"
              className="w-72 h-72 object-cover rounded-[30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
