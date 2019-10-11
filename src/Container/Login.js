import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {userListData} from '../store/action';

class Login extends Component {
  state = {
    email: "puja@rsystems.com",
    name: "Puja",
    password: "111111",
    errors: "",
  };

  componentDidMount(){
    this.props.userList();
  }

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
              <h1 className="title is-2">Login</h1>
              {this.state.errors ? (<p className="notification is-danger">{this.state.errors}</p>) : null}
            </div>
            
            <div className="field">
              <label className="label" htmlFor="name">Email</label>
              <div className="control">
                <input className="input" name="email" type="name" value={this.state.email} placeholder="email" required onChange={this.handleChange} />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <div className="control">
                <input className="input" name="password" type="password" value={this.state.password} placeholder="password" required onChange={this.handleChange}/>
              </div>
              <br></br>
              {this.state.password.length > 0 && this.state.password.length < 6 ? 
                ( <p className="notification is-warning">Password must be a minimum length of 6.</p>) 
              : 
                null}
            </div>

            <div className="field">
              <div className="control buttons is-centered">
                <input className="button is-medium is-info " type="submit" value="Login" />
              </div>
            </div>

            <div className="has-text-centered">
              Don't have an account? <Link to="/registration">SignUp Free!</Link>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.user.userList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    userList: () => dispatch(userListData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
