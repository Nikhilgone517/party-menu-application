import React from 'react'
import {useState} from 'react'
import Header from '../../components/Header'
import Filters from '../../components/Filters'
import MenuGrid from '../../components/MenuGrid'
import { filterMenuItems } from "../../data/menuUtils";

const MenuPage = () => {
  const [category, setCategory] = useState('all')
  const [diet, setDiet] = useState('all')
  const [search, setSearch] = useState('')
  const filteredMenuItems = filterMenuItems({ category, diet, name: search })
  return (
    <div>
      <Header />
      <Filters category={category} setCategory={setCategory} diet={diet} setDiet={setDiet} search={search} setSearch={setSearch} />
      <MenuGrid menuData={filteredMenuItems} />
    </div>
    
  )
}

export default MenuPage