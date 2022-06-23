import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import GuestNavbar from './components/layout/guestNavbar';
import MemberNavbar from './components/layout/memberNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Discover from './pages/Discover';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Dashboard from './pages/Dashboard';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';

function App() {
const [user, loading, error] = useAuthState(auth);
 return (
  <Router>
   <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
   {user ? <MemberNavbar /> : <GuestNavbar />}
    <main className="container mx-auto px-3 pb-12">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
    </main>
   </div>
  </Router>
 );
}
export default App;