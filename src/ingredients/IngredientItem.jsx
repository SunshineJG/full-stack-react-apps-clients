import { SmallX } from "../ui";

export const IngredientItem = ({ ingredient }) => (
  <div className="list-item">
    <h3>{ingredient.name}</h3>
    <p>
      {ingredient.amount} {ingredient.units}
    </p>
    <div className="right-action">
      <SmallX />
    </div>
  </div>
);
