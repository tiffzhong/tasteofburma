import React, { Component } from "react";
import "./Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="524"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=taste%20of%20burma&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
