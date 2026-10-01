import { toast } from "sonner";
import { useFavoritesStore } from "../store/favorites-store.jsx";
import useAuth from "../hooks/use-auth.js";
import { Navigate } from "react-router-dom";


function Favorites() {
  const { data, isLoading } = useFavoritesStore();
  const isAuth = useAuth((state) => state.isAuth);
  if (!isAuth) {
    toast.info("Сперва войдите");
    return <Navigate to="/auth" />;
  }

  if (isLoading) {
    return <progress/>
  }
  return (
    <>
    <h1>Favorites</h1>
    <ul>
      {data?.map((item) => (
        <li key={item._id}>{item.name}
        </li>
      ))}
    </ul>
    </>
  );  
}

export default Favorites;
