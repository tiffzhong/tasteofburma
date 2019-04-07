import React, { Component } from "react";
import "./Menu.scss";
import NavBar from "../NavBar/NavBar";
class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        {" "}
        <NavBar />
        Menu
      </div>
    );
  }
}

export default Menu;
