import React from "react";
import Gallery from "../components/Gallery";

function DJNight() {
  const girlsPhotos = [
    `${process.env.PUBLIC_URL}/images/dj-night/girls/1.jpg`,
    `${process.env.PUBLIC_URL}/images/dj-night/girls/2.jpg`,
  ];

  const boysPhotos = [
    `${process.env.PUBLIC_URL}/images/dj-night/boys/1.jpg`,
    `${process.env.PUBLIC_URL}/images/dj-night/boys/2.jpg`,
  ];

  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">DJ Night</h1>
        <p className="subtitle">A Night of Music and Celebration</p>
        <div className="separator"></div>
        <p className="description">
          A high-energy night of music, dance, and unforgettable moments as both
          sides celebrate in their own way.
        </p>

        <p className="subtitle">Girl's Side Moments</p>
        <div className="trailer-container">
          <iframe
            src="https://drive.google.com/file/d/1xt7Z2Q5s--DjPgF3NJYQ-_jCElHp_gdY/preview"
            width="640"
            height="360"
            allow="autoplay"
            className="trailer-video"
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://drive.google.com/file/d/1rKwG-EhU0htVc3NzxnddbiJ74lc00RKo/preview"
            width="640"
            height="360"
            className="trailer-video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default DJNight;
