import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
// import ContactForm  from './components/ContactForm /ContactForm .js';
// import AboutUs from './components/AboutUs/AboutUs.js';
// import ServiceCard from './components/ServiceCard/ServiceCard.js';
// import Testimonial from './components/Testimonial/Testimonial.js';
// import Footer from './components/Footer/Footer.js';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      {/* <ContactForm />
      <AboutUs />
      <ServiceCard />
      <Testimonial />
      <Footer /> */}
    </div>
  );
}

export default App;
