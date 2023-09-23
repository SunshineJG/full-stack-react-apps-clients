import { useState, useEffect } from "react";

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch("http://localhost:8080/ingredients");
      const ingredients = await response.json();
      console.log("ingredients from useIngredients: ", ingredients);
      setIngredients(ingredients);
      setIsLoading(false);
    };

    loadIngredients();
  }, []);

  return { isLoading, ingredients, setIngredients };
};
