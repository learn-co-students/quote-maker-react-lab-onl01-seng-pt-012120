export default (state = [], action) => {
  console.log(`inside reducer with ${action.type} action`)
  
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      console.log('hello')
      // need to return a filtered list of quotes minus the one we want to delete
      break
    default:
      return state;
  }

}
