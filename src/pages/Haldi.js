import React from 'react';
import Gallery from '../components/Gallery';

function Haldi() {
  const photos = [
    `${process.env.PUBLIC_URL}/images/engagement/rings.jpg`,
    `${process.env.PUBLIC_URL}/images/engagement/groom1.jpg`,
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
        <Gallery images={photos} />
        <div className="google-drive-btn-container">
            <button 
              className="google-drive-btn" 
              onClick={handleGoogleDriveClick}
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
          </div>
      </div>
    </div>
  );
}

export default Haldi;