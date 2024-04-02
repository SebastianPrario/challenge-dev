import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../graphQl/queries/getAllCharactersQuery';
import { Modal, Spinner } from '../../components';
import Styled from './styles';

function ModalContainer({ showModal, setShowModal }) {
  const { loading, data } = useQuery(GET_CHARACTER, {
    variables: { id: showModal },
  });

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <Modal onClose={onClose}>
      <Styled.Container>
        {loading && <Spinner />}
        {!!data && (
          <>
            <Styled.ImgModal src={data?.character.image} />
            <Styled.TextContainer>
              <Styled.TextTitle>{data?.character.name}</Styled.TextTitle>
              <Styled.TextParagraph>
                <strong>Estado: </strong> {data?.character.status}
              </Styled.TextParagraph>
              <Styled.TextParagraph>
                <strong>Género: </strong> {data?.character.gender}
              </Styled.TextParagraph>
              <Styled.TextParagraph>
                <strong>Especie: </strong> {data?.character.species}
              </Styled.TextParagraph>
              <Styled.TextParagraph>
                <strong>Tipo: </strong> {data?.character.type || 'Desconocido'}
              </Styled.TextParagraph>
              <Styled.TextParagraph>
                <strong>Planeta: </strong> {data?.character.origin.name}
              </Styled.TextParagraph>
              <Styled.TextParagraph>
                <strong>Dimensión:</strong>
                {data?.character.origin.dimension || 'Desconocido'}
              </Styled.TextParagraph>
            </Styled.TextContainer>
          </>
        )}
      </Styled.Container>
    </Modal>
  );
}

export default ModalContainer;
