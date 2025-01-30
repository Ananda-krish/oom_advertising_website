import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import UpcomingSites from './pages/UpcomingSites';
import Contact from './pages/Contact';
import MouseFollower from './components/MouseFollower';
import Footer from './components/Footer';
import WorkGallery from './components/WorkGallery';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <MouseFollower />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/upcoming-sites" element={<UpcomingSites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<WorkGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;