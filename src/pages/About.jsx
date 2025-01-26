import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]); // To store references to all scroll sections

  useEffect(() => {
    // Ensure GSAP animations are applied to the sections
    if (sectionsRef.current.length > 0) {
      sectionsRef.current.forEach((section, index) => {
        // Debugging: Log each section to ensure it's being targeted
        console.log(`Section ${index} targeted:`, section);

        gsap.fromTo(
          section,
          { opacity: 0, y: 50 }, // Start state
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none', // Play once when scrolling down
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
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
        <div className="space-y-20">
          {/* Vision Section */}
          <div
            ref={(el) => sectionsRef.current[0] = el} // Add reference to this section
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
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

          {/* Values Section */}
          <div
            ref={(el) => sectionsRef.current[1] = el} // Add reference to this section
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12">Our Values</h2>
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
                <div key={index} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            ref={(el) => sectionsRef.current[2] = el} // Add reference to this section
            className="bg-white/5 rounded-lg p-12 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '1000+', label: 'Projects Completed' },
                { number: '500+', label: 'Happy Clients' },
                { number: '50+', label: 'Cities Covered' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
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
