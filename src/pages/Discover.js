import React, { useState, useEffect } from "react";
import MovieList from "../components/lists/movieList";
import { getMovies } from "../api/tmdb-api";

const Discover = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getMovies().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 return (
    <>
    <div class="card justify-center h-48 bg-base-200 m-4">
  <div class="hero-content text-center mx-auto">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">Discover Movies</h1>
    </div>
  </div>
</div>
    <div class="card bg-base-200 m-4">
    <div className="flex flex-wrap items-stretch justify-center w-full py-4">
   <MovieList movies={movies}></MovieList>
   </div>
  </div>
  </>
 );
}

export default Discover;