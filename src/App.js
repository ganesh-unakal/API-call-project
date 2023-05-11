import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-fb949-default-rtdb.firebaseio.com/movies.json"
      ); //that 'movies' creates node in the data base

      if (!response.ok) {
        throw new Error("something went wrong...retrying");
      }

      const data = await response.json(); //json is for to convert js obect
      console.log(data);

      const loadedmovies = [];

      for (const key in data) {
        loadedmovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      console.log("1", loadedmovies);

      setMovies(loadedmovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    {
      console.log("render useeffect");
    }
    fetchMovieHandler();
    {
      console.log("render after fucntion call");
    }
  }, [fetchMovieHandler]);

  const addmovieHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-fb949-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST", //here post request creates a resource
        body: JSON.stringify(movie),
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const deleteHandler = async (id) => {
    const response = await fetch(
      `https://react-http-fb949-default-rtdb.firebaseio.com/movie/${id}.json`,
      {
        method: "DELETE",
      }
    );
    setMovies((prev) => {
      const updatedMovies = prev.filter((movie) => movie.id !== id);
      return updatedMovies;
    });
    if (!response.ok) {
      //ok is true or false
      throw new Error("something went wrong");
    }
    console.log("delete", response);
  };

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList onDelete={deleteHandler} movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading..</p>;
  }

  return (
    <React.Fragment>
      <AddMovie onAddMovie={addmovieHandler} />
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>

      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
