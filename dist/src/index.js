import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import Result from './result.js';
import Detail from './detail.js';
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const Link = require('react-router').Link;

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/result/:title" component={Detail} />
        </Router>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);