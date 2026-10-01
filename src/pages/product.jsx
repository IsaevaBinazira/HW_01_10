import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { $mainApi } from "../api/http.js";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => (await $mainApi.get(`/products/${productId}`)).data,
  });

  if (isLoading) return <LoadingState label="Загружаем товар" />;
  if (isError || !data) return <ErrorState onBack={() => navigate("/")} />;

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-zinc-950 px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">
      <div className="absolute -right-36 top-0 size-112 rounded-full bg-red-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <button type="button" onClick={() => navigate("/")} className="group mb-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-400 transition hover:text-white"><span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 transition group-hover:-translate-x-1 group-hover:border-red-500 group-hover:bg-red-600">←</span>Назад в каталог</button>
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] shadow-2xl shadow-black/40 backdrop-blur-xl"><div className="h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" /><div className="p-7 sm:p-10 lg:p-14"><div className="flex items-center justify-between gap-4"><span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[.18em] text-red-300">Redshop selection</span><span className="text-xs font-bold uppercase tracking-wider text-zinc-500">#{productId}</span></div><h1 className="mt-8 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{data.name}</h1><p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">{data.description || ""}</p><div className="my-10 h-px bg-gradient-to-r from-red-500/70 via-white/10 to-transparent" /><div className="flex flex-col gap-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><p className="text-xs font-black uppercase tracking-[.18em] text-zinc-500">Цена сейчас</p><p className="mt-2 text-4xl font-black text-red-500">{data.price} <span className="text-xl">сом</span></p></div><button type="button" className="group flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-black shadow-xl shadow-red-600/25 transition hover:-translate-y-1 hover:bg-red-500">Добавить в корзину <span className="transition-transform group-hover:translate-x-1">→</span></button></div></div></article>
      </div>
    </section>
  );
}

function LoadingState({ label }) {
  return <div className="grid min-h-[calc(100vh-76px)] place-items-center bg-zinc-950"><div className="text-center"><div className="mx-auto size-11 animate-spin rounded-full border-4 border-red-500/20 border-t-red-500" /><p className="mt-4 text-sm font-bold uppercase tracking-[.2em] text-zinc-400">{label}</p></div></div>;
}

function ErrorState({ onBack }) {
  return <section className="grid min-h-[calc(100vh-76px)] place-items-center bg-zinc-950 px-4 text-center text-white"><div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[.06] p-10 shadow-2xl shadow-black/30"><span className="text-xs font-black uppercase tracking-[.2em] text-red-400">Not found</span><h1 className="mt-5 text-3xl font-black">Товар не найден.</h1><p className="mt-3 text-zinc-400">Не удалось загрузить информацию о товаре.</p><button type="button" onClick={onBack} className="mt-7 rounded-2xl bg-red-600 px-6 py-3.5 font-black transition hover:bg-red-500">К каталогу →</button></div></section>;
}

export default ProductDetail;
