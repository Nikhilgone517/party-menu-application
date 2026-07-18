import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import menuData from "../../data/menuData";
import './index.css'
const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const recipes = menuData.filter((item) => savedIds.includes(item.id));
    setSavedRecipes(recipes);
  }, []);

  const removeRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem(
      "savedRecipes",
      JSON.stringify(updatedRecipes.map((recipe) => recipe.id)),
    );
  };


  return (
    <div className="saved-recipes-container">
      <div className="saved-recipes-header">
        <div>
          <h1 className="saved-recipes-title">Saved Recipes</h1>
          <p className="saved-recipes-count">{savedRecipes.length} recipes saved</p>
        </div>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Menu
        </button>
      </div>
      <ul className="saved-recipes-list">
        {savedRecipes.length === 0 && (
          <div className="no-saved-recipes">
            <p>No saved recipes yet.</p>
            <h1 className="browse-link" onClick={()=>navigate('/')}>
              Browse the menu
            </h1>
          </div>
        )}
        {savedRecipes.map((recipe) => (
          <li key={recipe.id} className="recipe-card">
            <div>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </div>
            <div className="recipe-content">
              <h1 className="recipe-category">{recipe.category}</h1>
              <h1 className="recipe-name">{recipe.name}</h1>
              <p className="recipe-description">{recipe.description}</p>
              <p className="recipe-serving">For {recipe.servings} people</p>
              <button className="remove-btn" onClick={() => removeRecipe(recipe.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipes;
