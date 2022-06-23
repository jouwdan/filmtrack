import React from "react";
import Movie from "../cards/movieCard";

const MovieListCarousel = (props) => {
  let movieCards = props.movies?.map((m) => (
    <div className="carousel-item">
      <Movie key={m.id} movie={m} />
    </div>
  ));
  return movieCards;
};

export default MovieListCarousel;