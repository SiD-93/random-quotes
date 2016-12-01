import React, { Component } from 'react';
import axios from 'axios';
import QuoteBox from '../components/QuoteBox';

class AppContainer extends Component{
  constructor() {
    super();
    this.state = {
      quote: 'Men are disturbed not by things, but by the view which they take of them.',
      author: 'Epictetus'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    axios.get('https://got-quotes.herokuapp.com/quotes')
    .then((response) => {
      this.setState({
        quote: response.data.quote,
        author: response.data.character
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <QuoteBox
        quote={this.state.quote}
        author={this.state.author}
        onClick={this.handleClick}
      />
    )
  }
}

export default AppContainer;
