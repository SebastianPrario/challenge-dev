import React, { useState, useEffect } from 'react'
import { statusOption, genderOption, speciesOption } from '../../helpers/options'
import { Button } from '../../styles'
import Styled from './styles'

export default function Filters ({ setFilter, setCharacterName }) {
  const [options, setOptions] = useState({
    status: '',
    species: '',
    gender: ''
  })

  const handleSeleccion = (event) => {
    const property = event.target.name
    const value = event.target.value
    setOptions({ ...options, [property]: value })
  }

  useEffect(() => {
    setFilter(options)
  }, [options])
  return (
    <Styled.Div>
      <Styled.DropdownWrapper>
        <Styled.DropdownSelect placeholder='Selecciona una opción' name='gender' value={options.gender} onChange={handleSeleccion}>
          {genderOption.map((elem) => (
            <Styled.Option key={elem}>
              {elem}
            </Styled.Option>))}
        </Styled.DropdownSelect>
      </Styled.DropdownWrapper>
      <Styled.DropdownWrapper name='status'>
        <Styled.DropdownSelect name='status' value={options.status} onChange={handleSeleccion}>
          {statusOption.map((elem) => (
            <Styled.Option key={elem}>
              {elem}
            </Styled.Option>))}
        </Styled.DropdownSelect>
      </Styled.DropdownWrapper>
      <Styled.DropdownWrapper name='species'>
        <Styled.DropdownSelect name='species' value={options.species} onChange={handleSeleccion}>
          {speciesOption.map((elem) => (
            <Styled.Option key={elem}>
              {elem}
            </Styled.Option>))}
        </Styled.DropdownSelect>
      </Styled.DropdownWrapper>
      <Button onClick={() => {
        setFilter({
          status: '',
          species: '',
          gender: ''
        })
        setCharacterName()
      }}
      >
        Reset
      </Button>
    </Styled.Div>
  )
}
