import { RecipeSearchResultItem } from "./RecipeSearchResultItem";

export const RecipeSearchResultList = ({ ingredients, recipes }) => (
  <>
    {recipes &&
      recipes.map((recipe) => (
        <RecipeSearchResultItem
          key={recipe.id}
          recipe={recipe}
          ingredients={ingredients}
        />
      ))}
  </>
);
