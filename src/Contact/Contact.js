import React, { Component } from "react";
import "./Contact.scss";
import Hours from "../Hours/Hours";
class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-form-container">
          <h1>Get In Touch</h1>

          <div>
            <h3>Call Us: </h3> <a href="tel:6504491378">650-449-1378</a>
          </div>
          <div>
            <h3>Email: </h3>{" "}
            <a href="mailto:tasteofburmadalycity@gmail.com">
              tasteofburmadalycity@gmail.com
            </a>
          </div>

          {/* <form>
            <h4>Full Name</h4>
            <input />
            <h4>Email</h4>
            <input />
            <h4>Message</h4>
            <textarea />
            <button>Send Message</button>
          </form> */}
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
