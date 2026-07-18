import React from "react";
import { useParams } from "react-router-dom";
import { getMenuItemById } from "../../data/menuUtils";
import { useNavigate } from "react-router-dom";

const FoodDetailsPage = () => {
  const { id } = useParams();
  const item = getMenuItemById(id);
  const navigate = useNavigate();

    const saveRecipe = () => {
        const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
        if (!savedRecipes.includes(item.id)) {
            savedRecipes.push(item.id);
            localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        }
    }
  return (
    <div>
      <div className="food-details-header-container">
        <button onClick={()=>navigate("/")}>Back to Menu</button>
        <div>
          <button onClick={()=>navigate("/saved-recipes")}>Saved Recipes</button>
          <button onClick={saveRecipe}>Save Recipe</button>
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
