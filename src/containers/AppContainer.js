import React, { Component } from 'react';
import QuoteBox from '../components/QuoteBox';

class AppContainer extends Component{
  constructor() {
    super();
    this.state = {
      quote: 'Men are disturbed not by things, but by the view which they take of them.',
      author: 'Epictetus'
    }
  }

  render() {
    return (
      <QuoteBox
        quote={this.state.quote}
        author={this.state.author}
      />
    )
  }
}

export default AppContainer;
