import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import {
  HomeScreen,
  ProfileScreen,
  UXPortfolioScreen,
  SWPortfolioScreen,
  PMPortfolioScreen,
} from "screens";
import styled, { ThemeProvider } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Sdiv } from "components";
import { ReactComponent as LogoMain } from "images/LogoMain.svg";
import { ReactComponent as IcMore } from "images/IcMore.svg";
import { dark, light } from "styles/theme";

export const App = () => {
  const history = useHistory();
  const location = useLocation();
  const goHome = () => {
    history.push("/");
  };

  const [themeMode, setThemeMode] = useState(false); // 테마 모드 세팅
  const theme = themeMode == false ? dark : light; // 테마 환경에 맞는 테마 컬러 가져오기.

  return (
    <ThemeProvider theme={theme}>
      <S.Body>
        <Sdiv pdt={72} pdl={48} pdr={48} sb>
          <Sdiv onClick={goHome} style={{ cursor: "pointer" }}>
            <S.LogoMain />
          </Sdiv>
          <Sdiv onClick={() => setThemeMode(!themeMode)}>
            <S.IcMore />
          </Sdiv>
        </Sdiv>

        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            <Switch location={location}>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/profile" component={ProfileScreen} />
              <Route exact path="/ux" component={UXPortfolioScreen} />
              <Route exact path="/sw" component={SWPortfolioScreen} />
              <Route exact path="/pm" component={PMPortfolioScreen} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </S.Body>
    </ThemeProvider>
  );
};

const S = {};

S.Body = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
  min-height: 100vh;
  transition: all 0.25s linear;
`;

S.LogoMain = styled(LogoMain)`
  fill: ${(props) => props.theme.colors.titleColor};
  transition: all 0.25s linear;
`;
S.IcMore = styled(IcMore)`
  fill: ${(props) => props.theme.colors.titleColor};
  transition: all 0.25s linear;
`;
