import React, { useState, useEffect } from "react";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from '../components/templates/movieListTemplate';
import AddToFavouritesIcon from '../components/cards/icons/addToFavourites';


const Discover = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }  
    const movies = data.results;

 return (
    <PageTemplate
    title='Discover Movies'
    movies={movies}
    action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
  />
 );
}

export default Discover;