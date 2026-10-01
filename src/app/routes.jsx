import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout.jsx";
import ProtectedRoute from "./protected-route.jsx";

import Auth from "../pages/auth.jsx";
import Cart from "../pages/cart.jsx";
import Favorites from "../pages/favorites.jsx";
import Home from "../pages/home.jsx";
import NotFound from "../pages/not-found.jsx";
import Orders from "../pages/orders.jsx";
import ProductDetail from "../pages/product.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "products/:productId", Component: ProductDetail },
      { path: "auth", Component: Auth },
      {
        Component: ProtectedRoute,
        children: [
          { path: "favorites", Component: Favorites },
          { path: "orders", Component: Orders },
          { path: "cart", Component: Cart },
        ],
      },
    ],
  },
]);

export default routes;
