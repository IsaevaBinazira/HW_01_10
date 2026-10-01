import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "../hooks/use-auth.js";

function ProtectedRoute() {
  const isAuth = useAuth((state) => state.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
