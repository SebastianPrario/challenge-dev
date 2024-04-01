import React, { useEffect, useState } from 'react'
import { useQuery, gql, useLazyQuery } from '@apollo/client'
import SearchByName from './SearchByName'
import InfiniteScroll from 'react-infinite-scroll-component'
import Filters from './Filters'
import { useGetAllCharactersQuery } from '../graphQl/queries/getAllCharactersQuery'
import DetailCard from './Card'

export default function Cards () {
  const [characterName, setCharacterName] = useState('')
  const [filter, setFilter] = useState({ status: ' ', gender: '', species: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const {
    getCharacters,
    characters,
    count,
    getMoreCharacters,
  
  } = useGetAllCharactersQuery()

  useEffect(() => {
    getCharacters({
      variables: {
        mypage: 1,
        filterGender: filter.gender,
        filterStatus: filter.status,
        filterSpecies: filter.species,
        characterName
      }
    })
  }, [getCharacters, filter, characterName])

  const loadMore = () => {
    getMoreCharacters(currentPage + 1, filter.gender , filter.status , filter.species , characterName)
    setCurrentPage(currentPage + 1)
  }

  return (
    <div>
      <SearchByName setCharacter={setCharacterName} />
      <Filters
        setFilter={setFilter}
        filter={filter}
      />
      <InfiniteScroll
        dataLength={count}
        next={loadMore}
        hasMore
        loader={<h4>Loading...</h4>}
      >
        <DetailCard characters={characters} />
      </InfiniteScroll>
      <button onClick={loadMore}>agregar mas</button>

    </div>
  )
}
