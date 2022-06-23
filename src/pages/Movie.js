import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import { getMovie, getMovieImages } from "../api/tmdb-api";

const Movie = (props) => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  useEffect(() => {
    getMovieImages(id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 return (
    <>
      {movie ? (
        <>
          <div class="container mt-4">
          <div class="card bg-base-200 shadow-xl">
            <figure class="w-full"><img src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : `https://via.placeholder.com/1920x1080`
        } alt="Movie Poster" class="p-8" /></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl">{movie.title}</h2>
    <div class="flex">
    {movie.genres.map((g) => (
        <span class="badge badge-info mx-2"><Icon icon="heroicons-solid:tag" /> {g.name}</span>
        ))}
        </div>
        <div class="flex">
        <span class="badge badge-success mx-2"><Icon icon="heroicons-solid:calendar" /> &nbsp; {movie.release_date}</span>
        <span class="badge badge-warning mx-2"><Icon icon="heroicons-solid:star" /> &nbsp; {movie.vote_average} ({movie.vote_count})</span>
        </div>
        <div class="flex">
        <span class="badge badge-neutral mx-2"><Icon icon="heroicons-solid:clock" /> &nbsp; {movie.runtime} mins</span>
        <span class="badge badge-neutral mx-2"><Icon icon="heroicons-solid:cash" /> &nbsp; {movie.revenue.toLocaleString()}</span>
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