import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

type Props = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: Props) => {
  const cartContext = useContext(CartContext);

  const cartItemsCount = cartContext.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
