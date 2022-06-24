import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { MoviesContext } from "../../contexts/moviesContext";
import { Icon } from '@iconify/react';

export default function MovieCard({ movie, action }) {
    const { favourites, addToFavourites } = useContext(MoviesContext);
    if (favourites.find((id) => id === movie.id)) {
        movie.favourite = true;
      } else {
        movie.favourite = false
      }
    
      const handleAddToFavourite = (e) => {
        e.preventDefault();
        addToFavourites(movie);
      };
    return (
        <div className="card bg-base-300 shadow-xl m-1">
            <figure><img src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : `http://via.placeholder.com/500x750`
        } alt="Movie Poster" className="pt-10" /></figure>
            <div className="card-body w-72 content-center">
                <h2 className="card-title">{movie.title}</h2>
                <div><span className="badge badge-success"><Icon icon="heroicons-solid:calendar" /> &nbsp; {movie.release_date}</span> &nbsp;
                <span className="badge badge-warning"><Icon icon="heroicons-solid:star" /> {movie.vote_average}</span></div>
                <div className="card-actions">
                {action(movie)}
                    <Link to={`/movies/${movie.id}`}>
                        <button className="btn btn-primary">More Info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}