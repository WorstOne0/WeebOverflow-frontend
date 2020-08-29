import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";

import { FiDelete } from "react-icons/fi";

import { uniqueId } from "lodash";

import {
  NavBar,
  RichText,
  Image,
  PostInput,
  VsCodeEditor,
  DropZone,
  InputText,
  Loading,
  Gallery,
} from "../../components";

const AddPost = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const [post, setPost] = useState({
    title: "",
    thumbnail: "",
    content: [
      {
        id: uniqueId(),
        type: "Rich-Text",
        ref: useRef(null),
      },
    ],
    tags: "",
  });

  const handleRemovePost = (id) => {
    setPost({
      ...post,
      content: post.content.filter((item) => item.id !== id),
    });
  };

  return (
    <S.Container>
      <NavBar />

      <S.Content>
        <S.Hero />
        <div className="Split">
          <S.PostContainer>
            <S.PostTitle>Criar um Post</S.PostTitle>

            <S.PostBlock>
              <DropZone />
              <InputText margin="3rem 0" name="Titulo" />
            </S.PostBlock>

            {post.content.map((post) => {
              switch (post.type) {
                case "Rich-Text":
                  return (
                    <S.PostBlock key={post.id}>
                      <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                        <FiDelete />
                      </S.PostDelete>
                      <RichTextTemplate ref={post.ref} />
                    </S.PostBlock>
                  );

                case "Single Image":
                  return (
                    <S.PostBlock key={post.id}>
                      <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                        <FiDelete />
                      </S.PostDelete>
                      <ImagemTemplate ref={post.ref} id={post.id} />
                    </S.PostBlock>
                  );

                case "Gallery":
                  return (
                    <S.PostBlock key={post.id}>
                      <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                        <FiDelete />
                      </S.PostDelete>
                      <GalleryTemplate ref={post.ref} id={post.id} />
                    </S.PostBlock>
                  );

                case "Code":
                  return (
                    <S.PostBlock key={post.id}>
                      <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                        <FiDelete />
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
        </div>
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

const ImagemTemplate = forwardRef(({ id }, ref) => {
  const [file, setFile] = useState([]);
  const [subtitles, setSubtitles] = useState("Imagem Legal");
  const [uploaded, setUpload] = useState(false);

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

  return uploaded ? (
    <Image src={URL.createObjectURL(file[0])} subtitles={subtitles} />
  ) : (
    <DropZone setFile={setFile} setUpload={setUpload} id={id} />
  );
});

const GalleryTemplate = forwardRef(({ id }, ref) => {
  const [files, setFiles] = useState([]);
  const [uploaded, setUpload] = useState(false);
  const images = Array.from(files).map((file) => URL.createObjectURL(file));

  const getValue = () => {
    return {
      type: "Gallery",
      value: files,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return uploaded ? (
    <Gallery images={images} />
  ) : (
    <DropZone
      setFile={setFiles}
      setUpload={setUpload}
      id={id}
      multiple={true}
    />
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
