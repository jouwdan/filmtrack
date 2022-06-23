import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function movieCard(props) {
    const movie = props.movie;

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
                    <Link to={`/movies/${movie.id}`}>
                        <button className="btn btn-primary">More Info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}