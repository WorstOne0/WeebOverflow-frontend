import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Post from "./pages/Post";
import AddPost from "./pages/AddPost";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/post" component={Post} />
        <Route path="/addPost" component={AddPost} />
      </BrowserRouter>
    );
  }
}
