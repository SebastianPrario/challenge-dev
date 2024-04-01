import styled from 'styled-components'

export const CharactersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 25px;
    margin-left: 2%;
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 800px){
      margin-left: 10%;
      grid-template-columns: repeat(2,1fr)
    }
    @media screen and (max-width: 500px){
      margin-left: 20%;
      
      grid-template-columns: repeat(1,1fr)
    }

`

export const CharacterCard = styled.div`
    position: relative;
    height: 280px;
    width: 230px;
    border: 4px solid #47e31e;
    border-radius: 2px;
    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

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

`

export const Button = styled.button`
    border: none;
    background-color: #47e31e;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 1px;
    padding: 0.7rem 1.2rem;
    border-radius: 40px;
    outline: none;
    cursor: pointer;

    &:hover{
    background-color: #30a812}

`
