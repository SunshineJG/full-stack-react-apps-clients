import { Link } from "react-router-dom";
import { useMeals, MealsList } from "../meals";
import { useIngredients, IngredientsList } from "../ingredients";

export const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setRawMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();

  const onDeleteMeal = async (id) => {
    const response = await fetch(`http://localhost:8080/meals/${id}`, {
      method: "delete",
    });
    const updatedMeal = await response.json();
    console.log("updated meals from homepage: ", updatedMeal);
    setRawMeals(updatedMeal);
  };

  const onDeleteIngredient = async (name) => {
    const response = await fetch(`http://localhost:8080/ingredients/${name}`, {
      method: "delete",
    });
    const updatedIngredient = await response.json();
    console.log("updated ingredients from homepage: ", updatedIngredient);
    setIngredients(updatedIngredient);
  };

  return (
    <div className="page-container">
      <div className="column">
        <MealsList
          isLoading={isLoadingMeals}
          meals={meals}
          onDelete={onDeleteMeal}
        />
      </div>
      <div className="column">
        <IngredientsList
          isLoading={isLoadingIngredients}
          ingredients={ingredients}
          onDelete={onDeleteIngredient}
        />
        <Link to="/shopping-list">
          <button className="shopping-list-button list-container full-width">
            Generate Shopping List
          </button>
        </Link>
      </div>
    </div>
  );
};
