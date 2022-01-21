import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
  SignUp,
  NotFound,
} from "./pages";

export default class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/login" exact component={Login} />
              <Route path="/signUp" exact component={SignUp} />
              <Route path="/post/:id" exact component={Post} />
              <Route path="/addPost" exact component={AddPost} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/friends" exact component={Friends} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/search" exact component={Search} />

              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}
