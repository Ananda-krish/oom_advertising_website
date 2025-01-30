import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WorkGallery = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const images = [
    {
      url: 'hording1.jpg',
      title: 'OOZEE',
      category: 'Design'
    },
    {
      url: 'hording2.jpg',
      title: 'AXIS',
      category: 'Branding'
    },
    {
      url: 'hording3.jpg',
      title: 'COCA-COLA',
      category: 'Marketing'
    }
  ];

  const tiltRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = tiltRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = (y - rect.height / 2) / 20;
    const tiltY = -(x - rect.width / 2) / 20;

    tiltRefs.current[index].style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(-20px)`;
  };

  const handleMouseLeave = (index) => {
    tiltRefs.current[index].style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    setHoveredIndex(null);
  };

  console.log(`Mouse Position: ${mousePosition.x}, ${mousePosition.y}`);

  return (
    <div className="bg-white min-h-screen p-20">
      {/* Header Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-black text-7xl font-bold">WORK</h1>
          <span className="text-gray-400">OM ADVERTISEMENTS</span>
        </div>
        <p className="text-gray-400 text-lg">
          View the full case study of our recent featured and awesome works that we created for our clients.
          <span className="ml-2 inline-block w-4 h-4 bg-green-400 rounded-full" />
        </p>
        <div className="mt-4 flex justify-between items-center">
          <div className="h-px bg-gray-800 flex-grow" />
          <span className="text-gray-800 ml-4">KNOW MORE</span>
        </div>
      </div>

      {/* Gallery Section */}
      <div 
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Mouse Follower */}
        <motion.div
          className="fixed pointer-events-none z-50 flex items-center justify-center"
          style={{
            width: '30px',
            height: '30px'
          }}
          animate={{
            x: mousePosition.x - 200, // Center the follower
            y: mousePosition.y - 200, // Center the follower
            scale: isHovering ? 1 : 0
          }}
          transition={{ 
            type: "tween",
            duration: 0,
            ease: "linear"
          }}
        >
          <div className="bg-black rounded-full w-full h-full flex items-center justify-center p-8">
            <span className="text-white text-[10px] whitespace-nowrap">See More</span>
          </div>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="p-5 bg-gray-300 rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                ref={(el) => (tiltRefs.current[index] = el)}
                className="relative aspect-square overflow-hidden rounded-lg transition-all duration-300 border-2 border-gray-800"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={image.url}
                  alt={`work-${index}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute top-1/2 right-0 -translate-y-1/2 bg-black text-white p-4 flex flex-col items-end"
                  animate={{
                    x: hoveredIndex === index ? 0 : '100%'
                  }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <span className="text-xl font-bold">{image.title}</span>
                  <span className="text-sm text-gray-400">{image.category}</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkGallery;
