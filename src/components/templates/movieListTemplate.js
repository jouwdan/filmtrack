import React, { useState } from "react";
import MovieList from "../lists/movieList";

function MovieListTemplate({ movies, title, action }) {
  return (
    <>
    <div className="card bg-base-200 m-4">
    <div className="flex flex-wrap items-stretch justify-center w-full py-4">
   <MovieList action={action} movies={movies}></MovieList>
   </div>
  </div>
    </>    
  );
}
export default MovieListTemplate;