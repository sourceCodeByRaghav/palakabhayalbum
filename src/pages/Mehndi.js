import React from 'react';
import Gallery from '../components/Gallery';

function Mehndi() {

  const photos = [
    `${process.env.PUBLIC_URL}/images/mehndi/1.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/2.jpg`,
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
        <div className="trailer-container">
            <iframe 
              src="/videos/mehndi/mehndi.mp4"
              width="640" 
              height="360" 
              allow="autoplay"
              className="trailer-video"
            ></iframe>
          </div>
        <Gallery images={photos} />
      </div>
    </div>
  );
}

export default Mehndi;