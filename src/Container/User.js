import React, { Component } from "react";
import Header from './Header'
import SideMenu from './SideMenu';
import ThreeDotsLoader from '../Shared/ThreeDotsLoader';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {deleteUser} from '../store/action';

class User extends Component {

  deleteUser = (index) => {
    this.props.deleteUser(index);
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
                <Link className="button is-link addBtn" to="/newUser">Add New User</Link>
                <table className="table is-fullwidth is-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Skin Color</th>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.users.map((user, index) => (
                        <tr key={index}>
                        <td>{user.name}</td>
                          <td>{user.gender}</td>
                          <td>{user.skin_color}</td>
                          <td>{user.height} cm</td>
                          <td>{user.mass} kg</td>
                          <td><button className="button is-danger" onClick={() => this.deleteUser(index)}>Delete</button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
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

const mapStateToProps = ({user}) => {
  return({
    users: user.userList,
    loading: user.loading,
    error:user.errors
 })
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteUser: (index) => dispatch(deleteUser(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

// export default Home;
