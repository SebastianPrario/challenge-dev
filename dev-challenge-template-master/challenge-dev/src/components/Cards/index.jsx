import React from 'react';
import { CharactersContainer } from './style';
import Card from '../Card';

export default function DetailCard({ characters, onClick }) {
  return (
    <CharactersContainer>
      {characters?.map((elem) => (
        <Card key={elem.id} elem={elem} onClick={onClick} />
      ))}
    </CharactersContainer>
  );
}
