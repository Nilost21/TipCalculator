import { menuItems } from '../data/db';
import MenuItems from './MenuItem';

function Main() {
  return (
    <>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h2>Consumption</h2>
        </div>
      </main>
    </>
  );
}
export default Main;
