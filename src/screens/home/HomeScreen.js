import React from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Sdiv, Stext } from "components";
import imgSample from "images/sample.png";
// import Sketch from "react-p5";

export const HomeScreen = () => {
  // let y = 0;
  // let direction = "^";

  // const setup = (p5, parentRef) => {
  //   p5.createCanvas(200, 200).parent(parentRef);
  // };

  // const draw = (p5) => {
  //   p5.background(0);
  //   p5.fill(255, y * 1.3, 0);
  //   p5.ellipse(p5.width / 2, y, 50);
  //   if (y > p5.height) direction = "";
  //   if (y < 0) {
  //     direction = "^";
  //   }
  //   if (direction === "^") y += 8;
  //   else y -= 4;
  // };
  const history = useHistory();

  const goProfile = () => {
    history.push("/profile");
  };
  const goUXPortfolio = () => {
    history.push("/ux");
  };
  const goSWPortfolio = () => {
    history.push("/sw");
  };
  const goPMPortfolio = () => {
    history.push("/pm");
  };

  return (
    <S.Body>
      <Sdiv>
        <Sdiv col mgt={40}>
          <S.NavButton>
            <Stext h3 white onClick={goUXPortfolio}>
              UX Design
            </Stext>
          </S.NavButton>
          <S.NavButton>
            <Stext h3 white onClick={goSWPortfolio}>
              Software Development
            </Stext>
          </S.NavButton>
          <S.NavButton>
            <Stext h3 white onClick={goPMPortfolio}>
              Project Management
            </Stext>
          </S.NavButton>
          <S.NavButton onClick={goProfile}>
            <Stext h3 white>
              My Profile
            </Stext>
          </S.NavButton>
        </Sdiv>
        <Sdiv mgt={72} col>
          <S.SelectedH1 h1>All ABOUT</S.SelectedH1>
          <S.UnSelectedH1 h1>UX DESIGN</S.UnSelectedH1>
          <S.UnSelectedH1 h1>SW DEVELOPMENT</S.UnSelectedH1>
        </Sdiv>
      </Sdiv>
      <S.Footer>
        <Stext b2 white>
          4XL. All rights reserved.
        </Stext>
      </S.Footer>
      {/* <S.AnimationContainer>
        <img src={imgSample} alt="background" />
      </S.AnimationContainer> */}

      {/* <div className="App">
        <h1>react-p5</h1>
        <Sketch setup={setup} draw={draw} />
      </div> */}
    </S.Body>
  );
};

const S = {};

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

S.Body = styled.div`
  flex: 1;
  padding: 0 48px 48px 48px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  position: absolute;
`;

S.Footer = styled.div`
  position: fixed;
  left: 48px;
  bottom: 48px;
`;

S.SelectedH1 = styled(Stext)`
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer;
  z-index: 1;
`;

S.UnSelectedH1 = styled(Stext)`
  color: black;
  letter-spacing: 0.05em;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
  cursor: pointer;
  z-index: 1;
`;

S.AnimationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: -1;
`;

S.NavButton = styled.div`
  cursor: pointer;
`;
