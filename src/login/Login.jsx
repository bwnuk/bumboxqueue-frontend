import React, { Component } from 'react';

import './Login.scss';
import LoginPatient from './LoginPatient';
import LoginDoctor from './LoginDoctor';

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center row">
          <LoginPatient />
          <LoginDoctor />
        </div>
      </div>
    );
  }
}