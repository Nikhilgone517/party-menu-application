import React from "react";
import { useParams } from "react-router-dom";
import { getMenuItemById } from "../../data/menuUtils";

const FoodDetailsPage = () => {
  const { id } = useParams();
  const item = getMenuItemById(id);
  console.log(item);
  return (
    <div>
      <div className="food-details-header-container">
        <button>Back to Menu</button>
        <div>
          <button>Saved Recipes</button>
          <button>Save Recipe</button>
        </div>
      </div>
      <div>
        <img />
        <div>
          <div>
            <span>{item.category}</span>
            <span>Veg</span>
          </div>
          <h1>{item.name}</h1>
          <p>For {item.servings} people</p>
          <p>{item.description}</p>
        </div>
      </div>
      <ul>
        <h1>Ingredients</h1>
        {item.ingredients.map((eachIngredient, index) => (
          <li key={index}>
            <p>{eachIngredient.name}</p>
            <p>{eachIngredient.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetailsPage;
