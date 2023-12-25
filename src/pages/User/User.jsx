import { Link } from "react-router-dom";
import "./User.css";
/* eslint-disable react/prop-types */
const User = ({
  user: {
    id,
    image,
    firstName,
    lastName,
    email,
    phone,
    company: { name, title, department },
  },
}) => {
  return (
    <div className="user-container">
      <div className="user__content">
        <img src={image} alt="" />

        <div className="user__details--button">
          <table className="user__details--table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  {firstName}, {lastName}
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{phone}</td>
              </tr>
            </tbody>
          </table>
          <table className="user__details--table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Title:</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>{department}</td>
              </tr>
            </tbody>
          </table>
          <button className="userDetailsShowButton">
            <Link to={`/users/${id}`}>User Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
