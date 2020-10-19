// TODO: Create action creators as defined in tests
import { Component} from 'react';
class Quotes extends Component{

    const addQuote = (quote) =>{
        return {
            type: 'ADD_QUOTE',
            quote
        }
    }
}

export default Quotes;