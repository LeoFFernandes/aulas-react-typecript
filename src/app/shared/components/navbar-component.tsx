import { Link } from "react-router-dom";
import "./styles/navbar-components.css";

export const NavbarComponent = () => {
  return (
    <div className="div-navbar">
      <div className="div-navbar-container">
        <nav className="navbar">
          <img src="#" title="Logo" alt="Alisul-HourBanking" />
          <ul>
            <Link className="Link" to="/">
              Home
            </Link>
            <Link className="Link" to="/">
              About
            </Link>
            <Link className="Link" to="/Login">
              Login
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};
