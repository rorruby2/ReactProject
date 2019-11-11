import React, { Component } from "react";
import 'bulma/css/bulma.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./Container/Login";
import Registration from './Container/Registration';
import MemeGenerator from './Container/MemeGenerator';
import User from './Container/User';
import Movie from './Container/MovieList';
import AddUser from './Form/AddUser';
import Profile from './Container/Profile';
import ImageSearch from './Container/ImageSearch';
import VideoSearch from './Container/VideoSearch';
import { createStore,applyMiddleware } from 'redux';
import RootReducer from "./store/reducer/index";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import {PrivateRoute} from './PrivateRoute';

// store
const store = createStore(RootReducer,applyMiddleware(thunk));

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <Switch >
            <Route path="/" exact component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/registration" component={Registration}></Route>
            <PrivateRoute path={"/user"} component={User} />
            <PrivateRoute path={"/profile"} component={Profile} />
            <PrivateRoute path={"/movie"} component={Movie} />
            <PrivateRoute path={"/memeGenerator"} component={MemeGenerator} />
            <PrivateRoute path={"/newUser"} component={AddUser} />
            <PrivateRoute path={"/imageSearch"} component={ImageSearch} />
            <PrivateRoute path={"/videoSearch"} component={VideoSearch} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

