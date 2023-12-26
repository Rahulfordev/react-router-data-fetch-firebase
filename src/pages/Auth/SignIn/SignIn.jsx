import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const SignIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const { SignIn, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");
    SignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("login successful");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const SignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="container">
        <form onSubmit={handleSignIn} className="sign-form" id="sign-form">
          <h1 className="htmlForm-title">Sign In</h1>
          <p className="htmlForm-caption">
            See your growth and get consulting support!
          </p>
          <button className="google-sign-btn" onClick={SignInGoogle}>
            <i className="fa fa-google"></i> Sign up with Google
          </button>

          <br />

          <div className="google-guide-container">
            <div className="hr-left"></div>
            <p className="guide-google">or Sign in with Email</p>
            <div className="hr-right"></div>
          </div>

          <label htmlFor="email">
            Email<span className="star-required">*</span>
          </label>
          <input type="email" name="email" placeholder="mail@website.com" />

          <div className="password-input">
            <label htmlFor="password">
              Password<span className="star-required">*</span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Min. 6 character"
            />

            <small className="password-toggle" onClick={() => setShow(!show)}>
              {show ? <BiHide /> : <BiShow />}
            </small>
          </div>

          <br />
          <br />
          <button className="signup-button" type="submit" id="submit">
            Sign In
          </button>

          <p className="text-error">{error}</p>
          <p className="text-success">{success}</p>

          <p className="have-account-line">
            Do not have an account yet?{" "}
            <NavLink to={"/signup"}>Sign up</NavLink>
          </p>

          <p className="info">
            &copy; {new Date().getFullYear()} Rahulfordev All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
