import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    id: uuid(),
    content: '',
    author:  ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    switch (event.target.name) {
      case 'content':
        this.setState({
          ...this.state,
          content: event.target.content
        })
        break;
      case 'author':
        this.setState({
          ...this.state,
          author: event.target.author
        })
        break;
      default:
        break;
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let q = this.state
    this.props.addQuote(q)
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        name='content'
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name='author'
                        onchange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapDispatchToProps = dispatch => ({
  addQuote: formData => dispatch(addQuote(this.state))
})
export default connect(mapDispatchToProps)(QuoteForm);


// export default connect(null, mapDispatchToProps)(CreateTodo);