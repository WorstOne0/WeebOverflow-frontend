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
} from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";

import { NavBar } from "../../components";

function Profile() {
  const tempImg = require("../../assets/704387.png");
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <NavBar>
      <S.Container>
        <S.HeaderContainer>
          <S.HeaderImg src={tempImg} />

          <S.UserContainer>
            <S.UserContent>
              <S.UserImg url={UserImgTemp} />

              <S.ContentTop>
                <S.ContentTopLeft>
                  <S.SocialMediaContainer>
                    <AiFillFacebook className="Icon" className="Facebook" />
                    <AiOutlineTwitter className="Icon" className="Twitter" />
                    <AiFillGithub className="Icon" className="Github" />
                    <AiFillInstagram className="Icon" className="Instagram" />
                    <AiFillLinkedin className="Icon" className="Linkedin" />
                    <AiFillYoutube className="Icon" className="Youtube" />
                    <AiFillRedditCircle className="Icon" className="Reddit" />
                    <FaTwitch className="Twitch" />
                  </S.SocialMediaContainer>
                </S.ContentTopLeft>
                <S.ContentTopRight></S.ContentTopRight>
              </S.ContentTop>

              <S.UserTitleContainer>
                <S.UserNick>Worst One</S.UserNick>
                <S.UserName>@worstone</S.UserName>
              </S.UserTitleContainer>
            </S.UserContent>
          </S.UserContainer>
        </S.HeaderContainer>

        <S.MainSection>
          <S.Main></S.Main>

          <S.SideBar></S.SideBar>
        </S.MainSection>
      </S.Container>
    </NavBar>
  );
}

export default Profile;
