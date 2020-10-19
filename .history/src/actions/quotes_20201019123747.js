export function addQuote(quote) {
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

export function removeQuote(quoteId) {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}