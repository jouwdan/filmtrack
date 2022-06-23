import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import PageTemplate from '../components/templates/movieListTemplate';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const toDo = () => true;
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favourites")); 
  const fetchUserName = async () => {
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