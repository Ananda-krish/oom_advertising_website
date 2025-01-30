import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100, // Start from the left
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Move styles to a separate component
const GlobalStyles = () => (
  <style>
    {`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}
  </style>
);

const ServiceCard = ({ service }) => {
  return (
    <motion.div className="relative group h-[500px]" variants={itemVariants}>
      {/* Background Image Card */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        initial={{ height: '20%', top: '15%' }}
        whileHover={{ height: '40%', top: '5%' }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl"
        initial={{ height: '70%' }}
        whileHover={{ height: '65%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">{service.icon}</span>
            <h2 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h2>
          </div>
          {/* Scrollable content area with hidden scrollbar */}
          <div className="flex-grow overflow-y-auto pr-4 scrollbar-hide">
            <p className="text-gray-600">{service.description}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 rounded-full text-white bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: "Branding",
      description: "We create distinctive brand identities that resonate with your target audience. Our branding solutions include logo design, visual identity, brand guidelines, and comprehensive brand strategy to make your business stand out.",
      icon: "🎯",
      image: "hording1.jpg",
    },
    {
      title: "Promotion",
      description: "Strategic promotional campaigns that drive engagement and conversions. We leverage multiple channels to promote your brand, create buzz around your products, and implement data-driven marketing strategies.",
      icon: "📈",
      image: "hording2.jpg",
    },
    {
      title: "Features",
      description: "Develop compelling features that enhance your product's value proposition. We focus on user-centric design, innovative functionality, and seamless integration to create outstanding product features.",
      icon: "⚡",
      image: "hording3.jpg",
    },
    {
      title: "Advertising",
      description: "Result-driven advertising solutions across digital and traditional platforms. Our advertising expertise covers PPC, social media advertising, display ads, and strategic ad placement to maximize your ROI.",
      icon: "📊",
      image: "hording5.jpg",
    },
  ];

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 px-4 md:px-8 lg:px-16 py-20 overflow-hidden">
      <GlobalStyles />
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl -top-48 -left-24 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-l from-pink-200/30 to-blue-200/30 blur-3xl -bottom-32 -right-16 animate-pulse delay-1000" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-20">
        <p className="text-gray-600 text-lg md:text-xl tracking-wide font-light hover:text-orange-500">
    I focus on helping your brand grow
    <br /> and move forward
  </p>
          <hr className="w-24 mx-auto my-8 border-gray-300" />
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
