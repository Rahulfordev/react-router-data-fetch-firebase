import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  return (
    <header className={`header ${scroll}`}>
      <nav className="nav__links container">
        <div className="nav__logo">
          <h1>Logo</h1>
          <RxHamburgerMenu className="hamburger" />
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
