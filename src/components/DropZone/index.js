import React, { useCallback } from "react";

import { Container, Content, Wrapper, BrowseButton, Img } from "./styles";

import { useDropzone } from "react-dropzone";
import { isEmpty, uniqueId } from "lodash";
import filesize from "filesize";

import imgAccept from "../../assets/kawaii-kawaiianime-anime-girl-animegirl-animekawaii-menhera-chan-ok-1156328445749rjgc7qz0-removebg-preview.png";
import imgReject from "../../assets/unnamed-removebg-preview.png";

import { AiOutlineCloudUpload } from "react-icons/ai";

const DropZone = ({
  uploadedFiles,
  setUploadedFiles,
  setUpload,
  id,
  multiple = false,
  text = "",
  light = false,
}) => {
  const handleInputChange = (event) => {
    setUploadedFiles(
      ...uploadedFiles,
      Array.from(event.target.files).map((file) => ({
        file,
        id: uniqueId(),
        size: filesize(file.size),
        preview: URL.createObjectURL(file),
      }))
    );
    setUpload(true);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (!isEmpty(acceptedFiles)) {
      setUploadedFiles(
        ...uploadedFiles,
        acceptedFiles.map((file) => ({
          file,
          id: uniqueId(),
          size: filesize(file.size),
          preview: URL.createObjectURL(file),
        }))
      );
      setUpload(true);
    }
  });

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple,
  });

  return (
    <Container {...getRootProps()}>
      <Content
        isDragAccept={isDragAccept}
        isDragReject={isDragReject}
        light={light}
      >
        {isDragActive ? (
          isDragAccept ? (
            <Wrapper>
              <Img src={imgAccept} />
              <p>Yep, pode soltar</p>
            </Wrapper>
          ) : (
            <Wrapper>
              <Img src={imgReject} />
              <p>Nós não aceitamos isso aqui</p>
            </Wrapper>
          )
        ) : (
          <Wrapper>
            <AiOutlineCloudUpload className="Icon" />
            <p>{text}</p>
            <p>ou</p>
            <BrowseButton htmlFor={`fileUpload${id}`}>
              Browse Files
            </BrowseButton>
          </Wrapper>
        )}
        <input
          style={{ display: "none" }}
          id={`fileUpload${id}`}
          name="file"
          type="file"
          onChange={handleInputChange}
          multiple={multiple}
        />
      </Content>
    </Container>
  );
};

export default DropZone;
