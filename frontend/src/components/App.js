import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <NavBar>FaceSpace</NavBar>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/page-1">Page 1</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const NavBar = styled.div`
  height: 5vh;
  width: 100vw;
  background-color: var(--primary-color);
  color: white;
  font-family: var(--heading-font-family);
  font-size: 30px;
`;

export default App;
