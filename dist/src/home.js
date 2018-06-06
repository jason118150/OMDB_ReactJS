import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Form from './form.js';
import './index.css';
import './reset.css';
import Request from 'superagent';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="home_page">
          <p className="home_text">Let's find out...</p>
          <div className="home_find">
            <Form />
          </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    );
  }
}
export default Home;
