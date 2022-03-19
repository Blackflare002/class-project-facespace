import { useEffect, useState } from "react";
import { SmallAvatar, Wrapper } from "./Homepage";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Friends = ({ friendId }) => {
  // console.log("Friend ID: ", friendId);
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
        <StyledLink to={`/profile/${friend.data.id}`}>
          <SmallAvatar src={friend.data.avatarUrl} />
          <FriendName>{friend.data.name}</FriendName>
        </StyledLink>
      </InnerFriendBox>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const InnerFriendBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FriendName = styled.div`
  /* background-color: lightblue; */
  background-color: var(--accent-bg-color);
  color: black;
  font-weight: bold;
`;

export default Friends;
