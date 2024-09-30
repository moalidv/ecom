import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import Navbar from "../components/common/navbar/Navbar";

import styles from "./styles.module.css";

const { container } = styles;

export const RootLayout = () => {
  return (
    <div className={container}>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
