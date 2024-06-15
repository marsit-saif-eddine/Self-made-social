import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  useEffect(() => {
    gsap.from('.navbar', { duration: 1 });
  }, []);

  return isMobile ? (
    <Sidebar />
  ) : (
    <nav className={`navbar ${show ? 'active' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">Self-made social</span>
        </div>
        <ul className="nav-items">
          <li><Link to="About" smooth={true} duration={500}>About</Link></li>
          <li><Link to="Services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="Founders" smooth={true} duration={500}>Founders</Link></li>
          <li><Link to="Work" smooth={true} duration={500}>Our Work</Link></li>
          <li><Link to="Testimonials" smooth={true} duration={500}>Testimonials</Link></li>
          <li><Link to="ContactUs" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
