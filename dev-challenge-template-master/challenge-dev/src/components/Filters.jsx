import React, { useState, useEffect } from 'react'

export default function Filters ({ setFilter, filter }) {
  const statusOption = ['Alive', 'unknown']
  const genderOption = ['Alive', 'unknown']
  const SpeciesOption = ['Alive', 'unknown']

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
        {SpeciesOption.map((elem) => (
          <option key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <p>Opción seleccionada:
        <>{options.status}  </>
        <>{options.species}  </>
        <>{options.gender}</>
      </p>
    </div>
  )
}
