import React from 'react'
import {OrderItem} from '../models/OrderItem';

interface CartContextState {
    items: OrderItem[],
    totalAmount: number,
    addItem: (item: OrderItem) => void,
    removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextState>({
    items: [],
    totalAmount: 0,
    addItem: (item:OrderItem) => {},
    removeItem: (id: string) => {}
});

export default CartContext;