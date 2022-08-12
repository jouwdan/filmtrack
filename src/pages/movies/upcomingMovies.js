import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import MovieListTemplate from "../../components/templates/movieListTemplate";
import AddToWatchlistIcon from "../../components/cards/icons/addToWatchlist";

const PopularMovies = () => {
  const { upcoming } = useContext(MovieContext);

  return (
    <>
      <div className="card bg-base-200 m-4">
        <h2 className="text-2xl pt-8 pl-8">Upcoming Movies</h2>
        <MovieListTemplate
          title="Upcoming Movies"
          movies={upcoming}
          action={(movie) => {
            return <AddToWatchlistIcon movie={movie} />;
          }}
        />
      </div>
    </>
  );
};

export default PopularMovies;
