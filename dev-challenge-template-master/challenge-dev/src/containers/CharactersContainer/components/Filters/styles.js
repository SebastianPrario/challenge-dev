import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0 12px 0 12px;
  border: 2px solid white;
`;

const DropdownSelect = styled.select`
  width: 99%;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
`;

const Option = styled.option`
  background-color: black;
  color: white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  padding: 8px;
`;

export default {
  DropdownSelect,
  DropdownWrapper,
  Option,
  Div,
};
