import React, { Component } from "react";

import {
  Container,
  LogoContainer,
  IconShelter,
  LogoImg,
  LogoText,
} from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isOpenNavBar, handleToggleNavBar } = this.props;

    return (
      <Container isOpenNavBar={isOpenNavBar}>
        <LogoContainer isOpenNavBar={isOpenNavBar}>
          <IconShelter>
            <GiHamburgerMenu onClick={handleToggleNavBar} />
          </IconShelter>

          <LogoText isOpenNavBar={isOpenNavBar}>Dollars</LogoText>

          <LogoImg />
        </LogoContainer>
      </Container>
    );
  }
}
