import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/guestNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';

function App() {
 return (
  <Router>
   <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
    <Navbar />
    <main className="container mx-auto px-3 pb-12">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
    </main>
   </div>
  </Router>
 );
}
export default App;