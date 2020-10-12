// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  // console.log('u added a quote!')
  return {
    type: 'ADD_QUOTE', quote
  }
}

export const removeQuote = quoteId => {
  // console.log('u removed me', quoteId)
  return {
    type: 'REMOVE_QUOTE', quoteId: quoteId
  }
}

export const upVoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE', quoteId
  }
}

export const downVoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE', quoteId
  }
}