import React, { Component } from 'react';
import { connect } from 'react-redux';

// import the action creator
import { selectBook } from '../actions/index';

// used to dispatch action through all of the reducers in the application
import { bindActionCreators } from 'redux';


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item" >
                    {book.title}
                </li>
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
    };
};

// anything returned from this function will end up as props 
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result will be passed (dispatched) 
    // to all of the reducers
    return bindActionCreators({ selectBook : selectBook }, dispatch);
};

// takes a function and a component and promotes this component to a container
// needs to know about the new dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);