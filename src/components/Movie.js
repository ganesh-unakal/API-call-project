import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  // const deleteHandler = async() =>{
  //   const response =await fetch(`https://react-http-fb949-default-rtdb.firebaseio.com/movies/${props.id}.json`,
  //   {
  //     method: 'DELETE'
  //   })
  //   if(!response.ok){
  //     throw new Error('something went wrong')
  //   }
  //   props.onDelete(props.id)
  //   console.log('id', props.id)

  // }
  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => deleteHandler(props.id)}>delete</button>
    </li>
  );
};

export default Movie;
