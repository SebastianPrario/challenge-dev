import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function DetailCard ({ characters }) {
  return (
    <div>
      {characters?.map(elem => {
        return (

          <div key={elem.id}>
            <div>{elem.name}</div>
            <div>{elem.gender}</div>
            <Link to={`/detail/${elem.id}`}>
              <img src={elem.image} />
            </Link>
          </div>

        )
      })}
    </div>
  )
}
