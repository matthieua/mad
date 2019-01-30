import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Background from "./Background";
import "./Fonts.sass";
import "./App.sass";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact={true}
          path="/"
          render={() => (
            <div>
              <Background page="tour" />
              <Header active="tour" />
              <div className="content">
                <h1>Tour dates</h1>
              </div>
            </div>
          )}
        />
        <Route
          exact={true}
          path="/mixes"
          render={() => (
            <div>
              <Background page="mixes" />
              <Header active="mixes" />
              <div className="content">
                <h1>Mixes</h1>
              </div>
            </div>
          )}
        />
        <Route
          exact={true}
          path="/equipment"
          render={() => (
            <div>
              <Background page="equipment" />
              <Header active="equipment" />
              <div className="content">
                <h1>Equipment</h1>
              </div>
            </div>
          )}
        />
        <Route
          exact={true}
          path="/testimonials"
          render={() => (
            <div>
              <Background page="testimonials" />
              <Header active="testimonials" />
              <div className="content">
                <h1>Testimonials</h1>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
