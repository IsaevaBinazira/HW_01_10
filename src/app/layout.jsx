import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";

function Layout() {
  return (
    <div className='max-w-[1200px] mx-auto'> 
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;