import { NavLink } from "react-router-dom";
import logo from "../assets/Voovie.svg";
import "../css/Navbar.css";
function NavBar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        <img src={logo} alt="Voovie Logo" className="brand-logo" />
        <span className="brand-name">Voovie</span>
      </NavLink>

      <nav className="navbar-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </nav>

      <NavLink to="/bookmark" className="navbar-cta">
        Bookmark
      </NavLink>
    </header>
  );
}

export default NavBar;
