
export default function(state = [], action) {
  let index;
  let quote;


  switch(action.type) {
    case 'ADD_QUOTE': 
    return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      index = action.quoteId;
      return state.filter(i => i.id !== index)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index]
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if(quote.votes > 0) {
        return [
          ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes -= 1 }),
        ...state.slice(index + 1)
        ]
      }
      else {
        return state;
      }
      
      default:
        return state;
    }
    
}
