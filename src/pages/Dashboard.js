import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useQueries } from "react-query";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { MoviesContext } from "../contexts/moviesContext";
import PageTemplate from '../components/templates/movieListTemplate';
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  }, [user, loading]);
  const { favourites: movieIds } = useContext(MoviesContext);
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  const toDo = () => true;
  
  return (
    <>
    <div className="card justify-center h-60 bg-base-200 m-4">
    <div className="hero-content text-center mx-auto">
        <h1 className="text-5xl font-bold">Welcome, {name}</h1>
    </div>
  </div>
  <PageTemplate
    title='Favourite Movies'
    movies={movies}
    selectFavourite={toDo}
  />
    </>
  );
}
export default Dashboard;