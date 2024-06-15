import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/WhoWeAre.css';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const elements = [titleRef.current, textRef.current];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 10%',
            toggleActions: 'play',
          },
        }
      );
    });
  }, []);

  return (
    <section className="who-we-are">
      <div className="container-who-we-are">
        <h2 ref={titleRef}>Who We Are</h2>
        <p ref={textRef}>
        Self-Made Social, a UAE-based agency, empowers client growth through a compelling mission, success stories, engaging content, influencers, audience interaction, and professional branding to become a trusted partner for impactful results and client empowerment.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
