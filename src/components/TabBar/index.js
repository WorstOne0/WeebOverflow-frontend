import React, { useState } from "react";

import { Container, TabContainer, TabItem, Track, Scroll } from "./styles";

import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";

function TabBar({ options }) {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <TabContainer>
        {options.map((item, indexItem) => (
          <TabItem
            index={index === indexItem}
            onClick={() => setIndex(indexItem)}
          >
            {item.icon}
            {item.text}
          </TabItem>
        ))}
      </TabContainer>
      {console.log(index * (100 / options.length))}
      <Track transform={index * (100 / options.length)}>
        <Scroll width={100 / options.length} />
      </Track>
    </Container>
  );
}

export default TabBar;
