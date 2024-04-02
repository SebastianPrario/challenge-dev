import styled from 'styled-components'

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

`

const ImageCard = styled.img`
width:100%;
height:100%;
object-fit: cover;

`
export default { CharacterCard  , ImageCard}
