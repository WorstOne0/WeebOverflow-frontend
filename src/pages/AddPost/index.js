import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import {
  Container,
  Content,
  PostContainer,
  PostTitle,
  SideBar,
} from "./styles";

import { uniqueId } from "lodash";

import { NavBar, RichText, Image, PostInput } from "../../components";

const AddPost = () => {
  const [post, setPost] = useState([
    {
      id: uniqueId(),
      type: "Rich-Text",
      ref: useRef(null),
    },
    {
      id: uniqueId(),
      type: "Single Image",
      ref: useRef(null),
    },
  ]);

  return (
    <Container>
      <NavBar />

      <Content>
        <PostContainer>
          <PostTitle>Criar um Post</PostTitle>

          {post.map((post) => {
            switch (post.type) {
              case "Rich-Text":
                return <RichTextTemplate key={post.id} ref={post.ref} />;

              case "Single Image":
                return <ImagemTemplate key={post.id} ref={post.ref} />;

              default:
                break;
            }
          })}

          <button
            onClick={() =>
              post.map((post) => console.log(post.ref.current.getValue()))
            }
          >
            Clicl me
          </button>

          {console.log(post)}

          <PostInput post={post} setPost={setPost} />
        </PostContainer>
        <SideBar></SideBar>
      </Content>
    </Container>
  );
};

const RichTextTemplate = forwardRef((props, ref) => {
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  const getValue = () => {
    return {
      type: "Rich-Text",
      value,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return <RichText value={value} setValue={setValue} />;
});

const ImagemTemplate = forwardRef((props, ref) => {
  const [src, setSrc] = useState("https://wallpapercave.com/wp/wp4051790.jpg");
  const [subtitles, setSubtitles] = useState("Imagem Legal");

  const getValue = () => {
    return {
      type: "Single Image",
      value: src,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return (
    <Image
      src={src}
      setSrc={setSrc}
      subtitles={subtitles}
      setSubtitles={setSubtitles}
    />
  );
});

export default AddPost;
