import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

export default class LoginPatient extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 mt-5">
        <form className="form-signin" method="post">
          <h1 className="h1 font-weight-normal text-primary">Sign in for user</h1>
          <input
            name="mail"
            type="email"
            id="patientMail"
            className="form-control mb-2"
            placeholder="Login"
            required
          />
          <input
            name="password"
            type="password"
            id="patientPassword"
            className="form-control mb-2"
            placeholder="Password"
            required
          />
          <button id="submitPatient" className="btn btn-lg btn-primary btn-block mt-2" type="submit">Sign in</button>
          <div className="text-dark">
Don&apos;t have and account?&nbsp;
            <Link to="/register" className="badge badge-pill badge-info">Sign up</Link>
          </div>
        </form>
      </div>
    );
  }
}