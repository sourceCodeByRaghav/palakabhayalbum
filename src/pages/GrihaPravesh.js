import React from 'react';
import Gallery from '../components/Gallery';

function GrihaPravesh() {
  const photos = [
    `${process.env.PUBLIC_URL}/images/griha-pravesh/1.jpg`,
    `${process.env.PUBLIC_URL}/images/griha-pravesh/2.jpg`,
  ];

  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Griha Pravesh Ceremony</h1>
        <p className="subtitle">Welcoming the couple home</p>
        <div className="separator"></div>
        <p className="description">
          A traditional homecoming ritual that marks the bride's first entry into her new home, filled with blessings and auspiciousness.
        </p>
      </div>
    </div>
  );
}

export default GrihaPravesh;