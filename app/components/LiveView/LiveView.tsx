"use client";
import React, { useState, useEffect } from 'react';

const LiveViews: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [visitCount, setVisitCount] = useState(10);
  const [isRandomCounting, setIsRandomCounting] = useState(true);

  useEffect(() => {
    // Function to play sound
    const playSound = () => {
      const audio = new Audio('/audio/alert.mp3'); // Path to your sound file
      audio.play();
    };
    

    let initialCount = 10;
    const storedCount = localStorage.getItem('visitCount');

    if (storedCount) {
      initialCount = parseInt(storedCount, 10) + 1;
    } else {
      initialCount = Math.floor(Math.random() * 250) + 15;
    }

    setVisitCount(initialCount);
    localStorage.setItem('visitCount', initialCount.toString());

    
    playSound(); // Play sound when component mounts
    // Random counting for 3 seconds
    const interval = setInterval(() => {
      setVisitCount((prevCount) => prevCount + Math.floor(Math.random() * 10));
    }, 100);

    
    // Show target random number after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setVisitCount(initialCount);
      setIsRandomCounting(false);
    }, 3000);

    

    // Hide the component after 7 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-lightgrey text-black p-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
      <span className="text-sm font-medium">
        {isRandomCounting ? `${visitCount} visits...` : `${visitCount} visits in the past 12 hours`}
      </span>
      <button
        onClick={() => setIsVisible(false)}
        className="text-black hover:text-gray-200 focus:outline-none"
        aria-label="Close alert"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default LiveViews;
