import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import ImageList from './ImageList';
import axios from 'axios';

class ImageSearch extends React.Component {

  state = {
            term: '', 
            images: []
          };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await axios.get('https://api.unsplash.com/photos',{
      params: {query: this.state.term},
      headers: {
        Authorization: 'Client-ID dd768fe23f58e3df38031dec96a67071d317ba1096ace02521e7659c1a200455'
      }
    })
    .then((response)=> {
      this.setState({images: response.data})
    })
    console.log(this.state.images)
  }

  render() {
    return (
      <div id="app">
        <Header history={this.props.history}/>
        <section className="main-content columns is-fullheight">
          <SideMenu history={this.props.history}/>
          <div className="container column is-10">
            <div className="ui segment">
              <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Image Search</label>
                  <input type="text" onChange={(event)=>this.setState({term: event.target.value})} value={this.state.term}/>
                </div>
              </form>
            </div>
            <ImageList images={this.state.images} />
          </div>
        </section>
      </div>
    );
  }
}

export default ImageSearch;