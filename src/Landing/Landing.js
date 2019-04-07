import React, { Component } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import logo from "../NavBar/logo.jpg";
import Gallery from "../Gallery/Gallery";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <div className="landing-container">
        <div className="navigation-landing">
          Scroll {this.state.isTop ? "down" : "up"}
          <Link to="/">
            <img src={logo} height="40" alt="logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          Call
        </div>
        <div className="first-view">
          <h1>Taste of Burma</h1> <h6>Welcome!</h6>
        </div>
        <div className="second-view">
          <i class="far fa-clock" />
          <h2>Business Hours</h2>
          <p>Monday: Closed</p>
          <p>Tuesday: 11:00am – 02:30pm, 05:00pm – 09:00pm</p>
          <p>Wednesday: 11:00am – 02:30pm, 05:00pm – 09:00pm</p>
          <p>Thursday: 11:00am – 02:30pm, 05:00pm – 09:00pm</p>
          <p>Friday: 11:00am – 02:30pm, 05:00pm – 09:00pm</p>
          <p>Saturday: 11:00am – 09:30pm</p>
          <p>Sunday: 11:00am – 09:00pm</p>
        </div>
        <div className="third-view">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default Landing;
