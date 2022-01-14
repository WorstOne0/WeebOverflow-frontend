import React, { useRef, createRef } from "react";

import * as S from "./styles";

import { uniqueId } from "lodash";

import { AiOutlineFileText } from "react-icons/ai";
import {
  BsThreeDots,
  BsImage,
  BsImages,
  BsCodeSlash,
  BsListCheck,
  BsFillCameraVideoFill,
} from "react-icons/bs";

const PostInput = ({ post, setPost }) => {
  return (
    <S.Container>
      <S.Type
        onClick={() =>
          setPost({
            ...post,
            content: [
              ...post.content,
              {
                id: uniqueId(),
                type: "Rich-Text",
                ref: createRef(),
              },
            ],
          })
        }
      >
        <AiOutlineFileText className="Icon" />
        <p>Texto</p>
      </S.Type>
      <S.Type
        onClick={() =>
          setPost({
            ...post,
            content: [
              ...post.content,
              {
                id: uniqueId(),
                type: "Single Image",
                ref: createRef(),
              },
            ],
          })
        }
      >
        <BsImage className="Icon" />
        <p>Imagem Única</p>
      </S.Type>
      <S.Type
        onClick={() =>
          setPost({
            ...post,
            content: [
              ...post.content,
              {
                id: uniqueId(),
                type: "Gallery",
                ref: createRef(),
              },
            ],
          })
        }
      >
        <BsImages className="Icon" />
        <p>Imagens</p>
      </S.Type>
      <S.Type
        onClick={() =>
          setPost({
            ...post,
            content: [
              ...post.content,
              {
                id: uniqueId(),
                type: "Code",
                ref: createRef(),
              },
            ],
          })
        }
      >
        <BsCodeSlash className="Icon" />
        <p>Code</p>
      </S.Type>

      <S.Type
        onClick={() =>
          setPost({
            ...post,
            content: [
              ...post.content,
              {
                id: uniqueId(),
                type: "Video",
                ref: createRef(),
              },
            ],
          })
        }
      >
        <BsFillCameraVideoFill className="Icon" />
        <p>Video</p>
      </S.Type>
      <S.Type>
        <BsListCheck className="Icon" />
        <p>Enquete</p>
      </S.Type>
    </S.Container>
  );
};

export default PostInput;
