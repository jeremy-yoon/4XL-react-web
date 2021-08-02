import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Sdiv, Stext } from "components";

export const UXPortfolioScreen = () => {
  return (
    <S.Body>
      <Sdiv>
        <Sdiv mgt={48} mgl={48} col jct act>
          <Sdiv row>
            <S.Gallery animation={slideUp} />
            <S.Gallery animation={slideDown} />
            <S.Gallery animation={slideLeft} />
            <S.Gallery animation={slideRight} />
          </Sdiv>
          <Sdiv row>
            <S.Gallery animation={slideRight} />
            <S.Gallery animation={slideLeft} />
            <S.Gallery animation={slideDown} />
            <S.Gallery animation={slideUp} />
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

const slideUp = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const slideRight = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;
const slideLeft = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const slideSet = css`
  animation-duration: 0.8s;
  animation-timing-function: ease;
  animation-name: ${(props) => props.animation};
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
`;

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
  background-color: ${(props) => props.theme.colors.titleColor};
  height: 400px;
  width: 300px;
  margin-right: 16px;
  margin-bottom: 16px;
  ${slideSet}
  ${(props) => props.animation}
`;
