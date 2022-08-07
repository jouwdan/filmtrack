import React from "react";

import { movieCard } from "././movieCard";
import MovieContext from "../../Context";
import sampleMovie from "./sampleMovie";
import AddToFavouritesIcon from "./icons/addToFavourites";

export default {
  component: movieCard,
  decorators: [(Story) => <MovieContext>{Story()}</MovieContext>],
};

export const Primary = () => {
  return (
    <movieCard
      movie={sampleMovie}
      action={(movie) => <AddToFavouritesIcon movie={movie} />}
    />
  );
};
Primary.storyName = "Movie Card";
