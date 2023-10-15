import { useState, useEffect } from "react";
import { useUser } from "../auth";

export const useUserGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userGroups, setUserGroups] = useState([]);

  const { user } = useUser();
  const loadUserGroups = async () => {
    if (!user) {
      setUserGroups([]);
      setIsLoading(false);
      return;
    }

    const response = await fetch(
      `http://localhost:8080/users/${user.uid}/groups`,
      {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      }
    );
    const groups = await response.json();
    setUserGroups(groups);
    setIsLoading(false);
  };
  useEffect(() => {
    loadUserGroups();
  }, []);

  return { isLoading, userGroups };
};
