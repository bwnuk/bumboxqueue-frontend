import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Register.scss';

export default class RegisterDoctor extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 mt-5">
        <form className="form-signin" method="post">
          <h1 className="h1 font-weight-normal text-warning">Register as doctor</h1>

          <input
            name="name"
            type="text"
            id="doctorName"
            className="form-control mb-2"
            placeholder="Name"
            required
          />
          <input
            name="surname"
            type="text"
            id="doctorSurname"
            className="form-control mb-2"
            placeholder="Surname"
            required
          />
          <input
            name="pesel"
            type="text"
            id="doctorPesel"
            className="form-control mb-2"
            placeholder="Pesel"
            required
          />
          <select
            name="gender"
            type="text"
            id="doctorGender"
            className="form-control mb-2"
            placeholder="Gender"
            required
          >
            <option value="MAN">MAN</option>
            <option value="WOMAN">WOMAN</option>
          </select>

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
          <input
            name="conf_password"
            type="password"
            id="doctorPassword_conf"
            className="form-control mb-2"
            placeholder="Confirm Password"
            required
          />
          <button id="submitDoctor" className="btn btn-lg btn-warning btn-block mt-2" type="submit">Sign up</button>
          <div className="text-dark">
Already have an account? &nbsp;
            <Link to="/login" className="badge badge-pill badge-info">Login</Link>
          </div>
        </form>
      </div>
    );
  }
}