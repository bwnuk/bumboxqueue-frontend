import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from './container/navbar/Navbar';
import Home from './container/home/Home';
import Login from './login/Login';
import Welcome from './welcome/Welcome';
import Profile from './profile/Profile';
import Register from './register/Register';

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
        <div>
          <Navbar isLogged={this.state.isLogged} Path={this.state.whatPath} setPath={this.setPath} />
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}