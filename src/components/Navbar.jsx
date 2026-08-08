import { Link } from "react-router-dom";
import logo from "../assets/Voovie.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <img src={logo} alt="Voovie Logo" className="brand-logo" />
          <span className="brand-name">Voovie</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/bookmark" className="nav-link">
          Bookmark
        </Link>
      </div>
    </div>
  );
}

export default NavBar;