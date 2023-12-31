import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/Auth/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import Users from "../pages/Users/Users";
import UserDetails from "../pages/UserDetails/UserDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch("https://dummyjson.com/users?limit=0"),
        errorElement: <ErrorPage />,
      },
      {
        path: "/users/:userID",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.userID}`),
      },
    ],
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
