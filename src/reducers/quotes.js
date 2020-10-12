export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      // need to return a filterd list of quotes minus the one we want to delete
      idx = state.findIndex(quote => quote.id === action.quoteId)
      
      return [...state.slice(0, idx), state.slice(idx + 1)]
    default:
      return state;
  }

}
