import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import menuData from "../../data/menuData";

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

  console.log(savedRecipes);

  return (
    <div>
      <div>
        <div>
          <h1>Saved Recipes</h1>
          <p>{savedRecipes.length} recipes saved</p>
        </div>
        <button onClick={() => navigate("/")}>Back to Menu</button>
      </div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.length === 0 && (
          <div>
            <p>No saved recipes yet.</p>
            <h1 onClick={()=>navigate('/')}>Browse the menu</h1>
          </div>
        )}
        {savedRecipes.map((recipe) => (
          <li key={recipe.id}>
            <div>
              <img />
            </div>
            <div>
              <h1>{recipe.category}</h1>
              <h1>{recipe.name}</h1>
              <p>{recipe.description}</p>
              <p>For {recipe.servings} people</p>
              <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipes;
