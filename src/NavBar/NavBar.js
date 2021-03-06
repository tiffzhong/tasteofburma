import React, { Component } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }
  toggle = () => {
    this.setState(p => {
      return {
        toggle: !p.toggle
      };
    });
  };
  render() {
    const { toggle } = this.state;
    return (
      <nav>
        {toggle ? (
          <div className="drawerOpen">
            <button onClick={this.toggle}>&times;</button>

            <div className="nav-links">
              <Link to="/" onClick={this.toggle}>
                Home
              </Link>
              <Link to="/menu" onClick={this.toggle}>
                Menu
              </Link>
              <Link to="/about" onClick={this.toggle}>
                About
              </Link>
              <Link to="/contact" onClick={this.toggle}>
                Contact
              </Link>
            </div>
          </div>
        ) : (
          <div className="drawerHidden">
            <div>
              <Link to="/">
                <img src={logo} height="40" alt="logo" />
              </Link>
            </div>
            <button onClick={this.toggle}>&#9776;</button>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="tel:6504491378">Call</a>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
