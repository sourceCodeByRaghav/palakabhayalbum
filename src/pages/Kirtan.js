import React from 'react';
import Gallery from '../components/Gallery';

const kirtanPhotos = [
  `${process.env.PUBLIC_URL}/images/kirtan/1.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/2.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/3.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/4.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/5.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/6.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/7.jpg`,
  `${process.env.PUBLIC_URL}/images/kirtan/8.jpeg`,
  `${process.env.PUBLIC_URL}/images/kirtan/9.jpeg`,
  `${process.env.PUBLIC_URL}/images/kirtan/10.jpeg`,
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
          <div className="trailer-container">
            <iframe 
              src={`${process.env.PUBLIC_URL}/videos/kirtan/1.mp4`}
              width="640" 
              height="360" 
              allow="autoplay"
              className="trailer-video"
            ></iframe>
          </div>
          <div class="video-container">
  <div class="small-video">
  <video src={`${process.env.PUBLIC_URL}/videos/kirtan/2.mp4`} controls loop></video>
  </div>
  <div class="small-video">
  <video src={`${process.env.PUBLIC_URL}/videos/kirtan/4.mp4`} controls loop autoPlay></video>
</div>
</div>
          <Gallery images={kirtanPhotos} />
        </div>
      </div>
    </div>
  );
}

export default Kirtan;