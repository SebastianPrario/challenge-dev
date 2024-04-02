import React from 'react'
import SearchByName from '../SearchByName'
import Filters from '../Filters'
import { NavMenu } from './styles'

export default function NavBar ({ setCharacterName, setFilter, filter }) {
  return (
    <NavMenu>
      <SearchByName setCharacter={setCharacterName} />
      <Filters
        setFilter={setFilter}
        setCharacterName={setCharacterName}
      />
    </NavMenu>
  )
}
