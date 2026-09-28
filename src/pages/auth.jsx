import LoginForm from "../components/login-form.jsx";
import RegisterForm from "../components/register-form.jsx";
import { useSearchParam } from "../hooks/use-search-param.js";

function Auth() {
  const { get } = useSearchParam();
  const isRegister = get("step") === "register";

  const title = isRegister ? "" : "С возвращением.";
  const description = isRegister
    ? ""
    : "Войдите, чтобы продолжить покупки";

  return (
    <main className="relative grid min-h-[calc(100vh-76px)] place-items-center overflow-hidden bg-zinc-950 px-4 py-10 text-white">
      <div className="absolute -left-32 -top-32 size-96 rounded-full bg-red-600/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 size-112 rounded-full border-[42px] border-red-500/10" />

      <section className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] p-7 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <span className="inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[.18em] text-red-300">
          Redshop member
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>

        <div className="my-7 h-px bg-white/10" />
        {isRegister ? <RegisterForm /> : <LoginForm />}
      </section>
    </main>
  );
}

export default Auth;
