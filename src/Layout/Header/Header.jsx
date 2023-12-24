import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
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
          {user && (
            <span>
              {user.email}
              <NavLink onClick={handleLogout} to={"/"}>
                Log out
              </NavLink>
            </span>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
