import { useState, useEffect } from "react";

export const useRecipeSearchResults = (searchString) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const loadSearchResult = async () => {
      const response = await fetch(
        `http://localhost:8080/recipes?search=${searchString}`
      );
      const results = await response.json();
      setSearchResults(results);
      setIsLoading(false);
    };

    loadSearchResult();
  }, [searchString]);

  return { isLoading, searchResults };
};
