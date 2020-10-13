export default (state = [], action) => {
  console.log(`inside reducer with action.type = '${action.type}'`)

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      // need to return a filtered list of quotes 
      // minus the one we want to delete
      return [...state, action.quote]
    default:
      return state;
  }

}
