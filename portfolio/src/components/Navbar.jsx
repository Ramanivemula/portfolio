import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">Ramani Vemula</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#about" className="hover:text-indigo-500">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        <li>
          <a 
            href="/FullStack_Ramani Vemula.pdf" 
            target="_blank" 
            className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
