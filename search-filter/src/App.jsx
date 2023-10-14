import React from 'react'
import { useState } from 'react'
import { NavbarWithSearch } from './Navbar'
import { Cards } from './Card'
export default function App() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div>
      <NavbarWithSearch setSearchTerm={setSearchTerm} />
      <Cards searchTerm={searchTerm} />
    </div>
  )
}
   