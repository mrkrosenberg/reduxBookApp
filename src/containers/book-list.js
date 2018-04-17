import React, { Component } from 'react';
import { connect } from 'react-redux'


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item" >{book.title}</li>
            );
        });
    };

    render() {

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )

    };

};

// takes application state as an argument
// this function is the glue between React and Redux
function mapStateToProps(state) {
    // whatever object is returned from this function will show up as this.props 
    // inside BookList (this container)

    return {
        // this is the connection between the container and the reducer
        books: state.books
    }

}

// takes a function and a component and produces a container
// containers are components that are aware of state
export default connect(mapStateToProps)(BookList);