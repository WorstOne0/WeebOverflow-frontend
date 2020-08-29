import React, { useCallback } from "react";

import { Container, Content, BrowseButton, Img } from "./styles";

import { useDropzone } from "react-dropzone";
import { isEmpty } from "lodash";

import imgAccept from "../../assets/kawaii-kawaiianime-anime-girl-animegirl-animekawaii-menhera-chan-ok-1156328445749rjgc7qz0-removebg-preview.png";
import imgReject from "../../assets/unnamed-removebg-preview.png";

import { AiOutlineCloudUpload } from "react-icons/ai";

const DropZone = ({ setFile, setUpload, id, multiple = false }) => {
  const handleInputChange = (event) => {
    setFile(event.target.files);
    setUpload(true);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (!isEmpty(acceptedFiles)) {
      setFile(acceptedFiles);
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
      <Content isDragAccept={isDragAccept} isDragReject={isDragReject}>
        {isDragActive ? (
          isDragAccept ? (
            <>
              <Img src={imgAccept} />
              <p>Yep, pode soltar</p>
            </>
          ) : (
            <>
              <Img src={imgReject} />
              <p>Nós não aceitamos isso aqui</p>
            </>
          )
        ) : (
          <>
            <AiOutlineCloudUpload className="Icon" />
            <p>Drag{"&"}Drop Files Here</p>
            <p>or</p>
            <BrowseButton htmlFor={`fileUpload${id}`}>
              Browse Files
            </BrowseButton>
          </>
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
