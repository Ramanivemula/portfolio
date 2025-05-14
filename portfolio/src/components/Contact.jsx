import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-16 px-4 md:px-10 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Contact Me</h2>
        <p className="text-slate-300 text-md mb-8">
          Have a project in mind or just want to say hi? Let’s connect!
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center gap-6 text-cyan-400 text-3xl mb-10">
          <a
            href="https://github.com/Ramanivemula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ramani-vemula-b80360276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ramani.vemula@mitaoe.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/919373004289"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Resume Download */}
        <div>
          <a
            href="/FullStack_Ramani Vemula (2).pdf"
            target="_blank"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium shadow transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
