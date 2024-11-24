import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

export default router;
