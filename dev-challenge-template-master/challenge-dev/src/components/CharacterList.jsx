import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useGetAllCharactersQuery } from '../graphQl/queries/getAllCharactersQuery'
import DetailCard from './Cards/Cards'
import { Button } from '../styles'
import NavBar from './NavBar/NavBar'
import Modal from './Modal'

export default function Cards () {
  const [characterName, setCharacterName] = useState('')
  const [filter, setFilter] = useState({ status: ' ', gender: '', species: '' })
  const [ showModal, setShowModal ] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const {
    getCharacters,
    characters,
    count,
    hasNext,
    getMoreCharacters
  } = useGetAllCharactersQuery()
  console.log(hasNext)
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
    setCurrentPage(1)
  }, [getCharacters, filter, characterName])

  const loadMore = () => {
    getMoreCharacters(currentPage + 1, filter.gender, filter.status, filter.species, characterName)
    setCurrentPage(currentPage + 1)
  }

  return (
    <div>
      {!!showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}
      <NavBar
        setCharacterName={setCharacterName}
        filter={filter}
        setFilter={setFilter}
      />
      <InfiniteScroll
        dataLength={count}
        next={loadMore}
        hasMore={hasNext}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Eso es todo!</b>
          </p>
        }
      >
        <DetailCard characters={characters} onClick={setShowModal} />
      </InfiniteScroll>
    </div>
  )
}
