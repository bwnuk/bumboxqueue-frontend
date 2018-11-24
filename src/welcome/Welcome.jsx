import React, { Component } from 'react';

import './Welcome.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center mt-5" id="headerpart">
          <div className="col">
            <h1>Welcome Page WIP</h1>
            <h4>
With our
              {' '}
              <span className="text-danger">queue management system</span>
              {' '}
we will solve all your problems with overextending queues.
            </h4>
            <div className="row mb-3 mt-5">
              <div className="col-12 col-md-7">
                <h1>Register on click</h1>
                <p className="lead">
You can register to your doctor with only
                  {' '}
                  <span className="text-danger">one click!.</span>
                </p>
              </div>
              <div className="col-12 col-md-5">
                <img className="img-fluid mx-auto" src="/src/images/list.jpg" alt="list" />
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <div className="col-12 col-md-7 order-md-2">
                <h1>Find quickest specialist</h1>
                <p className="lead">
Using our app allows you to connect to
                  {' '}
                  <span className="text-danger">quickest queue</span>
                  {' '}
for best specialist.
                </p>
              </div>
              <div className="col-12 col-md-5 order-md-1">
                <img className="img-fluid mx-auto" src="/src/images/doctor.jpg" alt="doctor" />
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <div className="col-12 col-md-7">
                <h1>Receive notification</h1>
                <p className="lead">
System will send you
                  {' '}
                  <span className="text-danger">notification </span>
                  {' '}
if spot becomes free.
                  {' '}
                </p>
              </div>
              <div className="col-12 col-md-5">
                <img className="img-fluid mx-auto" src="/src/images/queue.jpg" alt="queue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}