import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CircularProgress = forwardRef(({ value, label, index, onNumberRef }, circleRef) => {
  return (
    <div className="relative flex flex-col items-center">
      <svg className="w-48 h-48 transform -rotate-90">
        <circle
          cx="96"
          cy="96"
          r="88"
          className="stroke-current text-gray-700/20"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="96"
          cy="96"
          r="88"
          className="stroke-current text-blue-500"
          strokeWidth="3"
          fill="none"
          strokeDasharray="552.92"
          strokeDashoffset="552.92"
          ref={circleRef}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          className="text-5xl font-bold text-white"
          ref={el => onNumberRef(el, index)}
        >
          0
        </span>
        <span className="text-lg text-blue-100 mt-2">{label}</span>
      </div>
    </div>
  );
});

const About = () => {
  const sectionsRef = useRef([]);
  const counterRef = useRef(null);
  const numbersRef = useRef([]);
  const circlesRef = useRef([]);

  const handleNumberRef = (el, index) => {
    numbersRef.current[index] = el;
  };

  useEffect(() => {
    // Sections animation
    if (sectionsRef.current.length > 0) {
      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
              once: false,
            },
          }
        );
      });
    }

    // Counter and circle animation
    if (counterRef.current && numbersRef.current.length > 0) {
      const stats = [
        { end: 15, suffix: '+', percentage: 75 },
        { end: 1000, suffix: '+', percentage: 90 },
        { end: 500, suffix: '+', percentage: 85 },
        { end: 50, suffix: '+', percentage: 80 }
      ];

      numbersRef.current.forEach((number, index) => {
        if (!number) return;
        
        const value = { val: 0 };
        const circle = circlesRef.current[index];
        const circumference = 2 * Math.PI * 88; // 88 is the radius of our circle
        
        // Timeline for synchronized animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });

        // Animate number
        tl.to(value, {
          val: stats[index].end,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            number.textContent = Math.floor(value.val) + stats[index].suffix;
          }
        }, 0);

        // Animate circle
        tl.to(circle, {
          strokeDashoffset: circumference - (circumference * stats[index].percentage / 100),
          duration: 2,
          ease: "power2.out"
        }, 0);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="animated-bg absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: '0% 50%',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">Our Story</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-32">
          {/* Vision Section */}
          <div
            ref={(el) => sectionsRef.current[0] = el}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Om Advertisements, we envision transforming urban landscapes into captivating canvases that tell compelling stories. Since our inception, we've been at the forefront of outdoor advertising innovation, creating memorable experiences that resonate with audiences and deliver exceptional results for our clients.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Section with Circular Counter Animation */}
          <div
            ref={counterRef}
            className="py-20 bg-gradient-to-br from-gray-900 to-blue-900"
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { label: 'Years Experience' },
                  { label: 'Projects Completed' },
                  { label: 'Happy Clients' },
                  { label: 'Cities Covered' },
                ].map((stat, index) => (
                  <CircularProgress
                    key={index}
                    label={stat.label}
                    index={index}
                    ref={el => circlesRef.current[index] = el}
                    onNumberRef={handleNumberRef}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div
            ref={(el) => sectionsRef.current[1] = el}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Pushing boundaries with cutting-edge advertising solutions and technologies.',
                  icon: '🚀',
                },
                {
                  title: 'Excellence',
                  description: 'Delivering premium quality and exceptional service in every project.',
                  icon: '⭐',
                },
                {
                  title: 'Sustainability',
                  description: 'Committed to environmentally conscious advertising practices.',
                  icon: '🌱',
                },
              ].map((value, index) => (
                <div key={index} className="bg-white shadow-lg p-8 rounded-lg">
                  <div className="text-4xl mb-4 text-blue-500">{value.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;