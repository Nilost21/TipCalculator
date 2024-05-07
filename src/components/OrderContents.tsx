import { formatCurrency } from '../helpers';
import { OrderItem, MenuItems } from '../types';

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItems['id']) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumption</h2>

      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p className="text-center font-black text-2xl">The order is empty</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Quantity: {item.quantity} -{' '}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 h-7 w-7 rounded-full text-white font-black"
              >
                x
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default OrderContents;
