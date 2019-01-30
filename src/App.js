import React, { Component } from "react";
import Header from "./Header";
import Background from "./Background";
import "./Fonts.sass";
import "./App.sass";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Background page="home" />
        <Header />
        <div className="content">
          <h1>Tour dates</h1>
        </div>
      </div>
    );
  }
}
