import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Parallax = ({ type }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [currentImageIndices, setCurrentImageIndices] = useState([]);

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

  // Initialize image indices
  useEffect(() => {
    setCurrentImageIndices(cardLayouts.map((_, index) => index % images.length));
  }, [cardLayouts.length, images.length]);

  // Handle auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prevIndices => 
        prevIndices.map(index => (index + 1) % images.length)
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine title based on type
  const title = type === 'services' ? 'What We Do' : type === 'portfolio' ? 'What We Did' : '';
  const titleColor = type === 'services' ? '#FF4500' : type === 'portfolio' ? '#0000FF' : '#000000';

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                key={currentImageIndices[index]}
                src={images[currentImageIndices[index] || 0]}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <h1 className="text-6xl font-bold drop-shadow-2xl" style={{ color: titleColor }}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Parallax;