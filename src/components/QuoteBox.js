import React from 'react';

import '../styles/base.css';

function QuoteBox(props) {
  let tweetText = "'" + props.quote + "' - " + props.author;
  let tweetLink = 'https://twitter.com/intent/tweet?text=' + tweetText;
  return (
    <div className='container-fluid quoteBox'>
      <blockquote className='blockquote'>
        <p className='mb-0'>{props.quote}</p>
        <footer className='blockquote-footer'>{props.author}</footer>
      </blockquote>
      <a className='btn btn-default pull-left' href={tweetLink} type='submit'>
        <i className='fa fa-twitter'> Tweet</i>
      </a>
      <button className='btn btn-default pull-right' type='submit'>New Quote</button>
    </div>
  )
}

QuoteBox.propTypes = {
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}

export default QuoteBox;
