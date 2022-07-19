import React, { Component } from "react";
import "../cssofcomponents/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footercon">
        <div className="footerlogocol">
          <a href="#">
            <img
              className="logoimg"
              src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/footer/master/_jcr_content/root/container/image.coreimg.svg/1655181228332/beanz-by-breville-logo-white.svg"
              width="100px"
              height="35px"
            />
          </a>
        </div>
        <br />
        <div className="footercolcon">
          <div className="footercol">
            Site
            <p className="footerbluemenu">
              <a href="#">Shop Coffee</a>
              <br />
              <a href="#">Our Roasters</a>
              <br />
              <a href="#">Barista's Choice</a>
              <br />
              <a href="#">Coffee Lowdown</a>
              <br />
              <a href="#">Our Story</a>
            </p>
          </div>
          <div className="footercol">
            Account
            <br />
            <p className="footerbluemenu">
              <a href="#">Roasters</a>
              <br />
              <a href="#">Control Center</a>
            </p>
          </div>
          <div className="footercol">
            Support
            <br />
            <p className="footerbluemenu">
              <a href="#">Contact Us</a>
              <br />
              <a href="#">Returns Policy</a>
              <br />
              <a href="#">Promotional</a>
              <br />
              <a href="#">Terms and Conditions</a>
            </p>
          </div>
          <div className="footercol">
            Follow Us
            <br />
            <p className="footerbluemenu">
              <a href="#">Facebook</a>
              <br />
              <a href="#">Instagram</a>
            </p>
          </div>
        </div>
        <div className="footercopyr">
          <p>
            © 2022 Breville USA, Inc. All rights reserved. |
            <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |
            <a href="#">Cookie Policy</a> |<a href="#">Social Responsibility</a>
            |<a href="#">Modern Slavery Act</a> | <a href="#">Site Map</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
