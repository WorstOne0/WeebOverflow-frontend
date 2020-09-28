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
  Login,
  OptionsContainer,
  Options,
} from "./styles";

import {
  AiOutlineLogin,
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

function NavBarMobile({ children, isLogged }) {
  const UserImgTemp = require("../../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <Container>
      <NavBarContainerTop>
        <LogoContainer>
          <LogoImg />
          <LogoText>Weeb Overflow</LogoText>
        </LogoContainer>

        {isLogged ? (
          <Link
            to="/profile"
            style={{ height: "auto", width: "auto", textDecoration: "none" }}
          >
            <UserImg url={UserImgTemp} />
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ height: "auto", width: "auto", textDecoration: "none" }}
          >
            <Login>
              Login <AiOutlineLogin className="Icon" />
            </Login>
          </Link>
        )}
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
            to="/search"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlineSearch className="Icon" />
            </Options>
          </Link>
          <Link
            to="/addPost"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlinePlus className="Icon" />
            </Options>
          </Link>
          <Link
            to="/friends"
            style={{ height: "100%", width: "100%", textDecoration: "none" }}
          >
            <Options>
              <FaUserFriends className="Icon" />
            </Options>
          </Link>
          <Link
            to="/settings"
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
