import React, { Component } from "react";
import "./Header.sass";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="content">
          <ul class="header__links">
            <li>
              <a href="#">Tour Dates</a>
            </li>
            <li className="active">
              <a href="#">Mixes</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Equipment</a>
            </li>
          </ul>
          <a href="/" className="logo__link">
            <img src="./images/logo.png" alt="DJ MAD" />
          </a>
          <ul className="header__contacts">
            <li>matt@delac.io</li>
          </ul>
        </div>
      </header>
    );
  }
}
