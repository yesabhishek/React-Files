import React, { Component } from "react";
import "./Header.css";
import "./MenuItems";
import { MenuItems } from "./MenuItems";
import Headroom from "react-headroom";
/* import { Button } from './Button'; */
import { NavLink, Switch } from "react-router-dom";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <Headroom>
        <header className="header">
          <a href="/" className="logo">
            <span className="logo-name">Something Cool!</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <Switch>
            <ul className={this.state.clicked ? "menu active" : "menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.url} className="menu">
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Switch>
        </header>
      </Headroom>
    );
  }
}

export default Header;
