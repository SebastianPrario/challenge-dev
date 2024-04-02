import styled from 'styled-components';

export const CharacterCard = styled.div`
  position: relative;
  height: 280px;
  width: 230px;
  border: 4px solid #47e31e;
  border-radius: 2px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Characterinfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  opacity: 0;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
`;
