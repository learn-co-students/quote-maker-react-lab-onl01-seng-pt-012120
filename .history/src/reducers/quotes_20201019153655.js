export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(q=>q.id!==action.quote.id)
    case 'UPVOTE_QUOTE':
      ///find quote ~ if has votes increment 1 else give it votes
      console.log(state.findIndex(q=>q.id===action.quoteId))
      let q = state.filter(q=>q.id===action.quoteId)
      
      return 
    case 'DOWNVOTE_QUOTE':
      
      return{};
  
    default:
      return state;
  }
}
