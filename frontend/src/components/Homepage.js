import { useEffect, useState } from "react";
import styled from "styled-components";

const Homepage = () => {
  const [homePics, setHomePics] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHomePics(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  if (homePics === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  //   console.log("user 0: ", homePics.data[0].avatarUrl);

  return (
    <>
      <Wrapper>
        <div>
          <BigHeader>All Facespace Members</BigHeader>
        </div>
        <AvatarBox>
          {homePics.data.map((el) => {
            //   console.log("EL: ", el);
            return (
              <div key={Math.round(Math.random() * 8008135)}>
                <SmallAvatar
                  key={Math.round(Math.random() * 8008135)}
                  src={el.avatarUrl}
                ></SmallAvatar>
              </div>
            );
          })}
        </AvatarBox>
      </Wrapper>
    </>
  );
};

const AvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;

const SmallAvatar = styled.img`
  height: 100px;
`;

const BigHeader = styled.h1`
  font-size: var(--header-height);
`;

const Wrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  /* border: 1px solid black; */
`;

export default Homepage;
