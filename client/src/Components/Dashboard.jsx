// I know this is the wrong filename for this component and I've interchangeably rerouted home and dashboard for now. Let it be the same

import React from 'react'
import Hero from './Hero'
import Header from './Header'
import AboutUs from './AboutUs'
import Divider from './Divider'
import OurAim from './OurAim'
import Footer from './Footer'

const Dashboard = () => {
    
  return (
    <>
      <div className="bg-gray-900 text-white">
      {/* Header */}
      
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
    </>
  )
}

export default Dashboard