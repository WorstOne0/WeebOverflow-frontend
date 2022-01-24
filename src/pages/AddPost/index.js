import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import s3 from "../../services/aws-s3";
import { uniqueId, isEmpty, reject, result } from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  Select,
} from "../../components";

const USER = gql`
  query {
    getLoggedUser {
      id
      role
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $thumbnail: [Anything]
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

  const { loading, error, data } = useQuery(USER, {
    fetchPolicy: "network-only",
  });
  const [addPost] = useMutation(ADD_POST);

  const [thumbnail, setThumbnail] = useState([]);
  const [uploadedThumb, setUploadThumb] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: [
      {
        id: uniqueId(),
        type: "Rich-Text",
        ref: useRef(null),
      },
    ],
    tags: ["anime", "react"],
  });
  const [uploading, setUploading] = useState(false);

  const handleRemovePost = (id) => {
    setPost({
      ...post,
      content: post.content.filter((item) => item.id !== id),
    });
  };

  const uploadToS3 = async () => {
    const { content } = post;

    const res = await s3.uploadFile(
      thumbnail[0].file,
      `${Date.now()}${thumbnail[0].name}`
    );
    thumbnail[0].url = res.location;

    return await Promise.all(
      content.map(async (post) => {
        const block = post.ref.current.getValue();

        if (
          block.type === "Rich-Text" ||
          block.type === "Code" ||
          block.type === "Video"
        )
          return null;

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

    const { title, content, tags } = post;

    await uploadToS3();
    console.log("Finished AWS S3");

    console.log(content.map((post) => post.ref.current.getValue()));

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
    <>
      {loading ? (
        <p>loading</p>
      ) : data.getLoggedUser == null ? (
        <p style={{ color: "#111" }}>No Permission</p>
      ) : error ? (
        <p>error</p>
      ) : data.getLoggedUser.role === "Guest" ? (
        <p style={{ color: "#111" }}>No Permission</p>
      ) : (
        <NavBar>
          <S.Container>
            {uploading ? (
              <S.UploadContainer></S.UploadContainer>
            ) : (
              <S.Content>
                <S.Hero />
                <div className="Split">
                  <S.PostContainer>
                    <S.PostTitle>Criar um Post</S.PostTitle>

                    <S.PostBlock>
                      {uploadedThumb ? (
                        <Image src={thumbnail.map((file) => file.preview)} />
                      ) : (
                        <DropZone
                          uploadedFiles={thumbnail}
                          setUploadedFiles={setThumbnail}
                          setUpload={setUploadThumb}
                          id={uniqueId()}
                          text="Arraste sua imagem aqui"
                        />
                      )}

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

                    <DragDropContext
                      onDragEnd={(result) => {
                        const { destination, source } = result;

                        console.log(result);

                        if (!destination) return;
                        post.content.splice(
                          destination.index,
                          0,
                          post.content.splice(source.index, 1)[0]
                        );
                        console.log(post.content);
                      }}
                    >
                      <Droppable droppableId={uniqueId()}>
                        {(provided) => (
                          <S.Wrapper
                            height={"auto"}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {console.log("A", post.content)}
                            {post.content.map((post, index) => {
                              switch (post.type) {
                                case "Rich-Text":
                                  return (
                                    <Draggable
                                      draggableId={post.id.toString()}
                                      index={index}
                                      isDragDisabled={false}
                                      key={post.id}
                                    >
                                      {(provided) => (
                                        <S.PostBlock
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <S.PostDelete
                                            onClick={() =>
                                              handleRemovePost(post.id)
                                            }
                                          >
                                            <FiDelete />
                                          </S.PostDelete>
                                          <RichTextTemplate ref={post.ref} />
                                        </S.PostBlock>
                                      )}
                                    </Draggable>
                                  );

                                case "Single Image":
                                  return (
                                    <Draggable
                                      draggableId={post.id.toString()}
                                      index={index}
                                      isDragDisabled={false}
                                      key={post.id}
                                    >
                                      {(provided) => (
                                        <S.PostBlock
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <S.PostDelete
                                            onClick={() =>
                                              handleRemovePost(post.id)
                                            }
                                          >
                                            <FiDelete />
                                          </S.PostDelete>
                                          <ImagemTemplate
                                            ref={post.ref}
                                            id={post.id}
                                          />
                                        </S.PostBlock>
                                      )}
                                    </Draggable>
                                  );

                                case "Gallery":
                                  return (
                                    <Draggable
                                      draggableId={post.id.toString()}
                                      index={index}
                                      isDragDisabled={false}
                                      key={post.id}
                                    >
                                      {(provided) => (
                                        <S.PostBlock
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <S.PostDelete
                                            onClick={() =>
                                              handleRemovePost(post.id)
                                            }
                                          >
                                            <FiDelete />
                                          </S.PostDelete>
                                          <GalleryTemplate
                                            ref={post.ref}
                                            id={post.id}
                                          />
                                        </S.PostBlock>
                                      )}
                                    </Draggable>
                                  );

                                case "Code":
                                  return (
                                    <Draggable
                                      draggableId={post.id.toString()}
                                      index={index}
                                      isDragDisabled={false}
                                      key={post.id}
                                    >
                                      {(provided) => (
                                        <S.PostBlock
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <S.PostDelete
                                            onClick={() =>
                                              handleRemovePost(post.id)
                                            }
                                          >
                                            <FiDelete />
                                          </S.PostDelete>
                                          <CodeTemplate ref={post.ref} />
                                        </S.PostBlock>
                                      )}
                                    </Draggable>
                                  );

                                case "Video":
                                  return (
                                    <Draggable
                                      draggableId={post.id.toString()}
                                      index={index}
                                      isDragDisabled={false}
                                      key={post.id}
                                    >
                                      {(provided) => (
                                        <S.PostBlock
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <S.PostDelete
                                            onClick={() =>
                                              handleRemovePost(post.id)
                                            }
                                          >
                                            <FiDelete />
                                          </S.PostDelete>
                                          <VideoTemplate
                                            ref={post.ref}
                                            id={post.id}
                                          />
                                        </S.PostBlock>
                                      )}
                                    </Draggable>
                                  );

                                default:
                                  return;
                              }
                            })}

                            {provided.placeholder}
                          </S.Wrapper>
                        )}
                      </Droppable>
                    </DragDropContext>

                    <PostInput post={post} setPost={setPost} />

                    <S.SendButton onClick={handleSubmit}>Enviar</S.SendButton>
                  </S.PostContainer>
                  <S.SideBar></S.SideBar>
                </div>
              </S.Content>
            )}
          </S.Container>
        </NavBar>
      )}
    </>
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
  const [code, setCode] = useState("");
  const [options, setOptions] = useState({
    language: "javascript",
    theme: "dark",
  });

  const getValue = () => {
    return {
      type: "Code",
      value: { code, language: options.language, theme: options.theme },
      files: [],
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return (
    <S.Wrapper>
      <S.SelectContainer>
        <Select
          width="30%"
          options={[
            "javascript",
            "jsx",
            "c/c++",
            "html",
            "java",
            "php",
            "css",
            "python",
            "sass",
            "sql",
            "typescript",
            "tsx",
            "lua",
            "matlab",
          ].sort()}
          value={options.language}
          setValue={(language) => setOptions({ ...options, language })}
        />
        <Select
          width="30%"
          options={["dark", "light"]}
          value={options.theme}
          setValue={(theme) => setOptions({ ...options, theme })}
        />
      </S.SelectContainer>
      <S.CodeContainer>
        <VsCodeEditor
          code={code}
          setCode={setCode}
          language={options.language}
          theme={options.theme}
        />
      </S.CodeContainer>
    </S.Wrapper>
  );
});

const VideoTemplate = forwardRef(({ id }, ref) => {
  const [uploaded, setUpload] = useState(false);
  const [url, setUrl] = useState({ url: [""], embeddedUrl: [""] });

  const getValue = () => {
    return {
      type: "Video",
      value: url.embeddedUrl,
      files: [],
    };
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
    };
  });

  return uploaded ? (
    <S.Wrapper>
      <S.VideoContainer>
        <S.VideoWrapper>
          <S.IFrame
            width="560"
            height="315"
            src={url.embeddedUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></S.IFrame>
        </S.VideoWrapper>
      </S.VideoContainer>
    </S.Wrapper>
  ) : (
    <S.Wrapper row={true}>
      <InputText
        margin="3rem 0"
        name="Video URL"
        value={url.url}
        setValue={(event) => {
          event.preventDefault();

          let str = event.target.value;
          let res = str.split("=");
          var embeddedUrl = `https://www.youtube.com/embed/${res[1]}`;
          console.log(embeddedUrl);

          setUrl({ url: [event.target.value], embeddedUrl });
        }}
      />
      <S.UrlVideoButton onClick={() => setUpload(true)}>
        Enviar
      </S.UrlVideoButton>
    </S.Wrapper>
  );
});

export default AddPost;
