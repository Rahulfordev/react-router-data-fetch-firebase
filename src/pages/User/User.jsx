import { Link } from "react-router-dom";
import "./User.css";
/* eslint-disable react/prop-types */
const User = ({ user: { id, image } }) => {
  return (
    <div className="user-container">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <button>
          <Link to={`/users/${id}`}>User Details</Link>
        </button>
      </div>
    </div>
  );
};

export default User;
