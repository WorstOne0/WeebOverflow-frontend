import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Store/store";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Post from "./pages/Post";
import AddPost from "./pages/AddPost";
import Settings from "./pages/Settings";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/addPost" component={AddPost} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
        </BrowserRouter>
      </Provider>
    );
  }
}
