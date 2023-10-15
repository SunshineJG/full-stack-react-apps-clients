import { auth } from "../firbase.config";

export const postWithCredentials = async (url, bodyData) => {
  const user = auth.currentUser;

  if (!user) {
    console.log("Only authenticated user can join a group!");
    return;
  }

  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(bodyData),
    headers: {
      AuthToken: await user.getIdToken(),
      "Content-Type": "application/json",
    },
  });

  return response;
};
