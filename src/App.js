import React, { Component } from "react";
import "./reset.scss";
import routes from "./routes";
import Footer from "./Footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
