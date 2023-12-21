import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>SignIn</div>
      <button onClick={handleGoHome}>Go Home</button>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SignIn;
