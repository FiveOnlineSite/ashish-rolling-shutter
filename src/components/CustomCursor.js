import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // Track hover state for dot size

  // Update cursor position
  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Update circle position to lag behind
  useEffect(() => {
    const lagFactor = 0.1; // Adjust for how fast the circle moves behind the dot

    const interval = setInterval(() => {
      setCirclePosition((prev) => ({
        x: prev.x + (position.x - prev.x) * lagFactor,
        y: prev.y + (position.y - prev.y) * lagFactor,
      }));
    }, 10); // Update every 10ms for smooth transition

    return () => clearInterval(interval); // Clean up on component unmount
  }, [position]);

  // Show cursor
  const showCursor = () => setIsVisible(true);

  // Hide cursor
  const hideCursor = () => setIsVisible(false);

  // Hover events for anchor tags
  const handleMouseEnter = () => setIsHovered(true); // Mouse enter on anchor
  const handleMouseLeave = () => setIsHovered(false); // Mouse leave from anchor

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);

    // Event listeners for anchor tags hover effect
    const anchorTags = document.querySelectorAll("a");
    anchorTags.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleMouseEnter);
      anchor.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);

      // Cleanup hover event listeners
      anchorTags.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleMouseEnter);
        anchor.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Run only once

  return (
    <>
      <div
        className={`custom-cursor-dot ${isVisible ? "visible" : "hidden"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "20px" : "10px", // Make dot bigger on hover
          height: isHovered ? "20px" : "10px", // Make dot bigger on hover
        }}
      />
      <div
        className={`custom-cursor-circle ${isVisible ? "visible" : "hidden"}`}
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
