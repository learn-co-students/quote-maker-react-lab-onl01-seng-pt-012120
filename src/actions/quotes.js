// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  console.log('inside addQuote action')
  return {
    type: 'ADD_QUOTE', quote
  }
}

export const removeQuote = quoteId => {
  console.log(`in removeQuote action with id : ${quoteId} `)
  return {
    type: 'REMOVE_QUOTE', quoteId
  }
}

export const upVoteQuote = quoteId => {
  console.log('in upVoteQuote action')
  return {
    type: 'UPVOTE_QUOTE', quoteId
  }
}

export const downVoteQuote = quoteId => {
  console.log('in downVoteQuote action')
  return {
    type: 'DOWNVOTE_QUOTE', quoteId
  }
}