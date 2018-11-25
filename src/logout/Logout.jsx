import React, { Component } from 'react';
import { Redirect } from 'react-router';

import UserApi from '../api/UserApi';

export default class Logout extends Component {
  componentWillMount() {
    this.logout();
  }

  logout = () => {
    UserApi.logout();
    this.props.updateStateIsLogged();
  }

  render() {
    return <Redirect to="/" />;
  }
}