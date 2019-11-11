import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import SearchBar from './SearchBar';
import youtube from '../Api/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyDxn4D41dQWVHj54jR5ikSNFH-hJ2BhcmA";

class VideoSearch extends React.Component {

  state={ videos: [], selectedVideo: null }

  componentDidMount(){
    this.onSearchSubmit('buildings')
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div id="app">
        <Header history={this.props.history}/>
        <section className="main-content columns is-fullheight">
          <SideMenu history={this.props.history}/>
          <div className="container column is-10">
            <SearchBar label_name="Video Search" onFormSubmit={this.onSearchSubmit}/>
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                  <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default VideoSearch;