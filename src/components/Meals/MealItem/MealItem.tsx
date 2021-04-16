import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { OrderItem } from "../../../models/Food";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const MealItem = ({ id, name, description, price }: Props) => {
  const cartContext = useContext(CartContext);
  const priceFormatted = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    const item: OrderItem = {
      id: id,
      name: name,
      amount: amount,
      description: description,
      price: price,
    };
    cartContext.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormatted}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
