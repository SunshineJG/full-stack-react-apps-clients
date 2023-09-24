import { Link } from "react-router-dom";
import { IngredientItem } from "./IngredientItem";

export const IngredientsList = ({ isLoading, ingredients, onDelete }) => {
  return (
    <div className="list-container">
      <h1>Ingredients</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        ingredients.map((ingredient) => (
          <IngredientItem
            key={ingredient.name}
            ingredient={ingredient}
            onDelete={onDelete}
          />
        ))
      )}
      <Link to="/add-ingredient">
        <button className="space-before">+ Add Ingredient</button>
      </Link>
    </div>
  );
};
