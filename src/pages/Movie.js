import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import useMovie from "../hooks/useMovie";
import { getMovie, getMovieImages } from "../api/tmdb-api";

const Movie = (props) => {

  const { id } = useParams();
  const [movie] = useMovie(id);

 return (
    <>
      {movie ? (
        <>
          <div className="container mt-4">
          <div className="card bg-base-200 shadow-xl">
            <figure className="w-full"><img src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : `https://via.placeholder.com/1920x1080`
        } alt="Movie Poster" className="p-8" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{movie.title}</h2>
    <div className="flex">
    {movie.genres.map((g) => (
        <span className="badge badge-info mx-2"><Icon icon="heroicons-solid:tag" /> {g.name}</span>
        ))}
        </div>
        <div className="flex">
        <span className="badge badge-success mx-2"><Icon icon="heroicons-solid:calendar" /> &nbsp; {movie.release_date}</span>
        <span className="badge badge-warning mx-2"><Icon icon="heroicons-solid:star" /> &nbsp; {movie.vote_average} ({movie.vote_count})</span>
        </div>
        <div className="flex">
        <span className="badge badge-neutral mx-2"><Icon icon="heroicons-solid:clock" /> &nbsp; {movie.runtime} mins</span>
        <span className="badge badge-neutral mx-2"><Icon icon="heroicons-solid:cash" /> &nbsp; {movie.revenue.toLocaleString()}</span>
        </div>
    <p>{movie.overview}</p>
  </div>
</div>
          </div>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
 );
}

export default Movie;