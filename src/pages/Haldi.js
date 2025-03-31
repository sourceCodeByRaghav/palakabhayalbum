import React from 'react';
import Gallery from '../components/Gallery';

function Haldi() {
  const photos = [
    `${process.env.PUBLIC_URL}/images/haldi/1.jpg`,
    `${process.env.PUBLIC_URL}/images/haldi/2.jpg`,
  ];
  const handleGoogleDriveClick = () => {
    window.open('https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/2-mehandi-bs-jpeg', '_blank');
  };
  
  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Haldi Ceremony</h1>
        <p className="subtitle">Blessings and Traditions</p>
        <div className="separator"></div>
        <p className="description">
          A sacred ceremony filled with love, blessings, and the 
          traditional haldi (turmeric) that symbolizes purification and good luck.
        </p>
        <div className="trailer-container">
            <iframe 
              src={`${process.env.PUBLIC_URL}/videos/haldi/haldi.mp4`}
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

export default Haldi;