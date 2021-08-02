import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Sdiv, Stext } from "components";

export const ProfileScreen = () => {
  return (
    <S.Body>
      <Sdiv>
        <Sdiv mgt={48} mgl={48} col>
          <S.TextWrapper>
            <Stext h2 white>
              JEREMY YOON
            </Stext>
          </S.TextWrapper>
          <S.TextWrapper duration={1.0}>
            <Stext h2 white>
              SW ENGINEER / DESIGNER
            </Stext>
          </S.TextWrapper>
          <S.TextWrapper duration={1.2}>
            <Stext h2 white>
              BASED IN SEOUL
            </Stext>
          </S.TextWrapper>
          <S.TextWrapper duration={1.4}>
            <Stext h2 white>
              CONTACT@FORXL.IO
            </Stext>
          </S.TextWrapper>
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
