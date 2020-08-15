import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import * as S from "./styles";

import { TiDeleteOutline } from "react-icons/ti";

import { uniqueId } from "lodash";

import {
  NavBar,
  RichText,
  Image,
  PostInput,
  VsCodeEditor,
} from "../../components";

const AddPost = () => {
  const [post, setPost] = useState([
    {
      id: uniqueId(),
      type: "Rich-Text",
      ref: useRef(null),
    },
  ]);

  const handleRemovePost = (id) => {
    setPost(post.filter((item) => item.id !== id));
  };

  return (
    <S.Container>
      <NavBar />

      <S.Content>
        <S.PostContainer>
          <S.PostTitle>Criar um Post</S.PostTitle>

          <S.PostBlock>
            <S.ImgLabel>
              <p>Drag{"&"}Drop Files Here</p>
              <p>or</p>
              <S.BrowseButton htmlFor="file">Browse Files</S.BrowseButton>
            </S.ImgLabel>
            <input
              style={{ display: "none" }}
              id="file"
              type="file"
              onChange={() => {}}
            />
          </S.PostBlock>

          {post.map((post) => {
            switch (post.type) {
              case "Rich-Text":
                return (
                  <S.PostBlock key={post.id}>
                    <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                      <TiDeleteOutline />
                    </S.PostDelete>
                    <RichTextTemplate ref={post.ref} />
                  </S.PostBlock>
                );

              case "Single Image":
                return (
                  <S.PostBlock key={post.id}>
                    <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                      <TiDeleteOutline />
                    </S.PostDelete>
                    <ImagemTemplate ref={post.ref} />
                  </S.PostBlock>
                );

              case "Code":
                return (
                  <S.PostBlock key={post.id}>
                    <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                      <TiDeleteOutline />
                    </S.PostDelete>
                    <CodeTemplate ref={post.ref} />
                  </S.PostBlock>
                );

              default:
                return;
            }
          })}

          {/*<button
            onClick={() =>
              post.map((post) => console.log(post.ref.current.getValue()))
            }
          >
            Clicl me
          </button>*/}

          <PostInput post={post} setPost={setPost} />
        </S.PostContainer>
        <S.SideBar></S.SideBar>
      </S.Content>
    </S.Container>
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
  const [file, setFile] = useState([]);
  const [subtitles, setSubtitles] = useState("Imagem Legal");
  const [uploaded, setUpload] = useState(false);

  console.log(file);

  const getValue = () => {
    return {
      type: "Single Image",
      value: file,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  const handleInputChange = (event) => {
    setFile(event.target.files);
    setUpload(true);
  };

  return uploaded ? (
    <Image src={URL.createObjectURL(file[0])} subtitles={subtitles} />
  ) : (
    <S.ImgLabel>
      <p>Drag{"&"}Drop Files Here</p>
      <p>or</p>
      <S.BrowseButton htmlFor="fileUpload">Browse Files</S.BrowseButton>
      <input
        style={{ display: "none" }}
        id="fileUpload"
        name="file"
        type="file"
        onChange={handleInputChange}
      />
    </S.ImgLabel>
  );
});

const CodeTemplate = forwardRef((props, ref) => {
  const [value, setValue] = useState(null);

  const getValue = () => {
    return {
      type: "Code",
      value: value,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return (
    <S.CodeContaiener>
      <VsCodeEditor />
    </S.CodeContaiener>
  );
});

export default AddPost;
