import React from 'react';
import Gallery from '../components/Gallery';

function Mehndi() {

  const photos = [
    `${process.env.PUBLIC_URL}/images/engagement/rings.jpg`,
    `${process.env.PUBLIC_URL}/images/engagement/groom1.jpg`,
  ];
  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Mehndi Ceremony</h1>
        <p className="subtitle">Traditions and Celebrations</p>
        <div className="separator"></div>
        <p className="description">
          A vibrant celebration of love, tradition, and the beautiful 
          art of mehndi that marks the beginning of our wedding festivities.
        </p>
        <Gallery images={photos} />
      </div>
    </div>
  );
}

export default Mehndi;