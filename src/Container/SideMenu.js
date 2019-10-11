import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Sidebar extends Component {
  render() {
    var currentLocation = this.props.history.location.pathname;
    return (
        <aside className="column is-2 is-fullheight section sidebar">
          <ul className="menu-list">
            <li>
              <Link to="/user" className = {(currentLocation === '/user' ? 'is-active' : '')}>
                <span className="icon"><i className="fa fa-user "></i></span> UserList
              </Link>
            </li>
            <li>
              <Link to="/movie" className = {(currentLocation === '/movie' ? 'is-active' : '')}>
                <span className="icon"><i className="fa fa-film"></i></span> MovieList
              </Link>
            </li>
            <li>
              <Link to="/memeGenerator" className = {(currentLocation === '/memeGenerator' ? 'is-active' : '')}>
                <span className="icon"><i className="fa fa-picture-o"></i></span> MemeGenerator
              </Link>
            </li>
          </ul>
        </aside>
    );
  }
}

export default Sidebar;
