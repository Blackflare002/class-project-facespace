import { useEffect, useState } from "react";
import { SmallAvatar, Wrapper } from "./Homepage";

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
  return <SmallAvatar src={friend.data.avatarUrl} />;
};

export default Friends;
