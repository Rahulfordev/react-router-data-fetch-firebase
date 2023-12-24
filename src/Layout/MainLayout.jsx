import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";

const MainLayout = () => {
  const natigate = useNavigation();
  return (
    <div className="main-container">
      <Header />
      <div>{natigate.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
