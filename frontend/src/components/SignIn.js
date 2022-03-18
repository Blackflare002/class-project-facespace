import styled from "styled-components";

const SignIn = () => {
  return (
    <>
      <Background></Background>
      <SignInHolder>
        <SignInBox></SignInBox>
        <LabelBox2>
          <form>
            <LabelBox>
              {/* <label htmlFor="name">First name:</label> */}
              <input
                type="text"
                name="fname"
                placeholder="Enter your first name!"
              />
              <Button>Submit</Button>
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
