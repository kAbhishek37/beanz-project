import React, { Component } from "react";
import "../cssofcomponents/coffee.css";

class Coffee extends Component {
  state = {};
  render() {
    const multifield = [this.props.value.multifield];
    var obj = [];
    Object.keys(multifield).map(function (item) {
      obj = multifield[item];
      //console.log(obj);
      //console.log(multifield[item]);
    });
    //console.log(obj);
    return (
      <div className="coffeecon mt-5">
        <img src={this.props.value.coffeeimg} width="70%" height="280px" />
        <ul className="ulmargin">
          {Object.keys(obj).map((oneItem) => (
            //console.log(obj[oneItem].coffeetitle);
            <div key={obj[oneItem].coffeetitle} className="coffee-card">
              <h2 className="coffee-title">{obj[oneItem].coffeetitle}</h2>
              <p className="coffee-desc">{obj[oneItem].coffeedesc}</p>
            </div>
          ))}
        </ul>
        <a href={this.props.value.pageURL} target="blank">
          <button className="beanbtn mt-5">Learn more about coffee</button>
        </a>
      </div>
    );
  }
}

export default Coffee;
