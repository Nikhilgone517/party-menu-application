import React from 'react'
import { Link } from 'react-router-dom'

const MenuGrid = ({ menuData }) => {
  return (
    
    <div>
        <p>{menuData.length} items found</p>
        <ul>
            {
                menuData.map((item) => (
                <li key={item.id}>
                    <Link to={`/menu/${item.id}`}>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <p>For {item.servings} people</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

                    
                
    

export default MenuGrid