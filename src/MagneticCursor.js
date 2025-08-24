import React, { useEffect, useRef } from "react";

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let dotX = 0;
    let dotY = 0;

    const animate = () => {
      // Smooth cursor outline movement
      outlineX += (mouseX - outlineX) * 0.1;
      outlineY += (mouseY - outlineY) * 0.1;

      // Faster cursor dot movement
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      // Apply transforms
      cursorOutline.style.transform = `translate(${outlineX - 20}px, ${
        outlineY - 20
      }px)`;
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    // Magnetic effect for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".interactive")
      ) {
        cursorOutline.style.transform = `translate(${outlineX - 20}px, ${
          outlineY - 20
        }px) scale(1.5)`;
        cursorOutline.style.background = "rgba(255, 255, 255, 0.2)";
        cursorOutline.style.border = "2px solid rgba(255, 255, 255, 0.6)";
        cursorOutline.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.4)";
      }
    };

    const handleMouseOut = () => {
      cursorOutline.style.transform = `translate(${outlineX - 20}px, ${
        outlineY - 20
      }px) scale(1)`;
      cursorOutline.style.background = "rgba(255, 255, 255, 0.1)";
      cursorOutline.style.border = "2px solid rgba(255, 255, 255, 0.3)";
      cursorOutline.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.2)";
    };

    // Event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add magnetic effect to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], .interactive'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    // Start animation
    animate();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
    >
      {/* Cursor outline (white glow blob) */}
      <div
        ref={cursorOutlineRef}
        className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-sm transition-all duration-300 ease-out"
        style={{
          position: "fixed",
          pointerEvents: "none",
          mixBlendMode: "normal",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Cursor dot (inner white dot) */}
      <div
        ref={cursorDotRef}
        className="w-2 h-2 rounded-full bg-white transition-all duration-200 ease-out"
        style={{
          position: "fixed",
          pointerEvents: "none",
          mixBlendMode: "normal",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
        }}
      />
    </div>
  );
};

export default MagneticCursor;
