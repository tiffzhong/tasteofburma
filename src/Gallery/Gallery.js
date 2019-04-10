import React from "react";
import "./Gallery.scss";
import one from "./GalleryImages/1.jpeg";
import two from "./GalleryImages/2.jpeg";
import three from "./GalleryImages/3.jpeg";
import four from "./GalleryImages/4.jpeg";
import five from "./GalleryImages/5.jpeg";
import six from "./GalleryImages/6.jpeg";
import seven from "./GalleryImages/7.jpeg";
import eight from "./GalleryImages/8.jpeg";
import nine from "./GalleryImages/9.jpeg";
import ten from "./GalleryImages/10.jpeg";
import eleven from "./GalleryImages/11.jpeg";
import twelve from "./GalleryImages/12.jpeg";
import thirteen from "./GalleryImages/13.jpeg";
import fourteen from "./GalleryImages/14.jpeg";
import fifteen from "./GalleryImages/15.jpeg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-image-container">
        <div className="image-box">
          <img src={one} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={two} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={three} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={four} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={five} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={six} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={seven} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={eight} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={nine} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={ten} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={eleven} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={twelve} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={thirteen} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={fourteen} alt="gallery" />
          <div className="overlay-image" />
        </div>
        <div className="image-box">
          <img src={fifteen} alt="gallery" />
          <div className="overlay-image" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
