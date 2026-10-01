import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
