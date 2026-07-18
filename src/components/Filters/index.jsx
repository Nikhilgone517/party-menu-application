import React from 'react'
import './index.css'
const Filters = ({ category, setCategory, diet, setDiet, search, setSearch }) => {
  return (
    <div className="filters-container">
        <div>
            <h1 className='filters'>Category</h1>
            <div>
                <button className='each-filter' onClick={() => setCategory('all')}>All</button>
                <button className='each-filter' onClick={() => setCategory('starter')}>Starter</button>
                <button className='each-filter' onClick={() => setCategory('main')}>Main</button>
                <button className='each-filter' onClick={() => setCategory('sides')}>Sides</button>
                <button className='each-filter' onClick={() => setCategory('desert')}>Dessert</button>
            </div>
        </div>
        <div>
            <h1 className='filters'>DIET</h1>
            <div>
                <button className='each-filter' onClick={() => setDiet('all')}>All</button>
                <button className='each-filter' onClick={() => setDiet('veg')}><img className="leaves" src="https://www.svgrepo.com/show/530302/leaves-2.svg"/> Veg</button>
                <button className='each-filter' onClick={() => setDiet('nonveg')}><img className="leaves" src="https://www.svgrepo.com/show/397426/meat-on-bone.svg" />Non-Veg</button>
            </div>
            <div>
                <input className='search-input' type='text' placeholder='Search by name (e.g. chicken)' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="gold-button">Search</button>
            </div>
        </div>
    </div>
  )
}

export default Filters