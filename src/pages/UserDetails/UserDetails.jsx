import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const { id, name, email, phone } = useLoaderData();
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <Link to={"/users"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default UserDetails;
