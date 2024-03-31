import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import SearchByName from './SearchByName'
import Filters from './Filters'

export default function Cards () {
  const [characterName, setCharacterName] = useState('')
  const [filter, setFilter] = useState({ status: ' ', gender: '', species: '' })
  const ALL_CHARACTERS = gql`

  query  findCharacterByName {
    characters(filter:{ 
        name : "${characterName}"
        status : "${filter.status}"
        gender : "${filter.gender}"
        species : "${filter.species}" 
    })
    {results{
      id
      name
      status
      species
      gender
      image
    }
  }
}
`

  function GetCharacters () {
    const { loading, error, data } = useQuery(ALL_CHARACTERS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return data.characters.results.map(({ id, name, status, origin, image }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img width='200' height='200' alt='location-reference' src={`${image}`} />
        <br />
        <b>About this location:</b>
        <p>{status}</p>
        <br />
      </div>
    ))
  }
  return (
    <div>
      <SearchByName
        setCharacter={setCharacterName}
        characterName={characterName}
      />
      <Filters
        setFilter={setFilter}
        filter={filter}
      />
      <GetCharacters />
    </div>
  )
}
