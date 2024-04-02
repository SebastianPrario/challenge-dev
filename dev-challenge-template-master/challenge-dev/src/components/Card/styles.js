import styled from 'styled-components';

const CharacterCard = styled.div`
  position: relative;
  height: 280px;
  width: 230px;
  border: 4px solid #47e31e;
  border-radius: 2px;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const ImageCard = styled.div`
  display: flex;
  background-image: url(${(props) => props.$imageUrl});
  width: 100%;
  height: 100%;
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const Text = styled.div`
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-left: 10px;
  text-shadow:
    1px 0px 0px black,
    0px 1px 0px black,
    -1px 0px 0px black,
    0px -1px 0px black;
`;
export default { CharacterCard, ImageCard, Text };
