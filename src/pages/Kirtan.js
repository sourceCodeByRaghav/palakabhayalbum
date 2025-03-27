import React from 'react';
import Gallery from '../components/Gallery';

const kirtanPhotos = [
  `${process.env.PUBLIC_URL}/images/kirtan/1.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/2.jpg`,
];

function Kirtan() {
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Kirtan Ceremony</h1>
          <p className="subtitle">Divine Melodies and Sacred Chants</p>
          <div className="separator"></div>
          <p className="description">
            Our Kirtan ceremony was a spiritual celebration filled with devotional songs and hymns, 
            bringing blessings to our union through sacred music and prayers.
          </p>
          <Gallery images={kirtanPhotos} />
        </div>
      </div>
    </div>
  );
}

export default Kirtan;