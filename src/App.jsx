import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import MenuPage from './pages/MenuPage'
import FoodDetailsPage from './pages/FoodDetailsPage'
import SavedRecipes from './pages/SavedRecipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<MenuPage />} />
      <Route path="/menu/:id" element={<FoodDetailsPage />} />
      <Route path="/saved-recipes" element={<SavedRecipes />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
