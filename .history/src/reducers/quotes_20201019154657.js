export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(q=>q.id!==action.quoteId)
    case 'UPVOTE_QUOTE':
      ///find quote ~ if has votes increment 1 else give it votes
      ///quote is in an array I need to take it out of the array and manipulate it then put it back into the array
      let i = state.findIndex(q=>q.id===action.quoteId)
      ///get the object out of the array
      let q = state[i]
      /// make a new object
      let popQ = Object.assign({},q,{votes: q.votes +=1})
      console.log(popQ)
      
      return 
    case 'DOWNVOTE_QUOTE':
      
      return{};
  
    default:
      return state;
  }
}
