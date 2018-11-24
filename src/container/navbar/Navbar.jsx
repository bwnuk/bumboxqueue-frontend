import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <NavLink className="navbar-brand" exact to="/">Bumbox Queue</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" exact to="./home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="./profile">Profile</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" exact to="./login">Log in</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" exact to="./register">Sing up</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}