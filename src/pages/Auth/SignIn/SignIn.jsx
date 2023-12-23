import { NavLink } from "react-router-dom";
import "./SignIn.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SignIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const { SignIn } = useContext(AuthContext);

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
          <button className="google-sign-btn">
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

          <label htmlFor="password">
            Password<span className="star-required">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Min. 8 character"
          />

          <p className="password-mannage" onClick={() => setShow(!show)}>
            <small>{show ? "Hide password" : "Show password"}</small>
          </p>

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
