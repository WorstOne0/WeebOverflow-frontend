import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import * as S from "./styles";
import {
  AiOutlineShareAlt,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";

import { NavBar, RichText, Image, Loading, Gallery } from "../../components";

const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      postedBy
      title
      user {
        id
        email
        userName
        screenName
      }
      thumbnail
      tags
      text {
        type
        value
      }
      likes
      comments
    }
  }
`;

const Post = (props) => {
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId: props.match.params.id },
  });

  const [a, setA] = useState(false);

  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <NavBar>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>erro</h1>
      ) : (
        <S.Container>
          <S.Content>
            <S.PostContainer>
              <Image
                src={data.getPost.thumbnail[0].url}
                cover={true}
                style={{
                  borderRadius: "0.8rem 0.8rem 0 0",
                  maxHeight: "70rem",
                }}
              />

              <S.Main>
                <S.PostHeader>
                  <S.TagContainer>
                    {data.getPost.tags.map((tag) => (
                      <S.Tag>{`#${tag}`}</S.Tag>
                    ))}
                    <S.ShareButton>
                      <AiOutlineShareAlt />
                    </S.ShareButton>
                  </S.TagContainer>

                  <S.Title>{data.getPost.title}</S.Title>

                  <S.PostHeaderInfo>
                    <label>Postado em</label> 17 de Dezembro de 2020
                  </S.PostHeaderInfo>
                </S.PostHeader>

                {data.getPost.text.map((block) => {
                  switch (block.type) {
                    case "Rich-Text":
                      return (
                        <S.Wrapper type={true}>
                          <RichText
                            readOnly={true}
                            toolbar={false}
                            padding={false}
                            value={block.value}
                            background="transparent"
                          />
                        </S.Wrapper>
                      );

                    case "Single Image":
                      return (
                        <S.Wrapper type={false}>
                          <Image src={block.value[0].url} />
                        </S.Wrapper>
                      );

                    case "Gallery":
                      return (
                        <S.Wrapper type={false}>
                          <Gallery
                            uploadedFiles={block.value}
                            readOnly={true}
                          />
                        </S.Wrapper>
                      );

                    default:
                      return;
                  }
                })}
              </S.Main>

              <S.UserContainer>
                <S.UserHeader>
                  <S.UserImgWrapper>
                    <S.UserImgBorder>
                      <S.UserImg url={UserImgTemp} />
                    </S.UserImgBorder>

                    <S.UserName>Worst One</S.UserName>

                    <S.IconShelter style={{ marginTop: "1.5rem" }}>
                      <IoMdPaper className="Icon" />
                      21
                    </S.IconShelter>
                  </S.UserImgWrapper>

                  <S.UserInfo>
                    <S.UserInfoTitle>Sobre o Autor</S.UserInfoTitle>

                    <S.UserInfoText>
                      A blog is still a website, with its own set of elements
                      and features that create the kind of web design that we
                      are most satisfied with. The last decade on the web has
                      proved that blogging is a sustainable method of expressing
                      oneself, as well as consuming content in a variety of
                      different ways. A blog is still a website, with its own
                      set of elements and features that create the kind of web
                      design that we are most satisfied with. Design that we are
                      most satisfied with. Design that we are most satisfied
                      with. Design that we are most satisfied
                    </S.UserInfoText>

                    <S.UserFooter>
                      {/** */}
                      <S.UserFooterFollow
                        follower={a}
                        onClick={() => setA((value) => !value)}
                      >
                        {a ? (
                          <>
                            <RiUserUnfollowLine className="Icon" /> Seguindo
                          </>
                        ) : (
                          <>
                            <RiUserFollowLine className="Icon" /> Seguir
                          </>
                        )}
                      </S.UserFooterFollow>
                      <S.UserFooterMedia>
                        <AiFillFacebook className="Facebook" />
                        <AiOutlineTwitter className="Twitter" />
                        <AiFillGithub className="Github" />
                        <AiFillInstagram className="Instagram" />
                        <AiFillLinkedin className="Linkedin" />
                        <AiFillYoutube className="Youtube" />
                        <AiFillRedditCircle className="Reddit" />
                        <FaTwitch className="Twitch" />
                      </S.UserFooterMedia>
                    </S.UserFooter>
                  </S.UserInfo>
                </S.UserHeader>
              </S.UserContainer>
            </S.PostContainer>
            <S.SideBar></S.SideBar>
          </S.Content>
        </S.Container>
      )}
    </NavBar>
  );
};

export default Post;
