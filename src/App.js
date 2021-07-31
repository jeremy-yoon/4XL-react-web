import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Sdiv } from "components";
import { HomeScreen } from "screens";
import styled from "styled-components";

export const App = () => {
  return (
    <S.Body>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </S.Body>
  );
};

const S = {};

S.Body = styled.div`
  background-color: black;
  min-height: 100vh;
`;
