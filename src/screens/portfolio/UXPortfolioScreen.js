import React from "react";
import styled from "styled-components";
import { Sdiv, Stext } from "components";

export const UXPortfolioScreen = () => {
  return (
    <S.Body>
      <Sdiv>
        <Sdiv mgt={48} mgl={48} col jct act>
          <Sdiv row>
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
          </Sdiv>
          <Sdiv row>
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
          </Sdiv>
        </Sdiv>
      </Sdiv>
      <S.Footer>
        <Stext b2 white>
          4XL. All rights reserved.
        </Stext>
      </S.Footer>
    </S.Body>
  );
};

const S = {};

S.Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  position: absolute;
  overflow: hidden;
`;

S.Footer = styled.div`
  position: fixed;
  left: 48px;
  bottom: 48px;
`;

S.Gallery = styled.div`
  background-color: gray;
  height: 400px;
  width: 300px;
  margin-right: 16px;
  margin-bottom: 16px;
`;
