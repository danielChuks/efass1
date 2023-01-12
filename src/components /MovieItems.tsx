import React from 'react'

interface MovieItemsProps {
    m: string
    d: string
}

function MovieItems({m, d}: MovieItemsProps) {
  return (
    <div>
        {m}
        {d}
    </div>
  )
}

export default MovieItems