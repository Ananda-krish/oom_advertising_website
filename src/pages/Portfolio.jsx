import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2896826/pexels-photo-2896826.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular."
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2896826/pexels-photo-2896826.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular."
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2896826/pexels-photo-2896826.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular."
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2896826/pexels-photo-2896826.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Morning control cloud fairly captain stronger variety feet excitement matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular."
  },
];

const Single = ({ item, index }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 0.8, 1], [0, 1, 1, 1, 0, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0, 1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen h-full relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Text */}
      <motion.div 
        className="text-4xl sm:text-[80px] md:text-[120px] lg:text-[180px] font-bold text-black absolute z-0 whitespace-nowrap opacity-30 sm:opacity-50"
        style={{ scale }}
      >
        WORK
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto container py-20">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* Image Container */}
          <motion.div 
            className="w-full max-w-lg sm:max-w-3xl md:max-w-5xl lg:max-w-7xl aspect-video relative"
            style={{ 
              scale: imageScale,
              opacity
            }}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="text-center px-4 sm:px-6 max-w-4xl mx-auto"
            style={{ opacity: textOpacity }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              {item.description}
            </p>
            <Link 
              to="/work" 
              className="inline-block"
            >
              <motion.button 
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Demo
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  useEffect(() => {
    // Hide scrollbar but keep functionality
    document.body.style.overflow = 'scroll';
    document.body.style.scrollbarWidth = 'none';
    document.body.style.msOverflowStyle = 'none';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.scrollbarWidth = '';
      document.body.style.msOverflowStyle = '';
    };
  }, []);

  return (
    <div className="bg-[#ffffff] relative">
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 640px) {
            .text-scroll {
              font-size: clamp(2rem, 10vw, 4rem);
            }
          }
        `}
      </style>
      <div className="relative">
        {items.map((item, index) => (
          <Single item={item} key={item.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;