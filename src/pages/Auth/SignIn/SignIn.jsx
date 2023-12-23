import { NavLink } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import "./SignIn.css";
import { toast } from "react-toastify";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" && password === "") {
      return toast.error("Fill up The input fiuld");
    }

    signInWithEmailAndPassword(email, password);
    return toast.success("Sign In Successfully!");
  };

  return (
    <div className="signup-container">
      <div className="container">
        <form onSubmit={handleSignIn} className="sign-form" id="sign-form">
          {/* <div className="sign-form" id="sign-form"> */}
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
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
