import React, { useState } from "react";
import MovieList from "../lists/movieList";

function MovieListTemplate({ movies, title, selectFavourite }) {
  return (
    <>
    <div class="card bg-base-200 m-4">
    <div className="flex flex-wrap items-stretch justify-center w-full py-4">
   <MovieList movies={movies} selectFavourite={selectFavourite}></MovieList>
   </div>
  </div>
    </>    
  );
}
export default MovieListTemplate;