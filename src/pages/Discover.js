import React, { useState, useEffect } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templates/movieListTemplate'

const Discover = (props) => {
    const [movies, setMovies] = useState([]);
    const addToFavourites = (movieId) => {
        const updatedMovies = movies.map((m) =>
          m.id === movieId ? { ...m, favourite: true } : m
        );
        setMovies(updatedMovies);
      };
    useEffect(() => {
      getMovies().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 return (
    <PageTemplate
    title='Discover Movies'
    movies={movies}
    selectFavourite={addToFavourites}
  />
 );
}

export default Discover;