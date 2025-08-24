import React from "react";

const FireEffect = () => {
  // Create a single fire grouping with 5-7 overlapping triangles and rising flakes
  const createFireGrouping = (position, delay = 0) => {
    return (
      <div
        key={`grouping-${position}`}
        className={`absolute bottom-0 left-[${position}%] transform -translate-x-1/2`}
        style={{ bottom: "0px", left: `calc(${position}% + 20px)` }}
      >
        {/* Main overlapping triangles - 5-7 layers */}
        <div className="relative">
          {/* Layer 1 - Largest */}
          <div
            className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[20px] border-l-transparent border-r-transparent border-b-yellow-300 fire-flicker blur-[0.5px]"
            style={{ animationDelay: `${delay}s` }}
          ></div>

          {/* Layer 2 - Orange */}
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[3.5px] border-r-[3.5px] border-b-[18px] border-l-transparent border-r-transparent border-b-orange-400 fire-flicker blur-[1px]"
            style={{ animationDelay: `${delay + 0.2}s` }}
          ></div>

          {/* Layer 3 - Red */}
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[3px] border-r-[3px] border-b-[16px] border-l-transparent border-r-transparent border-b-red-500 fire-flicker blur-[1.5px]"
            style={{ animationDelay: `${delay + 0.4}s` }}
          ></div>

          {/* Layer 4 - Darker red */}
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[2.5px] border-r-[2.5px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-600 fire-flicker blur-[2px]"
            style={{ animationDelay: `${delay + 0.6}s` }}
          ></div>

          {/* Layer 5 - Bright yellow tip */}
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[2px] border-r-[2px] border-b-[12px] border-l-transparent border-r-transparent border-b-yellow-200 fire-flicker blur-[1px]"
            style={{ animationDelay: `${delay + 0.8}s` }}
          ></div>

          {/* Layer 6 - Orange tip */}
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[1.5px] border-r-[1.5px] border-b-[10px] border-l-transparent border-r-transparent border-b-orange-300 fire-flicker blur-[1.5px]"
            style={{ animationDelay: `${delay + 1.0}s` }}
          ></div>

          {/* Layer 7 - Small bright tip */}
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[1px] border-r-[1px] border-b-[8px] border-l-transparent border-r-transparent border-b-yellow-100 fire-flicker blur-[2px]"
            style={{ animationDelay: `${delay + 1.2}s` }}
          ></div>
        </div>

        {/* Rising fire flakes for this grouping */}
        <div
          className={`absolute bottom-${
            Math.random() * 4 + 2
          } left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-yellow-200 rounded-full spark-float`}
          style={{ animationDelay: `${delay + 0.5}s` }}
        ></div>
        <div
          className={`absolute bottom-${
            Math.random() * 4 + 3
          } left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-orange-300 rounded-full spark-float`}
          style={{ animationDelay: `${delay + 0.8}s` }}
        ></div>
        <div
          className={`absolute bottom-${
            Math.random() * 4 + 4
          } left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-red-400 rounded-full spark-float`}
          style={{ animationDelay: `${delay + 1.1}s` }}
        ></div>
      </div>
    );
  };

  // Generate 23 fire groupings spread evenly across the bottom
  const generateFireGroupings = () => {
    const groupings = [];
    // 23 positions evenly spaced across the card width (every ~4.35%)
    const positions = [
      0, 4.35, 8.7, 13.05, 17.4, 21.75, 26.1, 30.45, 34.8, 39.15, 43.5, 47.85,
      52.2, 56.55, 60.9, 65.25, 69.6, 73.95, 78.3, 82.65, 87, 91.35, 100,
    ];

    positions.forEach((position, index) => {
      const delay = Math.random() * 2; // Random delay for each grouping
      groupings.push(createFireGrouping(position, delay));
    });

    return groupings;
  };

  return (
    <div className="relative w-full h-full flex items-end justify-center">
      {/* Base Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-600/40 via-red-500/20 to-transparent blur-lg"
        style={{ bottom: "0px" }}
      ></div>

      {/* 23 Fire Groupings */}
      <div className="relative w-full" style={{ bottom: "0px" }}>
        {generateFireGroupings()}
      </div>

      {/* Additional Rising Embers */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={`ember-${i}`}
          className={`absolute bottom-${Math.random() * 6 + 2} left-[${
            Math.random() * 100
          }%] w-0.5 h-0.5 bg-${
            ["yellow-200", "orange-300", "red-400", "yellow-100", "orange-200"][
              Math.floor(Math.random() * 5)
            ]
          } rounded-full spark-float`}
          style={{ animationDelay: `${Math.random() * 3}s`, bottom: "0px" }}
        ></div>
      ))}

      {/* Fire Glow with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 via-red-500/25 to-transparent blur-xl fire-glow"></div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 via-orange-500/15 to-transparent blur-2xl fire-glow"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default FireEffect;
