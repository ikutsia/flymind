import React, { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Flip to back immediately
    setIsFlipped(true);

    // After 1 second, flip back to front
    setTimeout(() => {
      setIsFlipped(false);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to front when mouse leaves
    setIsFlipped(false);
  };

  return (
    <div
      className="group relative aspect-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Flip Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.7s ease-in-out",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side - Live Preview */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl overflow-hidden border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 interactive magnetic-pull">
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center space-x-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Hover Hint */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full border border-purple-400/30 backdrop-blur-sm">
              Hover to view code
            </div>
          </div>
        </div>

        {/* Back Side - Code Snippet */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-purple-500/30">
            {/* Code Header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400">{project.fileName}</span>
            </div>

            {/* Code Content */}
            <div className="absolute top-8 left-0 right-0 bottom-0 p-4 overflow-auto">
              <pre className="text-xs text-gray-300 font-mono leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>

            {/* Hover Hint */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-cyan-600/30 text-cyan-300 text-xs rounded-full border border-cyan-400/30 backdrop-blur-sm">
              Hover to view demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
