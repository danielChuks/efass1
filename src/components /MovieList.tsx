import React from 'react';
import MovieItems from './MovieItems';
import { useRecoilState } from 'recoil';
import { movieListAtom } from '../state';


function MovieList() {
    const [movieList] = useRecoilState(movieListAtom);

  return (
    <div>
        <div>
            Add Your Favourate Movie: 
        </div>

        {movieList.map((item, index) => (
            <div key={index}>
                <MovieItems m={item.movie} d={item.description}/>
            </div>
        ))}
    </div>
  )
}

export default MovieList;