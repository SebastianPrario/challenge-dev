import React, { Fragment } from 'react'

export default function DetailCard ({ characters }) {

  return (
    <div>
      {characters?.map( elem => {
        return (
          <Fragment key={elem.id}>
          <div>{elem.name}</div>
          <div>{elem.gender}</div>
          </Fragment>
        )
      })}
    </div>
  )
}
