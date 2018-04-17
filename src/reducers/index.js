import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; 

// groups all of the key-value pairs that we have in here into global state 
// global state can be accessed by referencing "state"
const rootReducer = combineReducers({
    // name of the piece of state and the value produced
    // adds a key (books) to our global state
    books: BooksReducer
});

export default rootReducer;