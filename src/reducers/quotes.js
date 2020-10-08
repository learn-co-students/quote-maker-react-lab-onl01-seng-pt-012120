export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      let quoteRemoved = state.filter((quote) => quote.id !== action.quoteId);
      return [...quoteRemoved];
    case "UPVOTE_QUOTE":
      let quoteUp = state.find((q) => q.id === action.quoteId);
      quoteUp.votes = quoteUp.votes + 1
      let newState = state.filter((q) => q.id !== action.quoteId);
      return [...newState, quoteUp];
    case "DOWNVOTE_QUOTE":
      let quoteDown = state.find((q) => q.id === action.quoteId);
      if (quoteDown.votes > 0) {
        quoteDown.votes = quoteDown.votes - 1
      }
      let newStateD = state.filter((q) => q.id !== action.quoteId);
      return [...newStateD, quoteDown];
    default:
      return state;
  }
};
