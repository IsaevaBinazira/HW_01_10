import { useState } from "react";
import { Link } from "react-router-dom";

import { useRegisterMutation } from "../store/product-store.jsx";

function RegisterForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useRegisterMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ login, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-zinc-200">
          Придумайте логин
        </span>
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:bg-white/10 focus:ring-4 focus:ring-red-500/10"
          type="text"
          placeholder="redshop_fan"
          autoComplete="username"
          minLength="3"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-zinc-200">Email</span>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:bg-white/10 focus:ring-4 focus:ring-red-500/10"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-zinc-200">Пароль</span>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:bg-white/10 focus:ring-4 focus:ring-red-500/10"
          type="password"
          placeholder="Минимум 6 символов"
          autoComplete="new-password"
          minLength="6"
          required
        />
      </label>

      <button
        disabled={isPending}
        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 px-5 py-4 font-black text-white shadow-xl shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Создаём аккаунт..." : "Создать аккаунт"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>

      <p className="pt-1 text-center text-sm text-zinc-400">
        Уже с нами?{" "}
        <Link to="/auth?step=login" className="font-bold text-red-400 transition hover:text-red-300">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;
