import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Main} />
      </BrowserRouter>
    );
  }
}
