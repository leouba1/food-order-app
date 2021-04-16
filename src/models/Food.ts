export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface OrderItem extends Dish {
  amount: number;
}
