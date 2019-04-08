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
        <img src={one} alt="gallery" />
        <img src={two} alt="gallery" />
        <img src={three} alt="gallery" />
        <img src={four} alt="gallery" />
        <img src={five} alt="gallery" />
        <img src={six} alt="gallery" />
        <img src={seven} alt="gallery" />
        <img src={eight} alt="gallery" />
        <img src={nine} alt="gallery" />
        <img src={ten} alt="gallery" />
        <img src={eleven} alt="gallery" />
        <img src={twelve} alt="gallery" />
        <img src={thirteen} alt="gallery" />
        <img src={fourteen} alt="gallery" />
        <img src={fifteen} alt="gallery" />
      </div>
    </div>
  );
};

export default Gallery;
