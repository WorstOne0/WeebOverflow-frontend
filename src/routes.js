import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo";

import { Provider } from "react-redux";
import store from "./Store/store";

import {
  Main,
  Login,
  Post,
  AddPost,
  Settings,
  Friends,
  Profile,
  Search,
} from "./pages";

export default class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}
