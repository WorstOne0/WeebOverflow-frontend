import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../../Store/actions/NavBar";

import {
  Container,
  NavBarContainer,
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
import { FaUserFriends } from "react-icons/fa";
import { DiJsBadge, DiPython, DiReact } from "react-icons/di";

const NavBarDesktop = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);

  const isOpenNavBar = useSelector((state) => state.NavBar.isOpenNavBar);
  const dispatch = useDispatch();

  const handleToggleNavBar = () => {
    dispatch(toggleNavBar());
  };

  const UserImgTemp = require("../../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <Container>
      <NavBarContainer>
        {isLogged ? (
          <User>
            <LogoContainer>
              <LogoImg />
            </LogoContainer>

            <Link to="/profile" style={{ textDecoration: "none" }}>
              <UserImg url={UserImgTemp} />
            </Link>

            <Link to="/profile" style={{ textDecoration: "none" }}>
              <UserHeader>
                <UserNameDisplay>Worst One</UserNameDisplay>
                <UserName>@worstone</UserName>
              </UserHeader>
            </Link>

            <UserStats>
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
          </User>
        ) : (
          <Login></Login>
        )}

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
          <Link to="/addPost" style={{ width: "100%", textDecoration: "none" }}>
            <Options>
              <AiOutlinePlus className="Icon" />
            </Options>
          </Link>
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
      </NavBarContainer>
      {children}
    </Container>
  );
};

export default NavBarDesktop;
