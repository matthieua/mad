import React, { Component } from "react";
import "./Background.css";

export default class Background extends Component {
  imagePath() {
    return `/images/illustrations/${this.props.page}.png`;
  }

  render() {
    return (
      <div className="background">
        <img src={this.imagePath()} alt={this.props.page} />
      </div>
    );
  }
}
