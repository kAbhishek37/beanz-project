import React, { Component } from "react";
import "../cssofcomponents/exploreimagebutton.css";
class ExploreImageButton extends Component {
  state = {};
  render() {
    return (
      <div className="explorediv mb-5">
        <img
          src={this.props.value.imagelinkURL}
          className="exploreimg"
          width="100%"
          height="430px"
        />
        <div className="explorecenter">
          <h2 className="exploreheading">{this.props.value.imagetitle}</h2>
          <p className="explorepara">{this.props.value.imagedesc}</p>
          <a href={this.props.value.pagelink} target="blank">
            {this.props.value.btntitle && (
              <button className="explorebtn">
                {this.props.value.btntitle}
              </button>
            )}
          </a>
        </div>
      </div>
    );
  }
}

export default ExploreImageButton;
