import React, { useContext } from "react";
import { MovieContext } from "../Context";
import MovieListTemplate from "../components/templates/movieListTemplate";
import AddToFavouritesIcon from "../components/cards/icons/addToFavourites";

const PopularMovies = () => {
  const { popular } = useContext(MovieContext);

  return (
    <>
      <div className="card bg-base-200 m-4">
        <h2 className="text-2xl pt-8 pl-8">Popular Movies</h2>
        <MovieListTemplate
          title="Discover Movies"
          movies={popular}
          action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />;
          }}
        />
      </div>
    </>
  );
};

export default PopularMovies;
