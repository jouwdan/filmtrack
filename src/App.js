import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import GuestNavbar from './components/navigation/guestNavbar';
import MemberNavbar from './components/navigation/memberNavbar';
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


const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

function App() {
const [user, loading, error] = useAuthState(auth);
 return (
  <QueryClientProvider client={queryClient}>
  <Router>
   <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
   {user ? <MemberNavbar /> : <GuestNavbar />}
    <main className="container mx-auto px-3 pb-12">
    <MoviesContextProvider>
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
    </MoviesContextProvider>
    </main>
   </div>
  </Router>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
 );
}
export default App;