import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const NavItem = (props) => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = (props.path === pageURI) ? 'nav-item active' : 'nav-item';
  return (
    <li className={liClassName}><NavLink className="nav-link" exact to={props.href}>{props.name}</NavLink></li>
  );
};

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
              <NavItem href="/home" name="Home" />
              <NavItem href="/profile" name="Profile" />
            </ul>
            <div className="form-inline mt-3 mt-sm-0 row d-flex justify-content-center">
              <NavLink className="nav-link btn btn btn-outline-warning m-1" exact to="./login">Log in</NavLink>
              <NavLink className="nav-link btn btn btn-outline-warning m-1" exact to="./register">Sign up</NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}