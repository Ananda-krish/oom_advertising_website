import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const titleRef = useRef(null);
  const productsRef = useRef([]);

  useEffect(() => {
    // Initial setup - hide products
    gsap.set(productsRef.current, { 
      opacity: 0,
      y: 100
    });

    // Title zoom animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        scale: 0.1,
        z: -1000,
      },
      {
        opacity: 1,
        scale: 1,
        z: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    // Products stagger animation
    gsap.to(productsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: productsRef.current[0],
        start: "top 80%",
        toggleActions: "play none none none"
      }
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
    <div className="min-h-screen bg-black">
      {/* Hero Section with Zoom Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/90" />
        <h1 
          ref={titleRef}
          className="relative text-8xl font-bold text-white text-center transform-gpu"
          style={{ perspective: "1000px" }}
        >
          Our Products
        </h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-32">
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => productsRef.current[index] = el}
              className={`group flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-[55%] h-[500px] overflow-hidden rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="md:w-[45%] text-white">
                <h3 className="text-4xl font-bold mb-6 group-hover:text-blue-400 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-xl text-gray-300 mb-8">{product.description}</p>
                <div className="space-y-4">
                  {product.features.map((feature, i) => (
                    <p key={i} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </p>
                  ))}
                </div>
                <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;