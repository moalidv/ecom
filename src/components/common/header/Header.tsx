import HeaderBasket from "@components/ecommerce/headerbasket/HeaderBasket";
import styles from "./styles.module.css";
import HeaderWishList from "@components/ecommerce/wishlist/HeaderWishList";

const {
  container,
  title,
  iconsContainer,
  cartContainer,
  wishListIcon,
  separator,
} = styles;

export const Header = () => {
  return (
    <div className={container}>
      <h1 className={title}>
        Our <span>eCom</span>
      </h1>
      <div className={iconsContainer}>
        <div className={wishListIcon}>
          <HeaderWishList />
          <span>Wishlist</span>
        </div>
        <div className={separator}>&nbsp;</div>
        <div className={cartContainer}>
          <HeaderBasket />
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
