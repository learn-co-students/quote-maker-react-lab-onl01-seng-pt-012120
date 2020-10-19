// TODO: Create action creators as defined in tests
import { Component} from 'react';
class Quotes extends Component{

    addQuote = (quote) =>{
        return {
            type: 'ADD_QUOTE',
            quote
        }
    }
}

export default Quotes;