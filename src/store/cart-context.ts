import React from 'react'
import {OrderItem} from '../models/Food';

interface CartContextState {
    items: OrderItem[],
    totalAmount: number,
    addItem: (item: OrderItem) => void,
    removeItem: (id: string) => void;
    clearCart: () => void;
}

const CartContext = React.createContext<CartContextState>({
    items: [],
    totalAmount: 0,
    addItem: (item:OrderItem) => {},
    removeItem: (id: string) => {},
    clearCart: () => {}
});

export default CartContext;