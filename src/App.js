import React, { Component } from "react";
import "./reset.scss";
import routes from "./routes";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
