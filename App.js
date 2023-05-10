import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]= useState(null)

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://swapi.dev/api/films/");
    
      if(!response.ok){
        throw new Error('something went wrong')
      }
    
      const data = await response.json(); //json is for to convert js obect

     
      
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    
  } catch (error) {
    setError(error.message)
  }
  setIsLoading(false);
}

let content = 
    

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>

      <section>
        {isLoading ? <p>loading...</p> : <MoviesList movies={movies} />}
        {isLoading ? error : <p>{error}</p>}
        {isLoading && movies.length === 0 &&  !error && <p>Found no movies</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
