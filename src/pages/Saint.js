import React from 'react';
import Gallery from '../components/Gallery';

function Saint() {
  
  const fetchCompletePhotoAlbumGS = () => {
    window.open('https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/6-saint-gs-gurpreet', '_blank');
  };

  const fetchCompletePhotoAlbumBS = () => {
    window.open('https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/6-saint-bs-kartik', '_blank');
  };
  
  const fetchPersonalPhotoCollection = () => {
    window.open('https://gallery.shivramlab.com/facerec/abhay-palak', '_blank');
  }

  const girlsPhotos = [
    `${process.env.PUBLIC_URL}/images/saint/girl/1.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/2.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/3.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/4.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/5.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/6.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/7.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/8.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/9.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/10.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/11.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/12.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/13.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/girl/14.jpg`
  ];

  const boysPhotos = [
    `${process.env.PUBLIC_URL}/images/saint/boy/1.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/1a.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/2.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/3.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/4.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/5a.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/5b.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/5.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/6.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/7.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/8.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/9.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/10.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/11.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/12.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/15.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/14.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/16.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/17.jpg`,
    `${process.env.PUBLIC_URL}/images/saint/boy/18.jpg`
  ];

  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Saint Ceremony</h1>
        <p className="subtitle">Purification and Blessings</p>
        <div className="separator"></div>
        <p className="description">
          A sacred ritual to cleanse and bless the couple, ensuring a prosperous and harmonious journey ahead.
        </p>
        <p className="subtitle">Girl's Side Moments</p>
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
        <Gallery images={girlsPhotos} />
        <div className="google-drive-btn-container">
            <button 
              className="google-drive-btn" 
              onClick={fetchCompletePhotoAlbumGS}
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
        
        <p className="subtitle">Boys' Side Moments</p>
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
        <Gallery images={boysPhotos} /> 
        <div className="google-drive-btn-container">
            <button 
              className="google-drive-btn" 
              onClick={fetchCompletePhotoAlbumBS}
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
  );
}

export default Saint;

