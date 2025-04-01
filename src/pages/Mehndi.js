import React from 'react';
import Gallery from '../components/Gallery';

function Mehndi() {

  const fetchCompletePhotoAlbum = () => {
    window.open('https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/2-mehandi-bs-jpeg', '_blank');
  };
  
  const fetchPersonalPhotoCollection = () => {
    window.open('https://gallery.shivramlab.com/facerec/abhay-palak', '_blank');
  }
  
  const photos = [
    `${process.env.PUBLIC_URL}/images/mehndi/1.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/2.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/3a.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/4a.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/3.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/4.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/5.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/5b.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/6.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/7.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/8.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/9.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/10.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/11.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/12.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/13.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/14.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/15.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/16.jpg`,
    `${process.env.PUBLIC_URL}/images/mehndi/3b.jpg`
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
              src={`${process.env.PUBLIC_URL}/videos/mehndi/mehndi.mp4`}
              width="640" 
              height="360" 
              allow="autoplay"
              className="trailer-video"
            ></iframe>
          </div>
        <Gallery images={photos} />
        <div className="separator"></div>
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
  );
}

export default Mehndi;