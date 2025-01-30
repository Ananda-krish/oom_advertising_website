import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ParticlesComponent from '../components/ParticlesBackground';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute z-30 top-1/2 -translate-y-1/2 ${
      direction === 'prev' ? 'left-4' : 'right-4'
    } bg-black/70 hover:bg-black rounded-full p-3 shadow-xl transition-all duration-300 transform hover:scale-110`}
  >
    {direction === 'prev' ? (
      <ChevronLeft className="w-6 h-6 text-white" />
    ) : (
      <ChevronRight className="w-6 h-6 text-white" />
    )}
  </button>
);

const HeroSection = () => {
  const heroRef = useRef(null);
  const leftSliderRef = useRef(null);
  const centerSliderRef = useRef(null);
  const rightSliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
    scrollButton: {
      opacity: [0, 1, 0],
      y: [20, 0, 10],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const slides = [
    {
      image: '/hording1.jpg',
      title: 'Urban Innovation',
      description: 'Transforming cityscapes with creative advertising solutions'
    },
    {
      image: '/hording2.jpg',
      title: 'Strategic Placement',
      description: 'Prime locations that capture your target audience'
    },
    {
      image: '/hording3.jpg',
      title: 'Digital Excellence',
      description: 'Cutting-edge display technology for maximum impact'
    },
    {
      image: '/hording5.jpg',
      title: 'Brand Elevation',
      description: 'Taking your brand presence to new heights'
    },
    {
      image: '/hording6.jpg',
      title: 'Visual Impact',
      description: 'Creating memorable outdoor experiences'
    }
  ];

  const baseSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  const mainSettings = {
    ...baseSettings,
    dots: true,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full">
        <ul className="m-0 p-0 text-center">{dots}</ul>
      </div>
    ),
    beforeChange: (oldIndex, newIndex) => {
      leftSliderRef.current.slickGoTo(newIndex);
      rightSliderRef.current.slickGoTo(newIndex);
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="hero-particles" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 lg:px-16">
        <div className="hidden lg:block w-[15%] h-[60vh] relative overflow-hidden transform 
            perspective-1000 rotate-y-10 hover:rotate-y-0 transition-all duration-500 
            rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <Slider ref={leftSliderRef} {...baseSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-[60vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover blur-sm"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full lg:w-[50%] h-[50vh] sm:h-[60vh] lg:h-[80vh] mx-0 lg:mx-8 relative overflow-visible transform 
            perspective-1000 rotate-y-0 transition-all duration-500 
            rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <Slider ref={centerSliderRef} {...mainSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-[50vh] sm:h-[60vh] lg:h-[80vh] relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-xl">
                  <div className="absolute top-1/3 left-0 right-0 text-center text-white p-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">{slide.title}</h2>
                    <p className="text-sm sm:text-lg lg:text-xl drop-shadow-lg">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden lg:block w-[15%] h-[60vh] relative overflow-hidden transform 
            perspective-1000 rotate-y-10 hover:rotate-y-0 transition-all duration-500 
            rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <Slider ref={rightSliderRef} {...baseSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-[60vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover blur-sm"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-gray-800 hero-text"
          >
            Explore Our Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;