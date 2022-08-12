import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../Context";
import { Icon } from "@iconify/react";

export default function TvCard({ tv, action }) {
  const { handleClick, refreshPage, favourites } = useContext(MovieContext);
  return (
    <div className="card bg-base-300 shadow-xl m-1">
      <figure>
        <img
          src={
            tv.poster_path
              ? `https://image.tmdb.org/t/p/w200/${tv.poster_path}`
              : `http://via.placeholder.com/500x750`
          }
          alt="TV Poster"
          className="pt-10"
        />
      </figure>
      <div className="card-body w-72 content-center">
        <h2 className="card-title">{tv.name}</h2>
        <div>
          <span className="badge badge-success">
            <Icon icon="heroicons-solid:calendar" /> &nbsp; {tv.first_air_date}
          </span>{" "}
          &nbsp;
          <span className="badge badge-warning">
            <Icon icon="heroicons-solid:star" /> {tv.vote_average}
          </span>
        </div>
        <div className="card-actions">
          {action(tv)}
          <Link
            to={`/tv/${tv.id}`}
            key={tv.id}
            onClick={() => {
              handleClick(tv.id);
              refreshPage();
            }}
          >
            <button className="btn btn-primary">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
