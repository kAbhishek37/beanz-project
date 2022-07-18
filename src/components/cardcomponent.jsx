import React, { Component } from "react";
import "../cssofcomponents/cardcomponent.css";
//import "../cssofcomponents/cardcomponent.js";

class CardComponent extends Component {
  state = {};

  render() {
    const multifield = [this.props.value.multifield];
    var obj = [];
    Object.keys(multifield).map(function (item) {
      obj = multifield[item];
      console.log(multifield[item]);
    });
    return (
      <div className="cards-wrapper row cccon">
        {Object.keys(obj).map((oneItem) => (
          <div key={obj[oneItem].linkURL} className="card h-auto m-3 cccard">
            <img
              src={obj[oneItem].linkURL}
              className="card-img-top mx-auto ccimage"
              alt="..."
            />
            <div className="card-body ccbody">
              <h1 className="card-title cctitle">{obj[oneItem].title}</h1>
              <p className="card-text cctext">{obj[oneItem].subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardComponent;
