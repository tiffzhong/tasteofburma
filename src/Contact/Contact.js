import React, { Component } from "react";
import "./Contact.scss";
import NavBar from "../NavBar/NavBar";
import Hours from "../Hours/Hours";
class Contact extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="contact-form-container">
          <h1>Get in Touch</h1>
          <form>
            <h4>Full Name</h4>
            <input />
            <h4>Email</h4>
            <input />
            <h4>Message</h4>
            <textarea />
            <button>Send Message</button>
          </form>
        </div>
        <div className="hours-and-map-container">
          <Hours />
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                // width="524"
                // height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=taste%20of%20burma&t=&z=15&ie=UTF8&iwloc=&output=embed"
                // frameborder="0"
                scrolling="no"
                // marginheight="0"
                // marginwidth="0"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
