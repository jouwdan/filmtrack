import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import TvListTemplate from "../../components/templates/tvListTemplate";
import AddToFavouritesIcon from "../../components/cards/icons/addToFavourites";

const TopRatedTv = () => {
  const { topRatedTv } = useContext(MovieContext);

  return (
    <>
      <div className="card bg-base-200 m-4">
        <h2 className="text-2xl pt-8 pl-8">Top Rated TV</h2>
        <TvListTemplate
          title="Top Rated TV"
          tv={topRatedTv}
          action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />;
          }}
        />
      </div>
    </>
  );
};

export default TopRatedTv;
