import React from "react";

import { Container, Image } from "./styles";

const NotFound = () => {
  const NotFoundImage = require("../../assets/133d62f4c7611596b265b81bfb9be08c (1).gif");
  return (
    <Container>
      <Image src={NotFoundImage} />
    </Container>
  );
};

export default NotFound;
