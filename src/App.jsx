import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhoWeAre from './components/WhoWeAre';
import './styles/global.css';
import Leadership from './components/Leadership';
import Works from './components/Works';
import Gallery from './components/Gallery';
import { Element } from 'react-scroll';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Element name="About">
        <WhoWeAre />
      </Element>
      <Element name="Services">
        <Services />
      </Element>
      <Element name="Founders">
        <Leadership />
      </Element>
      <Element name="Work">
        <Works />
      </Element>
      <Element name="Testimonials">
        <Gallery />
      </Element>
      <Element name="Contact">
        <ContactUs />
      </Element>
      <Footer />
    </>
  );
};

export default App;
