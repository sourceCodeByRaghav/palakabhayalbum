import React from "react";
import Gallery from "../components/Gallery";

const engagementPhotos = [
  `${process.env.PUBLIC_URL}/images/engagement/1.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/2.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/3.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/4.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/5.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/6.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/7.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/8.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/9.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/10.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/11.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/12.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/13.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/14.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/15.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/16.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/17.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/18.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/19.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/20.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/21.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/22.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/23.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/24.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/25.jpg`,
  `${process.env.PUBLIC_URL}/images/engagement/26.jpg`,
];

function Engagement() {
  const handleGoogleDriveClick = () => {
    window.open(
      "https://drive.google.com/drive/folders/17Uu5R307ViTyQRfk3LbL76RfovJvfVsz?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">Our Engagement</h1>
          <p className="subtitle">The Moment We Said Yes</p>
          <div className="separator"></div>
          <p className="description">
            Our engagement was an intimate moment where we promised to love,
            support, and cherish each other for a lifetime.
          </p>
          <div className="trailer-container">
            <iframe
              src="https://drive.google.com/file/d/1AUc9DizoJYXG3hzQp78ozZJAnA9Secur/preview"
              width="640"
              height="360"
              allow="autoplay"
              className="trailer-video"
            ></iframe>
          </div>
          <div className="trailer-container">
            <iframe
              src="https://drive.google.com/file/d/1xc7jF-3rVTYaUK25qQWdvJfFyNixD9mg/preview"
              width="640"
              height="360"
              allow="autoplay"
              className="trailer-video"
            ></iframe>
          </div>
          <Gallery images={engagementPhotos} />
          <div className="separator"></div>
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
    </div>
  );
}

export default Engagement;
