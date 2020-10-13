// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  console.log('inside addQuote action')
  return {
    type: 'ADD_QUOTE', quote
  }
}

export const removeQuote = quoteId => {
  console.log('in removeQuote action')
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