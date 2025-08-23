import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  console.log(
    "SmoothScroll component rendered with",
    children?.length || 0,
    "children"
  );

  useEffect(() => {
    console.log("SmoothScroll useEffect STARTED");

    let scrollY = 0;
    let targetY = 0;
    const ease = 0.08;
    let animationId;

    const updateScroll = () => {
      targetY = window.scrollY;

      // Find the closest section to snap to
      const container = scrollRef.current;
      if (container && container.children.length > 0) {
        const children = container.children;
        const windowWidth = window.innerWidth;
        let currentSection = 0;
        let accumulatedWidth = 0;

        // Find which section we're closest to
        for (let i = 0; i < children.length; i++) {
          const sectionWidth = children[i].offsetWidth;
          const sectionCenter = accumulatedWidth + sectionWidth / 2;
          const scrollCenter = targetY + windowWidth / 2;

          if (Math.abs(scrollCenter - sectionCenter) < sectionWidth / 2) {
            currentSection = i;
            break;
          }

          accumulatedWidth += sectionWidth;
        }

        // Calculate the target scroll position for the current section
        let targetScroll = 0;
        for (let i = 0; i < currentSection; i++) {
          targetScroll += children[i].offsetWidth;
        }

        // Debug logging
        console.log("Section info:", {
          currentSection,
          totalSections: children.length,
          targetScroll,
          maxPossibleScroll: container.scrollWidth - windowWidth,
          containerWidth: container.scrollWidth,
          windowWidth,
        });

        // Apply smooth easing to snap to the target position
        scrollY += (targetScroll - scrollY) * ease;

        // Ensure we don't exceed the maximum scrollable width
        const maxScroll = container.scrollWidth - windowWidth;
        if (scrollY > maxScroll) {
          scrollY = maxScroll;
        }
      } else {
        scrollY += (targetY - scrollY) * ease;
      }

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${scrollY}px)`;
      }

      animationId = requestAnimationFrame(updateScroll);
    };

    console.log(
      "Window width:",
      window.innerWidth,
      "Desktop check:",
      window.innerWidth > 768
    );

    // Only enable on desktop
    if (window.innerWidth > 768) {
      console.log("Desktop mode - initializing horizontal scroll");
      const initScroll = () => {
        const container = scrollRef.current;
        if (container && container.children.length > 0) {
          // Calculate total width
          const totalWidth = container.scrollWidth;

          console.log("Initialization:", {
            totalWidth,
            childrenCount: container.children.length,
            bodyHeight: document.body.style.height,
          });

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

    console.log("SmoothScroll useEffect completed");
  }, []);

  console.log("SmoothScroll render - children count:", children?.length || 0);

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
        scrollSnapType: "x mandatory",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
