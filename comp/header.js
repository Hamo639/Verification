import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import ThemeContext from "../comp/Themecontext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebase/config";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [user, loading, error] = useAuthState(auth);
const navigate=useNavigate()
  return (
    <div className={`myheader ${theme}`}>
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">Hamo Ashraf</Link>
        </h1>

        <button
          onClick={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
          className="darkmode"
        >
          {theme}
        </button>
        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign in
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <Link
                onClick={() => {
                  const auth = getAuth();
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                    navigate("/signup")
                }}
                className="main-link"
              >
                Sign out
              </Link>
            </li>
          )}
          {!user&& <li className="main-list">
            <NavLink className="main-link" to="/signup">
              Sign Up
            </NavLink>
          </li>}
          
{user&& <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
          </li>
          
          }
           <li className="main-list">
            <NavLink onClick={() => {
              console.log(user)
            }
            } className="main-link" to="/profile">
              Profile
            </NavLink>
          </li>
          
        </ul>
      </header>

      <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
