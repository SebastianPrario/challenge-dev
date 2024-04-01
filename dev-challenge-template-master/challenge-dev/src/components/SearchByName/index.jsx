import React, { useState } from 'react'
import Styled from './styles'

export default function SearchByName ({ setCharacter }) {
  const [searchName, setSearchName] = useState({ search: '' })
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
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Styled.SearchContainer>
        <Styled.SearchInput type='text' name='search' placeholder='ingrese nombre a buscar' value={searchName.search} onChange={(event) => handleChange(event)} />
        <Styled.SearchButton type='submit'>
          <span role='img' aria-label='Lupa'>
            🔍
          </span>
        </Styled.SearchButton>
      </Styled.SearchContainer>
    </form>
  )
}
