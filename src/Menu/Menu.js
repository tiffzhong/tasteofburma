import React, { Component } from "react";
import "./Menu.scss";
import NavBar from "../NavBar/NavBar";
class Menu extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="menu-container">
          <h1>Menu</h1>

          <div className="menu-header">
            <h2>Appetizers</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Paratha (Coconut Diced Chicken Sauce or Chana Dal with Potato
                  Sauce)
                </h5>
                <h5>6.99</h5>
              </div>
              <div className="line-break" />
              <p>
                multi-layer bread with choice of coconut diced chicken sauce or
                chana dal split bean and potato sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Baya-Kyaw (Falafel)</h5>
                <h5>5.99</h5>
              </div>
              <div className="line-break" />
              <p>
                deep-fried patty made from ground chickpeas/yellow split peas{" "}
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Paratha (Coconut Diced Chicken Sauce or Chana Dal with Potato
                  Sauce)
                </h5>
                <h5>6.99</h5>
              </div>
              <div className="line-break" />
              <p>
                multi-layer bread with choice of coconut diced chicken sauce or
                chana dal split bean and potato sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Paratha (Coconut Diced Chicken Sauce or Chana Dal with Potato
                  Sauce)
                </h5>
                <h5>6.99</h5>
              </div>
              <div className="line-break" />
              <p>
                multi-layer bread with choice of coconut diced chicken sauce or
                chana dal split bean and potato sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Paratha (Coconut Diced Chicken Sauce or Chana Dal with Potato
                  Sauce)
                </h5>
                <h5>6.99</h5>
              </div>
              <div className="line-break" />
              <p>
                multi-layer bread with choice of coconut diced chicken sauce or
                chana dal split bean and potato sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Paratha (Coconut Diced Chicken Sauce or Chana Dal with Potato
                  Sauce)
                </h5>
                <h5>6.99</h5>
              </div>
              <div className="line-break" />
              <p>
                multi-layer bread with choice of coconut diced chicken sauce or
                chana dal split bean and potato sauce
              </p>
            </div>
          </div>
        </div>

        <div className="menu-header">
          <h2>Salads</h2>
        </div>
        <div className="menu-header">
          <h2>Noodle Soups</h2>
        </div>
        <div className="menu-header">
          <h2>Soups (Vegetarian)</h2>
        </div>
        <div className="menu-header">
          <h2>Noodles</h2>
        </div>
        <div className="menu-header">
          <h2>Curries</h2>
        </div>
        <div className="menu-header">
          <h2>Stir Fry</h2>
        </div>
        <div className="menu-header">
          <h2>Chef Recommendations</h2>
        </div>
        <div className="menu-header">
          <h2>Rice</h2>
        </div>
        <div className="menu-header">
          <h2>Dessert</h2>
        </div>
        <div className="menu-header">
          <h2>Dessert Drinks</h2>
        </div>
        <div className="menu-header">
          <h2>Soda</h2>
        </div>
        <div className="menu-header">
          <h2>Beer</h2>
        </div>
        <div className="menu-header">
          <h2>Wine</h2>
        </div>
        <div className="menu-header">
          <h2>Featured Items</h2>
        </div>
        <div className="menu-header">
          <h2>Lunch Specials</h2>
        </div>
      </>
    );
  }
}

export default Menu;
