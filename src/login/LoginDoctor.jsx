import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

export default class LoginDoctor extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 mt-5">
        <form className="form-signin" method="post">
          <h1 className="h1 font-weight-normal text-warning">Sign in for doctor</h1>
          <input
            name="mail"
            type="email"
            id="doctorEmail"
            className="form-control mb-2"
            placeholder="Login"
            required
          />
          <input
            name="password"
            type="password"
            id="doctorPassword"
            className="form-control mb-2"
            placeholder="Password"
            required
          />
          <button id="submitDoctor" className="btn btn-lg btn-warning btn-block mt-2" type="submit">Sign in</button>
          <div className="text-dark">
Don&apos;t have and account?
            <Link to="/register" className="badge badge-pill badge-info">Sign up</Link>
          </div>
        </form>
      </div>
    );
  }
}