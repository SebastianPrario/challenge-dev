import styled from 'styled-components'

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 12px;
  background-color: black;
  padding: 8px;
  border-radius: 4px;
  border: 2px solid white;
`

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
`
const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  color: white !important;
  padding: 4px;
  font-size: 16px;
`

export default { SearchContainer, SearchButton, SearchInput }
