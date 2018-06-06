import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Movie from './movie.js';
import Loading from './loading.js';
import ErrorM from './error.js';
const Link = require('react-router').Link;


export default class Result extends Component{
  constructor(props){
    super(props);
    var data = this.props.location.query;
    this.state = {
        title: data.title,
        year: data.year,
        type: data.type,
        results: [],
        isLoading: true,
        numbers: 0,
        error: null,
    }
    fetch(` https://www.omdbapi.com/?i=tt3896198&apikey=69931bf9&s=${this.state.title}&y=${this.state.year}&type=${this.state.type}`)
      .then(response => {
        response.json().then(data => {
          console.log(data.Error);
          this.setState({results: data.Search,
                         numbers: data.totalResults,
                         error: data.Error});
        });
      }).catch(error => {
        this.setState({results: null});
      });
    console.log(this.state.error)
  }
  componentDidMount() {
    this.setState({isLoading: false})
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }
    if (this.state.error != null) {
      return (
        <div className="wrapper">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="home_page">
            <p className="home_text">{this.state.error}</p>
          </div>
          <div className="footer">
            <Footer />
        </div>
        </div>
      )
    }
    return (
      <div className="wrapper">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="search_title">
          <p>{this.state.numbers} {this.state.numbers > 10 ? '(only show 10)' : ''} of {this.state.type} "{this.state.title}" found in {this.state.year}</p>
        </div>
        <div className="movies">
          {this.results()}
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    );

  }
  results(){
    return this.state.results.map(result =>
      <Movie title={result.Title}
             year={result.Year}
             poster={result.Poster}
             imdbID={result.imdbID} />
    );
  }
}

