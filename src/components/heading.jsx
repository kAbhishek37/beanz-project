import React, { Component } from "react";
class Heading extends Component {
  state = {};
  render() {
    return <h1 className="m-5">{this.props.value["jcr:title"]}</h1>;
  }
}

export default Heading;
