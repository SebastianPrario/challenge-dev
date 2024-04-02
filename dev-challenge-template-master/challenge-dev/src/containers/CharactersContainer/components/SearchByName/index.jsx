import React from 'react';
import Styled from './styles';

export default function SearchByName({ character, setCharacter, onSubmit }) {
  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <Styled.SearchContainer>
      <Styled.SearchInput
        type='text'
        name='search'
        placeholder='ingrese nombre a buscar'
        value={character}
        onChange={(event) => handleChange(event)}
      />
      <Styled.SearchButton type='button' onClick={onSubmit}>
        <span role='img' aria-label='Lupa'>
          🔍
        </span>
      </Styled.SearchButton>
    </Styled.SearchContainer>
  );
}
