import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Loading from './loading.js';
import ErrorM from './error.js';

const Link = require('react-router').Link;

class Detail extends Component {
  constructor(props){
    super(props);
    var data = this.props.location.query;

    this.state = {
        title: data.title,
        year: data.year,
        poster: data.poster,
        imdbID: data.imdbID,
        plot: null,
    }

  }
  componentDidMount() {
    this.setState({isLoading: false})
    fetch(`http://omdbapi.com/?i=${this.state.imdbID}&apikey=69931bf9 `)
      .then(response => {
        response.json().then(data => {
          console.log(data.Plot)
          this.setState({plot: data.Plot});
        });
      }).catch(error => {
        this.setState({plot: null});
      });
  }
  render(){
    return(
      <div className="wrapper">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="detail">
          <div className="detail_pic">
            <img src={this.state.poster} className="img" alt="NotFound"/>
          </div>
          <div className="detail_text">
            <div className="detail_title">{this.state.title}</div>
            <div className="detail_year">Year: {this.state.year}</div>
            <div className="detail_plot">Plot:</div><br/>
            <div className="detail_plot">{this.state.plot != 'N/A' ? this.state.plot : 'NotFound'}</div>

          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
  )};
}

export default Detail;