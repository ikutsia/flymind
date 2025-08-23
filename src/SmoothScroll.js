import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollY = 0;
    let targetY = 0;
    let ease = 0.08;

    const updateScroll = () => {
      targetY = window.scrollY;
      scrollY += (targetY - scrollY) * ease;

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${scrollY}px)`;
      }

      requestAnimationFrame(updateScroll);
    };

    // Only apply smooth scroll on desktop
    if (window.innerWidth > 768) {
      updateScroll();

      // Prevent default scroll
      document.body.style.height = `${document.body.scrollHeight}px`;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="smooth-scroll-container">
      {children}
    </div>
  );
};

export default SmoothScroll;
