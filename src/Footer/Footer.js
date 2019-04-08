import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../NavBar/logo.jpg";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-links-container">
          <img src={logo} height="40" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="address-container">
          <h5>Address</h5>
          <p>2025 GELLERT BLVD STE 200 </p>
          <p>Daly City, CA 94015, US</p>
          <a href="tel:6504491378">650-449-1378</a>
        </div>
        <div className="social-media-links">
          <a
            href="https://www.yelp.com/biz/taste-of-burma-daly-city"
            alt="yelp"
          >
            <i class="fab fa-yelp" />
          </a>
          <a href="https://www.facebook.com/Taste-of-Burma-189054182036844/">
            <i class="fab fa-facebook-f" />
          </a>
        </div>

        <div className="tag-line">© 2019 Taste of Burma</div>
      </footer>
    );
  }
}

export default Footer;
