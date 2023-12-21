import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user: { id, name, email, phone } }) => {
  return (
    <div>
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <Link to={`/users/${id}`}>
        <button>User Details</button>
      </Link>
    </div>
  );
};

export default User;
