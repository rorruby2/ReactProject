import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import ImageList from './ImageList';
import axios from 'axios';

class SearchBar extends React.Component {

  state = {term: '', images: []};

  onInputChangeHandler = (event) => {
    this.setState({term: event.target.value})
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label>{this.props.label_name}</label>
            <input type="text" onChange={this.onInputChangeHandler} value={this.state.term}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;