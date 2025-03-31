import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Palak & Abhay</h1>
          <p className="subtitle">A Journey of Love and Togetherness</p>
          <div className="separator"></div>
          <div className="trailer-container">
          <iframe 
  src="https://www.youtube.com/embed/P04uRtV3z2Y"
  width="640" 
  height="360" 
  allow="autoplay"
  className="trailer-video"
  frameborder="0"
  allowfullscreen
></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;