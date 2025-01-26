import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { slideIn } from "../utils/motion";
import EarthCanvas from "../components/Earth";



gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
    <div ref={heroRef}>
      {/* Particles Background */}
     

      {/* Earth Canvas Section */}
      <section className="relative h-screen">
        <EarthCanvas />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative max-w-4xl px-4 mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold hero-text md:text-7xl">
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
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae',
              'https://images.unsplash.com/photo-1587614297882-0954399bf8e8',
              'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={`${image}?auto=format&fit=crop&q=80`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold">Project Title</h3>
                    <p className="text-gray-300">Location • 2024</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;