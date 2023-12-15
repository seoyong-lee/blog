import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col place-items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
