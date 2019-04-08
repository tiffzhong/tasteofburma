import React, { Component } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import logo from "../NavBar/logo.jpg";
import Gallery from "../Gallery/Gallery";
const headerTop = {
  background: "transparent"
};
const headerScroll = {
  background: "gold",
  transition: "background-color 1s ease 0s"
};
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
      const isTop = window.scrollY < 400;
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
        {this.state.isTop ? (
          <div className="navigation-landing" style={headerTop}>
            <Link to="/">
              <img src={logo} height="40" alt="logo" />
            </Link>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="tel:">Call</a>
            </div>
          </div>
        ) : (
          <div className="navigation-landing" style={headerScroll}>
            <Link to="/">
              <img src={logo} height="40" alt="logo" />
            </Link>
            <div className="links">
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
        <div className="second-view">
          <i class="far fa-clock" />

          <h2>Business Hours</h2>
          <div className="hours">
            <ul>
              <li>
                <div className="business-hours-day">Monday</div>
                <div className="hours-line" />
                <div className="business-hours-time">Closed</div>
              </li>
              <li>
                <div className="business-hours-day">Tuesday</div>
                <div className="hours-line" />
                <div className="business-hours-time">
                  11:00am – 02:30pm, 05:00pm – 09:00pm
                </div>
              </li>
              <li>
                <div className="business-hours-day">Wednesday</div>
                <div className="hours-line" />
                <div className="business-hours-time">
                  11:00am – 02:30pm, 05:00pm – 09:00pm
                </div>
              </li>
              <li>
                <div className="business-hours-day">Thursday</div>
                <div className="hours-line" />
                <div className="business-hours-time">
                  11:00am – 02:30pm, 05:00pm – 09:00pm
                </div>
              </li>
              <li>
                <div className="business-hours-day">Friday</div>
                <div className="hours-line" />
                <div className="business-hours-time">
                  11:00am – 02:30pm, 05:00pm – 09:00pm
                </div>
              </li>
              <li>
                <div className="business-hours-day">Saturday</div>
                <div className="hours-line" />
                <div className="business-hours-time">11:00am – 09:30pm</div>
              </li>
              <li>
                <div className="business-hours-day">Sunday</div>
                <div className="hours-line" />
                <div className="business-hours-time">11:00am – 09:00pm</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="third-view">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default Landing;
