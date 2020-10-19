
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {id:action.payload.id,quote:action.payload.quote,author:action.payload.author}
    default:
      return state;
  }

}
