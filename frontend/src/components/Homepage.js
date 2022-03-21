import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserInfoContext from "./userInfoContext";
import { useContext } from "react";

const Homepage = () => {
  const [homePics, setHomePics] = useState(null);
  // setUserInfo
  const { userInfo } = useContext(UserInfoContext);

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

  return (
    <>
      <Wrapper>
        <div>
          <BigHeader>All Facespace Members</BigHeader>
        </div>
        <AvatarBox>
          {homePics.data.map((el) => {
            let profileId = el.id;
            return userInfo && userInfo.friends.includes(el.id) ? (
              <Link
                to={`/profile/${profileId}`}
                key={Math.round(Math.random() * 123456)}
              >
                <FriendAvatar
                  key={Math.round(Math.random() * 123456)}
                  src={el.avatarUrl}
                />
              </Link>
            ) : (
              <Link
                to={`/profile/${profileId}`}
                key={Math.round(Math.random() * 123456)}
              >
                <SmallAvatar
                  key={Math.round(Math.random() * 123456)}
                  src={el.avatarUrl}
                />
              </Link>
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

export const SmallAvatar = styled.img`
  height: 100px;
  :hover {
    border: solid blue 5px;
    background-color: blue;
  }
`;

const FriendAvatar = styled(SmallAvatar)`
  border: solid 3px green;
`;

const BigHeader = styled.h1`
  font-size: var(--header-height);
`;

export const Wrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  /* border: 1px solid black; */
`;

export default Homepage;
