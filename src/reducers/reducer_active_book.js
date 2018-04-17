// all reducers get current state and action as arguments
// state argument is only the state this reducer is responsible for (not the global application state)
export default function(state = null, action) {

    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
};