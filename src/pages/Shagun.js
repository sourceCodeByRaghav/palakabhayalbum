// pages/Shagun.js
import React from 'react';
import Gallery from '../components/Gallery';

const shagunPhotos = [
  `${process.env.PUBLIC_URL}/images/shagun/1.jpg`,
  `${process.env.PUBLIC_URL}/images/shagun/2.jpg`,
  // Add more images
];

function Shagun() {
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Shagun Ceremony</h1>
          <p className="subtitle">Blessings and Good Omens</p>
          <div className="separator"></div>
          <p className="description">
            The Shagun ceremony marked the formal acceptance of our union, 
            with the exchange of gifts and blessings from elders.
          </p>
          <Gallery images={shagunPhotos} />
        </div>
      </div>
    </div>
  );
}

export default Shagun;