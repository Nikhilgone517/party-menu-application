import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>The page you are looking for does not exist or has been moved.</p>
        <button onClick={() => navigate("/")}>Back to Menu</button>
    </div>
  )
}

export default NotFound