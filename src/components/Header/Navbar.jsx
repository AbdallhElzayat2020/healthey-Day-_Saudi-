import { NavLink } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="container text-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ms-4">
              <NavLink to="/" className="nav-link" href="#">
                الرئيسية
                <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink to="/gallery" className="nav-link" href="#">
                اعمالنا
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink to="/contact" className="nav-link" href="#">
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
