import { useEffect, useState } from "react";
import { SmallAvatar, Wrapper } from "./Homepage";
import styled from "styled-components";

const Friends = ({ friendId }) => {
  console.log(friendId);
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFriend(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);
  if (friend === null) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }
  return (
    <>
      <InnerFriendBox>
        <SmallAvatar src={friend.data.avatarUrl} />
        <FriendName>{friend.data.name}</FriendName>
      </InnerFriendBox>
    </>
  );
};

const InnerFriendBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FriendName = styled.div`
  background-color: lightblue;
  color: black;
  font-weight: bold;
`;

export default Friends;
