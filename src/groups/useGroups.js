import { useState, useEffect } from "react";

export const useGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const loadGroups = async () => {
      const response = await fetch("http://localhost:8080/groups");
      const groups = await response.json();
      setIsLoading(false);
      setGroups(groups);
    };

    loadGroups();
  }, []);

  return { isLoading, groups };
};
