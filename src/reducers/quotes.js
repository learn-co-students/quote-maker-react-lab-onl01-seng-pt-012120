export default (state = [], action) => {
  let idx;
  let quote;
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId);
    
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId);
      quote = state[idx];
      return [
        ...state.slice(0, idx),
      Object.assign({}, quote, {votes: quote.votes += 1}),
      ...state.slice(idx + 1)
      ]
    
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId);
      quote = state[idx];
      let updatedQ;
      if (quote.votes > 0) {
        updatedQ = {
          ...quote,
          votes: quote.votes -= 1
        }
       }
      if (quote.votes === 0) {
        updatedQ = {
          ...quote
        }
      }
      return [
        ...state.slice(0, idx),
      updatedQ,
      ...state.slice(idx + 1)
      ];
      
    default:
      return state;
  }
}
