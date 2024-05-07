import { useState } from 'react';
import { MenuItems, OrderItem } from '../types';

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItems) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItems['id']) => {
    const filteredOrder = order.filter((item) => item.id !== id);
    setOrder(filteredOrder);
  };

  return {
    order,
    addItem,
    removeItem,
  };
}
