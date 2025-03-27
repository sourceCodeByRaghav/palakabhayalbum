import React from 'react';
import Gallery from '../components/Gallery';

const sangeetPhotos = [
  `${process.env.PUBLIC_URL}/images/sangeet/1.jpg`,
  `${process.env.PUBLIC_URL}/images/sangeet/2.jpg`,
];

function Sangeet() {
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Sangeet Ceremony</h1>
          <p className="subtitle">Music, Dance and Celebration</p>
          <div className="separator"></div>
          <p className="description">
            Our Sangeet was a night of musical revelry where families came together 
            to celebrate through dance performances and joyful singing.
          </p>
          <Gallery images={sangeetPhotos} />
        </div>
      </div>
    </div>
  );
}

export default Sangeet;