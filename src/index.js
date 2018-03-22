// Dependencies
import React from 'react';  // creates and managers components
import ReactDOM from 'react-dom'; // used to interact with the actual DOM
import API_KEY from './config/env';

// component imports
import SearchBar from './components/search_bar';

// youTube API key
const key = API_KEY;

// create a new component to generate html 
const App = () => {
    // jsx - similar to html but is actually javascript: this is how transpilers turn javascript into html for the browser
    return ( <div>
                <SearchBar/>
            </div> 
    );
}


// display this component's generated html in the browser (DOM)
// requires the ReactDOM library
// takes two arguments: the instantiated component class and the target for the render function
ReactDOM.render(<App />, document.querySelector('.container'));


