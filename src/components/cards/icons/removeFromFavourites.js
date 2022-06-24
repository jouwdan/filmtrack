import React, { useContext } from "react";
import { MoviesContext } from "../../../contexts/moviesContext";
import { Icon } from '@iconify/react';

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavourites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
  };
  return (
    <button className="btn btn-error" onClick={handleRemoveFromFavourites}><Icon icon="heroicons-solid:heart" /></button>
  );
};

export default RemoveFromFavouritesIcon;