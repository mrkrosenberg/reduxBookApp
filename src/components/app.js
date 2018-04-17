import React, { Component } from 'react';

// component imports
import BookList from '../containers/book-list';


class App extends Component {

    render() {
        return (
            <div>
                <BookList/>
            </div>
        );
    };
};

export default App;