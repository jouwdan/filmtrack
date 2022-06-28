import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MovieContextProvider from "./Context.js";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Dashboard from './pages/Dashboard';

import Navigation from './components/nav/Navigation';

import PopularMovies from "./pages/PopularMovies";
import SingleMovie from "./pages/SingleMovie";
import UpcomingMovies from "./pages/upcomingMovies";
import TrendingMovies from "./pages/TrendingMovies";

function App() {
   return (
    <MovieContextProvider>
    <Router>
     <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
     <Navigation />
      <main className="container mx-auto px-3 pb-12">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies/popular" element={<PopularMovies />} />
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />
        <Route path="/movies/trending" element={<TrendingMovies />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
       </Routes>
      </main>
     </div>
    </Router>
      </MovieContextProvider>
   );
  }
  export default App;