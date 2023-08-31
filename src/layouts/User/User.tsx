import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./User.css";

const User = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
export default User;
