import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieContextProvider from "./Context.js";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";

import Navigation from "./components/nav/Navigation";

import PopularMovies from "./pages/movies/PopularMovies";
import SingleMovie from "./pages/movies/SingleMovie";
import UpcomingMovies from "./pages/movies/upcomingMovies";
import TrendingMovies from "./pages/movies/TrendingMovies";
import SearchMovies from "./pages/movies/SearchMovies";

import PopularTv from "./pages/tv/PopularTv";
import TopRatedTv from "./pages/tv/TopRatedTv";
import SingleTv from "./pages/tv/SingleTv";

function App() {
  return (
    <MovieContextProvider>
      <Router>
        <div
          className="flex flex-col justify-between bg-base-100"
          data-theme="dark"
        >
          <Navigation />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/movies/popular" element={<PopularMovies />} />
              <Route path="/movies/upcoming" element={<UpcomingMovies />} />
              <Route path="/movies/trending" element={<TrendingMovies />} />
              <Route path="/movies/search" element={<SearchMovies />} />
              <Route path="/movies/:id" element={<SingleMovie />} />
              <Route path="/tv/popular" element={<PopularTv />} />
              <Route path="/tv/top" element={<TopRatedTv />} />
              <Route path="/tv/:id" element={<SingleTv />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MovieContextProvider>
  );
}
export default App;
