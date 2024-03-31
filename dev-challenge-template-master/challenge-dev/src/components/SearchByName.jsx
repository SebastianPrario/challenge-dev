import React, { useState } from 'react'

export default function SearchByName ({ setCharacter }) {
 
  const [searchName, setSearchName] = useState({ search: ''})
  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value
    setSearchName({ ...searchName, [property]: value })
  }
 
  const handleSubmit = (event) => {
    event.preventDefault()
    setCharacter(searchName.search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='search' placeholder='ingrese nombre a buscar' value={searchName.search} onChange={(event) => handleChange(event)} />
        <button type='submit'>buscar</button>
      </form>
    </div>
  )
}
