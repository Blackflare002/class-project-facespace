import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Profile from "./Profile";
import SignIn from "./SignIn";
import UserInfoContext from "./userInfoContext";
import { useContext } from "react";

const App = () => {
  // setUserInfo
  const { userInfo } = useContext(UserInfoContext);
  console.log("APP, USERINFO: ", userInfo);
  // console.log("USERINFO 2: ", userInfo);
  // console.log("USERINFO 3: ", currentUser);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <NavBar>
          <div>
            <StyledLink to="/">
              <SiteHeader>FaceSpace</SiteHeader>
            </StyledLink>
          </div>
          <div>
            <SiteHeader>
              {userInfo ? (
                <div>Welcome, {userInfo.name}</div>
              ) : (
                <StyledLink to="/signin">Sign In</StyledLink>
              )}
            </SiteHeader>
          </div>
        </NavBar>
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

const SiteHeader = styled.div`
  color: white;
  font-family: var(--heading-font-family);
  font-size: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const NavBar = styled.div`
  height: 5vh;
  width: 100vw;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
`;

export default App;
