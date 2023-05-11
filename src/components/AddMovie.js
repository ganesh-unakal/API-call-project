import {useRef } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = () => {
const titleRef = useRef('');
const openingTextRef = useRef('');
const releaseDateRef= useRef('');


  const submitHandler = (event) =>{
    event.preventDefault();
 
    const newMovie ={
        title : titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
    }
    console.log(newMovie)

  }

  return (
  
      <form onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />

          <label style={{ display: "block" }}  htmlFor='opening-text'>Opening Text</label>
          <textarea rows="5" id="opening-text" ref={openingTextRef}/>

          <label style={{ display: "block" }} htmlFor='date'>Releases Date</label>
          <input type="text" id="date" ref={releaseDateRef}/>

          <button style={{ marginTop: "1rem" }}>ADD MOVIES</button>
        </div>
      </form>
    
  );
};
export default AddMovie;
