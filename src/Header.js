import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import "./Header.sass";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="content">
          <ul class="header__links">
            <li
              className={classNames({ active: this.props.active === "tour" })}
            >
              <Link to="/">Tour Dates</Link>
            </li>
            <li
              className={classNames({ active: this.props.active === "mixes" })}
            >
              <Link to="/mixes">Mixes</Link>
            </li>
            <li
              className={classNames({
                active: this.props.active === "testimonials"
              })}
            >
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li
              className={classNames({
                active: this.props.active === "exquipment"
              })}
            >
              <Link to="/equipment">Equipment</Link>
            </li>
          </ul>
          <Link to="/" className="logo__link">
            <img src="./images/logo.png" alt="DJ MAD" />
          </Link>
          <ul className="header__contacts">
            <li>matt@delac.io</li>
          </ul>
        </div>
      </header>
    );
  }
}
