import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetAllCharactersQuery } from '../../graphQl/queries/getAllCharactersQuery';
import { Filters, SearchByName } from './components';
import { NavBar, Cards, Spinner } from '../../components';
import Modal from '../ModalContainer';

function CharactersContainer() {
  const [characterName, setCharacterName] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
    characterName: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { getCharacters, characters, count, hasNext, getMoreCharacters } =
    useGetAllCharactersQuery();

  useEffect(() => {
    getCharacters({
      variables: {
        mypage: 1,
        filterGender: filters.gender,
        filterStatus: filters.status,
        filterSpecies: filters.species,
        characterName: filters.characterName,
      },
    });
    setCurrentPage(1);
  }, [getCharacters, filters]);

  const loadMore = () => {
    getMoreCharacters(
      currentPage + 1,
      filters.gender,
      filters.status,
      filters.species,
      characterName,
    );
    setCurrentPage(currentPage + 1);
  };

  const onSubmitSearch = () => {
    setFilters({ ...filters, characterName });
  };

  return (
    <div>
      {!!showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal} />
      )}
      <NavBar>
        <h2 style={{ color: 'white' }}>Challenge Kimcha</h2>
        <SearchByName
          character={characterName}
          setCharacter={setCharacterName}
          onSubmit={onSubmitSearch}
        />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setCharacterName={setCharacterName}
        />
      </NavBar>
      <InfiniteScroll
        style={{ marginTop: '240px', overflow: 'hidden' }}
        dataLength={count}
        next={loadMore}
        hasMore={hasNext}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center', color: 'white' }}>
            <b>Eso es todo!</b>
          </p>
        }
      >
        <Cards characters={characters} onClick={setShowModal} />
      </InfiniteScroll>
    </div>
  );
}

export default CharactersContainer;
