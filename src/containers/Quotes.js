import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';

class Quotes extends Component {

  handleRemove = (id) => {
    this.props.dispatch(removeQuote(id))
  }

  handleUpvote = (id) => {
    this.props.dispatch(upvoteQuote(id))
  }

  handleDownvote = (id) => {
    this.props.dispatch(downvoteQuote(id))
  }

  renderQuotes = () => {
    return this.props.quotes.map((q) => <QuoteCard quote={q} onRemove={() => this.handleRemove(q.id)} onUpvote={() => this.handleUpvote(q.id)} onDownvote={() => this.handleDownvote(q.id)} />)
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(Quotes);
