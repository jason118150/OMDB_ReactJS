import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const Link = require('react-router').Link;


class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      year: this.props.year,
      type: this.props.type,
      poster: this.props.poster,
      plot: this.props.plot,
      imdbID: this.props.imdbID,
      movie: [],
    }
    fetch(`https://omdbapi.com/?i=${this.imdbID}&apikey=69931bf9`)
      .then(response => {
        response.json().then(data => {
          this.setState({movie: data});
        });
      }).catch(error => {
        this.setState({movie: null});
      });
  }
  render() {
    return (
      <div className="movies_col">
        <img src={this.state.poster} className="movies_img" alt="NotFound"/>
        <Link to={{
            pathname: `/result/${this.state.imdbID}`,
            query: {title: this.state.title, year: this.state.year, type: this.state.type, poster: this.state.poster, plot: this.state.movie.Plot, imdbID: this.state.imdbID}
        }}>
          <p className="movies_text">({this.state.year}) {this.state.title}</p>
        </Link>
      </div>
    );
  }
}

export default Movie;