import React from 'react'
import { Movie } from './Form';
import MovieItems from './MovieItems';



function MovieList(props: {movieItems: Movie[]}) {
    const items = props.movieItems

  return (
    <div>
        {items.map((item, index) => (
            <div key={index}>
                <MovieItems m={item.movie} d={item.description}/>
            </div>
        ))}
    </div>
  )
}

export default MovieList