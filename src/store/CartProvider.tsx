import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { OrderItem } from "../models/OrderItem";

type Props = {
  children: React.ReactNode;
};

type Action = { type: "ADD"; item: OrderItem } | { type: "REMOVE"; id: string };
type State = { items: OrderItem[]; totalAmount: number };

const defaultCartState: State = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: State, action: Action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }: Props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: OrderItem) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
