import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const id = uuid();
      const q = action.payload;
      return {id:id,quote:q.quote,author:q.author}
  
    default:
      return state;
  }

}
