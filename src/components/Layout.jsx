import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAuth } from "../context/AuthContext";
const Layout = () => {
  const { user, signOut } = useAuth();
  return(
    <>
        <Header user={user} signOut={signOut} />
        <Outlet />
        <Footer />
    </>
  )
};

export default Layout;