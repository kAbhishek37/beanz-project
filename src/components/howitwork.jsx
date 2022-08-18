import React, { Component } from "react";
import "../cssofcomponents/howitwork.css";
class HowItWork extends Component {
  state = {};
  render() {
    const howitworkmultifield = [this.props.value.howitworkmultifield];
    var obj = [];
    Object.keys(howitworkmultifield).map(function (item) {
      obj = howitworkmultifield[item];
      //console.log(howitworkmultifield[item]);
    });

    return (
      <div className="container mt-5 mb-5">
        <div className="cards-wrapper hiwcon row">
          {Object.keys(obj).map((oneItem) => (
            <div
              key={obj[oneItem].title}
              className="card hiwcard h-100 col-sm-4 col-md-3"
            >
              <img
                src={obj[oneItem].linkURL}
                className="card-img-top mx-auto hiwimage h-30"
                alt="..."
              />
              <div className="card-body hiwcardbody h-70">
                <h5 className="card-title">{obj[oneItem].title}</h5>
                <p className="card-text hiwtext">
                  {obj[oneItem].testdescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HowItWork;
