import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Registration extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    errors: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('email',this.state.email);
    this.props.history.push('/user');
  };

  render() {
    return (
      <div className="App">
        <div className="container box" style={{ maxWidth: '500px' }}>
          <form onSubmit={this.handleSubmit}>

            <div className="has-text-centered">
              <h1 className="title is-2">SignUp</h1>
              {this.state.errors ? (<p className="notification is-danger">{this.state.errors}</p>) : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="name">Name</label>
              <div className="control">
                <input className="input" name="name" type="name" placeholder="name" required onChange={this.handleChange} />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="name">Email</label>
              <div className="control">
                <input className="input" name="email" type="name" placeholder="email" required onChange={this.handleChange} />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <div className="control">
                <input className="input" name="password" type="password" placeholder="password" required onChange={this.handleChange}/>
              </div>
              <br></br>
              {this.state.password.length > 0 && this.state.password.length < 6 ? 
                ( <p className="notification is-warning">Password must be a minimum length of 6.</p>) 
              : 
                null}
            </div>

            <div className="field">
              <div className="control buttons is-centered">
                <input className="button is-medium is-info " type="submit" value="SignUp" />
              </div>
            </div>

            <div className="has-text-centered">
              <Link to="/login">Already have an account?</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
