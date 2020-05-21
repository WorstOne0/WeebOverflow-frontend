import React, { Component } from "react";

import { Container } from "./styles";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ["Hello ", "World"],
    };
  }
  render() {
    return <Container>{this.state.test.map((item) => item)}</Container>;
  }
}
