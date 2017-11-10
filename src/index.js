import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';  //no path when it's a library
import SearchBar from './components/search_bar'; //mine, so use hte relative path
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//API key from https://console.developers.google.com/
const API_KEY ='AIzaSyDYdctwgJ8ve0DQgeFMTrsacWG6JkpbJaU'
// create a new component.  This comonent should produce HTML.
// install lodash with npm install --save lodash

//use Class whenever you need to use State
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			searchTerm: ''
		};
		this.videoSearch('Pokemon');
	}


	videoSearch(inputTerm) {
		YTSearch({key: API_KEY, term: inputTerm}, (videos) => {
			this.setState({   //setState causes a re-render
				videos:videos,
				selectedVideo:videos[0]
			 });   // same as this.setState({ videos: videos });  works because key and property are the same name.
		});
	}

	render() {
		//console.log(this.state.videos[0]);
		const videoSearchDelay = _.debounce((term) => {this.videoSearch(term) }, 400);
    // no need for <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> down below anymore with debounce

		return (
			<div >
			<SearchBar onSearchTermChange={videoSearchDelay} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList
				onVideoSelect={newVideo => this.setState({selectedVideo : newVideo}) }
				videos={this.state.videos} />
			</div>
		);
  }
}

//functional based component  doesn't need to 'extend' anything
const NotUsed = () => {   //same as App = function () {  changes how .this works
	return (
		<div>
		<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />,document.querySelector('.container'));
