import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import FloatingIcons from './FloatingIcons';
import '../styles/Hero.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const textRef1 = useRef(null);

  const buttonRef = useRef(null);

  useEffect(() => {
    const elements = [textRef1.current, buttonRef.current];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 10%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <FloatingIcons />
      </div>
      <div className="hero-right">
        <div className="hero-content">
          <h1  ref={textRef1}>
            <span >WE GUARANTEE</span><br />
            <span >MAKING YOU GO VIRAL</span><br />
            <span className="highlight">IN 30 TO 90 DAYS</span>
          </h1>
          <button ref={buttonRef} className="cta-button">Let's start now!</button>
        </div>
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
