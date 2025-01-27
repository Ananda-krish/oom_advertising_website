import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/ParticlesBackground';
import ComputersCanvas from '../components/Computers';
import EarthCanvas from '../components/Earth';


const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
      
      gsap.from('.hero-image', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Bottom Layer: Particles */}
      <ParticlesComponent id="hero-particles" />
      
      {/* Second Layer: Earth Background */}
      <div className="absolute inset-0 z-10">
        <EarthCanvas />
      </div>
      
      {/* Top Layer: Content and Computer */}
      <div className="absolute inset-0 z-20 bg-black/40">
        <div className="container mx-auto px-4 grid md:grid-cols-2 h-full items-center">
          {/* Left Column - Text Content */}
          <div className="text-white text-left z-30">
            <h1 className="mb-6 text-5xl font-bold hero-text md:text-6xl">
              Transforming Urban Landscapes
            </h1>
            <p className="mb-8 text-xl hero-text md:text-2xl">
              Creating impactful outdoor advertising experiences that capture attention and drive results
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-black transition-colors bg-white rounded-full hero-text hover:bg-gray-200"
            >
              Explore Our Work
            </motion.button>
          </div>

          {/* Right Column - 3D Computer Scene */}
          <div className="h-[500px] z-30">
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;