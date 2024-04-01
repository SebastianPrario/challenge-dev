import React, { useState, useEffect } from 'react'
import { statusOption, genderOption, speciesOption } from './../helpers/options'
import { Button } from '../styles'

export default function Filters ({ setFilter, filter }) {
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
    <div>
      <select name='status' value={options.status} onChange={handleSeleccion}>
        <option value=''>status</option>
        {statusOption.map((elem) => (
          <option key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <select name='gender' value={options.gender} onChange={handleSeleccion}>
        <option value=''>gender</option>
        {genderOption.map((elem) => (
          <option key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <select name='species' value={options.species} onChange={handleSeleccion}>
        <option value=''>species</option>
        {speciesOption.map((elem) => (
          <option key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <p>Opción seleccionada:
        <>{options.status}  </>
        <>{options.species}  </>
        <>{options.gender}</>
        <Button onClick={() => setFilter({ status: ' ', gender: '', species: '' })}>refresh</Button>
      </p>
    </div>
  )
}
