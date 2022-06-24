import React, { useContext } from "react";
import { MoviesContext } from "../../../contexts/moviesContext";
import { Icon } from '@iconify/react';

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
  return (
    <div class="tooltip" data-tip="favourite movie">
    {
    movie.favourite ? (
<button className="btn btn-error" onClick={handleAddToFavourites}><Icon icon="heroicons-solid:heart" /></button>
) : <button className="btn" onClick={handleAddToFavourites}><Icon icon="heroicons-solid:heart" /></button>
}
</div>
  );
};

export default AddToFavouritesIcon;