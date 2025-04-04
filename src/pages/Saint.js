import React from "react";
import Gallery from "../components/Gallery";

function Saint() {
  const fetchCompletePhotoAlbumGS = () => {
    window.open(
      "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/6-saint-gs-gurpreet",
      "_blank"
    );
  };

  const fetchCompletePhotoAlbumBS = () => {
    window.open(
      "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/6-saint-bs-kartik",
      "_blank"
    );
  };

  const fetchPersonalPhotoCollection = () => {
    window.open("https://gallery.shivramlab.com/facerec/abhay-palak", "_blank");
  };

  const girlsPhotos = [
    `${process.env.PUBLIC_URL}/images/saint/girl/1.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/2.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/3.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/4.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/5.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/6.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/7.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/8.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/9.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/10.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/11.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/12.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/13.png`,
    `${process.env.PUBLIC_URL}/images/saint/girl/14.png`,
  ];

  const boysPhotos = [
    `${process.env.PUBLIC_URL}/images/saint/boy/1.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/1a.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/2.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/3.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/4.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/5a.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/5b.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/5.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/6.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/7.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/8.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/9.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/10.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/11.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/12.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/15.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/14.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/16.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/17.png`,
    `${process.env.PUBLIC_URL}/images/saint/boy/18.png`,
  ];

  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Saint Ceremony</h1>
        <p className="subtitle">Purification and Blessings</p>
        <div className="separator"></div>
        <p className="description">
          A sacred ritual to cleanse and bless the couple, ensuring a prosperous
          and harmonious journey ahead.
        </p>
        <p className="subtitle">Girl's Side Moments</p>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/mikjOHKdeVE"
            width="640"
            height="360"
            allow="autoplay"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/cd80xGcmKbs"
            width="640"
            height="360"
            allow="autoplay"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <Gallery images={girlsPhotos} />
        <div className="separator"></div>
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
        <div className="separator-blank"></div>
        <p className="subtitle">Boys' Side Moments</p>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/MfJMmTKAtjg?autoplay=1&mute=1"
            width="640"
            height="360"
            className="trailer-video"
            allowfullscreen
          ></iframe>
        </div>
        <Gallery images={boysPhotos} />
        <div className="separator"></div>
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
