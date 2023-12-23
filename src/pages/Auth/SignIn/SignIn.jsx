import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div>SignIn</div>
      <form action="">
        <div>
          <div>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </form>
      <div>
        <h5>
          Do not have an account yet? <NavLink to={"/signup"}>Sign Up</NavLink>
        </h5>
      </div>
      <div>
        <button>Google</button>
        <button>Github</button>
        <button>Facebook</button>
      </div>
    </div>
  );
};

export default SignIn;
