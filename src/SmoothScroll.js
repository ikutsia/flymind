import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollY = 0;
    let targetY = 0;
    const ease = 0.08;
    let animationId;

    const updateScroll = () => {
      targetY = window.scrollY;
      scrollY += (targetY - scrollY) * ease;

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${scrollY}px)`;
      }

      animationId = requestAnimationFrame(updateScroll);
    };

    // Only enable on desktop
    if (window.innerWidth > 768) {
      const initScroll = () => {
        const container = scrollRef.current;
        if (container && container.children.length > 0) {
          // Calculate total width
          const totalWidth = container.scrollWidth;

          // Set body height to enable scrolling
          document.body.style.height = `${totalWidth}px`;
          document.body.style.overflow = "auto";

          updateScroll();
        } else {
          // Retry if container not ready
          setTimeout(initScroll, 50);
        }
      };

      // Initialize after a short delay
      setTimeout(initScroll, 100);

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
      };
    } else {
      // For mobile, ensure content is visible without horizontal scrolling
      console.log("Mobile detected, using normal vertical scrolling");
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="smooth-scroll-container"
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "max-content",
        height: "100vh",
        willChange: "transform",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
