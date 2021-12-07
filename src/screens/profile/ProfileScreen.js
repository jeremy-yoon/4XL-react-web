import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Sv, St } from "components";

export const ProfileScreen = () => {
  return (
    <S.Body>
      <Sv>
        <Sv mt={48} ml={48} col>
          <S.TextWrapper>
            <St h2 white>
              JEREMY YOON
            </St>
          </S.TextWrapper>
          <S.TextWrapper duration={1.0}>
            <St h2 white>
              SW ENGINEER / DESIGNER
            </St>
          </S.TextWrapper>
          <S.TextWrapper duration={1.2}>
            <St h2 white>
              BASED IN SEOUL
            </St>
          </S.TextWrapper>
          <S.TextWrapper duration={1.4}>
            <St h2 white>
              CONTACT@FORXL.IO
            </St>
          </S.TextWrapper>
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

const slideUp = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;

  }
`;

const slideUpSet = css`
  animation-duration: 0.8s;
  animation-timing-function: ease;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
`;

S.TextWrapper = styled.div`
  ${slideUpSet}
  animation-duration: ${(props) => props.duration}s !important;
`;

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
