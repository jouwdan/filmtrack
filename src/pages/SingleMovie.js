import React, {useContext}  from "react";
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import { MovieContext } from "../Context";

const SingleMovie = (props) => {

    const {
        moviedetails
    } = useContext(MovieContext);

    console.log(moviedetails);

 return (
    <>
      {moviedetails ? (
        <>
          <div className="container mt-4">
          <div className="card bg-base-200 shadow-xl">
            <figure className="w-full"><img src={
          moviedetails.poster_path
            ? `https://image.tmdb.org/t/p/original/${moviedetails.backdrop_path}`
            : `https://via.placeholder.com/1920x1080`
        } alt="movieDetails Poster" className="p-8" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{moviedetails.title}</h2>
    <div className="flex">
    {moviedetails.genres?.map((g) => (
        <span className="badge badge-info mx-2"><Icon icon="heroicons-solid:tag" /> {g.name}</span>
        ))}
        </div>
        <div className="flex">
        <span className="badge badge-success mx-2"><Icon icon="heroicons-solid:calendar" /> &nbsp; {moviedetails.release_date}</span>
        <span className="badge badge-warning mx-2"><Icon icon="heroicons-solid:star" /> &nbsp; {moviedetails.vote_average} ({moviedetails.vote_count})</span>
        </div>
        <div className="flex">
        <span className="badge badge-neutral mx-2"><Icon icon="heroicons-solid:clock" /> &nbsp; {moviedetails.runtime} mins</span>
        <span className="badge badge-neutral mx-2"><Icon icon="heroicons-solid:cash" /> &nbsp; {moviedetails.revenue?.toLocaleString()}</span>
        </div>
    <p>{moviedetails.overview}</p>
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

export default SingleMovie;