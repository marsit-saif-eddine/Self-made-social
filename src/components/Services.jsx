import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    { id: 1, title: 'Mission-Driven Growth', description: 'Empowering client growth through a compelling mission.' },
    { id: 2, title: 'Success Stories', description: 'Showcasing our success stories to inspire and motivate.' },
    { id: 3, title: 'Engaging Content', description: 'Creating content that captures and engages your audience.' },
    { id: 4, title: 'Influencer Partnerships', description: 'Connecting your brand with top influencers.' },
    { id: 5, title: 'Audience Interaction', description: 'Fostering genuine interaction with your audience.' },
    { id: 6, title: 'Professional Branding', description: 'Building a strong, professional brand presence.' },
  ];

  return (
    <section className="services">
      <div className="container-services">
        <h2>Our Services</h2>
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="floating-circle"></div>
    </section>
  );
};

export default Services;
