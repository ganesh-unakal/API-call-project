import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
const[movies, setMovies] =useState([])


const fetchMovieHandler = () =>{
  fetch('https://swapi.dev/api/films/').then(response =>{
    return response.json(); //json is for to convert js obect
  }).then((data)=>{
    const transformedMovies = data.results.map((movieData)=>{
      return{
        id: movieData.episode_id,
        title: movieData.title,
        openindText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    })
    setMovies(transformedMovies)
  })
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
