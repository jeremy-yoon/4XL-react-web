import React from "react";
import styled from "styled-components";
import { Sdiv, Stext } from "components";

export const ProfileScreen = () => {
  return (
    <S.Body>
      <Sdiv>
        <Sdiv mgt={48} mgl={48}>
          <Stext h1 white>
            JEREMY YOON
          </Stext>
          <Stext h1 white>
            SW ENGINEER / DESIGNER
          </Stext>
          <Stext h1 white>
            BASED IN SEOUL
          </Stext>
          <Stext h1 white>
            CONTACT@FORXL.IO
          </Stext>
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
  overflow: hidden;
  position: absolute;
`;

S.Footer = styled.div`
  position: fixed;
  left: 48px;
  bottom: 48px;
`;
