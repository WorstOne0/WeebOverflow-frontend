import React, { useState } from "react";

import * as S from "./styles";

import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";

function TabBar({ options, children }) {
  const [index, setIndex] = useState(0);

  return (
    <S.Container>
      <S.Wrapper>
        <S.TabContainer>
          {options.map((item, indexItem) => (
            <S.TabItem
              index={index === indexItem}
              onClick={() => setIndex(indexItem)}
            >
              {item.icon}
              {item.text}
            </S.TabItem>
          ))}
        </S.TabContainer>

        <S.Track>
          <S.Scroll width={100 / options.length} transform={index * 100} />
        </S.Track>
      </S.Wrapper>

      <S.MainContainer>
        <S.Main
          width={100 * children.length}
          translate={index * (100 / children.length)}
        >
          {children.map((item, indexItem) => (
            <S.MainWrapper
              visibility={index === indexItem}
              width={100 / children.length}
            >
              {item}
            </S.MainWrapper>
          ))}
        </S.Main>
      </S.MainContainer>
    </S.Container>
  );
}

export default TabBar;
