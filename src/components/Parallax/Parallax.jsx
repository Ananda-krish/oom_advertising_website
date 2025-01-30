import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [currentImageIndices, setCurrentImageIndices] = useState([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const images = [
    '/hording1.jpg',
    '/hording2.jpg',
    '/hording3.jpg',
    '/hording2.jpg',
    '/hording5.jpg',
    '/hording3.jpg',
    '/hording3.jpg',
    '/hording1.jpg',
    '/hording6.jpg',
    '/hording6.jpg',
    '/hording1.jpg',
    '/hording3.jpg'
  ];

  const cardLayouts = windowWidth > 1024 ? [
    { width: '25%', height: '25%', x: '0%', y: '0%' },
    { width: '25%', height: '25%', x: '25%', y: '0%' },
    { width: '25%', height: '25%', x: '50%', y: '0%' },
    { width: '25%', height: '25%', x: '75%', y: '0%' },
    { width: '33.33%', height: '25%', x: '0%', y: '25%' },
    { width: '33.33%', height: '25%', x: '33.33%', y: '25%' },
    { width: '33.33%', height: '25%', x: '66.66%', y: '25%' },
    { width: '50%', height: '25%', x: '0%', y: '50%' },
    { width: '50%', height: '25%', x: '50%', y: '50%' },
    { width: '25%', height: '25%', x: '0%', y: '75%' },
    { width: '25%', height: '25%', x: '25%', y: '75%' },
    { width: '50%', height: '25%', x: '50%', y: '75%' }
  ] : [
    { width: '50%', height: '33.33%', x: '0%', y: '0%' },
    { width: '50%', height: '33.33%', x: '50%', y: '0%' },
    { width: '50%', height: '33.33%', x: '0%', y: '33.33%' },
    { width: '50%', height: '33.33%', x: '50%', y: '33.33%' },
    { width: '100%', height: '33.33%', x: '0%', y: '66.66%' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateImageIndices = () => {
      const scrollProgress = scrollYProgress.get();
      const shift = Math.floor(scrollProgress * images.length);
      const newIndices = cardLayouts.map((_, index) => 
        (index + shift) % images.length
      );
      setCurrentImageIndices(newIndices);
    };

    const unsubscribe = scrollYProgress.on('change', updateImageIndices);
    updateImageIndices(); // Initial update

    return () => unsubscribe();
  }, [scrollYProgress, images.length, cardLayouts.length]);

  // Determine title based on type
  const title = type === 'services' ? 'What We Do' : type === 'portfolio' ? 'What We Did' : '';
  const titleColor = type === 'services' ? '#FF4500' : type === 'portfolio' ? '#0000FF' : '#000000'; // Change colors as needed
  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {cardLayouts.map((layout, index) => (
          <motion.div
            key={index}
            className="absolute overflow-hidden"
            style={{
              width: layout.width,
              height: layout.height,
              left: layout.x,
              top: layout.y,
            }}
          >
            <motion.div
              className="w-full h-full relative"
              initial={false}
              
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <img
                src={images[currentImageIndices[index] || 0]}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-50"
        style={{ scale: textScale, opacity: textOpacity }}
      >
        <h1 className="text-6xl font-bold drop-shadow-2xl" style={{  color: titleColor }}>
          {title}
        </h1>
      </motion.div>
    </div>
  );
};

export default Parallax;
