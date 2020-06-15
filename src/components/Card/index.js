import React, { Component } from "react";

import { Container, Type, Image, Title, Date } from "./styles";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const tempImg = require("../../assets/704387.png");

    return (
      <Container>
        <Image src={tempImg} />
        <Title>Title that is Big, what will happen if i keep, shit...</Title>
        <Date>January 4th, 2020</Date>
      </Container>
    );
  }
}
