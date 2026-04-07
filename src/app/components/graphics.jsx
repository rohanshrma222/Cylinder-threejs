'use client'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Handle mouse movement
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  useEffect(() => {
    setIsMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate eye movement
  const calculateEyeMovement = (eyeX, eyeY) => {
    if (!isMounted) return {};
    const dx = mousePosition.x - eyeX;
    const dy = mousePosition.y - eyeY;
    const angle = Math.atan2(dy, dx); // Angle to rotate
    const distance = Math.min(20, Math.sqrt(dx * dx + dy * dy)); // Limit max movement distance
    return {
      transform: `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`
    };
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
      {/* Face */}
      <div className="relative">
        <div className="bg-[#db53c5] rounded-full h-[500px] w-[500px] flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.3)] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#557aa7] opacity-50 rounded-full"></div> {/* Glossy highlight */}
          
          <div className="flex space-x-24 relative">
            {/* Left Eye */}
            <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] relative">
              <div
                className="bg-black rounded-full h-20 w-20 absolute"
                style={calculateEyeMovement(windowSize.width / 2 - 80, windowSize.height / 2)}
              >
                <div className="bg-white rounded-full h-4 w-4 absolute top-[5px] left-[5px]"></div> {/* White dot inside the black part */}
              </div>
            </div>
            {/* Right Eye */}
            <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] relative">
              <div
                className="bg-black rounded-full h-20 w-20 absolute"
                style={calculateEyeMovement(windowSize.width / 2 + 80, windowSize.height / 2)}
              >
                <div className="bg-white rounded-full h-4 w-4 absolute top-[5px] left-[5px]"></div> {/* White dot inside the black part */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
