import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';

import MovieContextProvider from "./Context.js";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Dashboard from './pages/Dashboard';

import GuestNav from './components/nav/guestNav';
import MemberNav from './components/nav/memberNav';

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
    <MovieContextProvider>
    <QueryClientProvider client={queryClient}>
    <Router>
     <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
     {user ? <MemberNav /> : <GuestNav />}
      <main className="container mx-auto px-3 pb-12">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
      </main>
     </div>
    </Router>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </MovieContextProvider>
   );
  }
  export default App;