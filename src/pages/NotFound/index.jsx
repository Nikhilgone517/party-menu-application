import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='not-found-bg'>
        <h1 className='bold-orange-text'>404</h1>
        <p className='bold-white-text'>Page Not Found</p>
        <p className='white-descript'>The page you are looking for does not exist or has been moved.</p>
        <button className='gold-button' onClick={() => navigate("/")}>
          Back to Menu
        </button>
    </div>
  )
}

export default NotFound