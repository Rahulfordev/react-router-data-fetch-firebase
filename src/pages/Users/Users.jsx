import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users)
  return (
    <div>{users && users?.map((user, i) => <User user={user} key={i} />)}</div>
  );
};

export default Users;
