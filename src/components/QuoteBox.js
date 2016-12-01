import React from 'react';
import '../styles/base.css';

function QuoteBox(props) {
  return (
    <div className='container-fluid quoteBox'>
      <blockquote className='blockquote'>
      <p className='mb-0'> {props.quote} </p>
      <footer className='blockquote-footer'> {props.author} </footer>
      </blockquote>
      <button className='btn btn-default pull-left' type='submit'>Tweet</button>
      <button className='btn btn-default pull-right' type='submit'>New Quote</button>
    </div>
  )
}

QuoteBox.propTypes = {
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}

export default QuoteBox;
