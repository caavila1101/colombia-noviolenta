import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-layout">
      {!shouldHideNavbar && <Navbar />}

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
