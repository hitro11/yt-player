import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyCudyjbKtmk2Yt-9cVAP9eXvDcpbfzG2kE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      currentVideo: null,
      searchTerm: 'react tutorial'
    };

    this.searchVideo(this.state.searchTerm);
  }

  searchVideo (search) {
    YTSearch( 
      {key: API_KEY, term: search}, 
      (videos) => this.setState({
        videos: videos,
        currentVideo: videos[0]
        })
    );  
  }

  render() {
    return (
      <div>
        <div className="top-container">
        <h2 className="brand">YT Player</h2>
        <SearchBar 
          onSearchVideo={(search) => this.searchVideo(search) }
        />
        </div>

        <div className="content-container">
        <VideoDetail video={this.state.currentVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={currentVideo => this.setState({currentVideo})}
         />        
        </div>
      </div>
    );
  }
}

export default App;
