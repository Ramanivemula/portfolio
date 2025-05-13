import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-slate-800 text-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-300 hover:text-white text-xl"
        >
          &times;
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        <h2 className="text-2xl font-bold text-cyan-400 mb-2">
          {project.title}
        </h2>

        <p className="text-slate-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-slate-700 text-cyan-300 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-cyan-400 hover:underline text-sm"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-cyan-400 hover:underline text-sm"
            >
              Live Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
