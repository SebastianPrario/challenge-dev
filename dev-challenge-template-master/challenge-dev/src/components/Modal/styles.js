import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;

  @media screen and (max-width: 500px) {
    position: fixed;
    width: auto;
    margin: 0 20px 0 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  max-height: 600px;
  min-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

export default {
  CloseButton,
  ModalContent,
  ModalWrapper,
};
