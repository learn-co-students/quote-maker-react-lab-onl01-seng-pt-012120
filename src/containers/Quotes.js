import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote, removeQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  constructor(props) {
    super(props)
    this.quoteModifier = this.quoteModifier.bind(this)
  }

  quoteModifier(event) {
    const value = event.target.innerText
    const quoteId = event.target.parentElement.id
    if (value === 'Upvote') {
      this.props.modifyQuote(upvoteQuote(quoteId))
    } else if (value === 'Downvote'){
      this.props.modifyQuote(downvoteQuote(quoteId))
    } else {
      this.props.modifyQuote(removeQuote(quoteId))
    }
  }
  
  // quoteRemover(event) {
  //   const quoteId = event.target.parent.id
  //   this.props.modifyQuote(removeQuote(quoteId))
  // }

  // quoteUpvoter(event) {
  //   const quoteId = event.target.parent.id
  //   this.props.modifyQuote(upvoteQuote(quoteId))
  // }

  // quoteDownvoter(event) {
  //   const quoteId = event.target.parent.id
  //   this.props.modifyQuote(downvoteQuote(quoteId))
  // }

  render() {
    const renderQuotes = this.props.quotes.map((quote, indx) => (
      <QuoteCard
       key={indx} 
       quote={quote}
       removeQuote={this.quoteModifier}
       upvoteQuote={this.quoteModifier}
       downvoteQuote={this.quoteModifier}
      />
      ))
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
              {renderQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    quotes: state.quotes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    modifyQuote: action => dispatch(action)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
