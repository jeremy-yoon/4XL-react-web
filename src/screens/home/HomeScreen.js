import React from "react";
import { ReactComponent as LogoMain } from "images/LogoMain.svg";
import styled from "styled-components";
import { Sdiv, Stext } from "components";
import Sketch from "react-p5";

export const HomeScreen = () => {
  let y = 0;
  let direction = "^";

  const setup = (p5, parentRef) => {
    p5.createCanvas(200, 200).parent(parentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.fill(255, y * 1.3, 0);
    p5.ellipse(p5.width / 2, y, 50);
    if (y > p5.height) direction = "";
    if (y < 0) {
      direction = "^";
    }
    if (direction === "^") y += 8;
    else y -= 4;
  };
  return (
    <S.Body>
      <LogoMain />
      <Sdiv col mgt={40}>
        <Stext h3 white>
          Integrated
        </Stext>
        <Stext h3 white>
          Bradn eXperience
        </Stext>
        <Stext h3 white>
          Solutions
        </Stext>
        <Stext h3 white>
          for your Brand
        </Stext>
      </Sdiv>
      <Sdiv mgt={72} col>
        <S.SelectedH1 h1>All</S.SelectedH1>
        <S.UnSelectedH1 h1>UX</S.UnSelectedH1>
        <S.UnSelectedH1 h1>BX</S.UnSelectedH1>
      </Sdiv>
      <div className="App">
        <h1>react-p5</h1>
        <Sketch setup={setup} draw={draw} />
      </div>
    </S.Body>
  );
};

const S = {};

S.Body = styled.div`
  flex: 1;
  padding-top: 72px;
  padding-left: 48px;
`;

S.SelectedH1 = styled(Stext)`
  color: white;
  letter-spacing: 0.05em;
`;

S.UnSelectedH1 = styled(Stext)`
  color: black;
  letter-spacing: 0.05em;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
`;
