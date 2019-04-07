import React, { Component } from "react";
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
        <img src={one} alt="gallery-image" />
        <img src={two} alt="gallery-image" />
        <img src={three} alt="gallery-image" />
        <img src={four} alt="gallery-image" />
        <img src={five} alt="gallery-image" />
        <img src={six} alt="gallery-image" />
        <img src={seven} alt="gallery-image" />
        <img src={eight} alt="gallery-image" />
        <img src={nine} alt="gallery-image" />
        <img src={ten} alt="gallery-image" />
        <img src={eleven} alt="gallery-image" />
        <img src={twelve} alt="gallery-image" />
        <img src={thirteen} alt="gallery-image" />
        <img src={fourteen} alt="gallery-image" />
        <img src={fifteen} alt="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;
