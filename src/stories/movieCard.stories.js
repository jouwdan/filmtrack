import React from 'react';
import MovieCard from '../components/cards/movieCard';
import SampleMovie from "./sampleData";

export default {
    title: "Movie Card",
    component: MovieCard,
  };
  
  export const Basic = () => {
    return (
      <MovieCard
        movie={SampleMovie}
      />
    );
  };
  Basic.storyName = "Default";

  export const Exceptional = () => {
    const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
      />
    );
  };
  Exceptional.storyName = "exception";