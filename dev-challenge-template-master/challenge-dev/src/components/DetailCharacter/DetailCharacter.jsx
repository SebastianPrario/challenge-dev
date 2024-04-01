import React, { useState, useEffect } from 'react'
import { GET_CHARACTER } from '../../graphQl/queries/getAllCharactersQuery'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import NavBar from '../NavBar/NavBar'

export default function DetailCharacter () {
  const params = (useParams()).id

  const { loading, error, data } = useQuery(GET_CHARACTER,
    { variables: { id: params } })

  return (

    <div>
       {loading
        ? <p>loagind...</p>
        : <div>
          {!data.character
            ? <p> Personaje no encontrado  </p>
            : <div>
              <img src={data.character.image} />
              <p>{data.character.name}</p>
              <p>{data.character.status}</p>
              <p>{data.character.gender}</p>
              </div>}

        </div>}
      <button>
        <Link to='/'>regresar</Link>
      </button>
    </div>

  )
}
