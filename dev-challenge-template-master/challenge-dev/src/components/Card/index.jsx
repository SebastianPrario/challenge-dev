import React from 'react';
import Styled from './styles';

export default function CardsContainer({ elem, onClick }) {
  return (
    <Styled.CharacterCard onClick={() => onClick(elem?.id)}>
      <Styled.ImageCard key={elem.id} $imageUrl={elem.image}>
        <Styled.Text>{elem.name}</Styled.Text>
      </Styled.ImageCard>
    </Styled.CharacterCard>
  );
}
