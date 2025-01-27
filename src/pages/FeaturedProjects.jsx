import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const projectImages = [
    'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae',
    'https://images.unsplash.com/photo-1587614297882-0954399bf8e8',
    'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc'
  ];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((image, index) => (
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
  );
};

export default FeaturedProjects;