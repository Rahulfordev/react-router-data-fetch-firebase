import { NavLink } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
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

          <label htmlFor="username">
            Name<span className="star-required">*</span>
          </label>
          <input type="text" name="fullname" id="username" placeholder="Name" />

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

          <label htmlFor="cpassword">
            Confirm Password<span className="star-required">*</span>
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Min. 8 character"
          />

          <br />
          <br />
          <button className="signup-button" id="submit">
            Sign Up
          </button>

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
