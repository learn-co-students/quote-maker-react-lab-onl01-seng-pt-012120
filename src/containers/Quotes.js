import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upVoteQuote, downVoteQuote } from '../actions/quotes.js'

class Quotes extends Component {

  renderQuotes = () => {
    return this.props.quotes.map( quote => <QuoteCard key={quote.id} quote={quote} removeQuote={removeQuote} upVoteQuote={upVoteQuote} downVoteQuote={downVoteQuote} /> )
  }

  render() {
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upVoteQuote, downVoteQuote })(Quotes);
// or if u comment out definition of mapStateToProps
// export default connect(state => ({quotes: state.quotes}))(Quotes);
