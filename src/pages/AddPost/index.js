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
import { filesize } from "filesize";

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
    <NavBar>
      <S.Container>
        <S.Content>
          <S.Hero />
          <div className="Split">
            <S.PostContainer>
              <S.PostTitle>Criar um Post</S.PostTitle>

              <S.PostBlock>
                <DropZone text="Arraste sua imagem aqui" />
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
    </NavBar>
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
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [subtitles, setSubtitles] = useState("Imagem Legal");
  const [uploaded, setUpload] = useState(false);

  const getValue = () => {
    return {
      type: "Single Image",
      value: uploadedFiles,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return uploaded ? (
    <S.Wrapper>
      <Image
        src={uploadedFiles.map((file) => file.preview)}
        subtitles={subtitles}
      />
    </S.Wrapper>
  ) : (
    <DropZone
      uploadedFiles={uploadedFiles}
      setUploadedFiles={setUploadedFiles}
      setUpload={setUpload}
      id={id}
      text="Arraste sua imagem aqui"
    />
  );
});

const GalleryTemplate = forwardRef(({ id }, ref) => {
  const [uploaded, setUpload] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const getValue = () => {
    return {
      type: "Gallery",
      value: uploadedFiles,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return uploaded ? (
    <S.Wrapper>
      <Gallery
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />
      <DropZone
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
        setUpload={setUpload}
        id={id}
        multiple={true}
        light={true}
      />
    </S.Wrapper>
  ) : (
    <DropZone
      uploadedFiles={uploadedFiles}
      setUploadedFiles={setUploadedFiles}
      setUpload={setUpload}
      id={id}
      multiple={true}
      text="Arraste suas imagens aqui"
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
