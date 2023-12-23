import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div>SignUp</div>
      <form action="">
        <div>
          <div>
            <input type="name" placeholder="Enter your name" />
          </div>
          <div>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
      </form>
      <div>
        <h5>
          Already have an account yet? <NavLink to={"/login"}>Sign In</NavLink>
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

export default SignUp;
