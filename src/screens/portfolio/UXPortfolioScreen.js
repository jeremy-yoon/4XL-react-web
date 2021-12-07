import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Sv, St } from "components";

export const UXPortfolioScreen = () => {
  return (
    <S.Body>
      <Sv mt={48} ml={48} col jct act>
        <Sv row>
          <S.Gallery
            animation={slideDown}
            src={"http://placeimg.com/300/400/arch"}
            duration={0.8}
          />
          <S.Gallery
            animation={slideDown}
            src={"http://placeimg.com/300/400/animals"}
            duration={1.0}
          />
          <S.Gallery
            animation={slideDown}
            src={"http://placeimg.com/300/400/nature"}
            duration={1.2}
          />
          <S.Gallery
            animation={slideDown}
            src={"http://placeimg.com/300/400/people"}
            duration={1.4}
          />
        </Sv>
        <Sv row>
          <S.Gallery
            animation={slideUp}
            src={"http://placeimg.com/300/400/tech"}
            duration={1.4}
          />
          <S.Gallery
            animation={slideUp}
            src={"http://placeimg.com/300/400/arch"}
            duration={1.2}
          />
          <S.Gallery
            animation={slideUp}
            src={"http://placeimg.com/300/400/any"}
            duration={1.0}
          />
          <S.Gallery
            animation={slideUp}
            src={"http://placeimg.com/300/400/nature"}
            duration={0.8}
          />
        </Sv>
      </Sv>
      {/* <S.Footer>
        <St b2 white>
          4XL. All rights reserved.
        </St>
      </S.Footer> */}
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
  animation-duration: ${(props) => props.duration}s;
  animation-timing-function: ease;
  animation-name: ${(props) => props.animation};
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
`;

const expandEffect = css``;

S.Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

S.Footer = styled.div`
  position: fixed;
  left: 48px;
  bottom: 48px;
`;

S.Gallery = styled.img`
  background-color: ${(props) => props.theme.colors.titleColor};
  height: 400px;
  width: 300px;
  margin-right: 16px;
  margin-bottom: 16px;
  ${slideSet}
  ${(props) => props.animation}
  animation-duration: ${(props) => props.duration};
`;
