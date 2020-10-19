export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(q=>q.id!==action.quoteId)
    case 'UPVOTE_QUOTE':
      ///find quote ~ if has votes increment 1 else give it votes
      ///quote is in an array I need to take it out of the array and manipulate it then put it back into the array
      let ui = state.findIndex(q=>q.id===action.quoteId)
      ///get the object out of the array
      let uq = state[ui]
      /// make a new object
      let popQ = Object.assign({},uq,{votes: uq.votes +=1})
      /// return state while changing current q in state to newQ
      console.log(...state.slice(0,ui),popQ,...state.slice(ui+1))
      // let nst = [...state.slice(0,ui),popQ,...state.slice(ui+1)]
      return 
      
    case 'DOWNVOTE_QUOTE':
      ///do above backwards
      let di = state.findIndex(q=>q.id===action.quoteId)
      let dq = state[di]
      let unPopQ = Object.assign({},dq,{votes: dq.votes-=1})
      
      return([...state.slice(0,di),unPopQ,...state.slice(di+1)])
  
    default:
      return state;
  }
}
