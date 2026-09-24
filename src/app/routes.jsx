import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout.jsx";

import NotFound from "../pages/not-found.jsx";
import Home from "../pages/home.jsx";
import Favorites from "../pages/favorites.jsx";
import ProductDetail from "../pages/product.jsx";
import Orders from "../pages/orders.jsx";
import Cart from "../pages/cart.jsx";
import Auth from "../pages/auth.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "favorites", Component: Favorites },
      { path: "orders", Component: Orders },
      { path: "cart", Component: Cart },
      { path: "products/:productId", Component: ProductDetail },
      { path: "auth", Component: Auth },
      { path: "cart", Component: Cart },

    ],
  },
]);

export default routes;