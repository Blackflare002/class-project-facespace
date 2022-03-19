import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SmallAvatar, Wrapper } from "./Homepage";
import styled from "styled-components";
import Friends from "./Friends";

const Profile = () => {
  const [userId, setUserId] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    fetch(`/api/users/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUserId(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [profileId]);

  if (userId === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  console.log("user id: ", userId.data);
  // console.log("user friends: ", userId.data.friends);

  return (
    <>
      <ProfileBg></ProfileBg>
      <Wrapper>
        <ProfilePicBox>
          <ProfilePic src={userId.data.avatarUrl} />
          <ProfileName>{userId.data.name}</ProfileName>
        </ProfilePicBox>
        <div>
          <FriendsDivider>Friends</FriendsDivider>
          <InnerFriendBox>
            {userId.data.friends.map((el) => {
              // console.log(el);
              return (
                <div key={Math.round(Math.random() * 8008135)}>
                  <Friends
                    friendId={el}
                    key={Math.round(Math.random() * 8008135)}
                  ></Friends>
                </div>
              );
            })}
          </InnerFriendBox>
        </div>
      </Wrapper>
    </>
  );
};

const FriendsDivider = styled.div`
  color: var(--primary-color);
  font-family: var(--heading-font-family);
  border-bottom: solid 2px var(--primary-color);
  margin-bottom: 10px;
`;

const InnerFriendBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileName = styled.div`
  font-family: var(--heading-font-family);
  color: var(--primary-color);
  font-size: 40px;
`;

const ProfilePicBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfilePic = styled(SmallAvatar)`
  height: 200px;
  position: relative;
  top: -100px;
  border: 5px solid var(--primary-color);
  :hover {
    border: 5px solid var(--primary-color);
    background-color: none;
  }
`;

const ProfileBg = styled.div`
  width: 100vw;
  height: 30vh;
  background-image: url("/images/facespace_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* src="/images/facespace_bg.jpg" alt="background" */
`;

export default Profile;
