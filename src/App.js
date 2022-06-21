import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/guestNavbar';

function App() {
 return (
  <Router>
   <div className="flex flex-col justify-between bg-base-100" data-theme="dark">
    <Navbar />
    <div className="container">
    <main>Content</main>
    </div>
   </div>
  </Router>
 );
}
export default App;