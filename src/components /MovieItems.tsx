
interface MovieItemsProps {
    m: string
    d: string
}

function MovieItems({m, d}: MovieItemsProps) {
  return (
    <div>
      <div>
          Name : {m}
      </div>
      <div>
        Description : {d}
      </div>
    </div>
  )
}

export default MovieItems