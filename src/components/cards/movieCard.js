import React from 'react';

export default function movieCard(props) {
    const movie = props.movie;

    return (
        <div class="card w-96 bg-base-300 shadow-xl">
            <figure class="px-10 pt-10"><img src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : `http://via.placeholder.com/500x750`
        } alt="Movie Poster" class="rounded-xl" /></figure>
            <div class="card-body">
                <h2 class="card-title">{movie.title}</h2>
                <p>Released: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">More Info</button>
                </div>
            </div>
        </div>
    );
}