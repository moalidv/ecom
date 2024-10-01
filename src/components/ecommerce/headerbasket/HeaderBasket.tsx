import CartIcon from "@assets/icons/CartIcon";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const { iconContainer, quantity } = styles;
const HeaderBasket = () => {
  const navigate = useNavigate();
  return (
    <div className={iconContainer} onClick={() => navigate("cart")}>
      <CartIcon />
      <span className={quantity}>0</span>
    </div>
  );
};

export default HeaderBasket;
