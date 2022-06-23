import React from "react";
import Movie from "../cards/movieCard";

const MovieList = (props) => {
  let movieCards = props.movies?.map((m) => (
      <Movie key={m.id} movie={m} />
  ));
  return movieCards;
};

export default MovieList;