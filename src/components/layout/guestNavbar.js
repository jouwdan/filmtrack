import { Link } from 'react-router-dom';

function guestNavbar() {
    return (
        <nav className="navbar bg-base-200 text-base-content">
            <div class="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Filmtrack</Link>
            </div>
            <div class="navbar-end">
                <Link to="/" className="btn btn-ghost mr-2 hidden lg:flex">
                    Home
                </Link>
                <Link to="/about" className="btn btn-ghost mr-2 hidden lg:flex">
                    About
                </Link>
                <a class="btn mr-2">Login</a>
                <a class="btn btn-primary mr-2">Register</a>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default guestNavbar;