export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    // case "REMOVE_QUOTE":
    //   let newState = state.filter((quote) => quote.id !== quoteId);
    //   return newState;
    // case "UPVOTE_QUOTE":
    //   let quote = state.find((quote) => quote.id === quoteId);
    //   let newState = state.filter((quote) => quote.id !== quoteId);
    //   return newState;
    // case "DOWNVOTE_QUOTE":
    //   let quote = state.find((quote) => quote.id === quoteId);
    //   let newState = state.filter((quote) => quote.id !== quoteId);
    //   return newState;
    default:
      return state;
  }
};
