import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  var email = localStorage.getItem('email');
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.history.push('/login');
  };

  return (
    <div>
      <nav id="navbar" className="navbar is-link has-shadow">
        <div className="container">
        
          <div className="navbar-brand">
            <p className="navbar-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL71KY1NKCCYB9JzgOpfLdXVxQcvP23KHsZx6YSxYsROV1JnJvTw" alt="Logo" width="150" height="48"/>
            </p>
            <span className="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navMenuDocumentation" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <p className="navbar-link">{email}</p>
                <div id="moreDropdown" className="navbar-dropdown">
                  <Link to="/profile" className ="navbar-item">
                    <span>
                      <span className="icon has-text-bootstrap">
                        <i className="fa fa-user"></i>
                      </span>
                      <strong>Profile</strong>
                    </span>
                  </Link>
                  <hr className="navbar-divider"/>
                  <a className="navbar-item " onClick={handleClick}>
                    <span>
                      <span className="icon has-text-orange">
                        <i className="fa fa-sign-out"></i>
                      </span>
                      <strong>Logout</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="abc">
        <span aria-hidden="true"></span>
      </div>
    </div>
  );
}

export default Header;
