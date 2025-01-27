import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UpcomingSites = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');

    parallaxElements.forEach((element) => {
      gsap.to(element, {
        backgroundPosition: `50% -50%`, // Corrected parallax effect syntax
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  const upcomingSites = [
    {
      id: 1,
      location: 'Times Square District',
      city: 'New York City',
      image:
        'https://images.unsplash.com/photo-1616832880334-b1004d9808da?auto=format&fit=crop&q=80',
      specs: {
        size: '40ft x 60ft',
        type: 'Digital LED Billboard',
        traffic: '1.5M daily views',
      },
      availableFrom: 'Q1 2024',
    },
    {
      id: 2,
      location: 'Financial District',
      city: 'London',
      image:
        'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80',
      specs: {
        size: '30ft x 50ft',
        type: 'Smart Digital Display',
        traffic: '900K daily views',
      },
      availableFrom: 'Q2 2024',
    },
    {
      id: 3,
      location: 'Shibuya Crossing',
      city: 'Tokyo',
      image:
        'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80',
      specs: {
        size: '45ft x 70ft',
        type: 'Interactive LED Wall',
        traffic: '2M daily views',
      },
      availableFrom: 'Q3 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] overflow-hidden parallax-bg" // Keeping the same height
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80)',
          backgroundSize: '42%', // Zoom out the image
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold text-white text-center"
          >
            Upcoming Sites
          </motion.h1>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-8">
          {upcomingSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group w-full"
            >
              <div className="relative h-[600px] overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
                <img
                  src={site.image}
                  alt={`Billboard at ${site.location}, ${site.city}`} // Added more descriptive alt text
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    className="text-4xl font-bold mb-4 text-white group-hover:text-blue-500 transition-all duration-300"
                  >
                    {site.location}
                  </motion.h3>
                  <p className="text-2xl text-gray-300 mb-6">{site.city}</p>
                  <div className="space-y-2 text-lg text-gray-300">
                    <p>
                      <span className="font-semibold text-white">Size:</span> {site.specs.size}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Type:</span> {site.specs.type}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Traffic:</span>{' '}
                      {site.specs.traffic}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 15px rgba(173, 216, 230, 0.8)',
                    }}
                    className="mt-4 inline-block bg-blue-400 text-white px-6 py-3 rounded-full text-xl font-semibold group-hover:bg-blue-500 transition-all duration-300"
                  >
                    Available from {site.availableFrom}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSites;
