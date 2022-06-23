import React, { useState, useEffect } from "react";
import MovieListCarousel from "../components/lists/movieListCarousel";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getMovies } from "../api/tmdb-api";

const Home = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  if (isLoading) {
      return <Spinner />
  }
  if (isError) {
      return <h1>{error.message}</h1>
  }  
  const movies = data.results;
 return (
    <>
    <div className="card justify-center h-96 bg-base-200 m-4">
  <div className="hero-content text-center mx-auto">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Welcome to Filmtrack</h1>
      <p className="py-6">Filmtrack is an app to keep up with the latest movies.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="card bg-base-200 m-4">
    <h2 className="text-3xl m-6">Popular Movies</h2>
    <div className="flex flex-wrap items-stretch justify-center w-full pb-4">
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
   <MovieListCarousel movies={movies}></MovieListCarousel>
   </div>
   </div>
  </div>
  </>
 );
}

export default Home;