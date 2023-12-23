import { NavLink } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    
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
            type="password"
            name="password"
            id="password"
            placeholder="Min. 8 character"
          />

          <br />
          <br />
          <button className="signup-button" type="submit" id="submit">
            Sign In
          </button>

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
