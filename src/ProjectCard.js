import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

// Helper function to determine language from filename
const getLanguageFromFileName = (fileName) => {
  const extension = fileName.split(".").pop().toLowerCase();
  const languageMap = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    py: "python",
    html: "html",
    css: "css",
    scss: "scss",
    json: "json",
    md: "markdown",
  };
  return languageMap[extension] || "javascript";
};

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
      className="group relative aspect-[4/3]"
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
          <div className="relative w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl overflow-hidden border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 interactive magnetic-pull p-6">
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon */}
              <div className="text-4xl mb-4">🚀</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* View text */}
              <p className="text-sm text-gray-400">view</p>
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
              <SyntaxHighlighter
                language={getLanguageFromFileName(project.fileName)}
                style={tomorrow}
                customStyle={{
                  margin: 0,
                  fontSize: "10px",
                  background: "transparent",
                  fontFamily: "monospace",
                }}
                showLineNumbers={false}
                wrapLines={true}
              >
                {project.codeSnippet}
              </SyntaxHighlighter>
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
