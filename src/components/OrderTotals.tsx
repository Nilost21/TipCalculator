import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
  order: OrderItem[];
};

const OrderTotals = ({ order }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totals and tips</h2>
        <p>
          Subtotal payable:
          <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Tips:
          <span className="font-bold"> $0</span>
        </p>
        <p>
          Total payable:
          <span className="font-bold"> $0</span>
        </p>
      </div>
      <button></button>
    </>
  );
};
export default OrderTotals;
