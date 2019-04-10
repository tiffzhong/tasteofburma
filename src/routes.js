import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Menu from "./Menu/Menu";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/menu" component={Menu} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
