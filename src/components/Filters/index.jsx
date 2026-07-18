import React from 'react'

const Filters = ({ category, setCategory, diet, setDiet, search, setSearch }) => {
  return (
    <div>
        <div>
            <h1>Category</h1>
            <div>
                <button onClick={() => setCategory('all')}>All</button>
                <button onClick={() => setCategory('starter')}>Starter</button>
                <button onClick={() => setCategory('main')}>Main</button>
                <button onClick={() => setCategory('sides')}>Sides</button>
                <button onClick={() => setCategory('desert')}>Dessert</button>
            </div>
        </div>
        <div>
            <h1>DIET</h1>
            <div>
                <button onClick={() => setDiet('all')}>All</button>
                <button onClick={() => setDiet('veg')}>icon Veg</button>
                <button onClick={() => setDiet('nonveg')}>Non-Veg</button>
            </div>
            <div>
                <input type='text' placeholder='Search by name (e.g. chicken)' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Filters