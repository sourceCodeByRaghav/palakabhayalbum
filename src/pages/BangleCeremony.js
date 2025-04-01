import React from 'react';
import Gallery from '../components/Gallery';

const banglePhotos = [
  `${process.env.PUBLIC_URL}/images/bangle/1.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/2.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/3.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/4.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/5.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/6.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/7.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/8.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/9.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/10.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/11.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/12.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/13.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/14.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/15.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/16.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/17.jpg`,
  `${process.env.PUBLIC_URL}/images/bangle/18.jpg`
];

const fetchCompletePhotoAlbum = () => {
  window.open('https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/1-bangle-jpeg', '_blank');
};

const fetchPersonalPhotoCollection = () => {
  window.open('https://gallery.shivramlab.com/facerec/abhay-palak', '_blank');
}

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
          <div className="trailer-container">
          <iframe 
  src="https://www.youtube.com/embed/rM3qja-bfjg"
  width="640" 
  height="360" 
  allow="autoplay"
  className="trailer-video"
  frameborder="0"
  allowfullscreen
></iframe>
          </div>
          <Gallery images={banglePhotos} />
          <div className="google-drive-btn-container">
            <button 
              className="google-drive-btn" 
              onClick={fetchCompletePhotoAlbum}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="google-drive-icon"
              >
                <path d="M12.51 3.3c-.18-.14-.39-.3-.51-.3-.12 0-.33.16-.51.3L3 9l4.14 6h9.72L21 9l-8.49-5.7z"></path>
                <path d="M12 22l5-8H7l5 8z"></path>
                <path d="M3 9l5 8 3-4"></path>
              </svg>
              View Our Complete Photo Album
            </button>
            
            <button 
              className="google-drive-btn stacked-text-btn" 
              onClick={fetchPersonalPhotoCollection}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="google-drive-icon"
              >
                <path d="M9 3H5a2 2 0 0 0-2 2v4"></path>
                <path d="M9 21H5a2 2 0 0 1-2-2v-4"></path>
                <path d="M19 3h-4"></path>
                <path d="M19 21h-4"></path>
                <circle cx="12" cy="9" r="2"></circle>
                <path d="M10 14v0a2 2 0 0 0 4 0v0"></path>
                <path d="M18 8.5v7.4"></path>
                <path d="M12.5 18.2v.1"></path>
              </svg>
              <div className="text-stack">
                <span>Find Your Photos with Face Scan</span>
                {/* <span className="secondary-lang">फेस स्कैन से अपनी तस्वीरें खोजें</span>
                <span className="secondary-lang">ਫੇਸ ਸਕੈਨ ਨਾਲ ਆਪਣੀਆਂ ਫੋਟੋਆਂ ਲੱਭੋ</span> */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BangleCeremony;