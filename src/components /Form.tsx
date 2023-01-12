import React, { useState } from 'react'
import MovieList from './MovieList'

export interface Movie {
    movie: string
    description: string 
}

function Form(){
    const [movie, setMovie] = useState("")
    const [description, setDescription] = useState("");
    const [movieItems, setMovieItems] =useState<Movie[]>([])


    const handleMovieChange = (event: any ) => {
        setMovie(event.target.value)
    }

    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value)
    }


    const handleSubmit = (event: any) => {
        event.preventDefault();
        setMovieItems([...movieItems, {movie, description} as Movie]);
        console.log(movieItems)
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
        
        <MovieList movieItems={movieItems}/>
        
    </div>
  )
}

export default Form