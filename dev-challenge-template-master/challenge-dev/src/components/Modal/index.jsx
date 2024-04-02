import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../../graphQl/queries/getAllCharactersQuery'
import Spinner from './../Spinner'
import Styled from './styles'
import styled from 'styled-components'

const ImgModal = styled.img`
 
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 40px;
`

const Htext = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
`

const Parr = styled.p`
  font-size: 14px;
  margin: 5px 0;
`

function Modal ({ showModal, setShowModal }) {
  const { loading, data } = useQuery(GET_CHARACTER,
    { variables: { id: showModal } })
  console.log(data?.character)
  return (
    <div>
      {loading
        ? <Spinner />
        : (
          <Styled.ModalWrapper>
            <Styled.ModalContent>
              <Styled.CloseButton onClick={() => setShowModal(false)}>
                <Styled.Container>
                  <ImgModal src={data.character.image} />
                  <Styled.TextContainer>
                    <Htext>{data.character.name}</Htext>
                    <Parr>Status: {data.character.status}</Parr>
                    <Parr>Gender: {data.character.gender}</Parr>
                    <Parr>Species: {data.character.species}</Parr>
                    <Parr>Type: {data.character.type}</Parr>
                    <Parr>Origin: {data.character.origin.name}</Parr>
                    <Parr>Dimension: {data.character.origin.dimension}</Parr>
                  </Styled.TextContainer>
                </Styled.Container>
              </Styled.CloseButton>
            </Styled.ModalContent>
          </Styled.ModalWrapper>)}
    </div>
  )
}

export default Modal
