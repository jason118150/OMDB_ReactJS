import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const Link = require('react-router').Link;



class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      year: "",
      type: "Series",
    }
    this.handleTitle=this.handleTitle.bind(this);
    this.handleYear=this.handleYear.bind(this);
    this.handleType=this.handleType.bind(this);
    this.submitHandler=this.submitHandler.bind(this);
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleYear(event) {
    console.log(event.target.value)
    this.setState({
      year: event.target.value
    });
  }
  handleType(event) {
    this.setState({
      type: event.target.value
    });
  }

  submitHandler(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="title" className="form_label">
          Title
          <input id="title" type="text" value={this.state.title} onChange={this.handleTitle} className="form_input" />
        </label>
        <label htmlFor="year" className="form_label">
          Year
          <input id="year" type="text" value={this.state.year} onChange={this.handleYear} className="form_input"/>
        </label>
        <select value={this.state.type} onChange={this.handleType} className="form_input">
          <option value="series">Series</option>
          <option value="movie">Movie</option>
        </select>
        <Link to={{
            pathname: '/result',
            query: {title: this.state.title, year: this.state.year, type: this.state.type}
        }}>
          <button type="submit">Search</button>
        </Link>
      </form>

    );
  }
}
export default Form;
