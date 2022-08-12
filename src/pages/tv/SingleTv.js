import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { MovieContext } from "../../Context";
import TvListTemplate from "../../components/templates/tvListTemplate";
import AddToFavouritesIcon from "../../components/cards/icons/addToFavourites";

const SingleTv = (props) => {
  const { tvdetails, similartv } = useContext(MovieContext);

  console.log(tvdetails);

  return (
    <>
      {tvdetails ? (
        <>
          <div className="container mt-4">
            <div className="card bg-base-200 shadow-xl">
              <figure className="w-full">
                <img
                  src={
                    tvdetails.poster_path
                      ? `https://image.tmdb.org/t/p/original/${tvdetails.backdrop_path}`
                      : `https://via.placeholder.com/1920x1080`
                  }
                  alt="movieDetails Poster"
                  className="p-8"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{tvdetails.name}</h2>
                <div className="flex">
                  {tvdetails.genres?.map((g) => (
                    <span className="badge badge-info mx-2">
                      <Icon icon="heroicons-solid:tag" /> {g.name}
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <span className="badge badge-success mx-2">
                    <Icon icon="heroicons-solid:calendar" /> &nbsp;{" "}
                    first aired on {tvdetails.first_air_date}
                  </span>
                  <span className="badge badge-warning mx-2">
                    <Icon icon="heroicons-solid:star" /> &nbsp;{" "}
                    {tvdetails.vote_average} ({tvdetails.vote_count})
                  </span>
                </div>
                <div className="flex">
                  <span className="badge badge-neutral mx-2">
                    <Icon icon="heroicons-solid:clock" /> &nbsp;{" "}
                    {tvdetails.episode_run_time} mins
                  </span>
                  <span className="badge badge-neutral mx-2">
                    <Icon icon="heroicons-solid:cash" /> &nbsp;{" "}
                    {tvdetails.number_of_seasons} seasons
                  </span>
                </div>
                <p>{tvdetails.overview}</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 mt-4 mb-4">
            <h2 className="text-2xl pt-8 pl-8">Similar Shows</h2>
            <TvListTemplate
              title="Similar Shows"
              tv={similartv}
              action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />;
              }}
            />
          </div>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default SingleTv;
