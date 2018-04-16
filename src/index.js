// Dependencies
import React, { Component } from 'react';  // creates and managers components
import ReactDOM from 'react-dom'; // used to interact with the actual DOM
import YTSearch from 'youtube-api-search';
import API_KEY from './config/env';

// component imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// youTube API key
const key = API_KEY;

// create a new component to generate html 
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: key, term: 'surfboards' }, (videos) => {
            // advanced syntactical sugar
            // this.setState({videos : videos})
            this.setState({ videos  });
        })
    }

    render() {
        // jsx - similar to html but is actually javascript: this is how transpilers turn javascript into html for the browser
        return ( <div>
                    <SearchBar/>
                    <VideoDetail video={this.state.videos[0]} />
                    <VideoList videos={this.state.videos} />
                </div> 
        );
    }
}


// display this component's generated html in the browser (DOM)
// requires the ReactDOM library
// takes two arguments: the instantiated component class and the target for the render function
ReactDOM.render(<App />, document.querySelector('.container'));


