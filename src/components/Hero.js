import React from 'react';
import './Hero.css'; 
import backgroundImage from '../assets/images/officenyc.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <h1>Special Clean Service</h1>
        <p>
          Over 15 Years of Professional Cleaning Experience. <br />
          Specializing in Post-Construction, Move-In/Out, and Residential Cleaning.
        </p>
        <button className="cta-button">Get a Free Quote</button>
      </div>
    </div>
  );
};

export default HeroSection;
