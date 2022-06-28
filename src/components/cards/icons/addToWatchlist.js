import React, { useContext } from "react";
import { Icon } from '@iconify/react';
import { MovieContext } from "../../../Context";

const AddToWatchlistIcon = ({ movie }) => {
  const {
    setMovieWatchlist,
    movieWatchlist,
    currentUser
  } = useContext(MovieContext);

  if(currentUser){ 
  return (
    <div className="tooltip" data-tip="add to watch list">
    {
    movieWatchlist.includes(movie) ? (
<button className="btn btn-success" onClick={() => setMovieWatchlist(movie)}><Icon icon="heroicons-solid:document-add" /></button>
) : <button className="btn" onClick={() => setMovieWatchlist(movie)}><Icon icon="heroicons-solid:document-add" /></button>
}
</div>
  );
};
};

export default AddToWatchlistIcon;