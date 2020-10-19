// TODO: Create action creators as defined in tests
const addQuote = (quote) =>{
    return {
        type: 'ADD_QUOTE',
        quote: {
            author: quote.author,
            content: quote.content,
            id: quote.id
        }
    }
}

export default addQuote;