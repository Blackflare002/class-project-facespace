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
        console.log(data);
        setUserId(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  if (userId === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  console.log("user id: ", userId.data);
  console.log("user friends: ", userId.data.friends);

  return (
    <>
      <ProfileBg></ProfileBg>
      <Wrapper>
        <div>Profile</div>
        <SmallAvatar src={userId.data.avatarUrl} />
        <div>
          <div>Friends</div>
          {userId.data.friends.map((el) => {
            console.log(el);
            return <Friends friendId={el}></Friends>;
          })}
        </div>
      </Wrapper>
    </>
  );
};

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
