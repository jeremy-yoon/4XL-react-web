import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { useHistory } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { Sv, St } from "components";
import imgSample from "images/sample.png";
import VideoSample from "images/VideoSample.mp4";
// import Sketch from "react-p5";

export const HomeScreen = () => {
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
      <Sv>
        <Sv col mt={40}>
          <S.NavButton>
            <St h3 white onClick={goUXPortfolio}>
              Design/Development Portfolios
            </St>
          </S.NavButton>
          <S.NavButton>
            <St h3 white onClick={goSWPortfolio}>
              UX Research Articles
            </St>
          </S.NavButton>
          {/* <S.NavButton>
            <St h3 white onClick={goPMPortfolio}>
              Project Management
            </St>
          </S.NavButton> */}
          <S.NavButton onClick={goProfile}>
            <St h3 white>
              Profile
            </St>
          </S.NavButton>
        </Sv>
        <Sv mt={72} col>
          <S.SelectedH1 h1>FOUR X L</S.SelectedH1>
          <S.UnSelectedH1 h1 duration={1.2}>
            Logical, Luxury,
          </S.UnSelectedH1>
          <S.UnSelectedH1 h1 duration={1.4}>
            Lead, Life
          </S.UnSelectedH1>
        </Sv>
      </Sv>
      <S.BgVideoWrapper>
        <S.BgVideo autoPlay loop muted>
          <source src={VideoSample} type="video/mp4" />
        </S.BgVideo>
      </S.BgVideoWrapper>
      <S.Footer>
        <St b2 white>
          4XL. All rights reserved.
        </St>
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

S.BgVideoWrapper = styled.div`
  position: fixed;
  top: 47.5%;
  left: 20%;
  /* transform: translate(0%, -50%); */
  transform: rotate(90deg);
`;

S.BgVideo = styled.video`
  z-index: 0;
  width: 120vh;
  height: 80px;
  object-fit: cover;
  overflow: hidden;
  border: 5px solid white;
`;

S.Footer = styled.div`
  position: fixed;
  left: 48px;
  bottom: 48px;
`;

S.SelectedH1 = styled(St)`
  color: ${(props) => props.theme.colors.titleColor};
  letter-spacing: 0.05em;
  cursor: pointer;
  z-index: 1;
  ${slidUpSet};
  animation-duration: 1s !important;
  transition: all 0.25s linear;
`;

S.UnSelectedH1 = styled(St)`
  color: ${(props) => props.theme.colors.bgColor};
  letter-spacing: 0.05em;
  text-shadow: -1px -1px 0 ${(props) => props.theme.colors.titleColor},
    1px -1px 0 ${(props) => props.theme.colors.titleColor},
    -1px 1px 0 ${(props) => props.theme.colors.titleColor},
    1px 1px 0 ${(props) => props.theme.colors.titleColor};
  cursor: pointer;
  ${slidUpSet};
  animation-duration: ${(props) => props.duration}s !important;
  transition: all 0.25s linear;
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
  ${slidUpSet};
`;
