import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
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
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total payable:
          <span className="font-bold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        onClick={placeOrder}
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
      >
        Saving order
      </button>
    </>
  );
};
export default OrderTotals;
