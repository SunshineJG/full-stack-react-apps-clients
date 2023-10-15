import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useUser = () => {
  const auth = getAuth();

  const [userInfo, setUserInfo] = useState(() => {
    const user = auth.currentUser;
    const isLoading = !user;
    return { user, isLoading };
  });

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUserInfo({ user, isLoading: false });
    });
  }, []);

  return userInfo;
};
