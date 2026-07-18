import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import SavedRecipes from "./pages/SavedRecipes";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          }
        />
        <Route path="/menu/:id" element={<FoodDetailsPage />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
