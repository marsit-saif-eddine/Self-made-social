import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Leadership.css';
import louaiImage from '../assets/images/Louai.jpg';
import hanenImage from '../assets/images/hanen.jpg';

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const elements = [imageRef1.current, imageRef2.current, textRef1.current, textRef2.current];

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
            toggleActions: 'play',
          },
        }
      );
    });
  }, []);

  return (
    <section className="leadership">
      <div className="container-leadership">
        <h2>Founders</h2>
        <div className="leadership-content">
          <div className="founder">
            <div ref={imageRef1} className="founder-image-wrapper">
              <img src={louaiImage} alt="Louai" className="founder-image" />
            </div>
            <div ref={textRef1} className="founder-description">
              <h3>Louai</h3>
              <p>
                Louai, <a href="https://www.instagram.com/lwaxx">@lwaxx</a>, is a 23-year-old college dropout from Tunisia. His unconventional path to social media marketing began in 2017 with a passion for TikTok. Initially an avid consumer, his deep understanding of the platform and audience psychology fueled his content creation debut in 2023. Leveraging his unique insights, Louai's creativity quickly resonated, generating over 500 million organic views and collaborations with over 50 brands and individuals within just one year. His success is a testament to the power of perseverance, data-driven marketing, and fostering genuine connections on a platform he initially discovered as a college student in Tunisia.
              </p>
            </div>
          </div>
          <div className="founder">
            <div ref={imageRef2} className="founder-image-wrapper">
              <img src={hanenImage} alt="Hanen" className="founder-image" />
            </div>
            <div ref={textRef2} className="founder-description">
              <h3>Hanen</h3>
              <p>
                Hanen, <a href="https://www.instagram.com/ladyfit.ae">@ladyfit.ae</a> and <a href="https://www.instagram.com/hanennmatar">@hanennmatar</a>, is a seasoned entrepreneur, businesswoman, content creator, and consultant, boasting over a decade of experience in the market. She specializes in providing expert assistance to individuals relocating to the UAE, offering invaluable guidance through her consultations. With a proven track record of helping clients achieve their goals Hanen is widely recognized as a trusted leader and mentor in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
