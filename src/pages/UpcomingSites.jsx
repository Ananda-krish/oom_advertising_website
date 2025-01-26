import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UpcomingSites = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    parallaxElements.forEach(element => {
      gsap.to(element, {
        backgroundPosition: `50% ${-50}%`,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, []);

  const upcomingSites = [
    {
      id: 1,
      location: "Times Square District",
      city: "New York City",
      image: "https://images.unsplash.com/photo-1616832880334-b1004d9808da?auto=format&fit=crop&q=80",
      specs: {
        size: "40ft x 60ft",
        type: "Digital LED Billboard",
        traffic: "1.5M daily views"
      },
      availableFrom: "Q1 2024"
    },
    {
      id: 2,
      location: "Financial District",
      city: "London",
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80",
      specs: {
        size: "30ft x 50ft",
        type: "Smart Digital Display",
        traffic: "900K daily views"
      },
      availableFrom: "Q2 2024"
    },
    {
      id: 3,
      location: "Shibuya Crossing",
      city: "Tokyo",
      image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80",
      specs: {
        size: "45ft x 70ft",
        type: "Interactive LED Wall",
        traffic: "2M daily views"
      },
      availableFrom: "Q3 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden parallax-bg"
           style={{
             backgroundImage: 'url(https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80)',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white text-center"
          >
            Upcoming Sites
          </motion.h1>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <img 
                  src={site.image} 
                  alt={site.location}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{site.location}</h3>
                  <p className="text-gray-300 mb-4">{site.city}</p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Size: {site.specs.size}</p>
                    <p>Type: {site.specs.type}</p>
                    <p>Traffic: {site.specs.traffic}</p>
                  </div>
                  <div className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Available from {site.availableFrom}
                  </div>
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