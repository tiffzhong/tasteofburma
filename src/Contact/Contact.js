import React, { Component } from "react";
import "./Contact.scss";
class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-form-container">
          <h1>Get in Touch</h1>
          Full Name
          <input />
          Email
          <input />
          Message
          <textarea />
          <button>Send Message</button>
        </div>
        <div className="hours-and-map-container">
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
      </>
    );
  }
}

export default Contact;
