import styled from 'styled-components'

export const CharactersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 10px;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 30px;
    margin-bottom: 30px;
    
    @media screen and (max-width: 1200px){
      margin-left: 10%;
      grid-template-columns: repeat(5,1fr)
    }
    @media screen and (max-width: 800px){
      margin-left: 10%;
      grid-template-columns: repeat(2,1fr)
    }
    @media screen and (max-width: 500px){
      margin-left: 20%;
      
      grid-template-columns: repeat(1,1fr)
    }

`