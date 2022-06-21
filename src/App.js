import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/guestNavbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
 return (
  <Router>
   <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
    <Navbar />
    <main className="container mx-auto px-3 pb-12">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </main>
   </div>
  </Router>
 );
}
export default App;