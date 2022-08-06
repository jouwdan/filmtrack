import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieListTemplate from "../components/templates/movieListTemplate";
import AddToFavouritesIcon from "../components/cards/icons/addToFavourites";

const SearchMovies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovie = async (searchTerm) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchTerm}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        setSearchMovies(apiResponse.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let inputHandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setSearchTerm(lowercase);
  };
  useEffect(() => {
    searchMovie(searchTerm);
  }, [searchTerm]);
  return (
    <>
      <div className="card bg-base-200 m-4">
        <h2 className="text-2xl pt-8 pl-8">Search Movies</h2>
        <div className="search mx-8">
          <input
            type="text"
            placeholder="Search Here..."
            onChange={inputHandler}
            class="input input-bordered w-full mt-8"
            label="search"
          />
        </div>
        <MovieListTemplate
          title="Search Movies"
          movies={searchMovies}
          action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />;
          }}
        />
      </div>
    </>
  );
};

export default SearchMovies;
