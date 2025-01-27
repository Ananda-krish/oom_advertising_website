import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
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

  const products = [
    {
      id: 1,
      title: "Digital Billboards",
      description: "High-impact LED displays with dynamic content capabilities",
      image: "https://media.istockphoto.com/id/525568423/photo/london-piccadilly-during-night.jpg?s=2048x2048&w=is&k=20&c=b9MmnnA4Jv7-V0TSKHlkRAP4KD-0Ra4D7k-M7nqMeWY=",
      features: ["4K Resolution", "Weather-resistant", "24/7 Operation"]
    },
    {
      id: 2,
      title: "Transit Shelters",
      description: "Premium advertising spaces in high-traffic urban locations",
      image: "https://cdn.pixabay.com/photo/2018/11/04/16/28/london-3794348_640.jpg",
      features: ["Backlit Displays", "Weather Protection", "Urban Integration"]
    },
    {
      id: 3,
      title: "Smart Kiosks",
      description: "Interactive digital displays with real-time content updates",
      image: "https://cdn.pixabay.com/photo/2019/10/25/09/09/city-4576421_640.jpg",
      features: ["Touch Screen", "Wi-Fi Hotspot", "Analytics Dashboard"]
    },
    {
      id: 4,
      title: "Interactive Digital Walls",
      description: "Engaging, touch-enabled displays for public spaces",
      image: "https://cdn.pixabay.com/photo/2013/10/01/02/59/advertising-188993_640.jpg",
      features: ["Touch Interactivity", "Customizable Content", "Real-Time Updates"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden parallax-bg"
           style={{
             backgroundImage: 'url(https://images.unsplash.com/photo-1616832880334-b1004d9808da?auto=format&fit=crop&q=80)',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white text-center"
          >
            Our Products
          </motion.h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ${
                index === 1 || index === 3 ? 'md:flex-row-reverse' : '' // Apply the reverse layout for the 2nd and 4th cards
              }`}
            >
              <div className="md:w-[55%] h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="md:w-[45%] p-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  {product.features.map((feature, i) => (
                    <p key={i}>
                      <span className="font-semibold text-gray-700">•</span> {feature}
                    </p>
                  ))}
                </div>
                <div className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg group-hover:shadow-blue-500/50">
                  Available Now
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
