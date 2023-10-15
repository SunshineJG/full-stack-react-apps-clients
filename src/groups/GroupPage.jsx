import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../auth";
import { useProtectedResource, postWithCredentials } from "../data";
import { MessagesList } from "../messages";
import { RequestsList } from "../requests";

export const GroupPage = () => {
  const [messageValue, setMessageValue] = useState("");
  const { id } = useParams();
  const { user } = useUser();
  const { data: group, setData: setGroup } = useProtectedResource(
    `http://localhost:8080/groups/${id}`,
    { owner: {}, members: [], message: [], request: [] }
  );

  const rejectRequest = async (requestId) => {
    const response = await postWithCredentials(
      `http://localhost:8080/groups/${id}/requests/${requestId}/reject`
    );
    const updatedRequests = await response.json();
    setGroup({
      ...group,
      requests: updatedRequests,
    });
  };

  const acceptRequest = async (requestId) => {
    const response = await postWithCredentials(
      `http://localhost:8080/groups/${id}/requests/${requestId}/accept`
    );
    const updatedRequests = await response.json();
    console.log("updated request: ", updatedRequests);
    setGroup({
      ...group,
      requests: updatedRequests,
    });
  };

  const postMessage = async () => {
    const response = await postWithCredentials(
      `http://localhost:8080/groups/${id}/messages`,
      { text: messageValue }
    );
    const updatedMessages = await response.json();
    console.log("updated message: ", updatedMessages);
    setGroup({
      ...group,
      messages: updatedMessages,
    });
    setMessageValue("");
  };

  return (
    <div className="centered-container">
      <h1>{group.name}</h1>
      <p>Ownered by: {group.owner.fullName}</p>
      <div>
        members:{" "}
        {group.members.map((member) => (
          <p>{member}</p>
        ))}
      </div>
      <MessagesList messages={group.messages} />
      <div className="new-message-form">
        <input
          type="text"
          placeholder="Type your message here..."
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button onClick={postMessage}>Submit</button>
      </div>
      {group.ownerId === user.uid ? (
        <RequestsList
          requests={group.requests}
          onAccept={acceptRequest}
          onReject={rejectRequest}
        />
      ) : null}
    </div>
  );
};
