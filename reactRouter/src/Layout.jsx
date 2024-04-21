import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* this outlet element allows you to add elements like <Home> or <About> dynamically
      Here Header and Footer won't change. But You can add elements in place of Outlet */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
