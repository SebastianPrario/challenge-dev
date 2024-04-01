import React from 'react'

import { CharactersContainer } from '../../styles'
import Card from '../Card'

export default function DetailCard ({ characters, onClick }) {
  return (
    <CharactersContainer>
      {characters?.map(elem => {
        return (
          <Card key={elem.id} elem={elem} onClick={onClick} />
        )
      })}
    </CharactersContainer>
  )
}
