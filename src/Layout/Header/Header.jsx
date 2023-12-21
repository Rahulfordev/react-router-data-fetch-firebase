import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav__links container">
        <div className="nav__logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/login"}>Log In</NavLink>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
