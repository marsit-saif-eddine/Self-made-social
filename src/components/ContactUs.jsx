import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=971504517074`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <i className="fab fa-whatsapp"></i> Message Us on WhatsApp
      </button>
    </div>
  );
};

export default ContactUs;
