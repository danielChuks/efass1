import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { movieListAtom } from '../state';
import { Movie } from '../interfaces';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [values] = useRecoilState(movieListAtom);
    const [foundMovie, setFoundMovie] = useState<Movie | null>(null);



const handleSearch = () => {
    const filterValue = values.find((value) => value.movie.trim() === searchTerm.trim());
            if(filterValue) 
                setFoundMovie(filterValue);
}

 useEffect(() => {  
      handleSearch();
      return () => setFoundMovie(null)
 }, [searchTerm]);



  return (
    <div>
        <input 
            placeholder='Search Movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
            {foundMovie ? foundMovie.movie : 'no movie found'}
        </div>
    </div>
  )
}

export default Search;