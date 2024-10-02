import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import NavbarElement from "../components/common/navbar/NavbarElement";

import styles from "./styles.module.css";

const { container } = styles;

export const RootLayout = () => {
  return (
    <div className={container}>
      <Header />
      <NavbarElement />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
