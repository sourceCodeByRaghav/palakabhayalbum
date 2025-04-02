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
            src="https://www.youtube.com/watch?v=hWOhA-61D2s"
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
  );
}

export default DJNight;
