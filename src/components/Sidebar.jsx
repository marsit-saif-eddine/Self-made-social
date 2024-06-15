import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import '../styles/Sidebar.css';
import logo from '../assets/images/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to('.sidebar', { x: 0, duration: 0.5 });
    } else {
      gsap.to('.sidebar', { x: '100%', duration: 0.5 });
    }
  }, [isOpen]);

  return (
    <>
      <div className="sidebar-hamburger" onClick={toggleSidebar}>
        <div className={`sidebar-bar ${isOpen ? 'sidebar-animate' : ''}`}></div>
        <div className={`sidebar-bar ${isOpen ? 'sidebar-animate' : ''}`}></div>
        <div className={`sidebar-bar ${isOpen ? 'sidebar-animate' : ''}`}></div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="sidebar-logo" />
          <span className="sidebar-logo-text">Self-made social</span>
        </div>
        <ul className="sidebar-items">
          <li>
            <Link to="About" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="Services" smooth={true} duration={500}>Services</Link>
          </li>
          <li>
            <Link to="Founders" smooth={true} duration={500}>Founders</Link>
          </li>
          <li >
            <Link to="Work" smooth={true} duration={500}>Our Work</Link>
          </li>
          <li >
            <Link to="Testimonials" smooth={true} duration={500}>Testimonials</Link>
          </li>
          <li >
            <Link to="ContactUs" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        <button className="sidebar-get-started" onClick={toggleSidebar}>Get Started</button>
      </div>
    </>
  );
};

export default Sidebar;
