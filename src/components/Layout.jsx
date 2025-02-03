import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAuth } from "../context/AuthContext";
const Layout = () => {
  const { user } = useAuth();
  return(
    <>
        <Header user={user} />
        <Outlet />
        <Footer />
    </>
  )
};

export default Layout;