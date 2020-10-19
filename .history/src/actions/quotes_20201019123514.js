export function addQuote(quote:{}) {
    return {
        type: 'ADD_QUOTE',
        quote
    }
}