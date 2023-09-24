import { useLocation, useNavigate } from "react-router-dom";

export const RecipeSearchResultItem = ({ recipe, ingredients = [] }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedDate = new Date(params.get("date"));
  const navigate = useNavigate();

  const missingIngredients = recipe.ingredients.filter(
    (recipeIngredient) =>
      !ingredients.some(
        (ingredient) => ingredient.name === recipeIngredient.name
      )
  );

  const addMealWithRecipe = async () => {
    await fetch("http://localhost:8080/meals", {
      method: "post",
      body: JSON.stringify({
        date: selectedDate,
        recipeId: recipe.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div className="search-list-item" onClick={addMealWithRecipe}>
      <h3>{recipe.name}</h3>
      {missingIngredients.length === 0 ? (
        <p>You hae all the required ingredients!</p>
      ) : (
        <p>You are missing {missingIngredients.length} ingredients</p>
      )}
    </div>
  );
};
