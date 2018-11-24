import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from './container/navbar/Navbar';
import Home from './container/home/Home';

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true,
      whatPath: null
    };
  }

  setPath = (arg) => {
    this.setState({
      Path: arg
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar isLogged={this.state.isLogged} Path={this.state.whatPath} setPath={this.setPath} />
        {/* <Switch>
          <Route path="/" component={Home} exact />
        </Switch> */}
      </BrowserRouter>
    );
  }
}