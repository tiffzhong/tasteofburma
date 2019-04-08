import React, { Component } from "react";
import "./About.scss";
import NavBar from "../NavBar/NavBar";
import headerImage from "./Images/a4.jpg";
import image1 from "./Images/a1.jpeg";
import image2 from "./Images/a2.jpeg";
import image3 from "./Images/a3.jpeg";
class About extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="about-container">
          <div className="about-header-container">
            <section className="text-about">
              <h1>We want to welcome you to our restaurant</h1>
              <div className="line-about" />
              <p>
                Welcome to Taste of Burma. Come and dine with us for your next
                meal!
              </p>
            </section>
            <section className="text-about-image">
              <img src={headerImage} alt="group" />
            </section>
          </div>
          <div className="gallery-about-container">
            <h1> Gallery</h1>

            <div>
              <img src={image1} alt="about" />
              <img src={image2} alt="about" />
              <img src={image3} alt="about" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
