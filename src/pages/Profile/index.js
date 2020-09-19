import React from "react";

import * as S from "./styles";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillRedditCircle,
  AiOutlineHeart,
  AiOutlineUser,
  AiTwotoneCalendar,
  AiFillInfoCircle,
} from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";
import { FaTwitch } from "react-icons/fa";
import { RiCake3Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

import { NavBar, TabBar } from "../../components";

function Profile() {
  const tempImg = require("../../assets/704387.png");
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <NavBar>
      <S.Container>
        <S.HeaderContainer>
          <S.HeaderImg src={tempImg} />

          <S.HalfCircle />

          <S.UserContainer>
            <S.UserContent>
              <S.UserImg url={UserImgTemp} />

              <S.ContentTop>
                <S.ContentTopLeft>
                  <S.SocialMediaContainer>
                    <AiFillFacebook className="Facebook" />
                    <AiOutlineTwitter className="Twitter" />
                    <AiFillGithub className="Github" />
                    <AiFillInstagram className="Instagram" />
                    <AiFillLinkedin className="Linkedin" />
                    <AiFillYoutube className="Youtube" />
                    <AiFillRedditCircle className="Reddit" />
                    <FaTwitch className="Twitch" />
                  </S.SocialMediaContainer>
                </S.ContentTopLeft>
                <S.ContentTopRight>
                  <S.OptionsContainer>
                    <AiOutlineHeart className="Icon" />
                    <BsThreeDotsVertical className="Icon" />
                  </S.OptionsContainer>
                </S.ContentTopRight>
              </S.ContentTop>

              <S.UserTitleContainer>
                <S.UserNick>Worst One</S.UserNick>
                <S.UserName>@worstone</S.UserName>
              </S.UserTitleContainer>

              <S.ContentBottom>
                <S.ContentBottomLeft>
                  <S.InfoBottom>
                    <AiTwotoneCalendar className="Icon" /> Joined Feb 18, 2016
                  </S.InfoBottom>
                </S.ContentBottomLeft>

                <S.StatusContainer>
                  <S.IconShelter>
                    <AiOutlineUser className="Icon" />
                    200
                  </S.IconShelter>
                  <S.IconShelter>
                    <AiOutlineHeart className="Icon" />
                    75
                  </S.IconShelter>
                  <S.IconShelter>
                    <IoMdPaper className="Icon" />
                    21
                  </S.IconShelter>
                </S.StatusContainer>

                <S.ContentBottomRight>
                  <S.InfoBottom padding>
                    <RiCake3Line className="Icon" /> 21
                  </S.InfoBottom>
                </S.ContentBottomRight>
              </S.ContentBottom>
            </S.UserContent>
          </S.UserContainer>
        </S.HeaderContainer>

        <S.MainSection>
          <S.Main>
            <TabBar
              options={[
                {
                  icon: <AiFillInfoCircle className="Icon" />,
                  text: "Info",
                },
                {
                  icon: <IoMdPaper className="Icon" />,
                  text: "Posts",
                },
              ]}
            />
          </S.Main>

          <S.SideBar></S.SideBar>
        </S.MainSection>
      </S.Container>
    </NavBar>
  );
}

export default Profile;
