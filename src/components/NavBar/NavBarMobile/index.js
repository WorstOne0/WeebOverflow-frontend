import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  NavBarContainerTop,
  LogoContainer,
  LogoImg,
  LogoText,
  NavBarContainer,
  UserImg,
  OptionsContainer,
  Options,
} from "./styles";

import {
  AiOutlineUser,
  AiOutlineLogin,
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

function NavBarMobile({ children }) {
  const [isLogged, setIsLogged] = useState(true);

  const UserImgTemp = require("../../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");
  return (
    <Container>
      <NavBarContainerTop>
        <LogoContainer>
          <LogoImg />
          <LogoText>Weeb Overflow</LogoText>
        </LogoContainer>
        <UserImg url={UserImgTemp} />
      </NavBarContainerTop>

      {children}

      <NavBarContainer>
        <OptionsContainer>
          <Link
            to="/"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlineHome className="Icon" />
            </Options>
          </Link>
          <Link
            to="/addPost"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlineSearch className="Icon" />
            </Options>
          </Link>
          <Link
            to="/post"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlinePlus className="Icon" />
            </Options>
          </Link>
          <Link
            to="/post"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <FaUserFriends className="Icon" />
            </Options>
          </Link>
          <Link
            to="/"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlineSetting className="Icon" />
            </Options>
          </Link>
        </OptionsContainer>
      </NavBarContainer>
    </Container>
  );
}

export default NavBarMobile;
