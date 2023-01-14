import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { movieListAtom } from '../state';


function Form(){
    const [movie, setMovie] = useState("");
    const [description, setDescription] = useState("");
    const [movieList, setMovieList] = useRecoilState(movieListAtom);


    const handleMovieChange = (event: any ) => {
        setMovie(event.target.value);
    }

    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    }


    const handleSubmit = (event: any) => {
        event.preventDefault();
        setMovieList([...movieList, {movie, description}]);
        setDescription("");
        setMovie('')
    }

  return (
   
    <div>
        <div>
            <input 
                placeholder='Enter a movie'
                value={movie}
                name="movie"
                onChange={handleMovieChange}
            />
        </div>
        <div>
            <input 
                placeholder='Enter a description'
                name="description"
                value={description}
                onChange={handleDescriptionChange}
            />
        </div>
        <div>
            <button
                onClick={handleSubmit}
            >Add</button>
        </div>  
    </div>
  )
}

export default Form;