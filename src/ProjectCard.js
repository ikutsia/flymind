import React from "react";

const ProjectCard = ({ icon, title, description, tags }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full flex flex-col interactive">
      {/* Icon */}
      <div className="text-3xl mb-4 flex-shrink-0">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-3 flex-shrink-0 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/70 text-sm mb-4 flex-grow line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      {tags && (
        <div className="flex flex-wrap gap-2 flex-shrink-0">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80">
              +{tags.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
