import { OrderItem } from '../types';

type OrderContentsProps = {
  order: OrderItem[];
};

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumption</h2>

      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center font-black text-2xl">The order is empty</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p className="font-black">
                {item.name} - ${item.price}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default OrderContents;
