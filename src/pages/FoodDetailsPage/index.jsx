import React from "react";
import { useParams } from "react-router-dom";
import { getMenuItemById } from "../../data/menuUtils";
import { useNavigate } from "react-router-dom";
import "./index.css"

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
    <div className="food-details-container">
      <div className="food-details-header-container">
        <button className="header-button" onClick={()=>navigate("/")}>Back to Menu</button>
        <div>
          <button className="saved-btn header-button" onClick={()=>navigate("/saved-recipes")}>Saved Recipes</button>
          <button style={{"margin-left":12}} className="gold-button" onClick={saveRecipe}>Save Recipe</button>
        </div>
      </div>
      <div className="img-decript-block">
        <img className="fd-img" src={item.image} alt={item.name} />
        <div className="food-details-text-container">
          <div style={{ textAlign: "left" }}>
            <span>{item.category}</span>
            <span><img className="leaves" src="https://www.svgrepo.com/show/530302/leaves-2.svg"/>Veg</span>
          </div>
          <h1 style={{ textAlign: "left" }}>{item.name}</h1>
          <p style={{ textAlign: "left" }}>For {item.servings} people</p>
          <p style={{ textAlign: "left" }}>{item.description}</p>
        </div>
      </div>
      <ul className="ingredients-list">
        <h1 style={{ textAlign: "left" }}>Ingredients</h1>
        {item.ingredients.map((eachIngredient, index) => (
          <li className="ingredient-item" key={index}>
            <p>{eachIngredient.name}</p>
            <p>{eachIngredient.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetailsPage;
