import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page" style={{ textAlign: "center" }}>
      <h1>Oops!</h1>
      <h1>Sorry, an unexpacted error has occurred</h1>
      <h1>{error.statusText || error.message}</h1>
    </div>
  );
};

export default ErrorPage;
