import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Featured from './components/Featured';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import RestaurantSummary from './components/Meals/RestaurantSummary';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setshowCart] = useState(false)

  const handleCartToggle = () => {
    setshowCart(!showCart)
  }
  return (
    <CartProvider className=''>
      <Header toggleCart={handleCartToggle} />

      <div className="p-4 sm:p-8 md:p-12 flex flex-col items-center">
        {showCart && <Cart toggleCart={handleCartToggle} />}
        <div className='prose lg:prose-lg'>
        <h1 className='underline'>Green Bite</h1>
        </div>
        <RestaurantSummary />
        {/* <Menu /> */}
      </div>
      <div class="divider my-8"></div>

      <section className='w-full flex flex-col items-center'>
        <div className='prose'>
          <h2 className='text-center underline mb-10'>Featured Items</h2>
        </div>
        <div className='grid sm:grid-cols-2 gap-12 '>
          <Featured />
          <Featured />
        </div>
      </section>

      <div class="divider my-8"></div>

    </CartProvider>
  );
}

export default App;
