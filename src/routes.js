import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const MyRoutes = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />

            {/*<Route path="*" component={NotFound} />*/}
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

export default MyRoutes;
