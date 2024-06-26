import { menuItems } from '../data/db';
import MenuItems from './MenuItem';
import useOrder from '../hooks/useOrder';
import OrderContents from './OrderContents';
import OrderTotals from './OrderTotals';
import TipPercentageForm from './TipPercentageForm';

function Main() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length === 0 ? (
            <p className="text-center font-black text-2xl">
              The order is empty
            </p>
          ) : (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />

              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
export default Main;
