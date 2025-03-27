import React from 'react';
import Gallery from '../components/Gallery';

const banglePhotos = [
  `${process.env.PUBLIC_URL}/images/bangle/1.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/2.jpg`,
];

function BangleCeremony() {
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Bangle Ceremony</h1>
          <p className="subtitle">Traditional Blessings and Adornments</p>
          <div className="separator"></div>
          <p className="description">
            The bangle ceremony symbolizes prosperity and marital bliss. 
            The bride's hands were adorned with beautiful bangles as a mark of good fortune.
          </p>
          <Gallery images={banglePhotos} />
        </div>
      </div>
    </div>
  );
}

export default BangleCeremony;