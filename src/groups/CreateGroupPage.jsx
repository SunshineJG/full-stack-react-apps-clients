import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithCredentials } from "../data";

export const CreateGroupPage = () => {
  const [nameValue, setNameValue] = useState("");
  const navigate = useNavigate();

  const createGroup = async () => {
    const response = await postWithCredentials("http://localhost:8080/groups", {
      name: nameValue,
    });
    const newGroupId = await response.json();
    navigate(`/groups/${newGroupId}`);
  };

  return (
    <div className="centered-container">
      <h1>Create Group</h1>
      <input
        type="text"
        placeholder="Enter Name for Group"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <button onClick={createGroup}>Create Group</button>
    </div>
  );
};
