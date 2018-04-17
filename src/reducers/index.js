import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; 

const rootReducer = combineReducers({
    // name of the piece of state and the value produced
    books: BooksReducer
});

export default rootReducer;