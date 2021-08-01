import React from "react";
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
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Sdiv } from "components";
import { ReactComponent as LogoMain } from "images/LogoMain.svg";
import { ReactComponent as IcMore } from "images/IcMore.svg";

export const App = () => {
  const history = useHistory();
  const location = useLocation();
  const goHome = () => {
    history.push("/");
  };
  return (
    <S.Body>
      <Sdiv pdt={72} pdl={48} pdr={48} sb>
        <Sdiv onClick={goHome}>
          <LogoMain />
        </Sdiv>
        <Sdiv>
          <IcMore />
        </Sdiv>
      </Sdiv>

      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
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
  );
};

const S = {};

S.Body = styled.div`
  background-color: black;
  min-height: 100vh;
`;
