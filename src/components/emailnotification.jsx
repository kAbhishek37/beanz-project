import React, { Component } from "react";
import "../cssofcomponents/emailnotification.css";

class EmailNotification extends Component {
  state = {};
  render() {
    return (
      <div className="enmaincon container-fluid pt-4 mb-0">
        <div className="row">
          <div className="entitle col-sm-5">
            <h3>Keen for more Beanz info?</h3>
          </div>
          <div className="enright col-sm-6">
            <form action="">
              <input
                type="text"
                name=""
                placeholder="Email address (Required)"
                className="emailnotemailfield"
              />
              <input
                type="button"
                value="sign Up"
                className="emailnotemailsubmit"
              />
            </form>
          </div>
        </div>
        <div className="emailnotrow2">
          <p>
            Get emails from Beanz about special offers, new roasters and other
            news. You can unsubscribe at any time. View Beanz{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default EmailNotification;
