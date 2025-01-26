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
      image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80",
      features: ["4K Resolution", "Weather-resistant", "24/7 Operation"]
    },
    {
      id: 2,
      title: "Transit Shelters",
      description: "Premium advertising spaces in high-traffic urban locations",
      image: "https://images.unsplash.com/photo-1587614297882-0954399bf8e8?auto=format&fit=crop&q=80",
      features: ["Backlit Displays", "Weather Protection", "Urban Integration"]
    },
    {
      id: 3,
      title: "Smart Kiosks",
      description: "Interactive digital displays with real-time content updates",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
      features: ["Touch Screen", "Wi-Fi Hotspot", "Analytics Dashboard"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden parallax-bg"
           style={{
             backgroundImage: 'url(https://images.unsplash.com/photo-1616832880334-b1004d9808da?auto=format&fit=crop&q=80)',
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
            Our Products
          </motion.h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;