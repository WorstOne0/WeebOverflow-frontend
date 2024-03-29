import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  NavBarContainer,
  LogoImg,
  Login,
  UserImg,
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

const NavBarDesktop = ({ children, isLogged, role }) => {
  const UserImgTemp = require("../../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <Container>
      <NavBarContainer>
        <LogoImg />

        <OptionsContainer>
          <Link to="/" style={{ width: "100%", textDecoration: "none" }}>
            <Options>
              <AiOutlineHome className="Icon" />
            </Options>
          </Link>
          <Link to="/search" style={{ width: "100%", textDecoration: "none" }}>
            <Options>
              <AiOutlineSearch className="Icon" />
            </Options>
          </Link>
          {role !== "Guest" && (
            <Link
              to="/addPost"
              style={{ width: "100%", textDecoration: "none" }}
            >
              <Options>
                <AiOutlinePlus className="Icon" />
              </Options>
            </Link>
          )}
          <Link to="/friends" style={{ width: "100%", textDecoration: "none" }}>
            <Options>
              <FaUserFriends className="Icon" />
            </Options>
          </Link>
          <Link
            to="/settings"
            style={{ width: "100%", textDecoration: "none" }}
          >
            <Options>
              <AiOutlineSetting className="Icon" />
            </Options>
          </Link>
        </OptionsContainer>

        {isLogged ? (
          <Link to="/profile" style={{ width: "auto", textDecoration: "none" }}>
            <UserImg url={UserImgTemp} />
          </Link>
        ) : (
          <Link to="/login" style={{ width: "auto", textDecoration: "none" }}>
            <Login>
              <AiOutlineLogin className="Icon" /> Login
            </Login>
          </Link>
        )}
      </NavBarContainer>
      {children}
    </Container>
  );
};

export default NavBarDesktop;
