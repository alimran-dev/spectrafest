import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import Reservation from "../pages/Reservation/Reservation";
import About from "../pages/About/About";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/services.json"),
        element: <Home />,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/services.json"),
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        loader: () => fetch("/gallery.json"),
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
      {
        path: "reservation",
        element: (
          <PrivateRoute>
            <Reservation />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
