import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;
  const emailVerified = user?.emailVerified;

  return (
    <div>
      <h4>{displayName}</h4>
      <h4>{email}</h4>
      <h4>{photoURL}</h4>
      <h4>{emailVerified}</h4>
    </div>
  );
};

export default Home;
