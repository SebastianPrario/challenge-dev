import React from 'react';
import {
  statusOption,
  genderOption,
  speciesOption,
} from '../../../../constants';
import { Button } from '../../../../styles';
import Styled from './styles';

export default function Filters({ filters, setFilters, setCharacterName }) {
  const handleSelection = (event) => {
    const property = event.target.name;
    const { value } = event.target;
    setFilters({ ...filters, [property]: value });
  };

  const onClearFilters = () => {
    setFilters({
      status: '',
      species: '',
      gender: '',
    });
    setCharacterName('');
  };

  return (
    <Styled.Div>
      <Styled.DropdownWrapper>
        <Styled.DropdownSelect
          placeholder='Selecciona una opción'
          name='gender'
          value={filters.gender}
          onChange={handleSelection}
        >
          {genderOption.map((elem) => (
            <Styled.Option key={elem.value} value={elem.value}>
              {elem.label}
            </Styled.Option>
          ))}
        </Styled.DropdownSelect>
      </Styled.DropdownWrapper>
      <Styled.DropdownWrapper name='status'>
        <Styled.DropdownSelect
          name='status'
          value={filters.status}
          onChange={handleSelection}
        >
          {statusOption.map((elem) => (
            <Styled.Option key={elem.value} value={elem.value}>
              {elem.label}
            </Styled.Option>
          ))}
        </Styled.DropdownSelect>
      </Styled.DropdownWrapper>
      <Styled.DropdownWrapper name='species'>
        <Styled.DropdownSelect
          name='species'
          value={filters.species}
          onChange={handleSelection}
        >
          {speciesOption.map(({ label, value }) => (
            <Styled.Option key={value} value={value}>
              {label}
            </Styled.Option>
          ))}
        </Styled.DropdownSelect>
      </Styled.DropdownWrapper>
      <Button onClick={onClearFilters}>Limpiar Filtros</Button>
    </Styled.Div>
  );
}
