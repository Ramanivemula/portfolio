import React from "react";
import resume from '../assets/FullStack_Ramani.pdf';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-tight">
          Portfolio<span className="text-cyan-400">.</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-slate-200 text-sm">
          <li>
            <a href="#Hero" className="hover:text-cyan-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-cyan-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </li>
        </ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
