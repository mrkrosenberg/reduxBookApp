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
            <div className="search-bar" >
                <h3>Search YouTube Archives</h3>
                <input 
                    value={this.state.term} // turns it into a controlled component/controlled form element
                    onChange={event => this.onInputChange(event.target.value)} 
                    placeholder="Search"
                />
             </div>
        )
    };
    // es6 syntax for cleaner code:
    // onChange={(event) => console.log(event.target.value)};

    // best practices for naming event handlers - 'on' or 'handle' before the name of the event
    // triggered every time the input field is changed
    onInputChange(term) {
        this.setState({term : term});
        this.props.onSearchTermChange(term);
    }
}  

// exports this component explicitly
export default SearchBar;