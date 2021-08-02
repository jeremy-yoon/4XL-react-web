import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { useHistory } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
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
              Design/Development Portfolios
            </Stext>
          </S.NavButton>
          <S.NavButton>
            <Stext h3 white onClick={goSWPortfolio}>
              UX Research Articles
            </Stext>
          </S.NavButton>
          {/* <S.NavButton>
            <Stext h3 white onClick={goPMPortfolio}>
              Project Management
            </Stext>
          </S.NavButton> */}
          <S.NavButton onClick={goProfile}>
            <Stext h3 white>
              Profile
            </Stext>
          </S.NavButton>
        </Sdiv>
        <Sdiv mgt={72} col>
          <S.SelectedH1 h1>FOUR X L</S.SelectedH1>
          <S.UnSelectedH1 h1 duration={1.2}>
            For Logical, Luxury,
          </S.UnSelectedH1>
          <S.UnSelectedH1 h1 duration={1.4}>
            Lead, Life
          </S.UnSelectedH1>
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

const slidUpSet = css`
  animation-duration: 0.8s;
  animation-timing-function: ease;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
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
  color: ${(props) => props.theme.colors.titleColor};
  letter-spacing: 0.05em;
  cursor: pointer;
  z-index: 1;
  ${slidUpSet};
  animation-duration: 1s !important;
  transition: all 0.25s linear;
`;

S.UnSelectedH1 = styled(Stext)`
  color: ${(props) =>
    props.theme.colors.titleColor == "white" ? "black" : "white"};
  letter-spacing: 0.05em;
  text-shadow: -1px -1px 0 ${(props) => props.theme.colors.titleColor},
    1px -1px 0 ${(props) => props.theme.colors.titleColor},
    -1px 1px 0 ${(props) => props.theme.colors.titleColor},
    1px 1px 0 ${(props) => props.theme.colors.titleColor};
  cursor: pointer;
  ${slidUpSet};
  animation-duration: ${(props) => props.duration}s !important;
  transition: all 0.25s linear;
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
  ${slidUpSet};
`;
