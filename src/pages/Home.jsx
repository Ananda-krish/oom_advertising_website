import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';
import FeaturedProjects from './FeaturedProjects';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
    </div>
  );
};

export default Home;