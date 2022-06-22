import React from 'react';

export default function movieCard(props) {
    const movie = props.movie;

    return (
        <div class="card bg-base-300 shadow-xl flex-1">
            <figure><img src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : `http://via.placeholder.com/500x750`
        } alt="Movie Poster" class="pt-10" /></figure>
            <div class="card-body w-72 content-center">
                <h2 class="card-title">{movie.title}</h2>
                <div><span class="badge badge-success">{movie.release_date}</span> &nbsp;
                <span class="badge badge-warning">{movie.vote_average}</span></div>
                <div class="card-actions">
                    <button class="btn btn-primary">More Info</button>
                </div>
            </div>
        </div>
    );
}