import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Profile from "./Profile";
import SignIn from "./SignIn";
// import image from "../"

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
          <Route exact path="/profile/:profileId">
            <Profile />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
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
