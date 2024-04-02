import React from 'react'
import styled from 'styled-components'
import Styled from './styles'
import { Link } from 'react-router-dom'

const ImageCards = styled.div`
display: flex;
background-image: url(${props => props.imageUrl});
width: 100%;
height: 100%;
background-size: cover;
border-top-left-radius: 15px;
border-top-right-radius: 20px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`
const Text = styled.div`
  font-size: 24px; 
  text-align: center; 
  color: #ffffff; 
  align-self: flex-end; 
  margin-bottom: 10px;
  margin-left: 10px;
  text-shadow: 1px 0px 0px black,
               0px 1px 0px black,
              -1px 0px 0px black,
               0px -1px 0px black;

`

export default function ({ elem, onClick }) {
  console.log(elem.image)
  return (
    <Styled.CharacterCard onClick={() => onClick(elem?.id)}>
      <ImageCards key={elem.id}imageUrl={elem.image} >
        <Text>{elem.name}</Text>
      </ImageCards>
    </Styled.CharacterCard>
  )
}
