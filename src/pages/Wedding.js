import React from "react";
import Gallery from "../components/Gallery";

function Wedding() {
  const photos = [
    `${process.env.PUBLIC_URL}/images/wedding/1/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/21.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/22.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/19.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/20.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/9.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/10.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/11.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/12.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/13.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/14.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/15.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/16.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/17.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/1/18.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/9.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/10.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/11.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/2/12.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/9.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/10.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/11.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/3/12.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/9.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/4/10.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/5/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/5/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/5/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/5/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/5/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/5/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/6/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/6/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/6/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/6/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/6/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/6/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/9.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/10.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/11.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/12.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/13.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/7/14.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/8/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/1.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/2.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/3.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/4.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/5.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/6.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/7.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/8.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/9.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/10.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/11.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/12.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/13.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/14.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/15.jpg`,
    `${process.env.PUBLIC_URL}/images/wedding/9/16.jpg`,
  ];
  const fetchCompletePhotoAlbumSetOne = () => {
    window.open(
      "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/7-candid-wedding1",
      "_blank"
    );
  };

  const fetchCompletePhotoAlbumSetTwo = () => {
    window.open(
      "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/8-candid-wedding2-jpeg",
      "_blank"
    );
  };

  const fetchCompletePhotoAlbumSetThree = () => {
    window.open(
      "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/9-wedding-jaspal",
      "_blank"
    );
  };

  const fetchCompletePhotoAlbumSetFour = () => {
    window.open(
      "https://gallery.shivramlab.com/view/139m6t1kl3/abhay-palak/10-wedding-gurpreet",
      "_blank"
    );
  };

  const fetchPersonalPhotoCollection = () => {
    window.open("https://gallery.shivramlab.com/facerec/abhay-palak", "_blank");
  };
  return (
    <div className="love-story-container">
      <div className="love-story-content">
        <h1 className="title">Our Wedding Day</h1>
        <p className="subtitle">Two Hearts, One Love</p>
        <div className="separator"></div>
        <p className="description">
          The most special day of our lives, where we unite in marriage and
          begin our journey together.
        </p>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/tK0MSZsottw"
            width="640"
            height="360"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/ohqxfmSj5JA"
            width="640"
            height="360"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/HKERqn0bmgY"
            width="640"
            height="360"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/OJuN0-dvN88"
            width="640"
            height="360"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="trailer-container">
          <iframe
            src="https://www.youtube.com/embed/IYfi3jXr59c"
            width="640"
            height="360"
            className="trailer-video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <Gallery images={photos} />
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
            className="google-drive-btn"
            onClick={fetchCompletePhotoAlbumSetThree}
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
            View Our Complete Photo Album Set 3
          </button>

          <button
            className="google-drive-btn"
            onClick={fetchCompletePhotoAlbumSetFour}
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
            View Our Complete Photo Album Set 4
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

export default Wedding;
