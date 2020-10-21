import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {
                quotes.map((q, id) => <QuoteCard key={id} quote={q} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapState = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapState, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
