import { Link } from "react-router-dom";

import useProductStore from "../api/products-store.js";
import {
  useAddToFavorite,
  useFavoritesStore,
  useRemoveFromFavorite,
} from "../store/favorites-store.jsx";

function Home() {
  const { data, isLoading } = useProductStore();
  const { data: favoriteProducts } = useFavoritesStore();
  const addToFavorite = useAddToFavorite();
  const removeFromFavorite = useRemoveFromFavorite();

  const handleFavoriteClick = (event, productId, isFavorite) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFavorite) {
      removeFromFavorite.mutate(productId);
      return;
    }

    addToFavorite.mutate(productId);
  };

  if (isLoading) {
    return (
      <div className="grid min-h-[calc(100vh-76px)] place-items-center bg-zinc-950">
        <div className="text-center"><div className="mx-auto size-11 animate-spin rounded-full border-4 border-red-500/20 border-t-red-500" /><p className="mt-4 text-sm font-bold uppercase tracking-[.2em] text-zinc-400">Загружаем товары</p></div>
      </div>
    );
  }

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-zinc-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="absolute -left-36 -top-48 size-112 rounded-full bg-red-600/25 blur-3xl" />
      <div className="absolute -right-40 top-1/4 size-112 rounded-full border-[42px] border-red-500/10" />
      <div className="relative mx-auto max-w-7xl">

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((item, index) => {
            const isFavorite = favoriteProducts?.some(
              (favorite) => favorite._id === item._id,
            );

            return (
            <li key={item._id}>
              <Link to={`/products/${item._id}`} className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.06] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-red-500/60 hover:bg-white/[.09]">
                <div className="absolute -right-9 -top-9 size-28 rounded-full bg-red-600/20 blur-xl transition group-hover:bg-red-600/40" />
                <button
                  type="button"
                  onClick={(event) => handleFavoriteClick(event, item._id, isFavorite)}
                  disabled={addToFavorite.isPending || removeFromFavorite.isPending}
                  aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                  aria-pressed={isFavorite}
                  className={`absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full border text-xl transition disabled:cursor-wait disabled:opacity-60 ${isFavorite ? "border-red-400 bg-red-600 text-white shadow-lg shadow-red-600/30" : "border-white/15 bg-zinc-950/40 text-zinc-300 hover:border-red-400 hover:text-red-400"}`}
                >
                  {isFavorite ? "♥" : "♡"}
                </button>
                <span className="relative text-[11px] font-black uppercase tracking-[.18em] text-red-400">Product / {String(index + 1).padStart(2, "0")}</span>
                <h2 className="relative mt-5 min-h-14 text-2xl font-black leading-tight text-white">{item.name}</h2>
                <div className="relative mt-8 flex items-end justify-between"><p className="text-xl font-black text-red-500">{item.price} <span className="text-sm">сом</span></p><span className="grid size-10 place-items-center rounded-full bg-white/10 text-lg transition group-hover:bg-red-600 group-hover:translate-x-1">→</span></div>
              </Link>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Home;
