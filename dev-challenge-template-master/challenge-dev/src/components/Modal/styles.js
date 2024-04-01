import styled from "styled-components";

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
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CloseButton = styled.button`
  text-align: end;
  border: none;
  background: none;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`



export default { Container, CloseButton, TextContainer, ModalContent, ModalWrapper }
