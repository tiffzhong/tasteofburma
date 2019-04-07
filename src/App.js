import React, { Component } from "react";
import "./reset.scss";
import routes from "./routes";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
