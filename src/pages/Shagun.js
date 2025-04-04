// pages/Shagun.js
import React from "react";
import Gallery from "../components/Gallery";

const shagunPhotos = [
  `${process.env.PUBLIC_URL}/images/shagun/1.png`,
  `${process.env.PUBLIC_URL}/images/shagun/2.png`,
  `${process.env.PUBLIC_URL}/images/shagun/3.png`,
  `${process.env.PUBLIC_URL}/images/shagun/4.png`,
  `${process.env.PUBLIC_URL}/images/shagun/5.png`,
  `${process.env.PUBLIC_URL}/images/shagun/6.png`,
  `${process.env.PUBLIC_URL}/images/shagun/7.png`,
  `${process.env.PUBLIC_URL}/images/shagun/8.png`,
  `${process.env.PUBLIC_URL}/images/shagun/9.png`,
  `${process.env.PUBLIC_URL}/images/shagun/10.png`,
  `${process.env.PUBLIC_URL}/images/shagun/11.png`,
  `${process.env.PUBLIC_URL}/images/shagun/12.png`,
  `${process.env.PUBLIC_URL}/images/shagun/13.png`,
  `${process.env.PUBLIC_URL}/images/shagun/14.png`,
  `${process.env.PUBLIC_URL}/images/shagun/15.png`,
  `${process.env.PUBLIC_URL}/images/shagun/16.png`,
  `${process.env.PUBLIC_URL}/images/shagun/17.png`,
  `${process.env.PUBLIC_URL}/images/shagun/18.png`,
  `${process.env.PUBLIC_URL}/images/shagun/19.png`,
  `${process.env.PUBLIC_URL}/images/shagun/20.png`,
  `${process.env.PUBLIC_URL}/images/shagun/21.png`,
  `${process.env.PUBLIC_URL}/images/shagun/22.png`,
  `${process.env.PUBLIC_URL}/images/shagun/23.png`,
  `${process.env.PUBLIC_URL}/images/shagun/24.png`,
  `${process.env.PUBLIC_URL}/images/shagun/25.png`,
  `${process.env.PUBLIC_URL}/images/shagun/26.png`,
  `${process.env.PUBLIC_URL}/images/shagun/27.png`,
  `${process.env.PUBLIC_URL}/images/shagun/29.png`,
  `${process.env.PUBLIC_URL}/images/shagun/28.png`,
  `${process.env.PUBLIC_URL}/images/shagun/30.png`,
  `${process.env.PUBLIC_URL}/images/shagun/31.png`,
  `${process.env.PUBLIC_URL}/images/shagun/32.png`,
  `${process.env.PUBLIC_URL}/images/shagun/33.png`,
  `${process.env.PUBLIC_URL}/images/shagun/34.png`,
  `${process.env.PUBLIC_URL}/images/shagun/35.png`,
  `${process.env.PUBLIC_URL}/images/shagun/36.png`,
  `${process.env.PUBLIC_URL}/images/shagun/37.png`,
  `${process.env.PUBLIC_URL}/images/shagun/38.png`,
  `${process.env.PUBLIC_URL}/images/shagun/39.png`,
  `${process.env.PUBLIC_URL}/images/shagun/40.png`,
  `${process.env.PUBLIC_URL}/images/shagun/41.png`,
  `${process.env.PUBLIC_URL}/images/shagun/42.png`,
];

const fetchCompletePhotoAlbumSetOne = () => {
  window.open(
    "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/4-shagun-simar",
    "_blank"
  );
};

const fetchCompletePhotoAlbumSetTwo = () => {
  window.open(
    "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/5-shagun-kartik",
    "_blank"
  );
};

const fetchPersonalPhotoCollection = () => {
  window.open("https://gallery.shivramlab.com/facerec/abhay-palak", "_blank");
};

function Shagun() {
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Shagun Ceremony</h1>
          <p className="subtitle">Blessings and Good Omens</p>
          <div className="separator"></div>
          <p className="description">
            The Shagun ceremony marked the formal acceptance of our union, with
            the exchange of gifts and blessings from elders.
          </p>
          <div className="trailer-container">
            <iframe
              src="https://www.youtube.com/embed/7k2VW3CzqRo"
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
              src="https://www.youtube.com/embed/eMo6EOpBnjI"
              width="640"
              height="360"
              allow="autoplay"
              className="trailer-video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <Gallery images={shagunPhotos} />
          <div className="separator"></div>
          <div className="google-drive-btn-container">
            <button
              className="google-drive-btn"
              onClick={fetchCompletePhotoAlbumSetOne}
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
              View Our Complete Photo Album Set 1
            </button>

            <button
              className="google-drive-btn"
              onClick={fetchCompletePhotoAlbumSetTwo}
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
              View Our Complete Photo Album Set 2
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

export default Shagun;
