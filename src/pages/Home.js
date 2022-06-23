import React, { useState, useEffect } from "react";
import MovieListCarousel from "../components/lists/movieListCarousel";
import { getMovies } from "../api/tmdb-api";

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getMovies().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 return (
    <div>
    <div class="card justify-center h-96 bg-base-200 m-4">
  <div class="hero-content text-center mx-auto">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">Welcome to Filmtrack</h1>
      <p class="py-6">Filmtrack is an app to keep up with the latest movies.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div class="card bg-base-200 m-4">
    <h2 class="text-3xl m-6">Popular Movies</h2>
    <div className="flex flex-wrap items-stretch justify-center w-full pb-4">
    <div class="carousel carousel-center p-4 space-x-4 rounded-box">
   <MovieListCarousel movies={movies}></MovieListCarousel>
   </div>
   </div>
  </div>
  </div>
 );
}

export default Home;