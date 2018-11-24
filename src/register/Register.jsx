import React, { Component } from 'react';
import {
  HelpBlock,
  FormGroup,
  FormControl,
  Button,
  ControlLabel
} from 'react-bootstrap';
import RegisterDoctor from './RegisterDoctor';
import RegisterPatient from './RegisterPatient';

import './Register.scss';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      confirmPassword: '',
      confirmationCode: '',
      newUser: null
    };
  }


  render() {
    return (
      <div className="container">
        <div className="text-center row">
          <RegisterPatient />
          <RegisterDoctor />
        </div>
      </div>
    );
  }
}