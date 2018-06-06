import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import Footer from './footer.js';

class Loading extends Component {
    render(){
        return(
            <div className="wrapper">
                <div className="navbar">
                  <Navbar />
                </div>
                <div className="home_page">
                  <p className="home_text">Loading...</p>
                </div>
                <div className="footer">
                  <Footer />
                </div>
            </div>
        )
    }
}
export default Loading
