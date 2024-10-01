import WishListIcon from "@assets/icons/WishListIcon";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const { iconContainer, quantity } = styles;

const HeaderWishList = () => {
  const navigate = useNavigate();
  return (
    <div className={iconContainer} onClick={() => navigate("wishlist")}>
      <WishListIcon />
      <span className={quantity}>0</span>
    </div>
  );
};

export default HeaderWishList;
