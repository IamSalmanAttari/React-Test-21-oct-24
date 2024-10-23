import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Routing = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: "Error 404",
    },
  ];

export default Routing;
