import React, { Component } from "react";
import "../cssofcomponents/heading.css";
class Heading extends Component {
  state = {};
  render() {
    return <h1 className="headintitle m-5">{this.props.value["jcr:title"]}</h1>;
  }
}

export default Heading;
