import React from "react";
import Gallery from "../components/Gallery";
import { useNavigate } from "react-router-dom";

function Haldi() {
  // const photos = [
  //   `${process.env.PUBLIC_URL}/images/haldi/1.jpg`,
  //   `${process.env.PUBLIC_URL}/images/haldi/2.jpg`,
  // ];
  // const handleGoogleDriveClick = () => {
  //   window.open('', '_blank');
  // };
  const navigate = useNavigate();

  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Haldi Ceremony</h1>
        <p className="subtitle">Blessings and Traditions</p>
        <div className="separator"></div>
        <p className="description">
          A sacred ceremony filled with love, blessings, and the traditional
          haldi (turmeric) that symbolizes purification and good luck.
        </p>
        <p className="subtitle">Boys's Side Moments</p>
        <div className="trailer-container">
          <iframe
            src={`${process.env.PUBLIC_URL}/videos/haldi/haldi.mp4`}
            width="640"
            height="360"
            allow="autoplay"
            className="trailer-video"
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/la1UH0qUAtU"
            width="640"
            height="360"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        {/* <Gallery images={photos} /> */}

        <p className="subtitle">Girl's Side Moments</p>
        <div className="separator"></div>

        <div className="google-drive-btn-container">
          <button
            className="google-drive-btn"
            onClick={() => navigate("/saint")}
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
            As the Bride's Haldi ceremony took place during the Saint ceremony,
            we invite you to relive those special moments under Girl's Side
            Moments' in the Saint section.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Haldi;
