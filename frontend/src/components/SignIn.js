// import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
//{ UserInfoProvider }
import UserInfoContext from "./userInfoContext";

//useContext

const SignIn = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");

  const handleChange = (value) => {
    setUsername(value);
    console.log("VALUE: ", value);
    // console.log("USER: ", userInfo);
  };

  let history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/signin", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("SIGNIN DATA: ", data);
        if (data.status === 200) {
          setUserInfo(data.user);
          sessionStorage.setItem("user", JSON.stringify(data.user));
          history.push("/");
        } else {
          console.log("error");
          setError(true);
        }
      });
  };
  if (userInfo) {
    history.push("/");
  }
  return (
    <>
      <Background></Background>
      <SignInHolder>
        <SignInBox></SignInBox>
        <LabelBox2>
          <form onSubmit={handleSubmit}>
            <LabelBox>
              {/* <label htmlFor="name">First name:</label> */}
              <input
                type="text"
                name="fname"
                placeholder="Enter your first name!"
                onChange={(ev) => handleChange(ev.target.value)}
              />
              <Button>Submit</Button>
              {error && <div>User doesn't exist!</div>}
            </LabelBox>
          </form>
        </LabelBox2>
      </SignInHolder>
    </>
  );
};

const LabelBox2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  border: none;
`;

const LabelBox = styled.div`
  position: relative;
  left: -310px;
  opacity: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: center; */
  /* justify-content: center; */
`;

const SignInHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const SignInBox = styled.div`
  z-index: -1;
  background-color: white;
  height: 200px;
  width: 450px;
  border: 1px solid black;
  opacity: 0.5;
`;

const Background = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/facespace_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default SignIn;
