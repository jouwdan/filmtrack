import React from "react";
import Movie from "../cards/movieCard";

const MovieList = ({movies, action}) => {
  let movieCards = movies.map((m) => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return movieCards;
};

export default MovieList;