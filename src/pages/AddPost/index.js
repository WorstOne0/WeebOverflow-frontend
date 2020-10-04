import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { useMutation, gql } from "@apollo/client";

import s3 from "../../services/aws-s3";
import { uniqueId, isEmpty, reject } from "lodash";
import { filesize } from "filesize";

import * as S from "./styles";

import { FiDelete } from "react-icons/fi";

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

const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $thumbnail: String
    $text: [TextInput!]!
    $tags: [String]!
  ) {
    addPost(title: $title, thumbnail: $thumbnail, text: $text, tags: $tags) {
      id
      user {
        id
        userName
      }
    }
  }
`;

const AddPost = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const [addPost] = useMutation(ADD_POST);

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
    tags: [],
  });

  const handleRemovePost = (id) => {
    setPost({
      ...post,
      content: post.content.filter((item) => item.id !== id),
    });
  };

  const uploadToS3 = async () => {
    const { content } = post;

    return await Promise.all(
      content.map(async (post) => {
        const block = post.ref.current.getValue();

        if (block.type === "Rich-Text" || block.type === "Code") return null;

        await Promise.all(
          block.value.map(async (file) => {
            const res = await s3.uploadFile(
              file.file,
              `${Date.now()}${file.name}`
            );

            file.url = res.location;
            return res;
          })
        );
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, content, thumbnail, tags } = post;

    await uploadToS3();
    console.log("Finished AWS S3");

    const { data } = await addPost({
      variables: {
        title,
        thumbnail,
        text: content.map((post) => post.ref.current.getValue()),
        tags,
      },
    });

    console.log("Data", data);
  };

  return (
    <NavBar>
      <S.Container>
        <S.Content>
          <S.Hero />
          <div className="Split">
            <S.PostContainer onSubmit={handleSubmit}>
              <S.PostTitle>Criar um Post</S.PostTitle>

              <S.PostBlock>
                <DropZone text="Arraste sua imagem aqui" />
                <InputText
                  margin="3rem 0"
                  name="Titulo"
                  value={post.title}
                  setValue={(event) => {
                    event.preventDefault();

                    setPost({ ...post, title: event.target.value });
                  }}
                  valueNested={"title"}
                  valueSource={post}
                />
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

                  case "Video":
                    return (
                      <S.PostBlock key={post.id}>
                        <S.PostDelete onClick={() => handleRemovePost(post.id)}>
                          <FiDelete />
                        </S.PostDelete>
                        <VideoTemplate ref={post.ref} id={post.id} />
                      </S.PostBlock>
                    );

                  default:
                    return;
                }
              })}

              <PostInput post={post} setPost={setPost} />

              <S.SendButton type="submit">Enviar</S.SendButton>
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
      files: [],
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
      files: uploadedFiles.map((file) => file.file),
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
      files: uploadedFiles.map((file) => file.file),
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
      files: [],
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

const VideoTemplate = forwardRef(({ id }, ref) => {
  const [uploaded, setUpload] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const getValue = () => {
    return {
      type: "Code",
      value: uploadedFiles,
      files: uploadedFiles.map((file) => file.file),
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
    </S.Wrapper>
  ) : (
    <DropZone
      uploadedFiles={uploadedFiles}
      setUploadedFiles={setUploadedFiles}
      setUpload={setUpload}
      id={id}
      multiple={true}
      text="Arraste suas imagens aqui"
      accept="video"
    />
  );
});

export default AddPost;
