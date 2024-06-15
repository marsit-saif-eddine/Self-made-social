// Embed.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Embed.css';
import logo from '../assets/images/logo.png';

const Embed = () => {
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);

  useEffect(() => {
    const totalViews = 700;
    const totalSales = 50;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // Adding a delay of 2 seconds before repeating

    tl.to(counterRef2.current, { duration: 1, innerHTML: `+${totalViews}`, ease: 'power1.inOut' }) // Total views achieved
      .to(counterRef3.current, { duration: 1, innerHTML: `${totalSales}`, ease: 'power1.inOut' }); // Total sales

    return () => {
      tl.kill(); // Kill the animation on unmount
    };
  }, []);

  return (
    <div className="embed-section">
      <div className="embed-content">
        <img className="logoEmbed" src={logo} alt="Logo" />
        <h2 className="embed-header">Our Achievements</h2>
        <div className="achievement">
          <p>Total views achieved: +<span ref={counterRef2}>0</span>M</p>
        </div>
        <div className="achievement">
          <p>Total sales: +<span ref={counterRef3}>0</span>M USD</p>
        </div>
      </div>
    </div>
  );
};

export default Embed;
