import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      // Move cursor and follower with optimized durations
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05, // Smaller duration for smoother movement
        ease: 'none', // Remove easing to minimize lag
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, // Keep slight delay for follower
        ease: 'power1.out', // Smooth and lightweight easing
      });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Small Cursor */}
      <div
        ref={cursorRef}
        className="cursor w-4 h-4 bg-white rounded-full fixed pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Larger Cursor Follower */}
      <div
        ref={followerRef}
        className="cursor-follower w-8 h-8 border-2 border-white rounded-full fixed pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default MouseFollower;
