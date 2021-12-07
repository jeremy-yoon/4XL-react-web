import React from "react";
import styled from "styled-components";
import { Sv, St } from "components";

export const SWPortfolioScreen = () => {
  return (
    <S.Body>
      <Sv>
        <Sv mt={48} ml={48} col jct act>
          <Sv row>
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
          </Sv>
          <Sv row>
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
            <S.Gallery />
          </Sv>
        </Sv>
      </Sv>
      <S.Footer>
        <St b2 white>
          4XL. All rights reserved.
        </St>
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
  overflow: hidden;
  position: absolute;
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
