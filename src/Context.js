import axios from "axios";
import React, { Component, createContext } from "react";
import { Persist } from "react-persist";
import { auth, db } from "./firebase";
import { collection, query, where, onSnapshot, QuerySnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const MovieContext = createContext();

class MovieContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // user states
            currentUser: null,
            favouritesArray: [],
            favourites: [],
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
            movies: [],
            searchMovieResult: [],
            visible: 10,
            pageRefreshed: false
        };
    };

    componentDidMount = () => {
        this.getTrendingMovies();
        this.getPopularMovies();
        this.getUpcomingMovies();
        this.cleanState();
        this.handleClick();
        this.searchMovie();
        this.clearSearch();
        if (auth.currentUser) {
            this.getFavourites();
        }

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({
                    currentUser: {
                        id: user.uid
                    }
                });
                this.getFavourites();
            } else {
                this.setState({
                    currentUser: null
                })
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
            favourites: []
        });
    };

    getTrendingMovies = () => {
        axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        ).then(response => {
            const apiResponse = response.data;
            this.setState({
                trending: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    getPopularMovies = () => {
        this.cleanState();
        axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        ).then(response => {
            const apiResponse = response.data;
            this.setState({
                popular: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    getNowPlayingMovies = () => {
        this.cleanState();
        axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                nowplaying: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    getUpcomingMovies = () => {
        this.cleanState();
        axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                upcoming: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    getTopRatedMovies = () => {
        this.cleanState();
        axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                toprated: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    getMovieDetails = () => {
        axios.get(
            `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                moviedetails: apiResponse
            })
        }).catch (error => {
            console.log(error);
        });
    };

    getMovieImages = () => {
        axios.get(
            `https://api.themoviedb.org/3/movie/${this.state.id}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                images: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    getSimilarMovies = () => {
        axios.get(
            `https://api.themoviedb.org/3/movie/${this.state.id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                similar: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };

    searchMovie = () => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${this.state.movies}&language=en-US&page=1`
            ).then(response => {
            const apiResponse = response.data;
            this.setState({
                searchMovieResult: apiResponse.results
            });
        }).catch (error => {
            console.log(error);
        });
    };
    
    handleClick = id => {
        this.setState({
            id: id
        }, () => {
            this.getMovieDetails();
            this.getSimilarMovies();
        });
    };

    handleChange = e => {
        this.setState({
            movies: e.target.value
        }, () => {
            this.searchMovie();
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.searchMovie();
        e.target.reset();
    };

    clearSearch = () => {
        this.setState({
            movies: [],
            moviesResult: []
        });
    };

    clearVisible = () => {
        this.setState({
            visible: 10,
            nowplaying: [],
            upcoming: [],
            toprated: []
        });
    };

    loadMore = () => {
        this.setState( prev => {
            return { visible: prev.visible + 5 };
        });
    };

    refreshPage = () => {
        this.setState({
            pageRefreshed: !this.state.pageRefreshed
        });
    };

    setFavourites = (movie) => {
        const { favourites } = this.state;
        let favouritesCopy = [...favourites];
        let key = movie.id;
        console.log(movie);
        if (!favourites.includes(movie)) {
            setDoc(doc(db, 'favourites', 'movies', this.state.currentUser.id, key.toString()), movie);
            this.setState({
                favourites: [...favourites, movie]
            });
        } else {
            favouritesCopy = favouritesCopy.filter(eachMovie => eachMovie !== movie);
            this.setState({ favourites: favouritesCopy });            
            deleteDoc(doc(db, 'favourites', 'movies', this.state.currentUser, key.toString()));
        };
    };

    getFavourites = () => {
        const q = query(collection(db, 'favourites', 'movies', this.state.currentUser.id))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({
                    favourites: [doc.data()]
                });
            })
        });
        console.log(this.state.favourites);
    }

    render() {
        return (
            <MovieContext.Provider
        
                value={{
                    ...this.state,
                    getTrendingMovies: this.getTrendingMovies,
                    getPopularMovies: this.getPopularMovies,
                    getNowPlayingMovies: this.getNowPlayingMovies,
                    getUpomingMovies: this.getUpcomingMovies,
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
                }}
            >
            {this.props.children}
            <Persist
                name="movies"
                data={this.state}
                debounce={500}
                onMount={data => this.setState(data)}
                />
            </MovieContext.Provider>
        );
    }
}

export default MovieContextProvider;