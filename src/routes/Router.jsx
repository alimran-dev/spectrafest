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
        element: <ServiceDetails />,
      },
      {
        path: "/gallery",
        loader: () => fetch("/gallery.json"),
        element: <Gallery />,
      },
      {
        path: "reservation",
        element: <Reservation />,
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
