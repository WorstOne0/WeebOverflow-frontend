import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [isOpenNavBar, setOpenNavBar] = useState(true);

  const handleToggleNavBar = () => {
    setOpenNavBar(!isOpenNavBar);
  };

  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <Container isOpenNavBar={isOpenNavBar}>
      <LogoContainer isOpenNavBar={isOpenNavBar}>
        <IconShelter>
          <GiHamburgerMenu onClick={handleToggleNavBar} />
        </IconShelter>

        <LogoText isOpenNavBar={isOpenNavBar}>Weeb Overflow</LogoText>

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
        <Link to="/" style={{ width: "100%", textDecoration: "none" }}>
          <Options isOpenNavBar={isOpenNavBar}>
            <AiOutlineHome className="Icon" />
            <OptionsText isOpenNavBar={isOpenNavBar}>Inicio</OptionsText>
          </Options>
        </Link>
        <Link to="/addPost" style={{ width: "100%", textDecoration: "none" }}>
          <Options isOpenNavBar={isOpenNavBar}>
            <AiOutlineSearch className="Icon" />
            <OptionsText isOpenNavBar={isOpenNavBar}>Pesquisa</OptionsText>
          </Options>
        </Link>
        <Link to="/post" style={{ width: "100%", textDecoration: "none" }}>
          <Options isOpenNavBar={isOpenNavBar}>
            <IoMdPaper className="Icon" />
            <OptionsText isOpenNavBar={isOpenNavBar}>Posts</OptionsText>
          </Options>
        </Link>
      </OptionsContainer>

      <BottomBar>
        <AiOutlinePlus className="Icon" />
        <AiOutlineSetting className="Icon" />
      </BottomBar>
    </Container>
  );
};

export default NavBar;
