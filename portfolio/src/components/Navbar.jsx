import React from "react";
import resume from "../assets/FullStack_Ramani.pdf";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-tight">
          <span className="text-cyan-400">R.</span>Portfolio
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-slate-200 text-sm">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-cyan-400 transition">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
