import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Divider from './Divider';
import OurAim from './OurAim';
import Footer from './Footer';

const FreightX = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-20 bg-gray-700">
      <Header />
      <Hero />
      <AboutUs />
      <Divider />
      <OurAim />
      <Footer />
    </div>
  );
};

export default FreightX;
