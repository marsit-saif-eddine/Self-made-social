import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import '../styles/Works.css';

const worksData = [
  { name: 'Max Sokolov', link: 'https://www.tiktok.com/@falconovrealestate', username: '@falconovrealestate', icon: faTiktok },
  { name: 'Safe Amri', link: 'https://www.tiktok.com/@safe.amri', username: '@safe.amri', icon: faTiktok },
  { name: 'Ladyfit', link: 'https://www.instagram.com/ladyfit.ae', username: '@ladyfit.ae', icon: faInstagram },
  { name: 'Nisrine', links: [
    { link: 'https://www.tiktok.com/@nisrinedxb', username: '@nisrinedxb', icon: faTiktok },
    { link: 'https://www.instagram.com/nisrineblh/', username: '@nisrineblh', icon: faInstagram }
  ]},
  { name: 'Beefurb', link: 'https://www.tiktok.com/@beefurb', username: '@beefurb', icon: faTiktok },
  { name: 'Sophie Kelly Elliott', link: 'https://www.tiktok.com/@sophiekellyelliott', username: '@sophiekellyelliott', icon: faTiktok },
  { name: 'RealestateBlondies', link: 'https://www.instagram.com/realestateblondies/', username: '@realestateblondies', icon: faInstagram },
  { name: 'FastLife', link: 'https://www.tiktok.com/@fastlife.dxb', username: '@fastlife.dxb', icon: faTiktok },
  { name: 'Studio By Sarah', link: 'https://www.tiktok.com/@studio.by.sara', username: '@studio.by.sara', icon: faTiktok },
];

const Works = () => {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="works">
      <div className="container-works">
        <h2>Some of Our Work</h2>
        <Slider {...settings}>
          {worksData.map((work, index) => (
            <div key={index} className="work-card" ref={addToRefs}>
              <div className="work-card-content">
                <h3>{work.name}</h3>
                {Array.isArray(work.links) ? (
                  work.links.map((link, i) => (
                    <p key={i}>
                      <a href={link.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={link.icon} size="1x" /> {link.username}
                      </a>
                    </p>
                  ))
                ) : (
                  <p>
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={work.icon} size="1x" /> {work.username}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Works;
