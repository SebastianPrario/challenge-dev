import React from 'react'
import Styled from './styles'
import { Link } from 'react-router-dom'
import { Image } from '../../styles'
export default function ({ elem, onClick }) {
  return (
    <Styled.CharacterCard onClick={() => onClick(elem?.id)}>
      <div key={elem.id}>
        <div>{elem.name}</div>
        <div>{elem.gender}</div>
        <Image src={elem.image} />
      </div>
    </Styled.CharacterCard>
  )
}
