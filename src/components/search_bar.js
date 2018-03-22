// Depenedencies
import React, { Component } from 'react';

// define the component class
// gives it the functionality of React.Component 
class SearchBar extends Component {

    constructor(props) {
        super(props);

        // initializes the state of this component
        this.state = { term: ''}; 
    }

    // every class needs a render method
    render() {
        // wrap js variables in curly braces
        // creates a property -onChange- for this input element
        return (
            // <div>
            //     <input onChange={this.onInputChange} />
            //     Value of the input: {this.state.term}
            // </div>
            <div>
                <input 
                    value={this.state.term} // turns it into a controlled component/controlled form element
                    onChange={event => this.setState({term: event.target.value})} 
                />
             </div>
        )
    };
    // es6 syntax for cleaner code:
    // onChange={(event) => console.log(event.target.value)};

    // best practices for naming event handlers - 'on' or 'handle' before the name of the event
    // triggered every time the input field is changed
    onInputChange(event) {
        this.setState({ term: event.target.value })
    }
}  

// exports this component explicitly
export default SearchBar;