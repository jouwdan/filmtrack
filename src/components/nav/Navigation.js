import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { auth } from "../../firebase";
import { MovieContext } from "../../Context";

function Navigation() {
  const { currentUser } = useContext(MovieContext);
  return (
    <nav className="navbar bg-base-200 text-base-content">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <Icon icon="heroicons-solid:film" /> &nbsp; Filmtrack
        </Link>
      </div>

      <div className="navbar-middle">
        {!currentUser ? (
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                : "btn btn-ghost mr-2 hidden lg:flex"
            }
          >
            Home
          </NavLink>
        ) : (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                : "btn btn-ghost mr-2 hidden lg:flex"
            }
          >
            Dashboard
          </NavLink>
        )}
        <div className="dropdown hidden lg:flex">
          <label tabIndex="0" className="btn btn-ghost">
            Movies
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-16 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/movies/popular"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                    : "btn btn-ghost mr-2 hidden lg:flex"
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/upcoming"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                    : "btn btn-ghost mr-2 hidden lg:flex"
                }
              >
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/trending"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                    : "btn btn-ghost mr-2 hidden lg:flex"
                }
              >
                Trending
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/search"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                    : "btn btn-ghost mr-2 hidden lg:flex"
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown hidden lg:flex">
          <label tabIndex="0" className="btn btn-ghost">
            TV
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-16 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/tv/popular"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                    : "btn btn-ghost mr-2 hidden lg:flex"
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv/top"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                    : "btn btn-ghost mr-2 hidden lg:flex"
                }
              >
                Top Rated
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {!currentUser ? (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn mr-2">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary mr-2">Register</button>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-circle">
              <Icon icon="heroicons-solid:user" width="25" />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="btn btn-ghost" href="/account">
                  My Account
                </a>
              </li>
              <li>
                <button
                  className="btn btn-ghost"
                  onClick={() => auth.signOut()}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title btn btn-ghost">Movies</div>
                <div className="collapse-content">
                  <ul
                    tabIndex="0"
                    className="shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        to="/movies/popular"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-ghost btn-active mr-2"
                            : "btn btn-ghost mr-2"
                        }
                      >
                        Popular
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/movies/upcoming"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-ghost btn-active mr-2"
                            : "btn btn-ghost mr-2"
                        }
                      >
                        Upcoming
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/movies/trending"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-ghost btn-active mr-2"
                            : "btn btn-ghost mr-2"
                        }
                      >
                        Trending
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/movies/search"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-ghost btn-active mr-2"
                            : "btn btn-ghost mr-2"
                        }
                      >
                        Search
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
