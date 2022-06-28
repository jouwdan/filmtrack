import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, getFavourites, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { MovieContext, getMovieDetails } from "../Context";
import MovieListTemplate from '../components/templates/movieListTemplate';
import AddToFavouritesIcon from '../components/cards/icons/addToFavourites';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const {
    currentUser,
    favourites
} = useContext(MovieContext);
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  }, [user, loading]);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", currentUser.id));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  
  return (
    <>
    <div className="card justify-center h-60 bg-base-200 m-4">
      <div className="hero-content text-center mx-auto">
          <h1 className="text-5xl font-bold">Welcome, {name}</h1>
      </div>
    </div>
    <div className="card bg-base-200 m-4">
      <h2 className="text-2xl pt-8 pl-8">Favourite Movies</h2>
    <MovieListTemplate
    title='Favourite Movies'
    movies={favourites}
    action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
  />
  </div>
    </>
  );
}
export default Dashboard;