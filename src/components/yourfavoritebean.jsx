import React, { Component } from "react";
import "../cssofcomponents/yourfavoritebean.css";
class YourFavoriteBean extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mt-5 mb-5 yfbmaincon">
        <h2 className="beanheading">{this.props.value.beanheading}</h2>
        <div className="row">
          <div className="col-sm-3.5 ml-4">
            <img
              className="beanimgleft w-100"
              src={this.props.value.leftimage}
            />
          </div>
          <div className="col-sm-5 row yfbcenterdiv">
            <div className="col-sm-5">
              <h4 className="yfbtitle">{this.props.value.lefttitle}</h4>
              <p className="favpara">{this.props.value.leftdesc}</p>
            </div>
            <div className="col-sm-2">
              <h1 className="favcenter">OR</h1>
            </div>
            <div className="col-sm-5">
              <h4 className="yfbtitle">{this.props.value.righttitle}</h4>
              <p className="favpara">{this.props.value.rightdesc}</p>
            </div>
          </div>
          <div className="col-sm-3.5">
            <img
              className="beanimgright w-100"
              src={this.props.value.rightimage}
            />
          </div>
        </div>
        <div className="beanbtndiv">
          <a href={this.props.value.linkURL} target="blank">
            {this.props.value.favbtntitle && (
              <button className="beanbtn">
                {this.props.value.favbtntitle}
              </button>
            )}
          </a>
        </div>
      </div>
    );
  }
}

export default YourFavoriteBean;
