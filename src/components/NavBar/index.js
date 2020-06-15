import React, { Component } from "react";

import {
  Container,
  LogoContainer,
  IconShelter,
  LogoImg,
  LogoText,
  Login,
  User,
  UserImg,
  UserHeader,
  UserNameDisplay,
  UserName,
  UserStats,
  UserStatsBox,
  BadgesContainer,
  OptionsContainer,
  Options,
  OptionsText,
  BottomBar,
} from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineLogin,
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";
import { DiJsBadge, DiPython, DiReact } from "react-icons/di";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
    };
  }
  render() {
    const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

    const { isOpenNavBar, handleToggleNavBar } = this.props;
    const { isLogged } = this.state;

    return (
      <Container isOpenNavBar={isOpenNavBar}>
        <LogoContainer isOpenNavBar={isOpenNavBar}>
          <IconShelter>
            <GiHamburgerMenu onClick={handleToggleNavBar} />
          </IconShelter>

          <LogoText isOpenNavBar={isOpenNavBar}>Dollars</LogoText>

          <LogoImg />
        </LogoContainer>

        {isLogged ? (
          <User>
            <UserImg url={UserImgTemp} />

            <UserHeader isOpenNavBar={isOpenNavBar}>
              <UserNameDisplay>Worst One</UserNameDisplay>
              <UserName>@worstone</UserName>
            </UserHeader>

            <UserStats isOpenNavBar={isOpenNavBar}>
              <UserStatsBox>
                <AiOutlineUser className="Icon" /> 200
              </UserStatsBox>
              <UserStatsBox>
                <AiOutlineHeart className="Icon" /> 75
              </UserStatsBox>
              <UserStatsBox>
                <IoMdPaper className="Icon" /> 21
              </UserStatsBox>
            </UserStats>

            <BadgesContainer isOpenNavBar={isOpenNavBar}>
              <DiJsBadge className="Icon" />
              <DiPython className="Icon" />
              <DiReact className="Icon" />
            </BadgesContainer>
          </User>
        ) : (
          <Login></Login>
        )}

        <OptionsContainer>
          <Options isOpenNavBar={isOpenNavBar}>
            <AiOutlineHome className="Icon" />
            <OptionsText isOpenNavBar={isOpenNavBar}>Inicio</OptionsText>
          </Options>
          <Options isOpenNavBar={isOpenNavBar}>
            <AiOutlineSearch className="Icon" />
            <OptionsText isOpenNavBar={isOpenNavBar}>Pesquisa</OptionsText>
          </Options>
          <Options isOpenNavBar={isOpenNavBar}>
            <IoMdPaper className="Icon" />
            <OptionsText isOpenNavBar={isOpenNavBar}>Posts</OptionsText>
          </Options>
        </OptionsContainer>

        <BottomBar>
          <AiOutlinePlus className="Icon" />
          <AiOutlineSetting className="Icon" />
        </BottomBar>
      </Container>
    );
  }
}
