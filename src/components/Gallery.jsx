import React, { useState } from 'react';
import '../styles/Gallery.css';
import tstimonial1 from '../assets/images/testimonial1.jpg';
import tstimonial2 from '../assets/images/testimonial2.jpg';
import tstimonial3 from '../assets/images/testimonial3.jpg';
import tstimonial4 from '../assets/images/testimonial4.jpg';
import tstimonial5 from '../assets/images/testimonial5.jpg';

const Gallery = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  const photos = [
    { id: 1, src: tstimonial1, alt: 'Description 1', className: 'square' },
    { id: 2, src: tstimonial2, alt: 'Description 2', className: 'horizontal-rect' },
    { id: 3, src: tstimonial3, alt: 'Description 3', className: 'vertical-rect' },
    { id: 4, src: tstimonial4, alt: 'Description 4', className: 'square' },
    { id: 5, src: tstimonial5, alt: 'Description 5', className: 'vertical-rect' },
  ];

  const openModal = (photo) => {
    setModalPhoto(photo);
  };

  const closeModal = () => {
    setModalPhoto(null);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-text">
          <h2>Our Testimonial Gallery!</h2>
          <p>
          Dive into the experiences and stories shared by our satisfied customers. Our gallery highlights the authentic feedback and moments of joy captured through social media.       </p>
        </div>
        <div className="gallery-photos">
          {photos.map(photo => (
            <div key={photo.id} className={`photo ${photo.className}`} onClick={() => openModal(photo)}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>

      {modalPhoto && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img className="modal-content" src={modalPhoto.src} alt={modalPhoto.alt} />
          </div>
      )}
    </section>
  );
};

export default Gallery;
