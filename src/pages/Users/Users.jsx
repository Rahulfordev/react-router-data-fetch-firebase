import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  console.log(users.users);
  return (
    <div className="users">
      <div className="users__section">
        {users.users.map((user, i) => (
          <User user={user} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Users;
