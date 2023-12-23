import { NavLink } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);
    setError("");
    setSuccess("");
    if (email === "" && password === "" && confirm === "") {
      setError("Please fill in required fields");
      return;
    } else if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Sign up successful");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="container">
        <form onSubmit={handleSignUp} className="sign-htmlForm" id="sign-form">
          <h1 className="htmlForm-title">Sign Up</h1>
          <p className="htmlForm-caption">
            See your growth and get consulting support!
          </p>
          <button className="google-sign-btn">
            <i className="fa fa-google"></i> Sign up with Google
          </button>

          <br />

          <div className="google-guide-container">
            <div className="hr-left"></div>
            <p className="guide-google">or Sign up with Email</p>
            <div className="hr-right"></div>
          </div>

          <label htmlFor="email">
            Email<span className="star-required">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="mail@website.com"
          />

          <label htmlFor="password">
            Password<span className="star-required">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Min. 8 character"
          />

          <label htmlFor="confirm">
            Confirm Password<span className="star-required">*</span>
          </label>
          <input
            type="password"
            name="confirm"
            id="cpassword"
            placeholder="Min. 8 character"
          />

          <br />
          <br />
          <button className="signup-button" id="submit">
            Sign Up
          </button>

          <p className="text-error">{error}</p>
          <p className="text-success">{success}</p>

          <p className="have-account-line">
            Already have an Account? <NavLink to={"/login"}>Sign in</NavLink>
          </p>

          <p className="info">
            &copy; {new Date().getFullYear()} Rahulfordev All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
