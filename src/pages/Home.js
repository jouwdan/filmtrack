import React, { useState, useEffect } from "react";
import MovieList from "../components/lists/movieList";

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&include_adult=false&page=1`
        )
          .then((res) => res.json())
          .then((json) => {
            return json.results;
          })
          .then((movies) => {
            setMovies(movies);
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
 return (
    <div>
    <div class="card justify-center h-96 bg-base-200 m-4">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">Welcome to Filmtrack</h1>
      <p class="py-6">Filmtrack is an app to keep up with the latest movies.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div class="card bg-base-200 m-4">
    <h2 class="text-3xl m-6">Popular Movies</h2>
    <div className="flex flex-wrap justify-center w-full">
   <MovieList movies={movies}></MovieList>
   </div>
  </div>
  </div>
 );
}

export default Home;