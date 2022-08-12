import React from "react";

import movieCard from "./movieCard";
import MovieContextProvider from "../../Context";
import sampleMovie from "./sampleMovie";
import AddToFavouritesIcon from "./icons/addToFavourites";

export default {
  component: movieCard,
  decorators: [
    (Story) => <MovieContextProvider>{Story()}</MovieContextProvider>,
  ],
};

export const Primary = () => {
  return (
    <movieCard
      id="674"
      movie={sampleMovie}
      action={(movie) => <AddToFavouritesIcon movie={sampleMovie} />}
    />
  );
};
Primary.storyName = "Movie Card";
