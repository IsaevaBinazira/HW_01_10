import { Link } from "react-router-dom";

function NotFound() {
  return <section className="grid min-h-[calc(100vh-76px)] place-items-center bg-zinc-950 px-4 text-center text-white"><div><span className="text-8xl font-black text-red-600/80">404</span><h1 className="mt-4 text-3xl font-black">Эта страница потерялась.</h1><p className="mt-3 text-zinc-400">Вернёмся туда, где есть всё самое интересное.</p><Link to="/" className="mt-7 inline-flex rounded-2xl bg-red-600 px-6 py-3.5 font-black transition hover:-translate-y-0.5 hover:bg-red-500">На главную →</Link></div></section>;
}

export default NotFound;
