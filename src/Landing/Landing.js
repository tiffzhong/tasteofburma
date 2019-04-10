import React, { Component } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import logo from "../NavBar/logo.jpg";
import Gallery from "../Gallery/Gallery";
import Hours from "../Hours/Hours";
const headerTop = {
  background: "transparent"
};
const headerScroll = {
  background: "#AD463D",
  transition: "background-color 1s ease 0s"
};
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      isTop: true,
      toggle: false
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 400;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }
  toggle = () => {
    this.setState(p => {
      return {
        toggle: !p.toggle
      };
    });
  };
  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <div className="landing-container">
        {this.state.isTop ? (
          <div className="navigation-landing" style={headerTop}>
            <Link to="/">
              <img src={logo} height="40" alt="logo" />
            </Link>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="tel:6504491378">Call</a>
            </div>
          </div>
        ) : (
          <div className="navigation-landing" style={headerScroll}>
            <Link to="/">
              <img src={logo} height="40" alt="logo" />
            </Link>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="tel:">Call</a>
            </div>
          </div>
        )}

        <div className="first-view">
          <h1>Taste of Burma</h1> <h6>Welcome!</h6>
        </div>
        <Hours />
        <div className="third-view">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default Landing;
