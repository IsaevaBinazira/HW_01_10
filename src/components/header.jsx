import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/favorites", label: "Избранное" },
  { to: "/orders", label: "Заказы" },
];

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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="RedStore — главная"
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <span className="absolute -right-2 -top-2 size-5 rounded-full bg-red-400/80" />
            <Icon className="relative size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h1.386c.51 0 .955.343 1.084.835l.383 1.46M7.5 14.25a3 3 0 0 0 3 3h5.25a3 3 0 0 0 2.92-2.311l.77-3.079a1.5 1.5 0 0 0-1.456-1.86H7.603m0 0L6.8 7.545M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </Icon>
          </span>
          <span className="text-xl font-black tracking-tight text-zinc-950">
            RED<span className="text-red-600">SHOP</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-red-50 text-red-600"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
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
            className={({ isActive }) => `grid size-10 place-items-center rounded-xl transition-colors ${isActive ? "bg-red-50 text-red-600" : "text-zinc-700 hover:bg-zinc-100 hover:text-red-600"}`}
            aria-label="Избранное"
          >
            <Icon className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.435 8.118c0 5.105-9.435 10.764-9.435 10.764S2.565 13.223 2.565 8.118C2.565 5.89 4.367 4.125 6.59 4.125c1.312 0 2.478.632 3.21 1.608A3.993 3.993 0 0 1 13.41 4.125c2.223 0 4.025 1.765 4.025 3.993Z" /></Icon>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => `relative grid size-10 place-items-center rounded-xl transition-colors ${isActive ? "bg-red-50 text-red-600" : "text-zinc-700 hover:bg-zinc-100 hover:text-red-600"}`}
            aria-label="Корзина"
          >
            <Icon className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3.75h1.386c.51 0 .955.343 1.084.835l.383 1.46M7.5 14.25a3 3 0 0 0 3 3h5.25a3 3 0 0 0 2.92-2.311l.77-3.079a1.5 1.5 0 0 0-1.456-1.86H7.603m0 0L6.8 7.545M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></Icon>
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-red-600 ring-2 ring-white" />
          </NavLink>
          <NavLink to="/auth" className="hidden items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-zinc-950/15 transition-all hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-600/25 sm:flex">
            Войти
            <Icon className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3-3h8.25m0 0-3-3m3 3-3 3" /></Icon>
          </NavLink>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 lg:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            <Icon className="size-6"><path strokeLinecap="round" d={isMenuOpen ? "m6 6 12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} /></Icon>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-zinc-100 bg-white px-4 py-3 shadow-xl shadow-zinc-950/5 lg:hidden" aria-label="Мобильная навигация">
          <div className="mx-auto grid max-w-7xl gap-1">
            {[...navItems, { to: "/cart", label: "Корзина" }, { to: "/auth", label: "Войти" }].map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} onClick={closeMenu} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${isActive ? "bg-red-50 text-red-600" : "text-zinc-700 hover:bg-zinc-100"}`}>
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
