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
                <h6>6.99</h6>
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
                <h6>5.99</h6>
              </div>
              <div className="line-break" />
              <p>
                deep-fried patty made from ground chickpeas/yellow split peas{" "}
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Burmese Style Fried Onion
                </h5>
                <h6>5.99</h6>
              </div>
              <div className="line-break" />
              <p>
                deep fried yellow onion mixed with special flour paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Mandalay Style Fried Bean
                </h5>
                <h6>5.99</h6>
              </div>
              <div className="line-break" />
              <p>
                ground black bean powder mixed with special flours and spices
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Samusa
                </h5>
                <h6>5.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Triangle flour wrap filled with potatoes, onions and unique
                spices serve with house sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Tempura Shrimp
                </h5>
                <h6>5.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Deep fried tempura shrimp serve with house sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Keema Paratha
                </h5>
                <h6>7.99</h6>
              </div>
              <div className="line-break" />
              <p>
                In between two parathas filled with chef's special grounded chicken
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Yellow Tofu
                </h5>
                <h6>6.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Deep fried soft yellow tofu serves with house sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Dumpling (Pork / Chicken)
                </h5>
                <h6>5.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Wheat flour wrap, cabbage, onion, spices and garlic
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Fish Cracker
                </h5>
                <h6>3.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Deep fried fish cracker imported from Burma
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Salads</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Tea Leaf Salad
                </h5>
                <h6>10.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Burmese tea leaves, cabbage, tomatoes, fried garlic, fried yellow
                beans, sunflower seeds, peanuts and sesame seeds all mixed and
                serve with one slice lime
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Ginger Salad</h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Pickled ginger, cabbage, lettuce, tomato, fried yellow beans,
                sunflower seeds, peanuts and sesame seeds all mixed with tasty
                bean powder serve with one slice lime
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Mango Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Shredded pickle mangos mixed with cabbage, tomato, red onion,
                cucumber, carrot and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Rainbow Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Cabbage, rice noodle, egg noodle, cucumber, carrot, cilantro,
                fried potato, fried tofu, red onion and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Samusa Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                three samosas mixed with cabbage, red onion, mint, beans, unique
                spices and house-made special bean sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Baya-Kyaw Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                deep-fried falafel mixed with cabbage, red onion, beans, unique
                spices and house-made special bean sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Noodle Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Cabbage, egg noodle, cucumber, cilantro, fried potato, fried tofu,
                red onion and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Chicken Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                boiled diced chicken mixed with red onion, cabbage, cilantro and
                special sauces from the house
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Pork Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                sliced pork mixed with red onions, cabbage, cilantro and special
                sauces from the house
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Noodle Soaps</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Moh-Hingar
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                rich catfish soup include thin rice noodle and serve with
                hard-boiled egg, fried yellow peas, cilantro and one slice lime
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Ohn-Noh Kaut Swe</h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                creamy coconut diced chicken soup include yellow wheat flour
                noodle and serve with hard-boiled egg, red onion, fried wonton
                and one slice lime
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Soups (Vegetarian)</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Chana Dal Mixed Vegetable Soup
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                chana dal split bean, eggplant, okra, cauliflower, opo squash,
                potato cooked with house special tamarind soup
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Samusa Soup</h5>
                <h6>8.99</h6>
              </div>
              <div className="line-break" />
              <p>
                two samusa and one falafel cut into pieces then put in the house
                special soup with cabbage and mints
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Noodles (All Noodles will serve with House Special Chicken Broth)</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Nan Gyi Dok
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                thick rice vermicelli mixed with coconut diced chicken sauce,
                bean powder, red onion, cilantro, fried wonton and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Nan Pya Dok</h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                flat wheat flour noodle mixed with coconut diced chicken sauce,
                bean powder, red onion, cilantro, fried wonton and fried onion
                on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Garlic Noodle (Chicken / Pork / Tofu)
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                flour noodle mixed with fried dice garlic, soy sauce, green onion
                and your choice of meat
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Shan Noodle (Chicken / Tofu)
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                rice stick noodle mixed with spicy tomato house special sauce,
                chili black bean, preserved bean curd in chili oil, pickle
                radish and sesame seeds
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Golden Mountain Noodle (Chicken / Tofu)
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                flat wheat flour noodle mixed with diced chicken, egg, coconut
                cream sauce, serve with cilantro, red onion, and fried yellow
                wonton on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Pan Tay Noodle (Chicken)
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                chow mein noodle with house special sauce including egg, cabbage,
                tomato, red onion, masala
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Curries</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Tofu Curry
                </h5>
                <h6>8.99</h6>
              </div>
              <div className="line-break" />
              <p>
                soft tofu cook with house special tomato paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Pumpkin Curry</h5>
                <h6>8.99</h6>
              </div>
              <div className="line-break" />
              <p>
                pumpkin cook with house special curry paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Okra Egg Curry
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                okra and fried hard boil egg cook with green and red bell peppers,
                yellow onions and house special tomato paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Pork Curry
                </h5>
                <h6>10.99</h6>
              </div>
              <div className="line-break" />
              <p>
                pork and potato cook with house special curry paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Pumpkin Pork Curry
                </h5>
                <h6>10.99</h6>
              </div>
              <div className="line-break" />
              <p>
                pork and pumpkin cook with house special curry paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Chicken Curry
                </h5>
                <h6>10.99</h6>
              </div>
              <div className="line-break" />
              <p>
                chicken and potato cook with house special curry paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Lamb Curry
                </h5>
                <h6>14.99</h6>
              </div>
              <div className="line-break" />
              <p>
                lamb and potato cook with house special curry paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Prawn Curry
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                prawn cook with yellow onions, red and green bell peppers,
                cilantro and house special tomato curry paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Beef Curry
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                beef and potato cook with house special curry paste
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Stir Fry</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Vegetables
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                broccoli, snow peas, cabbage, cauliflower, carrot, mushroom,
                green bean and soft tofu cook with house special sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Tofu (Green Bean or Eggplant)</h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                stir fry with light fry tofu, green onions, red, green peppers
                and choice of Green Bean or Eggplant
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Shrimp (Green Bean or Eggplant)
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                stir fry with shrimp, green onions, red, green peppers and
                choice of Green Bean or Eggplant
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Mango (Chicken or Prawn)
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                diced mango stir fry with green onions, red, green peppers and
                choice of chicken or shrimp
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Pineapple (Chicken or Prawn)
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                diced pineapple stir fry with green onions, red, green peppers
                and choice of chicken or shrimp
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Chicken Kabat
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                deep fried catfish cook with garlic and onion paste, fried chili
                flakes, cilantro and house special chili paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fiery Spicy Fish
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                deep fried catfish cook with garlic and onion paste, fried chili
                flakes, cilantro and house special chili paste
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Saucy Spicy (Beef / Chicken / Fish)
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                stir fry with string beans, green and red peppers, yellow onion,
                dried chili, sriracha hot chili sauce, house special sweet
                sauce and choice of meat
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Saucy Spicy Shrimp
                </h5>
                <h6>13.99</h6>
              </div>
              <div className="line-break" />
              <p>
                stir fry shrimp with string beans, green and red peppers, yellow
                onion, dried chili, sriracha hot chili sauce and house special
                sweet sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Noodle (Chicken / Pork / Vegetarian)
                </h5>
                <h6>11.99</h6>
              </div>
              <div className="line-break" />
              <p>
                chow mein noodle with fried egg, cabbage, carrot, cauliflower,
                broccoli and choice of meat with house special sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Rice (Chicken / Pork / Shrimp / Vegetarian)
                </h5>
                <h6>11.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Jasmine rice fry with green pea, carrot, fried egg and your
                choice of meat
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Yellow Bean Fried Rice
                </h5>
                <h6>10.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Jasmine rice fry with yellow pea, red onions and fried egg
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Chef Recommendations</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Yellow Bean Paratha
                </h5>
                <h6>6.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Two paratha come with steam yellow bean as side dish
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Chicken Paratha</h5>
                <h6>8.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Two paratha come with chicken curry as side dish
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Vegetable Biryani
                </h5>
                <h6>10.99</h6>
              </div>
              <div className="line-break" />
              <p>
                biryani rice come with green peas, carrot, cashews, raisin and
                fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Pork Biryani
                </h5>
                <h6>6.99</h6>
              </div>
              <div className="line-break" />
              <p>
                biryani rice come with house special pork curry, cashews, ]
                raisin and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Chicken Biryani
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                biryani rice come with house special chicken curry, cashews,
                raisin and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Beef Biryani
                </h5>
                <h6>13.99</h6>
              </div>
              <div className="line-break" />
              <p>
                biryani rice come with house special beef curry, cashews, raisin
                and fried onion on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Lamb Biryani
                </h5>
                <h6>14.99</h6>
              </div>
              <div className="line-break" />
              <p>
                biryani rice come with house special lamb curry, cashews, raisin
                and fried onion on top
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Rice</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Jasmine Rice
                </h5>
                <h6>2</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Coconut Rice</h5>
                <h6>3</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Biryani Rice
                </h5>
                <h6>3</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Dessert</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Dessert of the Day
                </h5>
                <h6></h6>
              </div>
              <div className="line-break" />
              <p>
                Please ask server
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Dessert + Drinks</h2>
            <h3>
              Ask the server for availabilities. A refreshing milk drink flavored
              with rose syrup, egg pudding, a scoop of vanilla ice cream and tapioca
              pearls. Drinking Distilled Spirits, Beers, Coolers, Wines and other
               Alcoholic Beverages May Increase Cancer Risk, and During pregnancy,
               Can Cause Birth Defects
            </h3>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Burmese Milk Tea
                </h5>
                <h6>2</h6>
              </div>
              <div className="line-break" />
              <p>
                Everyday freshly brewed from Burmese sweet tea leaf mixed with
                condensed milk, evaporated milk and hot water
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Burmese Iced Milk Tea</h5>
                <h6>3</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Mango Lassi
                </h5>
                <h6>5</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Mango Pudding</h5>
                <h6>5</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Yogurt
                </h5>
                <h6>5</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>Grass Jelly Juice</h5>
                <h6>4</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Falouda
                </h5>
                <h6>6</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Soda $1</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Coke
                </h5>
                <h6></h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Diet Coke
                </h5>
                <h6></h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Sprite
                </h5>
                <h6></h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Beer</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Myanmar Beer
                </h5>
                <h6>4</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Heineken Beer
                </h5>
                <h6>3</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Modelo Beer
                </h5>
                <h6>3</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Tsingtao Beer
                </h5>
                <h6>3</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Wine</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Bottle
                </h5>
                <h6>20</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Glass
                </h5>
                <h6>5</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Featured Items</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Bean Vermicelli Soup
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                bean vermicelli chicken broth comes with dried mushroom, dried
                lily flower, tofu and boiled quail egg
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Hot Pot (Burmese Style)
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                rice vermicelli pork broth with green mustard, boiled quail egg,
                fish ball, pork meat ball and pork intestine with house special sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Tapioca Noodle Soup (Chicken, Pork)
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                tapioca starch, wheat flour noodle, egg, mushroom, garlic and
                your choice of meat
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Hta Min Paung (Chicken or Pork)
                </h5>
                <h6>11.99</h6>
              </div>
              <div className="line-break" />
              <p>
                steamed rice, tapioca starch, mushroom, napa cabbage, cauliflower,
                broccoli, carrot, cabbage, quail egg and your choice of meat
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Tea Leaf Rice Salad
                </h5>
                <h6>11.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Burmese tea leaf, steamed rice, tomato, fried garlic, fried
                yellow beans, peanut, sesame seeds
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Tea Leaf Fried Rice with Shrimp
                </h5>
                <h6>12.99</h6>
              </div>
              <div className="line-break" />
              <p>
                tea leaf, steamed rice, tomato, garlic, fried egg on top
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Vermicelli (Chicken, Pork, Shrimp)
                </h5>
                <h6>11.99</h6>
              </div>
              <div className="line-break" />
              <p>
                fried bean Vercelli with cabbage, carrot, cauliflower, broccoli
                and your choice of meat
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Fried Sour Leaf
                </h5>
                <h6>6.99</h6>
              </div>
              <div className="line-break" />
              <p>
                sour leaf, bamboo shoot, shrimp with house special sauce
              </p>
            </div>
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Yellow Tofu Salad
                </h5>
                <h6>9.99</h6>
              </div>
              <div className="line-break" />
              <p>
                Yellow tofu, cabbage, lime leaf, bean powder, tamarind powder
                and fried onion on top
              </p>
            </div>
          </div>

          <div className="menu-header">
            <h2>Lunch Specials</h2>
          </div>

          <div className="menu-item-container">
            <div className="food-items">
              <div className="item-name">
                <h5>
                  Rice with Curry (Chicken, Beef, Pork)
                </h5>
                <h6>8.99</h6>
              </div>
              <div className="line-break" />
              <p>

              </p>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Menu;
