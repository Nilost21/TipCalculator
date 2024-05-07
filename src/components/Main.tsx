import { menuItems } from '../data/db';
import MenuItems from './MenuItems';

function Main() {
  return (
    <>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
          {menuItems.map((item) => (
            <MenuItems key={item.id} />
          ))}
        </div>
        <div>
          <h2>Consumption</h2>
        </div>
      </main>
    </>
  );
}
export default Main;
