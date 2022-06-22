import React from "react";
import Movie from "../cards/movieCard";

const MovieList = (props) => {
  let movieCards = props.movies?.map((m) => (
    <div class="m-2">
      <Movie key={m.id} movie={m} />
    </div>
  ));
  return movieCards;
};

export default MovieList;