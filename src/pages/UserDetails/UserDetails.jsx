import { Link, useLoaderData } from "react-router-dom";
import "./userDetails.css";

const UserDetails = () => {
  const {
    firstName,
    lastName,
    image,
    phone,
    email,
    gender,
    age,
    birthDate,
    bloodGroup,
    university,
    address: { address, city, state, postalCode },
  } = useLoaderData();
  const {
    company: {
      name,
      department,
      title,
      address: {
        address: comAddress,
        city: comCity,
        state: comState,
        postalCode: comPostalCode,
      },
    },
  } = useLoaderData();

  return (
    <div className="user__details--container">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <table className="personalInfo">
            <tbody>
              <tr>
                <td colSpan="2">Personal Info:</td>
              </tr>
              <tr>
                <td>Name: </td>
                <td>
                  {firstName} {lastName}
                </td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>DoB: </td>
                <td>{birthDate}</td>
              </tr>
              <tr>
                <td>Blood Group:</td>
                <td>{bloodGroup}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>University:</td>
                <td>{university}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  {address}, {city}, {state}, {postalCode}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="personalInfo">
            <tbody>
              <tr>
                <td colSpan="2">Company Info:</td>
              </tr>
              <tr>
                <td>Name: </td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>{department}</td>
              </tr>
              <tr>
                <td>Title:</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  {comAddress}, {comCity}, {comState}, {comPostalCode}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Link to={"/users"}>
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
