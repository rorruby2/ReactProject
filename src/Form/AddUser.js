import React, { Component } from "react";
import Header from '../Container/Header'
import SideMenu from '../Container/SideMenu';
import { connect } from "react-redux";
import {addUser} from '../store/action';
import ThreeDotsLoader from '../Shared/ThreeDotsLoader';

class AddUser extends Component {
  state = {
    formData: { name: "", email: "", skin_color: "", height: "", mass: "", gender: "", }
  };

  handleChange = e => {
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value
    this.setState({
      formData: formData
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state.formData)
    this.props.history.push('/user');
  };

  render() {
    return (
      <div id="app">
        <Header history={this.props.history}/>
        <section className="main-content columns is-fullheight">
          <SideMenu history={this.props.history}/>
          <div className="container column is-10">
          {
            this.props.users ?
            <div className="section section_color">
              <form onSubmit={this.handleSubmit}>
                <div className="has-text-centered">
                  <h3 className="title">Add User</h3>
                  {this.state.errors ? (<p className="notification is-danger">{this.state.errors}</p>) : null}
                </div>

                <div className="field">
                  <label className="label" >Name</label>
                  <div className="control">
                    <input className="input" name="name" type="name" placeholder="name" required onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" >Skin Color</label>
                  <div className="control">
                    <input className="input" name="skin_color" type="skin_color" placeholder="skin color" required onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" >Height</label>
                  <div className="control">
                    <input className="input" name="height" type="height" placeholder="height" required onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" >Weight</label>
                  <div className="control">
                    <input className="input" name="mass" type="mass" placeholder="weight" required onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="name">Gender</label>
                  <div className="control">
                    <div className="select">
                      <select onChange={this.handleChange} name='gender'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="control buttons is-centered">
                    <input className="button is-medium is-info " type="submit" value="Add" />
                  </div>
                </div>
              </form>
            </div>
            :
            <ThreeDotsLoader />
          }
          </div>
        </section>
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
    addUser: (data) => dispatch(addUser(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
