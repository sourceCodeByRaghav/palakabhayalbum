import React from "react";
import Gallery from "../components/Gallery";

function Home() {
  const photos = [
    `${process.env.PUBLIC_URL}/images/united-celebration/1.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/2.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/3.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/4.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/5.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/6.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/7.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/8.jpeg`,
    `${process.env.PUBLIC_URL}/images/united-celebration/9.jpeg`,
  ];
  return (
    <div className="page-container">
      <div className="love-story-container">
        <div className="love-story-content">
          <h1 className="title">
            The Sharma-Bhatia Gathering: Celebrating Our New Family
          </h1>
          <div className="separator"></div>
          <div className="trailer-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/videos/united-celebration/1.mp4`}
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
              src={`${process.env.PUBLIC_URL}/videos/united-celebration/3.mp4`}
              width="640"
              height="360"
              className="trailer-video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <Gallery images={photos} />
          <p className="description">
            If you have any birthday photos/ videos, please send them to
            raghav.writes@icloud.com. Thank you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
