import React, { useState, useEffect } from "react";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import PageTemplate from '../components/templates/movieListTemplate'

const Discover = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }  
    const movies = data.results;

  const favourites = movies.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 
 return (
    <PageTemplate
    title='Discover Movies'
    movies={movies}
    selectFavourite={addToFavourites}
  />
 );
}

export default Discover;