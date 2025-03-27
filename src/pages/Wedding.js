import React from 'react';
import Gallery from '../components/Gallery';

function Wedding() {

  const photos = [
    `${process.env.PUBLIC_URL}/images/engagement/rings.jpg`,
    `${process.env.PUBLIC_URL}/images/engagement/groom1.jpg`,
  ];
  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Our Wedding Day</h1>
        <p className="subtitle">Two Hearts, One Love</p>
        <div className="separator"></div>
        <p className="description">
          The most special day of our lives, where we unite 
          in marriage and begin our journey together.
        </p>
        <Gallery images={photos} />
      </div>
    </div>
  );
}

export default Wedding;