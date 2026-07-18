import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const MenuGrid = ({ menuData }) => {
  return (
    
    <div className='menugrid '>
        <p>{menuData.length} items found</p>
        <ul className='menu-grid'>
            {
                menuData.map((item) => (
                    <Link to={`/menu/${item.id}`}>
                <li className='each-menu-div' key={item.id}>
                    
                    <div>
                        <img src={item.image} alt={item.name} className='menu-image' />
                    </div>
                        <div className='menu-info'>
                            <h1 className='gold-orange-text'>{item.category}</h1>
                            <h1 className='recipe'>{item.name}</h1>
                            <p className='descript'>{item.description}</p>
                            <p className='descript'>For {item.servings} people</p>
                        </div>
                    
                </li></Link>
            ))}
        </ul>
    </div>
  )
}

                    
                
    

export default MenuGrid