import React, { useState, useEffect, useRef } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0); // State for counter value
  const odometerRef = useRef(null); // Reference to the odometer element

  // Function to format the count with leading zeros based on target length
  const formatCount = (num) => {
    const targetLength = Math.max(2, target.toString().length); // Ensure at least 2 digits
    return num.toString().padStart(targetLength, "0"); // Pad number based on target length
  };

  // Initialize the Odometer on mount
  useEffect(() => {
    if (odometerRef.current) {
      // Create and render an Odometer instance with the initial formatted count
      new Odometer({
        el: odometerRef.current,
        value: formatCount(count), // Set initial formatted value
        format: "(,ddd)", // Format with commas if needed
      }).render();
    }
  }, []); // Run only once on mount

  // Update the Odometer display whenever count changes
  useEffect(() => {
    if (odometerRef.current) {
      // Update the odometer display with the formatted count
      odometerRef.current.innerHTML = formatCount(count);
    }
  }, [count, formatCount]);

  // Automatically increment the counter every second until it reaches the target
  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount <= target) {
            return newCount;
          } else {
            clearInterval(interval); // Stop the interval when count reaches target
            return prevCount;
          }
        });
      }, 1000); // Increase the counter every second (1000ms)

      // Cleanup interval when component unmounts or count reaches target
      return () => clearInterval(interval);
    }
  }, [count, target]); // Re-run the effect when count or target changes

  return (
    <div className="odometer-counter">
      <div className="odometer-container">
        <div ref={odometerRef} className="odometer">
          {formatCount(count)}
        </div>
      </div>
    </div>
  );
};

export default Counter;
