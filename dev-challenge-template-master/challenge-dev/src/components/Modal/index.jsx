import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../../graphQl/queries/getAllCharactersQuery'
import Spinner from './../Spinner'
import Styled from './styles'

function Modal ({ showModal, setShowModal }) {
  const { loading, data } = useQuery(GET_CHARACTER,
    { variables: { id: showModal } })

  return (
    <div>
      {loading
        ? <Spinner />
        : (
          <Styled.ModalWrapper>
            <Styled.ModalContent>
              <Styled.Container>
                <img src={data.character.image} />
                <Styled.TextContainer>
                  <Styled.CloseButton onClick={() => setShowModal(false)}>X</Styled.CloseButton>
                  <p>{data.character.name}</p>
                  <p>{data.character.status}</p>
                  <p>{data.character.gender}</p>
                </Styled.TextContainer>

              </Styled.Container>

            </Styled.ModalContent>
          </Styled.ModalWrapper>)}
    </div>
  )
}

export default Modal
