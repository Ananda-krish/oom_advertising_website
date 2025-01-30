import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';
import FeaturedProjects from './FeaturedProjects';
import Parallax from '../components/Parallax/Parallax';
import Services from './Services';
import Portfolio from './Portfolio';
import HomeContact from './HomeContact';
import Tech from '../components/Tech';
import WorkGallery from '../components/WorkGallery';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <section id="Services"><Parallax type="services" /></section>
      <section><Services /></section>
      <section id="portfolio"><Parallax type="portfolio" /></section>
      <section><Portfolio /></section>
      <section><Tech/></section>
      <section><HomeContact/></section>
      

     
    </div>
  );
};

export default Home;