import { Link } from "react-router-dom";
import { SmallX } from "../ui";

export const MealsItem = ({ meal, date, onDelete }) => {
  let mealName;
  if (meal) {
    mealName = meal.recipe.name;
  }
  const displayDate = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  return (
    <>
      <div className="list-item">
        {meal ? (
          <>
            <h3>
              {displayDate} {month}
            </h3>
            <p>{mealName}</p>
            <div className="right-action">
              <SmallX onClick={() => onDelete(meal._id)} />
            </div>
          </>
        ) : (
          <>
            <h3>
              {displayDate} {month}
            </h3>
            <p>No meal planned yet</p>
            <div className="right-action">
              <Link to={`/recipes?date=${date.toString()}`}>
                <button>Add</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};
