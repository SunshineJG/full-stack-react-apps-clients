import { useState } from "react";
import { postWithCredentials } from "../data";

export const GroupsListItem = ({ group }) => {
  const [isClicked, setIsClicked] = useState(false);

  const requestToJoin = async () => {
    setIsClicked(true);
    await postWithCredentials(
      `http://localhost:8080/groups/${group.id}/requests`
    );
    alert("Your request has been submitted!");
  };

  return (
    <div className="list-item">
      <div className="list-item-data">
        <h3>{group.name}</h3>
        <p>Owned by: {group.owner.fullName}</p>
        <p>{group.members.length} members</p>
      </div>
      {!isClicked ? (
        <button onClick={requestToJoin}>Ask to Join</button>
      ) : (
        <button disabled={true}>Waiting for approval</button>
      )}
    </div>
  );
};
