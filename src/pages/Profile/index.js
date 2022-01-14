import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

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
  AiOutlineLogout,
} from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";
import { FaTwitch } from "react-icons/fa";
import { RiCake3Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

import { NavBar, TabBar, Card, ProfileGadgets } from "../../components";

const GET_LOGGED_USER = gql`
  query {
    getLoggedUser {
      userName
      screenName
      posts {
        id
        title
        thumbnail
        tags
        text {
          type
          value
        }
        likes
        comments
        user {
          screenName
        }
        createdAt
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;

function Profile() {
  const { loading, data, error } = useQuery(GET_LOGGED_USER);
  const [logout] = useMutation(LOGOUT);
  const history = useHistory();

  const tempImg = require("../../assets/704387.png");
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  const handleLogout = async () => {
    const { data } = await logout();

    if (data.logout) history.push("/");
  };

  return (
    <NavBar>
      <S.Container>
        <S.HeaderContainer>
          <S.HeaderImg src={tempImg} />

          <S.HalfCircle />

          <S.UserContainer>
            <S.Logout onClick={() => handleLogout()}>
              <AiOutlineLogout />
            </S.Logout>

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
                <S.UserNick>
                  {loading ? "" : data.getLoggedUser.screenName}
                </S.UserNick>
                <S.UserName>
                  {loading ? "" : `@${data.getLoggedUser.userName}`}
                </S.UserName>
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
            >
              <S.Info>
                <ProfileGadgets type="Work At" />
              </S.Info>

              <S.PostList>
                {loading ? (
                  <h1>loading</h1>
                ) : (
                  data.getLoggedUser.posts.map((post) => (
                    <S.CarpWrapper>
                      <Card post={post} />
                    </S.CarpWrapper>
                  ))
                )}
              </S.PostList>
            </TabBar>
          </S.Main>

          <S.SideBar></S.SideBar>
        </S.MainSection>
      </S.Container>
    </NavBar>
  );
}

export default Profile;
