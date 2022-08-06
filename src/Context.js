import axios from "axios";
import React, { Component, createContext } from "react";
import { Persist } from "react-persist";
import { auth, db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const MovieContext = createContext();

class MovieContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user states
      currentUser: null,
      favouriteMovies: [],
      movieWatchlist: [],
      result: [],
      // movie states
      trending: [],
      popular: [],
      nowplaying: [],
      upcoming: [],
      toprated: [],
      // single movie state
      id: "",
      moviedetails: [],
      similar: [],
      // additional states
      visible: 10,
      pageRefreshed: false,
    };
  }

  componentDidMount = () => {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getUpcomingMovies();
    this.cleanState();
    this.handleClick();
    this.clearSearch();
    if (auth.currentUser) {
      this.getFavourites();
      this.getMovieWatchlist();
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({
          currentUser: {
            id: user.uid,
          },
        });
        this.getFavourites();
        this.getMovieWatchlist();
      } else {
        this.setState({
          currentUser: null,
        });
      }
    });
  };

  // cleans state for movie lists to avoid duplicates
  cleanState = () => {
    this.setState({
      popular: [],
      nowplaying: [],
      upcoming: [],
      toprated: [],
      favouriteMovies: [],
    });
  };

  getTrendingMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          trending: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getPopularMovies = () => {
    this.cleanState();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          popular: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getNowPlayingMovies = () => {
    this.cleanState();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          nowplaying: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getUpcomingMovies = () => {
    this.cleanState();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          upcoming: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getTopRatedMovies = () => {
    this.cleanState();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          toprated: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          moviedetails: apiResponse,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getMovieImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          images: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getSimilarMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.state.id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const apiResponse = response.data;
        this.setState({
          similar: apiResponse.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClick = (id) => {
    this.setState(
      {
        id: id,
      },
      () => {
        this.getMovieDetails();
        this.getSimilarMovies();
      }
    );
  };

  handleChange = (e) => {
    this.setState(
      {
        movies: e.target.value,
      },
      () => {
        this.searchMovie();
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchMovie();
    e.target.reset();
  };

  clearSearch = () => {
    this.setState({
      movies: [],
      moviesResult: [],
    });
  };

  clearVisible = () => {
    this.setState({
      visible: 10,
      nowplaying: [],
      upcoming: [],
      toprated: [],
    });
  };

  loadMore = () => {
    this.setState((prev) => {
      return { visible: prev.visible + 5 };
    });
  };

  refreshPage = () => {
    this.setState({
      pageRefreshed: !this.state.pageRefreshed,
    });
  };

  setFavourites = (movie) => {
    const { favouriteMovies } = this.state;
    let favouritesCopy = [...favouriteMovies];
    let key = movie.id;
    console.log(movie);
    if (!favouriteMovies.includes(movie)) {
      setDoc(
        doc(
          db,
          "favourites",
          "movies",
          this.state.currentUser.id,
          key.toString()
        ),
        movie
      );
      this.setState({
        favouriteMovies: [...favouriteMovies, movie],
      });
    } else {
      favouritesCopy = favouritesCopy.filter(
        (eachMovie) => eachMovie !== movie
      );
      this.setState({ favouriteMovies: favouritesCopy });
      deleteDoc(
        doc(db, "favourites", "movies", this.state.currentUser, key.toString())
      );
    }
  };
  getFavourites = () => {
    const q = query(
      collection(db, "favourites", "movies", this.state.currentUser.id)
    );
    const favouritesArray = [];
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        favouritesArray.push(doc.data());
      });
    });
    this.setState({
      favouriteMovies: favouritesArray,
    });
    console.log(this.state.favouriteMovies);
    this.refreshPage();
  };
  setMovieWatchlist = (movie) => {
    const { movieWatchlist } = this.state;
    let watchlistCopy = [...movieWatchlist];
    let key = movie.id;
    console.log(movie);
    if (!movieWatchlist.includes(movie)) {
      setDoc(
        doc(
          db,
          "watchlist",
          "movies",
          this.state.currentUser.id,
          key.toString()
        ),
        movie
      );
      this.setState({
        movieWatchlist: [...movieWatchlist, movie],
      });
    } else {
      watchlistCopy = watchlistCopy.filter((eachMovie) => eachMovie !== movie);
      this.setState({ movieWatchlist: watchlistCopy });
      deleteDoc(
        doc(db, "watchlist", "movies", this.state.currentUser, key.toString())
      );
    }
  };
  getMovieWatchlist = () => {
    const q = query(
      collection(db, "watchlist", "movies", this.state.currentUser.id)
    );
    const watchlistArray = [];
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        watchlistArray.push(doc.data());
      });
    });
    this.setState({
      movieWatchlist: watchlistArray,
    });
    console.log(this.state.movieWatchlist);
    this.refreshPage();
  };

  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state,
          getTrendingMovies: this.getTrendingMovies,
          getPopularMovies: this.getPopularMovies,
          getNowPlayingMovies: this.getNowPlayingMovies,
          getUpcomingMovies: this.getUpcomingMovies,
          getTopRatedMovies: this.getTopRatedMovies,
          handleClick: this.handleClick,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          searchMovie: this.searchMovie,
          clearSearch: this.clearSearch,
          loadMore: this.loadMore,
          cleanState: this.cleanState,
          clearVisible: this.clearVisible,
          refreshPage: this.refreshPage,
          setFavourites: this.setFavourites,
          setMovieWatchlist: this.setMovieWatchlist,
        }}
      >
        {this.props.children}
        <Persist
          name="movies"
          data={this.state}
          debounce={500}
          onMount={(data) => this.setState(data)}
        />
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;
