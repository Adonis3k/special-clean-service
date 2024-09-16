// ServicesSection.js
import React from 'react';
import './Services.css'; // Custom CSS for styling

const ServicesSection = () => {
  const services = [
    {
      title: "Post-Construction Cleaning",
      description: "Comprehensive cleaning services to remove dust, debris, and waste from construction sites, leaving your property spotless."
    },
    {
      title: "Move-In/Move-Out Cleaning",
      description: "Thorough cleaning services for homes and apartments before moving in or after moving out, ensuring a fresh start."
    },
    {
      title: "Residential Cleaning",
      description: "Expert cleaning services for homes, including dusting, mopping, and sanitizing to keep your living space fresh and clean."
    },
    {
      title: "Tile, Marble, and Wood Cleaning",
      description: "Specialized cleaning services for delicate surfaces like tile, marble, and wood, ensuring their longevity and shine."
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning services tailored for office spaces, retail stores, and commercial properties to maintain a clean environment."
    }
  ];

  return (
    <section id="services-section" className="services-section">
      <h2>Our Cleaning Services</h2>
      <div className="services-menu">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
