export const addQuote = quote => {return {type: "ADD_QUOTE", quote}}

export const removeQuote = quoteid => {return {type: "REMOVE_QUOTE", quoteId: quoteid}}

export const upvoteQuote = quoteid => {return {type: "UPVOTE_QUOTE", quoteId: quoteid}}

export const downvoteQuote = quoteid => {return {type: "DOWNVOTE_QUOTE", quoteId: quoteid}}