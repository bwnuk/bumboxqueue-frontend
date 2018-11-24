import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from './container/navbar/Navbar';

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar isLogged={this.state.isLogged} />
      </BrowserRouter>
    );
  }
}