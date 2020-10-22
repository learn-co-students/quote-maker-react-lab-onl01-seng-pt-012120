
function quotes(state = [], action) {
  let idx;
  let q;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      q = state[idx]
      q.votes = q.votes + 1
      return [...state.slice(0, idx), q, ...state.slice(idx + 1)];
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      q = state[idx];
      if (q.votes > 0) {q.votes = q.votes - 1};
      return [...state.slice(0, idx), q, ...state.slice(idx + 1)];
    default:
      return state;
  }
}

export default quotes
