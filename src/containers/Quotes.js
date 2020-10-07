import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote } from "../actions/quotes";
import { upvoteQuote } from "../actions/quotes";
import { downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  loadQuotes = () => {
    this.props.quotes.map((quote) => (
      <li>
        <QuoteCard
          details={quote}
          removeQuote={removeQuote(quote.id)}
          upvoteQuote={upvoteQuote(quote.id)}
          downvoteQuote={downvoteQuote(quote.id)}
        />
      </li>
    ));
  };

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
              {this.loadQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};
export default connect(mapStateToProps)(Quotes);
