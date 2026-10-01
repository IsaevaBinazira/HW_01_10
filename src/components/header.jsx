import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import { useLogoutMutation } from "../store/auth-store.jsx";

function Icon({ children, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {children}
    </svg>
  );
}

function UserIcon(props) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </Icon>
  );
}

function FavoriteIcon(props) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.435 8.118c0 5.105-9.435 10.764-9.435 10.764S2.565 13.223 2.565 8.118C2.565 5.89 4.367 4.125 6.59 4.125c1.312 0 2.478.632 3.21 1.608A3.993 3.993 0 0 1 13.41 4.125c2.223 0 4.025 1.765 4.025 3.993Z"
      />
    </Icon>
  );
}

function CartIcon(props) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3.75h1.386c.51 0 .955.343 1.084.835l.383 1.46M7.5 14.25a3 3 0 0 0 3 3h5.25a3 3 0 0 0 2.92-2.311l.77-3.079a1.5 1.5 0 0 0-1.456-1.86H7.603m0 0L6.8 7.545M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z"
      />
    </Icon>
  );
}

const navItems = [
  {
    to: "/favorites",
    label: "Избранное",
  },
  {
    to: "/orders",
    label: "Заказы",
  },
  {
    to: "/cart",
    label: "Корзина",
  },
];

function Header() {
  const isAuth = useAuth((state) => state.isAuth);
  const { mutate, isPending } = useLogoutMutation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70" />
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="RedStore — главная"
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <span className="absolute -right-2 -top-2 size-5 rounded-full bg-red-400/80" />

            <Icon className="relative size-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h1.386c.51 0 .955.343 1.084.835l.383 1.46M7.5 14.25a3 3 0 0 0 3 3h5.25a3 3 0 0 0 2.92-2.311l.77-3.079a1.5 1.5 0 0 0-1.456-1.86H7.603m0 0L6.8 7.545M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z"
              />
            </Icon>
          </span>

          <span className="text-xl font-black tracking-tight text-white">
            RED<span className="text-red-600">SHOP</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Основная навигация"
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `grid size-10 place-items-center rounded-xl transition-colors ${
                isActive
                  ? "bg-red-600 text-white"
                  : "border border-white/10 bg-white/5 text-zinc-300 hover:border-red-500 hover:text-red-400"
              }`
            }
            aria-label="Избранное"
          >
            <FavoriteIcon className="size-5" />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative grid size-10 place-items-center rounded-xl transition-colors ${
                isActive
                  ? "bg-red-600 text-white"
                  : "border border-white/10 bg-white/5 text-zinc-300 hover:border-red-500 hover:text-red-400"
              }`
            }
            aria-label="Корзина"
          >
            <CartIcon className="size-5" />

            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-red-500 ring-2 ring-zinc-950" />
          </NavLink>

          {isAuth ? (
            <button
              type="button"
              onClick={() => mutate()}
              disabled={isPending}
              className="hidden items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-zinc-950/15 transition-all hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-600/25 sm:flex"
            >
              <UserIcon className="size-5" />
              Выйти
            </button>
          ) : (
            <NavLink
              to="/auth"
              className="hidden items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-zinc-950/15 transition-all hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-600/25 sm:flex"
            >
              <UserIcon className="size-5" />
              Войти
            </NavLink>
          )}

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition-colors hover:border-red-500 hover:text-red-400 lg:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            <Icon className="size-6">
              <path
                strokeLinecap="round"
                d={
                  isMenuOpen
                    ? "m6 6 12 12M18 6 6 18"
                    : "M4 7h16M4 12h16M4 17h16"
                }
              />
            </Icon>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-white/10 bg-zinc-950 px-4 py-3 shadow-xl shadow-black/30 lg:hidden"
          aria-label="Мобильная навигация"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-zinc-300 hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
