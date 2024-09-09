import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Divider from './Divider';
import OurAim from './OurAim';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us */}
      <AboutUs />

      {/* Divider */}
      <Divider />

      {/* Our Aim */}
      <OurAim />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
