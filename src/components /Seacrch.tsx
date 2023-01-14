import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { movieListAtom } from '../state';
import { Movie } from '../interfaces';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [values] = useRecoilState(movieListAtom);
    const [foundMovie, setFoundMovie] = useState<Movie | null>(null);



const handleSearch = (e: any) => {
    const filterValue = values.find(
        (value) => value.movie === searchTerm

        );


        if(filterValue) setFoundMovie(filterValue);
        console.log("this is filtered", filterValue)

        console.log("this is the values ", values);
        console.log("This is search term", searchTerm);
    }

 useEffect(() => {    
    console.log("this is found Movies", foundMovie);
 }, [foundMovie]);



  return (
    <div>

        <input 
            placeholder='Search Movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>

            <div>
                <button onClick={handleSearch}>search</button>
            </div>
            {foundMovie ? foundMovie.movie : 'no movie found'}
        </div>
    </div>
  )
}

export default Search;