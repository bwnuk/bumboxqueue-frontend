import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserApi from '../api/UserApi';

import './Register.scss';

export default class RegisterPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      pesel: '',
      gender: 'MAN',
      confirmPassword: ''
    };
  }

  validateForm = () => this.state.username.length > 0 && this.state.password.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.pesel.length === 11 && this.state.gender.length > 0 && this.state.confirmPassword === this.state.password

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnChangeGender = (event) => {
    this.setState({
      gender: event.target.value
    });
  }

  createUserInputDto = () => {
    const userInputDto = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      pesel: this.state.pesel
    };
    return userInputDto;
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const userInputDto = this.createUserInputDto();
    UserApi.registration(this.state.username, this.state.password, userInputDto)
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <div className="col-12 col-md-6 mt-5">
        <form className="form-signin" onSubmit={this.handleOnSubmit}>
          <h1 className="h1 font-weight-normal text-primary">Register as a patient</h1>

          <input
            name="name"
            type="text"
            id="firstName"
            className="form-control mb-2"
            placeholder="Name"
            required
            onChange={this.handleOnChange}
          />
          <input
            name="surname"
            type="text"
            id="lastName"
            className="form-control mb-2"
            placeholder="Surname"
            required
            onChange={this.handleOnChange}
          />
          <input
            name="pesel"
            type="text"
            id="pesel"
            className="form-control mb-2"
            placeholder="Pesel"
            required
            onChange={this.handleOnChange}
          />
          <select
            name="gender"
            type="text"
            id="gender"
            className="form-control mb-2"
            placeholder="Gender"
            required
            onChange={this.handleOnChangeGender}
          >
            <option value="MAN">MAN</option>
            <option value="WOMAN">WOMAN</option>
          </select>

          <input
            name="username"
            type="text"
            id="username"
            className="form-control mb-2"
            placeholder="Login"
            required
            onChange={this.handleOnChange}
          />
          <input
            name="password"
            type="password"
            id="password"
            className="form-control mb-2"
            placeholder="Password"
            required
            onChange={this.handleOnChange}
          />
          <input
            name="conf_password"
            type="password"
            id="confirmPassword"
            className="form-control mb-2"
            placeholder="Confirm Password"
            required
            onChange={this.handleOnChange}
          />
          <div className="text-dark">
Already have an account? &nbsp;
            <Link to="/login" className="badge badge-pill badge-info">Login</Link>
          </div>
          <input id="submitDoctor" className="btn btn-lg btn-warning btn-block mt-2" type="submit" disabled={!this.validateForm()} value="Rejestruj się" />
        </form>
      </div>
    );
  }
}